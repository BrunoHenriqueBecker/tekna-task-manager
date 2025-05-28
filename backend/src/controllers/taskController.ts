import { Request, Response } from 'express';
import { prisma } from '../app';

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany({ where: { userId: req.userId } });
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description, dueDate } = req.body;
  const task = await prisma.task.create({
    data: { title, description, dueDate: new Date(dueDate), userId: req.userId },
  });
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, dueDate } = req.body;
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, description, dueDate: new Date(dueDate) },
  });
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id: Number(id) } });
  res.json({ message: 'Task deleted' });
};
