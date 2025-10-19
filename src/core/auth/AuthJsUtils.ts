
// This file is a placeholder for utility functions related to authentication,
// such as cookie handling, token encoding/decoding, or URL generation.

/**
 * Generates a random string for state or nonce values.
 * @param length The length of the string to generate.
 */
export function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
