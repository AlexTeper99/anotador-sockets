import { AnnotatorModel } from '../../data';
import { AnnotatorDatasource, AnnotatorEntity, CustomError } from '../../domain';

export class MongoAnotattorDatasource extends AnnotatorDatasource {
  async findById(id: string): Promise<AnnotatorEntity> {
    const anotattor = await AnnotatorModel.findOne({
      id,
    });
    if (!anotattor) {
      throw CustomError.notFound('Annotator not found');
    }

    return AnnotatorEntity.fromObject(anotattor);
  }
}
