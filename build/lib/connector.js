"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
const Modbus = require("jsmodbus");
const net_1 = require("net");
const parameters_1 = require("./schwoerer/parameters");
class Connector {
    constructor(ventcube, server, port, useAdvancedFunctions, interval = 30) {
        this.server = server;
        this.port = port;
        this.readInterval = interval;
        this.useAdvancedFunctions = useAdvancedFunctions;
        this.socket = new net_1.Socket();
        this.client = new Modbus.client.TCP(this.socket);
        this.context = ventcube;
    }
    connect() {
        this.context.log.info("Connecting to server " + this.server + ":" + this.port);
        this.socket.connect({ host: this.server, port: this.port });
        this.socket.setKeepAlive(true, 5000);
    }
    handleErrors(err) {
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
        }
        else if (Modbus.errors.isInternalException(err)) {
            this.context.log.error("Error Message: " + err.message + "Error Name:" + err.name + "Error Stack: " + err.stack);
        }
        else {
            this.context.log.error("Unknown Error:" + err);
        }
    }
    initializeSocket() {
        this.socket.on("connect", () => {
            this.context.log.info("Established connection. Starting processing");
            this.readFunctionStates(this.context.syncReadData.bind(this.context));
        });
        this.socket.on("error", (error) => {
            this.context.log.error("ERROR: " + error);
        });
    }
    readFunctionStates(callback) {
        this.context.log.debug("Reading latest states from Ventcube");
        for (const [func, attributes] of Object.entries(parameters_1.SchwoererParameter)) {
            //Check if advanced functions should be retrieved as well
            if ((attributes.category == "advanced") && (!this.useAdvancedFunctions))
                continue;
            const mayRead = attributes.modbus_r > -1 ? true : false;
            if (mayRead) {
                this.context.log.debug("checking state: " + func + ":" + attributes.modbus_r);
                this.readDataFromHoldingRegister(callback, func, attributes.modbus_r);
            }
        }
        setTimeout(function () { this.readFunctionStates(callback); }.bind(this), this.readInterval * 1000);
    }
    readDataFromHoldingRegister(callback, func, register, fields = 1) {
        this.context.log.silly("Reading register: " + register);
        this.client.readHoldingRegisters(register, fields)
            .then(({ metrics, _request, response }) => {
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
            .catch((error) => {
            this.context.log.error(error.message);
        });
    }
    writeDataToRegister(func, register, value) {
        this.context.log.debug("Changing register " + register + " value to: " + value + "|" + value.toString(16));
        //Convert value from decimal to hexadecimal to write it to register
        // Workaround
        const s16_buffer = Buffer.alloc(2);
        s16_buffer.writeInt16BE(value, 0);
        //this.client.writeMultipleRegisters(register, [value.toString(16)])
        this.client.writeMultipleRegisters(register, [s16_buffer.readUInt16BE(0)])
            .then(({ metrics, _request, response }) => {
            this.context.log.silly("Transfer Time: " + metrics.transferTime);
            this.context.log.silly("Response Function Code: " + response.body.fc);
            this.context.syncReadData(func, value, new Date());
        })
            .catch((error) => {
            this.context.log.error(error.message + "Response: " + error.response.body.message + " code: " + error.response.body.code);
        });
    }
    close() {
        this.context.log.info("Shutting down connection.");
        this.socket.end();
    }
}
exports.Connector = Connector;
