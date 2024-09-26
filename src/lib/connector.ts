import * as Modbus from "jsmodbus";
import { Socket } from "net";
import { SchwoererVentcube } from "../main";
import { SchwoererParameter } from "./schwoerer/parameters";

export class Connector {
    private socket: Socket;
    private client: any;
    private server: string;
    private port: number;
    private context: SchwoererVentcube;
    private readInterval: number; //seconds
    private useAdvancedFunctions: boolean;
    private reconnectAttempts: number;
    private reconnectDelayMs: number;
    private requestTimeoutMs: number;
    private isConnected = false;
    private isReconnecting = false;
    private readTimerId: ReturnType<typeof setTimeout>;
    private reconnectTimerId: ReturnType<typeof setTimeout>;

    public constructor(ventcube: SchwoererVentcube, server: string, port: number, useAdvancedFunctions: boolean, interval: number, reconnectAttempts: number, reconnectDelayMs: number, requestTimeoutMs: number) {
        this.server = server;
        this.port = port;
        this.readInterval = interval;
        this.useAdvancedFunctions = useAdvancedFunctions;
        this.reconnectAttempts = reconnectAttempts;
        this.reconnectDelayMs = reconnectDelayMs;
        this.requestTimeoutMs = requestTimeoutMs;

        this.socket = new Socket();
        this.client = new Modbus.client.TCP(this.socket, 1, this.requestTimeoutMs);
        this.context = ventcube;
    }

    public connect(): void {
        this.context.log.info("Connecting to server " + this.server + ":" + this.port);
        this.socket.connect({ host: this.server, port: this.port });
        this.socket.setKeepAlive(true, 5000);
    }

    private reconnect(attempt = 0): void {
        if (this.isConnected)
            return;

        if (attempt >= this.reconnectAttempts)
            return;

        this.isReconnecting = true;

        this.context.log.info("Attempting to reconnect to server. (attempt " + (attempt + 1) + " out of " + this.reconnectAttempts + ")");

        this.socket.connect({ host: this.server, port: this.port });
        this.socket.setKeepAlive(true, 5000);

        this.reconnectTimerId = setTimeout(function (this: Connector) { this.reconnect(++attempt); }.bind(this), this.reconnectDelayMs);
    }

    private handleErrors(err: any): void {
        if (Modbus.errors.isUserRequestError(err)) {
            switch (err.err) {
                case "OutOfSync":
                case "Protocol":
                case "Timeout":
                case "ManuallyCleared":
                case "ModbusException":
                case "Offline":
                case "crcMismatch":
                    this.context.log.error("Error Message: " + err.message + "Error" + "Modbus Error Type: " + err.err);
                    break;
            }

        } else if (Modbus.errors.isInternalException(err)) {
            this.context.log.error("Error Message: " + err.message + "Error Name:" + err.name + "Error Stack: " + err.stack);
        } else {
            this.context.log.error("Unknown Error:" + err);
        }
    }

    public initializeSocket(): void {
        this.socket.on("connect", () => {
            this.context.log.info("Established connection. Starting processing");
            this.isConnected = true;
            this.isReconnecting = false;
            this.context.setState("info.connection", true, true);

            this.readFunctionStates(this.context.syncReadData.bind(this.context));
        });

        this.socket.on("timeout", () => {
            this.context.log.warn("Received timeout from server " + this.server + ":" + this.port);
        });

        this.socket.on("error", (error) => {
            this.context.log.error("ERROR: " + error);
        });
    }

    private readFunctionStates(callback: (func: string, value: any, time: Date) => void): void {

        this.context.log.debug("Reading latest states from Ventcube");

        for (const [func, attributes] of Object.entries(SchwoererParameter)) {
            //Check if advanced functions should be retrieved as well
            if ((attributes.category == "advanced") && (!this.useAdvancedFunctions)) continue;

            const mayRead = attributes.modbus_r > -1 ? true : false;
            if (mayRead) {
                this.context.log.debug("checking state: " + func + ":" + attributes.modbus_r);
                this.readDataFromHoldingRegister(callback, func, attributes.modbus_r);
            }
        }


        this.readTimerId = setTimeout(function (this: Connector) { this.readFunctionStates(callback); }.bind(this), this.readInterval * 1000);
    }

    public readDataFromHoldingRegister(callback: (func: string, value: any, time: Date) => void, func: string, register: number, fields = 1): any {
        this.context.log.silly("Reading register: " + register);

        this.client.readHoldingRegisters(register, fields)
            .then(({ metrics, _request, response }: any) => {
                this.context.log.silly("[" + register + "]Transfer Time: " + metrics.transferTime);

                // Workaround: 
                // Unfortunately, according to https://github.com/Cloud-Automation/node-modbus/issues/102#issuecomment-264646262
                // response.body.array can"t be used (reliably) to retrieve holding-register values, as it be default assumes unsigned 
                // 16bit integers. The problem is that e.g. temperatures could also be negative numbers, so we need to get the data from
                // buffer directly to retrieve a signed 16bit integer.
                const responseValue = response.body.valuesAsBuffer.readInt16BE(0);
                this.context.log.debug("[" + register + "]Response value from buffer: " + responseValue);

                callback(func, responseValue, new Date());
            })
            .catch((error: Modbus.UserRequestError<any>) => {
                switch (error.err) {
                    case "Offline":
                        this.isConnected = false;
                        if (!this.isReconnecting) {
                            this.context.log.warn("Ventcube server seems offline. Data will be retrieved after next successful reconnect.");
                            this.reconnect();
                        }
                        break;
                }
            })
            .catch((error: any) => {
                this.context.log.error(error.message);
            });
    }


    public writeDataToRegister(func: string, register: number, value: number): void {
        this.context.log.debug("Changing register " + register + " value to: " + value + "|" + value.toString(16));
        //Convert value from decimal to hexadecimal to write it to register
        // Workaround
        const s16_buffer = Buffer.alloc(2);
        s16_buffer.writeInt16BE(value, 0);

        //this.client.writeMultipleRegisters(register, [value.toString(16)])
        this.client.writeMultipleRegisters(register, [s16_buffer.readUInt16BE(0)])
            .then(({ metrics, _request, response }: any) => {
                this.context.log.silly("Transfer Time: " + metrics.transferTime);
                this.context.log.silly("Response Function Code: " + response.body.fc);

                this.context.syncReadData(func, value, new Date());
            })
            .catch((error: Modbus.UserRequestError<any>) => {
                switch (error.err) {
                    case "Offline":
                        this.isConnected = false;
                        if (!this.isReconnecting) {
                            this.context.log.warn("Ventcube server is offline. Please try to update state after successful reconnect again.");
                            this.reconnect();
                        }
                        break;
                }
            })
            .catch((error: any) => {
                this.context.log.error(error.message + "Response: " + error.response.body.message + " code: " + error.response.body.code);
            });
    }

    public close(): void {
        this.context.log.info("Shutting down connection.");
        this.context.setState("info.connection", false, true);
        clearTimeout(this.reconnectTimerId);
        clearTimeout(this.readTimerId);
        this.socket.end();
    }
}
