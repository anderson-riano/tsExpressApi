import Task, { ITask } from '../models/taskModel';
import { Response } from '../utils/response';

class TaskService {

    public async getTasks(page: number, limit: number, userId: string): Promise<Response<ITask[]>> {
        try {
            // Calcular el valor de "skip" y "limit" para la paginación
            const skip = (page - 1) * limit;

            let tasks;  // Usar 'let' para poder reasignar el valor

            if (userId === undefined) {
                tasks = await Task.find()
                    .skip(skip)
                    .limit(limit)
                    .populate('userId', 'name');
            } else {
                tasks = await Task.find({ userId: userId })
                    .skip(skip)
                    .limit(limit)
                    .populate('userId', 'name');
            }


            // Contar el total de usuarios para calcular el número de páginas
            const totalTasks = await Task.countDocuments();

            // Calcular el total de páginas
            const totalPages = Math.ceil(totalTasks / limit);

            // Devolver la respuesta
            return new Response(
                tasks,
                'success',
                'Tasks fetched successfully',
                totalTasks,
                totalPages,
                page,
                limit
            );
        } catch (error: any) {
            return new Response([], 'error', error.message);
        }
    }

    public async getTaskById(id: string): Promise<Response<ITask | null>> {
        try {
            const task = await Task.findById(id);
            return task
                ? new Response(task, 'success', 'Task fetched successfully')
                : new Response(null, 'error', 'Task not found');
        } catch (error: any) {
            return new Response<null>(null, 'error', error.message);
        }
    }

    public async createTask(data: ITask): Promise<Response<ITask | null>> {
        try {
            const task = new Task(data);
            await task.save();
            return new Response(task, 'success', 'Task created successfully');
        } catch (error: any) {
            return new Response(null, 'error', error.message); // Compatibilidad con null
        }
    }

    public async updateTask(id: string, data: ITask): Promise<Response<ITask | null>> {
        try {
            const task = await Task.findByIdAndUpdate(id, data, { new: true });
            return task
                ? new Response(task, 'success', 'Task updated successfully')
                : new Response(null, 'error', 'Task not found');
        } catch (error: any) {
            return new Response(null, 'error', error.message);
        }
    }


    public async deleteTask(id: string): Promise<Response<null>> {
        try {
            const task = await Task.findByIdAndDelete(id);
            return task
                ? new Response(null, 'success', 'Task deleted successfully')
                : new Response(null, 'error', 'Task not found');
        } catch (error: any) {
            return new Response(null, 'error', error.message);
        }
    }
}

export default new TaskService();
