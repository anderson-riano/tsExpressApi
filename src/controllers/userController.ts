import { Request, Response } from 'express';
import userService from '../services/userService';

class UserController {
    public async getUsers(req: Request, res: Response): Promise<void> {
        // Obtener los parámetros de la query: page y limit
        const page: number = parseInt(req.query.page as string) || 0; // Si no se proporciona, asumimos página 1
        const limit: number = parseInt(req.query.limit as string) || 0; // Si no se proporciona, asumimos un límite de 10

        const response = await userService.getUsers(page, limit);
        res.status(response.status === 'success' ? 200 : 400).json(response);
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        const response = await userService.getUserById(req.params.id);
        res.status(response.status ==='success' ? 200 : 400).json(response);
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        const response = await userService.createUser(req.body);
        res.status(response.status === 'success' ? 201 : 400).json(response);
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        const response = await userService.updateUser(req.params.id, req.body);
        res.status(response.status === 'success' ? 200 : 400).json(response);
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        const response = await userService.deleteUser(req.params.id);
        res.status(response.status === 'success' ? 200 : 400).json(response);
    }
}

export default new UserController();
