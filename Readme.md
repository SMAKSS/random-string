# Generate random string

![npm](https://img.shields.io/npm/v/@smakss/random-string) ![NPM](https://img.shields.io/npm/l/@smakss/random-string) ![npm](https://img.shields.io/npm/dt/@smakss/random-string) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/random-string)

This package will generate a random dummy string based on the available set of characters or provided ones, and you can also indicate the length of your desired random string. In case you don't care about uniqueness and don't want to use UUID, this package will help you to achieve what you want.

If you're in need of a UUID generation library, take a look at [@smakss/uuid](https://www.npmjs.com/package/@smakss/uuid), which offers robust UUID creation capabilities. For those who require more tailored options, [@smakss/password-generator](https://www.npmjs.com/package/@smakss/password-generator) provides a versatile solution for crafting custom passwords to fit a variety of needs.

## Demo

You can check the [working demo](https://runkit.com/smakss/random-string) in runkit.

or

[![View @smakss/random-string](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-random-string-xlf6d2?fontsize=14&hidenavigation=1&theme=dark)

## How it works?

To install it you can simply do the following command:

```bash
npm i @smakss/random-string
or
yarn add @smakss/random-string
```

To include it with a common js module you should do this:

```js
const randomString = require('@smakss/random-string');
```

And to include it with an ECMAScript module you can simply do this one:

```js
import randomString from '@smakss/random-string';
```

## Examples of usage

Then to use it within your application you can do it just like this:

Generate a random string with default parameters:

```js
randomString();

// Result example: 'GkL9#z$P!2'
```

**NOTE:** If the `length` is not provided, it will be selected randomly between 1 and 20.

Generate a random string with a specified length:

```js
randomString({ length: 10 });

// Result example: 'Sg67&ZpQ8!'
```

You can provide both length and allowed characters:

```js
randomString({ length: 10, allowedCharacters: 'abCD#@' });

// Result example: 'b@@#aDaC##'
```

## Contributing

Interested in making contributions to this project? Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines and details.

## Code of Conduct

We value and prioritize the well-being of all our contributors and users. To ensure that this project remains a welcoming space for everyone, please refer to our [Code of Conduct](./CODE_OF_CONDUCT.md).
