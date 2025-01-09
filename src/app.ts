import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', taskRoutes);

export default app;
