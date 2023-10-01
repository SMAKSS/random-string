# Generate random string

![npm](https://img.shields.io/npm/v/@smakss/random-string) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/random-string) ![NPM](https://img.shields.io/npm/l/@smakss/random-string) ![npm](https://img.shields.io/npm/dt/@smakss/random-string) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/random-string)

This package will generate a random dummy string based on the available set of characters or provided ones, you can also indicate the length of your desired random string. In case you don't care about uniqueness and don't want to use UUID this one will help you to achieve what you want.

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

to include it with common js module you should do this:

```js
var randomString = require("@smakss/random-string");
```

and to include it with ECMAscript module you can simply do this one:

```js
import randomString from "@smakss/random-string";
```

## Examples of usage

then to use it within your application you can do it just like this:

Generate a random string:

```js
randomString();

// Result: 'epTfoad497&p'
```

<sub>**NOTE:** If the input params were empty the length of string will be selected randomly between 1-20.<sub>

Generate a random string with a length of 10:

```js
randomString(10);

// Result: 'BD@Z8dKf2%'
```

You can provide both length and allowed characters:

```js
randomString(10, "abCD#@");

// Result: 'b@@#aDaC##'
```

## Contributing

Interested in making contributions to this project? Please see [CONTRIBUTING.md](https://github.com/SMAKSS/random-string/blob/master/.github/CONTRIBUTING.md) for guidelines and details.

## Code of Conduct

We value and prioritize the well-being of all our contributors and users. To ensure that this project remains a welcoming space for everyone, please refer to our [Code of Conduct](https://github.com/SMAKSS/random-string/blob/master/.github/CODE_OF_CONDUCT.md).
