export const ID_REGEX = /^[0-9]{3}[a-zA-Z]{3}$/;

export function isValidId(id: string): boolean {
  return ID_REGEX.test(id);
}
