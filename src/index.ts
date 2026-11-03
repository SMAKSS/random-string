const DEFAULT_ALLOWED_CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

/**
 * Returns an unbiased random index using the Web Crypto API.
 *
 * @param max - The exclusive upper bound for the random index.
 * @returns A secure random integer from 0 to max - 1.
 */
function getSecureRandomIndex(max: number): number {
  if (!Number.isSafeInteger(max) || max < 1 || max > 0x1_0000_0000) {
    throw new RangeError(
      'max must be a positive safe integer no greater than 2^32.'
    );
  }

  const cryptoProvider = globalThis.crypto;
  if (!cryptoProvider?.getRandomValues) {
    throw new Error('Secure randomness is unavailable in this environment.');
  }

  const range = 0x1_0000_0000;
  const limit = range - (range % max);
  const randomValue = new Uint32Array(1);

  do {
    cryptoProvider.getRandomValues(randomValue);
  } while (randomValue[0] >= limit);

  return randomValue[0] % max;
}

/**
 * Generates a random string based on the given length and set of allowed characters.
 *
 * @param {Object} [options={}] - The options for generating the random string.
 * @param {number} [options.length] - The length of the string to generate. Defaults to a secure random value from 1 to 20.
 * @param {string} [options.allowedCharacters=DEFAULT_ALLOWED_CHARACTERS] - A string of allowed characters.
 * @returns {string} The generated random string.
 *
 * @example
 * // Example 1: Generate a random string with default options
 * const randomStr = randomString();
 * console.log(randomStr); // Output will be a random string of length between 1 and 20 characters.
 *
 * @example
 * // Example 2: Generate a random string of length 10
 * const randomStr10 = randomString({ length: 10 });
 * console.log(randomStr10); // Output will be a random string of exactly 10 characters.
 *
 * @example
 * // Example 3: Generate a random string of length 5 with specific allowed characters
 * const allowedChars = 'abc123';
 * const randomStrCustom = randomString({ length: 5, allowedCharacters: allowedChars });
 * console.log(randomStrCustom); // Output will be a random string of exactly 5 characters, with characters only from 'abc123'.
 */
function randomString({
  length = getSecureRandomIndex(20) + 1,
  allowedCharacters = DEFAULT_ALLOWED_CHARACTERS
}: {
  length?: number;
  allowedCharacters?: string;
} = {}): string {
  if (!Number.isSafeInteger(length) || length < 0) {
    throw new RangeError('length must be a non-negative safe integer.');
  }

  if (typeof allowedCharacters !== 'string') {
    throw new TypeError('allowedCharacters must be a string.');
  }

  const characters = Array.from(allowedCharacters);
  if (length > 0 && characters.length === 0) {
    throw new RangeError('allowedCharacters must not be empty.');
  }

  return Array.from(
    { length },
    () => characters[getSecureRandomIndex(characters.length)]
  ).join('');
}

export default randomString;
