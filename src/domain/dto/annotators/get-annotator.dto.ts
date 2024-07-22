import { isValidId } from '../../common/validations';

export class GetAnnotatorDTO {
  private constructor(public readonly id: string) {}

  static create(object: { [key: string]: any }): [string?, GetAnnotatorDTO?] {
    const { id } = object;
    if (!id) {
      return ['id is required'];
    }

    if (typeof id !== 'string') {
      return ['id must be a string'];
    }

    if (!isValidId(id)) {
      return ['id is invalid'];
    }

    return [undefined, new GetAnnotatorDTO(id)];
  }
}
