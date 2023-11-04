const DEFAULT_ALLOWED_CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

/**
 * Generates a random string based on the given length and set of allowed characters.
 *
 * @param {Object} [options={}] - The options for generating the random string.
 * @param {number} [options.length=Math.ceil(Math.random() * 20)] - The length of the string to generate.
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
  length = Math.ceil(Math.random() * 20),
  allowedCharacters = DEFAULT_ALLOWED_CHARACTERS
}: {
  length?: number;
  allowedCharacters?: string;
} = {}): string {
  const charactersLength = allowedCharacters.length;

  return Array.from(
    { length },
    () => allowedCharacters[Math.floor(Math.random() * charactersLength)]
  ).join('');
}

export default randomString;
