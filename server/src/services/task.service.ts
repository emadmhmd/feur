import { TaskType } from '../types';
import { TaskRepo } from '../persistance/Repositories';
import { ITask } from './interfaces';

class Task implements ITask {
  // eslint-disable-next-line no-useless-constructor
  constructor(private taskData: TaskRepo) {}

  create = async (task: TaskType) => {
    try {
      return this.taskData.create(task);
    } catch {
      throw new Error('Fail to create the task, Please try again !!');
    }
  };

  update = async (id: string, task: TaskType) => {
    try {
      return this.taskData.update(id, task);
    } catch {
      throw new Error('Fail to update the task, Please try again !!');
    }
  };

  delete = async (id: string) => {
    try {
      return this.taskData.delete(id);
    } catch {
      throw new Error('Fail to delete the task, Please try again !!');
    }
  };

  getAll = (id: string) => {
    try {
      return this.taskData.getAll(id);
    } catch {
      throw new Error('Fail to get the tasks, Please try again !!');
    }
  };
}

export default Task;
