# Generate random string

![npm](https://img.shields.io/npm/v/@smakss/random-string) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/random-string) ![NPM](https://img.shields.io/npm/l/@smakss/random-string) ![npm](https://img.shields.io/npm/dt/@smakss/random-string) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/random-string)

This package will generate a random dummy string based on the available set of characters or provided ones, you can also indicate the length of your desired random string. In case you don't care about uniqueness and don't want to use UUID this one will help you to achieve what you want.

## How it works?

To install it you can simply do the following command:

```bash
npm i @smakss/random-string
or
yarn add @smakss/random-string
```

to include it with common js module you should do this:

```js
var randomString = require('@smakss/random-string');
```

and to include it with ECMAscript module you can simply do this one:

```js
import randomString from '@smakss/random-string';
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
randomString(10, 'abCD#@'); 

// Result: 'b@@#aDaC##'
```

## Demo

You can check the [working demo](https://runkit.com/smakss/random-string) in runkit.
