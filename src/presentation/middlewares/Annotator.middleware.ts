import { NextFunction, Request, Response } from 'express';

export class AnnotatorMiddleware {
  static async validateAnotattor(req: Request, res: Response, next: NextFunction) {
    const { id } = req.query;

    try {
      if (!id) return res.status(400).json({ error: 'Missing required parameter: id' });

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }

    return;
  }
}
