import { CustomError, isValidId, ItemEntity } from '..';

export class AnnotatorEntity {
  constructor(public id: string, public items: ItemEntity[]) {}

  static fromObject(object: { [key: string]: any }) {
    const { id, items } = object;

    if (!id) {
      throw CustomError.badRequest('id is required');
    }

    if (typeof id !== 'string' || !isValidId(id)) {
      throw CustomError.badRequest('id must be a string');
    }

    if (!items) {
      throw CustomError.badRequest('items is required');
    }

    let itemsEntity: ItemEntity[] = [];
    if (items) {
      itemsEntity = items.map((item: any) => ItemEntity.fromObject(item));
    }

    return new AnnotatorEntity(id, itemsEntity);
  }
}
