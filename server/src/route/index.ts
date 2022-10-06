import { Router } from 'express';
import userRoute from './api/user.route';
import taskRoute from './api/task.route';

const routes = Router();

routes.use('/user', userRoute);

routes.use('/task', taskRoute);

export default routes;
