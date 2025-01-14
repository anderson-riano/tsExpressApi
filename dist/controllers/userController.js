"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield userService_1.default.getUsers();
            res.status(response.status === 'success' ? 200 : 400).json(response);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield userService_1.default.createUser(req.body);
            res.status(response.status === 'success' ? 201 : 400).json(response);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield userService_1.default.updateUser(req.params.id, req.body);
            res.status(response.status === 'success' ? 200 : 400).json(response);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield userService_1.default.deleteUser(req.params.id);
            res.status(response.status === 'success' ? 200 : 400).json(response);
        });
    }
}
exports.default = new UserController();
