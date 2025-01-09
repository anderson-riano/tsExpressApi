import { Request, Response } from 'express';
import taskService from '../services/taskService';

class TaskController {
    public async getTasks(req: Request, res: Response): Promise<void> {
        // Obtener los parámetros de la query: page y limit
        const page: number = parseInt(req.query.page as string) || 1; // Si no se proporciona, asumimos página 1
        const limit: number = parseInt(req.query.limit as string) || 10; // Si no se proporciona, asumimos un límite de 10
        const userId: string = req.query.userId as string
        const response = await taskService.getTasks(page, limit, userId);
        res.status(response.status === 'success' ? 200 : 400).json(response);
    }

    public async getTaskById(req: Request, res: Response): Promise<void> {
        const response = await taskService.getTaskById(req.params.id);
        res.status(response.status ==='success' ? 200 : 400).json(response);
    }

    public async createTask(req: Request, res: Response): Promise<void> {
        const response = await taskService.createTask(req.body);
        res.status(response.status === 'success' ? 201 : 400).json(response);
    }

    public async updateTask(req: Request, res: Response): Promise<void> {
        const response = await taskService.updateTask(req.params.id, req.body);
        res.status(response.status === 'success' ? 200 : 400).json(response);
    }

    public async deleteTask(req: Request, res: Response): Promise<void> {
        const response = await taskService.deleteTask(req.params.id);
        res.status(response.status === 'success' ? 200 : 400).json(response);
    }
}

export default new TaskController();
