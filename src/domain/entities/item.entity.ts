import { CustomError } from '..';

export class ItemEntity {
  constructor(public name: string, public quantity: number) {}

  static fromObject(object: { [key: string]: any }) {
    const { name, quantity } = object;

    if (!name) {
      throw CustomError.badRequest('name is required');
    }

    if (typeof name !== 'string') {
      throw CustomError.badRequest('name must be a string');
    }

    if (!quantity) {
      throw CustomError.badRequest('quantity is required');
    }

    if (typeof quantity !== 'number') {
      throw CustomError.badRequest('quantity must be a number');
    }

    if (quantity <= 0) {
      throw CustomError.badRequest('quantity must be greater or equal than 0');
    }

    return new ItemEntity(name, quantity);
  }
}
