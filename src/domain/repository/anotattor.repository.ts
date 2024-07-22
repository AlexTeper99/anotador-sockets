import { AnnotatorEntity } from '..';

export abstract class AnnotatorRepository {
  abstract findById(id: string): Promise<AnnotatorEntity>;
}
