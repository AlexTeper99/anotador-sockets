import { Request, Response } from 'express';

import { AnotattorService } from '../../services';
import { handleError } from '../../../domain';

export class AnotattorController {
  constructor(private readonly anotatorService: AnotattorService = new AnotattorService()) {}

  public getAll = async (_req: Request, res: Response) => {
    return this.anotatorService
      .getAll()
      .then((data) => res.json(data))
      .catch((error) => handleError(error, res));
  };
}
