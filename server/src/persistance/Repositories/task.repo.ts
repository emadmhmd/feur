import { TaskType } from '../../types';

interface TaskRepo {
    create(task: TaskType): Promise<TaskType | undefined>,
    update(id: string, task: TaskType): Promise<boolean>,
    delete(id: string): Promise<boolean>,
    getAll(id: string): Promise<Array<TaskType>>,
}
export default TaskRepo;
