import {
  AnnotatorDatasource,
  AnnotatorEntity,
  AnnotatorRepository,
  GetAnnotatorDTO,
} from '../../domain';

export class AnnotatorRepositoryImpl implements AnnotatorRepository {
  constructor(private readonly datasource: AnnotatorDatasource) {}

  findById(getAnnotatorDto: GetAnnotatorDTO): Promise<AnnotatorEntity> {
    const { id } = getAnnotatorDto;
    return this.datasource.findById(id);
  }
}
