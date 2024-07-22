import { NextFunction, Request, Response } from 'express';
import { GetAnnotatorDTO } from '../../domain';
import { MongoAnotattorDatasource } from '../../infrastructure';

export class AnnotatorMiddleware {
  static async validateAnotattor(req: Request, res: Response, next: NextFunction) {
    const { id } = req.query;

    try {
      const [error, getAnnotatorByIdDto] = GetAnnotatorDTO.create({ id });
      if (error) return res.status(400).json({ error });

      const datasource = new MongoAnotattorDatasource();
      const annotator = await datasource.findById(getAnnotatorByIdDto?.id!);

      if (!annotator) return res.status(404).json({ error: 'Annotator not found' });

      req.body.annotator = annotator;

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }

    return;
  }
}
