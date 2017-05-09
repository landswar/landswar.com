export const required = (value) => value && value.length;
export const minLength = (length) => (value) => value.length >= length;
export const isNumber = (value) => !isNaN(Number(value));
export const match = (prop1, prop2) => (model) => model[prop1] === model[prop2];
