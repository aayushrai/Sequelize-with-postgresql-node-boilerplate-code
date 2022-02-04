import express from 'express';
import { userController } from '../controllers/user'; 
const userRouter = express.Router()

userRouter.route('/').get(userController.fetch);
userRouter.route('/').post(userController.create);
userRouter.route('/:id').delete(userController.delete);
userRouter.route('/:id').put(userController.update);

export { userRouter };
