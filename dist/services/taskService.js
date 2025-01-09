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
const taskModel_1 = __importDefault(require("../models/taskModel"));
const response_1 = require("../utils/response");
class TaskService {
    getTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield taskModel_1.default.find().populate('userId', 'name email');
                return new response_1.Response(tasks, 'success', 'Tasks fetched successfully');
            }
            catch (error) {
                return new response_1.Response([], 'error', error.message);
            }
        });
    }
    createTask(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const task = new taskModel_1.default(data);
                yield task.save();
                return new response_1.Response(task, 'success', 'Task created successfully');
            }
            catch (error) {
                return new response_1.Response(null, 'error', error.message); // Compatibilidad con null
            }
        });
    }
    updateTask(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const task = yield taskModel_1.default.findByIdAndUpdate(id, data, { new: true });
                return task
                    ? new response_1.Response(task, 'success', 'Task updated successfully')
                    : new response_1.Response(null, 'error', 'Task not found');
            }
            catch (error) {
                return new response_1.Response(null, 'error', error.message);
            }
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const task = yield taskModel_1.default.findByIdAndDelete(id);
                return task
                    ? new response_1.Response(null, 'success', 'Task deleted successfully')
                    : new response_1.Response(null, 'error', 'Task not found');
            }
            catch (error) {
                return new response_1.Response(null, 'error', error.message);
            }
        });
    }
}
exports.default = new TaskService();
