import { Request, Response } from 'express';

import { AnnotatorRepository, GetAnnotatorDTO, handleError } from '../../../domain';

export class AnnotatorController {
  constructor(private readonly annotatorRepository: AnnotatorRepository) {}

  public getAnnotatorById = async (req: Request, res: Response) => {
    const { id } = req.query;

    const [error, getAnnotatorByIdDto] = GetAnnotatorDTO.create({ id });
    if (error) return res.status(400).json({ error });

    return this.annotatorRepository
      .findById(getAnnotatorByIdDto!)
      .then((annotator) => res.json(annotator))
      .catch((error) => handleError(error, res));
  };
}
