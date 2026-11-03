import randomString from '@smakss/random-string';

const value: string = randomString({ length: 5, allowedCharacters: 'abc' });
void value;
