'use strict';
function randomString(length) {
  if (!length) length = Math.ceil(Math.random() * 10 * 2);
  var string = '',
    allowedCharacters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  var allowedCharactersLength = allowedCharacters.length;
  for (var i = 0; i < length; i++)
    string += allowedCharacters.charAt(
      Math.floor(Math.random() * allowedCharactersLength)
    );
  return string;
}

module.exports = randomString;