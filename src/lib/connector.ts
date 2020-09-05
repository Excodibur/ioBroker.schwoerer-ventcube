const Modbus = require('jsmodbus')
import { Socket, SocketConnectOpts } from 'net'
import { SchwoererVentcube } from "../main";
import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import { SchwoererParameter } from './schwoerer/parameters';
import { timeStamp } from 'console';

export class Connector {
    private socket: Socket;
    private socketIsConnected: boolean = false;
    private client: any;
    private server: string;
    private port: number;
    private context: SchwoererVentcube;
    private readInterval: number; //seconds
    private useAdvancedFunctions: boolean;
    private connectionStatus = Connector.State.DISCONNECTED;

    public constructor(ventcube: SchwoererVentcube, server: string, port: number, useAdvancedFunctions: boolean, interval: number = 30) {
        this.server = server;
        this.port = port;
        this.readInterval = interval;
        this.useAdvancedFunctions = useAdvancedFunctions;

        this.socket = new Socket();
        this.client = new Modbus.client.TCP(this.socket);
        this.context = ventcube;
    }

    public connect() {
        this.context.log.info("Connecting to server " + this.server + ":" + this.port);
        this.socket.connect({ host: this.server, port: this.port });
        this.connectionStatus = Connector.State.CONNECTING;
        this.socket.setKeepAlive(true, 5000);
    }

    private handleErrors(err: any) {
        if (Modbus.errors.isUserRequestError(err)) {
            switch (err.err) {
                case 'OutOfSync':
                case 'Protocol':
                case 'Timeout':
                case 'ManuallyCleared':
                case 'ModbusException':
                case 'Offline':
                case 'crcMismatch':
                    this.context.log.error('Error Message: ' + err.message + 'Error' + 'Modbus Error Type: ' + err.err);
                    break;
            }

        } else if (Modbus.errors.isInternalException(err)) {
            this.context.log.error('Error Message: ' + err.message + 'Error Name:' + err.name + 'Error Stack: ' + err.stack);
        } else {
            this.context.log.error('Unknown Error:' + err);
        }
    }

    public initializeSocket() :void {
        this.socket.on('connect',  () => {
            this.connectionStatus = Connector.State.CONNECTED;
          
            this.context.log.info("Established connection. Starting processing");
            this.readFunctionStates(this.context.syncReadData.bind(this.context));

        });
        this.socket.on('timeout', () => {
            this.connectionStatus = Connector.State.TIMEDOUT;
        });
        this.socket.on('close', () => {
            this.connectionStatus = Connector.State.CLOSED;
        });
        this.socket.on('error' , (error) => {
            this.context.log.error("ERROR: " +error);
        });
    }

    private readFunctionStates(callback: (func: string, value: any, time: Date) => void) {
       
        this.context.log.debug("Reading latest states from Ventcube");

        for (const [func, attributes] of Object.entries(SchwoererParameter))
        {
            //Check if advanced functions should be retrieved as well
            if ((attributes.category == "advanced") && (! this.useAdvancedFunctions)) continue;

            let mayRead = attributes.modbus_r > -1 ? true : false;
			if (mayRead) {
                this.context.log.debug("checking state: "+ func +":" + attributes.modbus_r);
                this.readDataFromHoldingRegister(callback, func, attributes.modbus_r);
            }
        }


        setTimeout(function (this: Connector) { this.readFunctionStates(callback); }.bind(this), this.readInterval * 1000);
    }

    public readDataFromHoldingRegister(callback: (func: string, value: any, time: Date) => void, func: string, register: number, fields: number = 1) : any {
        this.context.log.silly("Reading register: " + register);
        
        this.client.readHoldingRegisters(register, fields)
            .then(({ metrics, request, response }:any) => {
                this.context.log.silly('Transfer Time: ' + metrics.transferTime);
                this.context.log.silly('Response Body Payload: ' + response.body.valuesAsArray);
                callback(func, response.body.valuesAsArray, new Date());
            })
            .catch((error:any) => {
                this.context.log.error(error.message);
            })
    }

    
    public writeDataToRegister(func: string, register: number, value: number) {
        this.context.log.debug('Changing register ' + register + ' value to: ' + value + "|" + value.toString(16));
        //Convert value from decimal to hexadecimal to write it to register
        this.client.writeMultipleRegisters(register, [value.toString(16)])
            .then(({ metrics, request, response }: any) => {
                this.context.log.silly('Transfer Time: ' + metrics.transferTime);
                this.context.log.silly('Response Function Code: ' + response.body.fc);

                this.context.syncReadData(func, value, new Date());
            })
            .catch((error:any) => {
                this.context.log.error(error.message + "Response: " + error.response.body.message + " code: " + error.response.body.code);
            })
    }

    public getConnectionStatus() : number {
        return this.connectionStatus;
    }

    public close() {
        this.context.log.info("Shutting down connection.");
        this.socket.end();
    }
}

export namespace Connector {
    export enum State {
        CONNECTING,
        CONNECTED,
        DISCONNECTED,
        TIMEDOUT,
        CLOSED
    } 
}
