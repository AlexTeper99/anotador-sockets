import { Router } from 'express';
import { AnotattorController } from './controller';

export class AnotattorRoutes {
  static get routes(): Router {
    const router = Router();

    const anotattorController = new AnotattorController();

    router.get('/', anotattorController.getAll);

    return router;
  }
}
