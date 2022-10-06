import * as express from 'express';
import { taskController } from '../../controller';
import isAuth from '../../middleware/auth.middleware';

const router = express.Router();

router.route('/')
  .all(isAuth)
  .post(taskController.create)
  .get(taskController.getAll);

router.route('/:id')
  .all(isAuth)
  .put(taskController.update)
  .delete(taskController.delete);

export default router;
