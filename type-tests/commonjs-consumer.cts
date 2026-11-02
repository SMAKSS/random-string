import randomString = require('@smakss/random-string');

const value: string = randomString.default({
  length: 5,
  allowedCharacters: 'abc'
});
void value;
