const DEFAULT_ALLOWED_CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

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
