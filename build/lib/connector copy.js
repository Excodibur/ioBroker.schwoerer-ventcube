"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Modbus = require('jsmodbus');
const net_1 = require("net");
const socket = new net_1.Socket();
const options = {
    host: '192.168.178.38',
    port: 502
};
const client = new Modbus.client.TCP(socket);
const readStart = 209;
const readCount = 1;
socket.on('connect', function () {
    client.readHoldingRegisters(readStart, readCount)
        .then(({ metrics, request, response }) => {
        console.log('Transfer Time: ' + metrics.transferTime);
        console.log('Response Body Payload: ' + response.body.valuesAsArray);
        console.log('Response Body Payload As Buffer: ' + response.body.valuesAsBuffer);
    })
        .catch(handleErrors)
        .finally(() => socket.end());
});
socket.on('error', console.error);
socket.connect(options);
function handleErrors(err) {
    if (Modbus.errors.isUserRequestError(err)) {
        switch (err.err) {
            case 'OutOfSync':
            case 'Protocol':
            case 'Timeout':
            case 'ManuallyCleared':
            case 'ModbusException':
            case 'Offline':
            case 'crcMismatch':
                console.log('Error Message: ' + err.message, 'Error' + 'Modbus Error Type: ' + err.err);
                break;
        }
    }
    else if (Modbus.errors.isInternalException(err)) {
        console.log('Error Message: ' + err.message, 'Error' + 'Error Name: ' + err.name, err.stack);
    }
    else {
        console.log('Unknown Error', err);
    }
}
