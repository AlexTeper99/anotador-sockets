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

    // TODO: Ask Guille better aproach
    router.get('/', anotattorController.getAnnotatorById);

    router.get(
      '/validate',
      AnnotatorMiddleware.validateAnotattor,
      anotattorController.getAnnotatorById
    );

    return router;
  }
}
