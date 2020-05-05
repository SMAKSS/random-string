'use strict'
module.exports = function randomString(length) {
  var string = '',
    allowedCharacters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
  const allowedCharactersLength = allowedCharacters.length
  for (var i = 0; i < length; i++)
    string += allowedCharacters.charAt(
      Math.floor(Math.random() * allowedCharactersLength)
    )
  return string
}
