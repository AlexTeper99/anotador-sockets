import { AnnotatorDatasource, AnnotatorEntity, AnnotatorRepository } from '../../domain';

export class AnnotatorRepositoryImpl implements AnnotatorRepository {
  constructor(private readonly datasource: AnnotatorDatasource) {}

  findById(id: string): Promise<AnnotatorEntity> {
    return this.datasource.findById(id);
  }
}
