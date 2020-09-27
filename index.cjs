'use strict';
function randomString(
  length,
  allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
) {
  if (!length) length = Math.ceil(Math.random() * 10 * 2);
  var string = '';
  var allowedCharactersLength = allowedCharacters.length;
  for (var i = 0; i < length; i++)
    string += allowedCharacters.charAt(
      Math.floor(Math.random() * allowedCharactersLength)
    );
  return string;
}

module.exports = randomString;
