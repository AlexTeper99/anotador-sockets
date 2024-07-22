import { AnnotatorEntity } from '..';

export abstract class AnnotatorDatasource {
  abstract findById(id: string): Promise<AnnotatorEntity>;
}
