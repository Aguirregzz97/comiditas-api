import { Router } from 'express';
import { mainRouter } from './api';

const apiRouter = Router();

// Routes
apiRouter.use('/api', mainRouter);

export { apiRouter };
