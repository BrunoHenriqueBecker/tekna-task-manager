import express from 'express';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
export const prisma = new PrismaClient();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

export default app;
