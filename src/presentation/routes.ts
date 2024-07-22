import { Router } from 'express';
import { AnotattorRoutes } from './routes-controller';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // Definir las rutas
    // router.use('/api/todos', /*TodoRoutes.routes */ );
    router.use('/api/anotattor', AnotattorRoutes.routes);

    return router;
  }
}
