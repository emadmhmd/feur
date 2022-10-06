import { NextFunction, Request, Response } from 'express';
import { Task } from '../services';
import { ITask } from '../services/interfaces';
import { DataAccess } from '../persistance';

const { TaskDataAccess } = DataAccess;

class TaskController {
  private task: ITask;

  constructor() {
    const taskDataAccess = new TaskDataAccess();
    const task = new Task(taskDataAccess);
    this.task = task;
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const { id } = req.user.user;

      const task = await this.task.create({ ...body, user: id });

      res.send({
        msg: 'Task added successfully', task,
      });
    } catch (e) {
      next(e);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const { id } = req.params;

      await this.task.update(id, body);

      res.send({
        msg: 'Task updated successfully',
      });
    } catch (e) {
      next(e);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      await this.task.delete(id);

      res.send({
        msg: 'Task deleted successfully',
      });
    } catch (e) {
      next(e);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.user.user;
      const tasks = await this.task.getAll(id);
      res.send({
        msg: 'tasks got successfully', tasks,
      });
    } catch (e) {
      next(e);
    }
  };
}

export default new TaskController();
