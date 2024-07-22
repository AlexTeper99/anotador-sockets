import { Router } from 'express';
import { AnnotatorController } from './controller';
import { AnnotatorMiddleware } from '../../middlewares';
import { AnnotatorRepositoryImpl, MongoAnotattorDatasource } from '../../../infrastructure';

export class AnotattorRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new MongoAnotattorDatasource();
    const annotatorRepository = new AnnotatorRepositoryImpl(datasource);
    const anotattorController = new AnnotatorController(annotatorRepository);

    router.get('/', AnnotatorMiddleware.validateAnotattor, anotattorController.getAnnotatorById);

    return router;
  }
}
