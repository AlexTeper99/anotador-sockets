import { Request, Response } from 'express';

import { AnnotatorRepository, handleError } from '../../../domain';

export class AnnotatorController {
  constructor(private readonly annotatorRepository: AnnotatorRepository) {}

  public getAnnotatorById = async (req: Request, res: Response) => {
    const { id } = req.query;

    return this.annotatorRepository
      .findById(id as string)
      .then((annotator) => res.json(annotator))
      .catch((error) => handleError(error, res));
  };
}
