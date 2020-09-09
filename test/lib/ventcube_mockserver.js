// @ts-nocheck
'use strict'

//import { ModbusTCPServer } from "jsmodbus"
const jsmodbus = require("jsmodbus");
const net = require('net')
const parameters = require('../../build/lib/schwoerer/parameters');
const { createBrotliCompress } = require("zlib");
const { ExceptionResponseBody } = require("jsmodbus/dist/response");
const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});
const fs  = require('fs');

class VentcubeMockServer extends jsmodbus.ModbusTCPServer {

    constructor (server = new net.Server(), options) {
        super(server, { holding: Buffer.alloc(10000) })
        this.server = server;
        this.dumpFilename = "mock_service_registers.json";
        logger.info("Starting mockserver")
        
        this.on('preWriteMultipleRegisters', this._onPreWriteMultipleRegisters.bind(this))
        this.on('preReadHoldingRegisters', this._onPreReadHoldingRegisters.bind(this))
        process.on('SIGINT', this.terminate.bind(this))
        process.on('SIGTERM', this.terminate.bind(this))
    }

    mapWRegisterToFunction(field) {
        return Object.keys(parameters.SchwoererParameter).filter(function(key){
            return parameters.SchwoererParameter[key].modbus_w == field;
        })
    }

    initializeHoldingRegisters() {
        
        //Create JSON object that is stored to file and can be used for int-tests
        this.mockServerRegisterValues = {};

        //Generate random numbers for all holding registers
        for (const [func, attributes] of Object.entries(parameters.SchwoererParameter))
        {
            var holdingRegisterValue = 0

            switch(attributes.value_type) {
                case "number":
                    holdingRegisterValue = Math.floor(Math.random() * 1000)
                    break;
                case "range":
                    var minValue = attributes.value_def.min
                    var maxValue = attributes.value_def.max
                    holdingRegisterValue = Math.floor(Math.random() * maxValue) + minValue
                    if (attributes.value_def.unit == "°C")
                        holdingRegisterValue = holdingRegisterValue * 10
                    break;
                case "choice":
                    var choices = attributes.value_def
                    var arr_idx = Math.floor(Math.random() * Object.keys(choices).length)
                    
                    holdingRegisterValue = Object.keys(choices)[arr_idx]
                    break;
            }

            logger.info("Setting up holding register [" + attributes.modbus_r + "] " + func + " with value: " + holdingRegisterValue)
            this.mockServerRegisterValues[func] = holdingRegisterValue;
            //Workaround to set signed integer values (like negative ones)
            let s16_buffer = Buffer.alloc(2);
            s16_buffer.writeInt16BE(holdingRegisterValue, 0);
            this.holding.writeUInt16BE(s16_buffer.readUInt16BE(0), attributes.modbus_r*2);
        }

        this.dumpNumbersToFile(this.dumpFilename, this.mockServerRegisterValues);
    }

    _onPreReadHoldingRegisters (request, callback) {
        console.debug("Got new read-request for PreReadHoldingRegisters");
    }

    _onPreWriteMultipleRegisters (request, callback) {
        let register = request.body.address;
        let value = request.body.valuesAsBuffer.readInt16BE(0);
        logger.info('Pre Write multiple registers. Register: ' + register + " Value: " + value);

        //Write value to file (for integration testing)
        let func = this.mapWRegisterToFunction(register);
        logger.info('Function: '+func);
        this.mockServerRegisterValues[func] = value;
        this.dumpNumbersToFile(this.dumpFilename, this.mockServerRegisterValues);
    }

    dumpNumbersToFile(filename, arr) {
        fs.writeFileSync(filename, JSON.stringify(arr),{
            encoding : 'utf8',
            flag: 'w'
        });
    }

    terminate (){
        logger.info("Shutting down mock server");
        this.server.close();

        //remove dump file
        fs.unlinkSync(this.dumpFilename);
    }

    listen (port) {
        logger.info("Mock server running on localhost:502");
        this.server.listen(port);
    }

}

const server = new VentcubeMockServer();
server.initializeHoldingRegisters();
server.listen(502);
