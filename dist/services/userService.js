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
const userModel_1 = __importDefault(require("../models/userModel"));
const response_1 = require("../utils/response");
class UserService {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userModel_1.default.find();
                return new response_1.Response(users, 'success', 'Users fetched successfully');
            }
            catch (error) {
                return new response_1.Response([], 'error', error.message);
            }
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new userModel_1.default(data);
                yield user.save();
                return new response_1.Response(user, 'success', 'User created successfully');
            }
            catch (error) {
                return new response_1.Response(null, 'error', error.message);
            }
        });
    }
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.findByIdAndUpdate(id, data, { new: true });
                return user
                    ? new response_1.Response(user, 'success', 'User updated successfully')
                    : new response_1.Response(null, 'error', 'User not found');
            }
            catch (error) {
                return new response_1.Response(null, 'error', error.message);
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.findByIdAndDelete(id);
                return user
                    ? new response_1.Response(null, 'success', 'User deleted successfully')
                    : new response_1.Response(null, 'error', 'User not found');
            }
            catch (error) {
                return new response_1.Response(null, 'error', error.message);
            }
        });
    }
}
exports.default = new UserService();
