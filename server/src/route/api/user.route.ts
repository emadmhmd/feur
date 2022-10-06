import * as express from 'express';
import { userController } from '../../controller';
import isAuth from '../../middleware/auth.middleware';
import isUserValid from '../../middleware/userValidation.middleware';

const router = express.Router();

router.route('/create-new-user')
  // .all(isUserValid)
  .post(userController.create);

router.route('/login')
  .post(userController.login);

router.route('/')
  .all(isAuth)
  .get(userController.get);

export default router;
