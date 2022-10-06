import { Typegoose, prop, Ref } from 'typegoose';
import { User } from './user.model';

export class Task extends Typegoose {
  @prop({ required: true })
    task?: string;

  @prop({ ref: User, required: true })
    user?: Ref<User>;

  @prop({ required: true, default: Date.now() })
    createdAt?: Date;

  @prop({ required: true, default: Date.now() })
    updatedAt?: Date;
}

const TaskModel = new Task().getModelForClass(Task);
export default TaskModel;
