import User, { IUser } from '../models/userModel';
import { Response } from '../utils/response';

class UserService {
    public async getUsers(page: number, limit: number): Promise<Response<IUser[]>> {
        try {

            if (page == 0) {
                const tasks = await User.find();
                return new Response(tasks, 'success', 'Users fetched successfully');
            } else {
                // Calcular el valor de "skip" y "limit" para la paginación
                const skip = (page - 1) * limit;
        
                // Consultar solo los usuarios de la página actual con el límite
                const users = await User.find().skip(skip).limit(limit);
        
                // Contar el total de usuarios para calcular el número de páginas
                const totalUsers = await User.countDocuments();
        
                // Calcular el total de páginas
                const totalPages = Math.ceil(totalUsers / limit);
        
                // Devolver la respuesta
                return new Response(
                    users,
                    'success',
                    'Users fetched successfully',
                    totalUsers,
                    totalPages,
                    page,
                    limit
                );
            }
        } catch (error: any) {
            return new Response([], 'error', error.message);
        }
    }
    

    public async getUserById(id: string): Promise<Response<IUser | null>> {
        try {
            const user = await User.findById(id);
            return user
               ? new Response(user, 'success', 'User fetched successfully')
                : new Response(null, 'error', 'User not found');
        } catch (error: any) {
            return new Response<null>(null, 'error', error.message);
        }
    }

    public async createUser(data: IUser): Promise<Response<IUser | null>> {
        try {
            const user = new User(data);
            await user.save();
            return new Response(user, 'success', 'User created successfully');
        } catch (error: any) {
            return new Response(null, 'error', error.message);
        }
    }

    public async updateUser(id: string, data: IUser): Promise<Response<IUser | null>> {
        try {
            const user = await User.findByIdAndUpdate(id, data, { new: true });
            return user
                ? new Response(user, 'success', 'User updated successfully')
                : new Response(null, 'error', 'User not found');
        } catch (error: any) {
            return new Response<null>(null, 'error', error.message);

        }
    }

    public async deleteUser(id: string): Promise<Response<null>> {
        try {
            const user = await User.findByIdAndDelete(id);
            return user
                ? new Response(null, 'success', 'User deleted successfully')
                : new Response(null, 'error', 'User not found');
        } catch (error: any) {
            return new Response(null, 'error', error.message);
        }
    }
}

export default new UserService();
