"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionStates = exports.FunctionState = void 0;
class FunctionState {
    constructor(func, field, value = -1) {
        this.func = "none";
        this.field = -1;
        this.value = -1;
        this.func = func;
        this.field = field;
        this.value = value;
    }
}
exports.FunctionState = FunctionState;
class FunctionStates {
    constructor() {
        this.states = [];
    }
    push(func, field, value = -1) {
        this.states.push(new FunctionState(func, field, value));
    }
    pop() {
        if (this.states.length != 0)
            return this.states.pop();
        else
            return null;
    }
    setStates(states) {
        this.states = states;
    }
    getStates() {
        return this.states;
    }
    forEach(callback) {
        return this.states.forEach(callback);
    }
}
exports.FunctionStates = FunctionStates;
