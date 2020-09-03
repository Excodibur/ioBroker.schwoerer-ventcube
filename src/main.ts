/*
 * Created with @iobroker/create-adapter v1.26.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
import * as utils from "@iobroker/adapter-core";
import { Connector } from "./lib/connector"
import { SchwoererParameter } from "./lib/schwoerer/parameters"
import { timingSafeEqual } from "crypto";
import { STATUS_CODES } from "http";


// Augment the adapter.config object with the actual types
// TODO: delete this in the next version
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace ioBroker {
		interface AdapterConfig {
			//Define config params
			server: string;
			port: number;
			interval: number;
		}
	}
}

export class SchwoererVentcube extends utils.Adapter {
	private connector: Connector;

	public constructor(options: Partial<utils.AdapterOptions> = {}) {
		super({
			...options,
			name: "schwoerer-ventcube",
		});
		this.on("ready", this.onReady.bind(this));
		this.on("stateChange", this.onStateChange.bind(this));
		this.on("unload", this.onUnload.bind(this));
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	private async onReady(): Promise<void> {
		// Initialize your adapter here
		try {
		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		this.log.debug("config server: " + this.config.server);
		this.log.debug("config port: " + this.config.port);
		this.log.debug("config interval: " + this.config.interval);

		//Setup state objects for Schwoerer parameters
		for (const [func, attributes] of Object.entries(SchwoererParameter))
		{
			this.log.info("Setting up state for " + func);

			let mayRead = attributes.modbus_r > -1 ? true : false;
			let mayWrite = attributes.modbus_w > -1 ? true : false;

			//Setup a "value" object where the parsed target data is stored
		    await this.setObjectAsync("parameters." + func, {
				type: "state",
				common: {
					name: attributes.descr,
					type: "string",
					role: "value",
					read: mayRead,
					write: mayWrite
				},
				native: {},
			});

			//Setup a "value_raw" object where the raw target data is stored
		    await this.setObjectAsync("parametersRaw." + func, {
				type: "state",
				common: {
					name: attributes.descr,
					type: "string",
					role: "value",
					read: mayRead,
					write: mayWrite
				},
				native: {},
			});

			//Have a corresponding "lastUpdate" object where a timestamp of data-retrieval is stored
			await this.setObjectAsync("lastUpdate." + func, {
				type: "state",
				common: {
					name: attributes.descr,
					type: "string",
					role: "date",
					read: mayRead,
					write: false
				},
				native: {},
			});
		}



		// In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
		this.subscribeStates("*");
		// You can also add a subscription for multiple states. The following line watches all states starting with "lights."
		// this.subscribeStates("lights.*");
		// Or, if you really must, you can also watch all states. Don't do this if you don't need to. Otherwise this will cause a lot of unnecessary load on the system:
		// this.subscribeStates("*");

		this.log.info("Starting connector");
		this.connector = new Connector(this, this.config.server, this.config.port, this.config.interval);
		this.connector.initializeSocket();

		this.log.debug("Connecting");
		this.connector.connect();
	} catch (error) {
		this.log.error(error.message);
	}
		
	}


	public syncReadData(func: string, value: any, time: Date){
		//handle
		this.log.debug("Updating state: " + func +  " with value: " + value);

		//parse parameter if needed
		var parameterParsed: string = value;
		var parameterType = SchwoererParameter[func].value_type;
		switch(parameterType) {
			case "choice":
					parameterParsed = SchwoererParameter[func].value_def[value];
				break;
			case "range":
				var unit = SchwoererParameter[func].value_def.unit;
				switch(unit){
					case "C":
						parameterParsed = value.toString().replace(/(\d{2})(\d)/, "$1.$2 °C");
						break;
					case "min":
						parameterParsed = value + " min";
						break;
					case "days":
						parameterParsed = value + " Tage";
						break;
					case "%":
						parameterParsed = value + " %";
						break;
					case "rpm":
						parameterParsed = value + " RPM";
						break;
				}
				break;
		}

		this.setState("parameters." + func, {val: parameterParsed, ack: true, c: "update"});
		this.setState("parametersRaw." + func, {val: value, ack: true, c: "update"});
		this.setState("lastUpdate." + func, {val: time.toString(), ack: true, c: "update"});
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 */
	private onUnload(callback: () => void): void {
		try {
			// Here you must clear all timeouts or intervals that may still be active
			// clearTimeout(timeout1);
			// clearTimeout(timeout2);
			// ...
			// clearInterval(interval1);
			this.connector.close();
			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed state changes
	 */
	private onStateChange(id: string, state: ioBroker.State | null | undefined): void {
		if (state) {
			// The state was changed
			this.log.silly(`state ${id} changed: ${state.val} (ack = ${state.ack})`);

			//Only react to manual state changes
			if (state.ack == false) {
				this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
				
				var folder = id.toString().replace(/^.*\.(\w+)\.([\w-]+)$/, "$1");
				var func = id.toString().replace(/^.*\.(\w+)\.([\w-]+)$/, "$2");
				this.performManualStateChange(folder, func, state.val);
			}
		} else {
			// The state was deleted
			this.log.silly(`state ${id} deleted`);
		}
	}

	private performManualStateChange(folder: string, func: string, value: any){
		this.log.info("Folder: " + folder + " Function: " + func + " Value: " + value);

		//Validate that set value is allowed
		// TODO complicated, as structure differes between type choice and range

		var writeRegister = SchwoererParameter[func].modbus_w;
		this.connector.writeDataToRegister(func,writeRegister,parseInt(value));
	}
}

try {
if (module.parent) {
	// Export the constructor in compact mode
	module.exports = (options: Partial<utils.AdapterOptions> | undefined) => new SchwoererVentcube(options);
} else {
	// otherwise start the instance directly
	(() => new SchwoererVentcube())();
}
} catch (e) {
	const fs = require('fs');
}