/* eslint-disable no-underscore-dangle */
import { Task } from '../../models';
import { TaskType } from '../../types';
import { TaskRepo } from '../Repositories';

class TaskData implements TaskRepo {
  // constructor(private readonly x: string) { }

  create = async (task: TaskType) => {
    try {
      const newTask = new Task(task);
      await newTask.save();

      let taskDTO: TaskType | undefined;
      if (newTask) {
        taskDTO = {
          task: newTask.task as string,
        };
      }

      return taskDTO;
    } catch {
      throw new Error('Fail to create the task, Please try again !!');
    }
  };

  update = async (id: string, task: TaskType) => {
    try {
      await Task.updateOne({ _id: id }, task);
      return true;
    } catch {
      throw new Error('Fail to create the task, Please try again !!');
    }
  };

  delete = async (id: string) => {
    try {
      await Task.deleteOne({ _id: id });
      return true;
    } catch {
      throw new Error('Fail to create the task, Please try again !!');
    }
  };

  getAll = async (id: string) => {
    try {
      const tasks = await Task.find({ user: id });

      const taskDTOs: Array<TaskType> = tasks.map((task) => (
        { task: task.task as string, id: task._id }
      ));

      return taskDTOs;
    } catch {
      throw new Error('Fail to get the user, Please try again !!');
    }
  };
}

export default TaskData;
