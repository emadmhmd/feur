/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { taskType } from '../types/domain';
import vars from '../config/env.config';

const backendUrl = vars.get('backendUrl');

class Task {
  create = (task: taskType) => axios.post(`${backendUrl}/api/task`, task);

  update = (id: string, task: taskType) => axios.put(`${backendUrl}/api/task/${id}`, task);

  delete = (id: string) => axios.delete(`${backendUrl}/api/task/${id}`);

  getAll = () => axios.get(`${backendUrl}/api/task`);
}

export default new Task();
