// Check field not empty
export const required = (value) => value && value.length;
// Check field not empty
export const minLength = (length) => (value) => value.length >= length;
// Check field is a number
export const isNumber = (value) => !isNaN(Number(value));
// Check if 2 field match
export const match = (prop1, prop2) => (model) => model[prop1] === model[prop2];
