import { userRouter } from './user';

const initRoutes = (app) => {
  app.use('/users', userRouter);
}

export default initRoutes;
