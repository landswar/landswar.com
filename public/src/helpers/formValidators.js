export const required = (value) => value && value.length;
export const minLength = (length) => (value) => value.length >= length;
export const isNumber = (value) => !isNaN(Number(value));
