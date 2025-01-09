"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = __importDefault(require("../controllers/taskController"));
const router = express_1.default.Router();
router.get('/tasks', taskController_1.default.getTasks);
router.post('/tasks', taskController_1.default.createTask);
router.put('/tasks/:id', taskController_1.default.updateTask);
router.delete('/tasks/:id', taskController_1.default.deleteTask);
exports.default = router;
