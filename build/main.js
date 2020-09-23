"use strict";
/*
 * Created with @iobroker/create-adapter v1.26.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchwoererVentcube = void 0;
// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");
const connector_1 = require("./lib/connector");
const parameters_1 = require("./lib/schwoerer/parameters");
class SchwoererVentcube extends utils.Adapter {
    constructor(options = {}) {
        super(Object.assign(Object.assign({}, options), { name: "schwoerer-ventcube" }));
        this.on("ready", this.onReady.bind(this));
        this.on("stateChange", this.onStateChange.bind(this));
        this.on("unload", this.onUnload.bind(this));
    }
    /**
     * Is called when databases are connected and adapter received configuration.
     */
    async onReady() {
        // Initialize your adapter here
        try {
            // The adapters config (in the instance object everything under the attribute "native") is accessible via
            this.log.debug("config: " + this.config);
            //Setup state objects for Schwoerer parameters
            for (const [func, attributes] of Object.entries(parameters_1.SchwoererParameter)) {
                //Potentially skip parameters marked as "advanced"
                if ((attributes.category == "advanced") && (!this.config.advancedfunctions))
                    continue;
                this.log.info("Setting up state for " + func);
                const mayRead = attributes.modbus_r > -1 ? true : false;
                const mayWrite = attributes.modbus_w > -1 ? true : false;
                //Prepare common section for object
                const commonSettings = {
                    name: attributes.descr,
                    type: "number",
                    role: "value",
                    read: mayRead,
                    write: mayWrite,
                };
                //Add some optional parameters to config
                if (attributes.value_def.unit)
                    commonSettings.unit = attributes.value_def.unit;
                if (attributes.value_type == "choice") {
                    commonSettings.states = attributes.value_def;
                    const numberOfKeys = Object.keys(attributes.value_def).length;
                    if (numberOfKeys == 2)
                        (mayWrite) ? commonSettings.role = "switch" : commonSettings.role = "sensor";
                    else
                        (mayWrite) ? commonSettings.role = "level.mode" : commonSettings.role = "value";
                }
                if (attributes.value_type == "range") {
                    commonSettings.min = attributes.value_def.min;
                    commonSettings.max = attributes.value_def.max;
                }
                //Set some more specific roles
                if (attributes.value_def.unit == "°C")
                    (mayWrite) ? commonSettings.role = "level.temperature" : commonSettings.role = "value.temperature";
                if (attributes.value_def.unit == "rpm")
                    commonSettings.role = "value.speed";
                //Individual treatment for special cases
                if (attributes.common_role_overwrite)
                    commonSettings.role = attributes.common_role_overwrite;
                await this.setObjectNotExistsAsync("parameters." + func, {
                    type: "state",
                    common: commonSettings,
                    native: {},
                });
                //Have a corresponding "lastUpdate" object where a timestamp of data-retrieval is stored
                await this.setObjectNotExistsAsync("lastUpdate." + func, {
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
            this.subscribeStates("parameters.*");
            this.log.info("Starting connector");
            this.connector = new connector_1.Connector(this, this.config.server, this.config.port, this.config.advancedfunctions, this.config.interval, this.config.reconnectattempts, this.config.reconnectdelayms, this.config.requesttimeoutms);
            this.connector.initializeSocket();
            this.log.debug("Connecting");
            this.connector.connect();
        }
        catch (error) {
            this.log.error(error.message);
            Promise.reject(error.message);
        }
    }
    syncReadData(func, value, time) {
        //handle
        this.log.debug("Updating state: " + func + " with value: " + value);
        //parse parameter if needed
        let parameterParsed = value;
        const parameterType = parameters_1.SchwoererParameter[func].value_type;
        switch (parameterType) {
            /*case "choice":
                    parameterParsed = SchwoererParameter[func].value_def[value];
                break;*/
            case "range":
                const unit = parameters_1.SchwoererParameter[func].value_def.unit;
                switch (unit) {
                    case "°C":
                        parameterParsed = (value / 10);
                        break;
                }
                break;
        }
        this.setState("parameters." + func, { val: parameterParsed, ack: true, c: "update" });
        this.setState("lastUpdate." + func, { val: time.toString(), ack: true, c: "update" });
    }
    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     */
    onUnload(callback) {
        try {
            //Terminate MODBUS connection
            this.log.info("Shutting down adapter. Terminating Modbus connection.");
            this.connector.close();
            callback();
        }
        catch (e) {
            this.log.error("Error shutting down: " + e);
            callback();
        }
    }
    /**
     * Is called if a subscribed state changes
     */
    onStateChange(id, state) {
        if (state) {
            // The state was changed
            this.log.silly(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
            //Only react to manual state changes
            if (state.ack == false) {
                this.log.debug(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
                const func = id.toString().replace(/^.*\.(\w+)\.([\w-]+)$/, "$2");
                this.performManualStateChange(func, state.val);
            }
        }
        else {
            // The state was deleted
            this.log.silly(`state ${id} deleted`);
        }
    }
    performManualStateChange(func, value) {
        //Apparently temperatures (°C) are stored as 3 digit numbers in Ventcube, but as we parse them
        //like xxx => xx.x °C we need to reverse this before updating
        const unit = parameters_1.SchwoererParameter[func].value_def.unit;
        if ((unit != undefined) && (unit == "°C")) {
            value = value * 10;
        }
        //Value validation not needed, as ObjectState has all allowed values already configured.
        const writeRegister = parameters_1.SchwoererParameter[func].modbus_w;
        this.connector.writeDataToRegister(func, writeRegister, parseInt(value));
    }
}
exports.SchwoererVentcube = SchwoererVentcube;
try {
    if (module.parent) {
        // Export the constructor in compact mode
        module.exports = (options) => new SchwoererVentcube(options);
    }
    else {
        // otherwise start the instance directly
        (() => new SchwoererVentcube())();
    }
}
catch (e) {
    console.error(e);
}
