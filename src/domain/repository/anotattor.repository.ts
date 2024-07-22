import { AnnotatorEntity, GetAnnotatorDTO } from '..';

export abstract class AnnotatorRepository {
  abstract findById(getAnnotatorDto: GetAnnotatorDTO): Promise<AnnotatorEntity>;
}
