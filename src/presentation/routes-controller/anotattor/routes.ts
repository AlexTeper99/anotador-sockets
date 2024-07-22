import { Router } from 'express';
import { AnotattorController } from './controller';
import { AnotattorMiddleware } from '../../middlewares';

export class AnotattorRoutes {
  static get routes(): Router {
    const router = Router();

    const anotattorController = new AnotattorController();

    router.get('/', AnotattorMiddleware.validateAnotattor, anotattorController.getAll);

    return router;
  }
}
