import { NextFunction, Request, Response } from 'express';

export class AnotattorMiddleware {
  static async validateAnotattor(_req: Request, _res: Response, next: NextFunction) {
    console.log('AnotattorMiddleware.validateAnotattor');
    next();
  }
}
