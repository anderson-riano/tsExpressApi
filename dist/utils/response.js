"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(data, // Permitir `null`
    status, message) {
        this.data = data;
        this.status = status;
        this.message = message;
    }
}
exports.Response = Response;
