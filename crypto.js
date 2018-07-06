// Nodejs encryption with CTR buit-in crypto node lib + jsonwebtoken
// How to decrypt with PHP: https://gist.github.com/rojan/9545706
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const cryptoPassword = 'd6F3Efeq';
const jwt = require('jsonwebtoken');
const jwtPassword = 'asdtgfwra'

function encrypt(payload) {
  const token = jwt.sign(payload, jwtPassword);
  const cipher = crypto.createCipher(algorithm, cryptoPassword)
  const crypted = cipher.update(token, 'utf8', 'hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(ecryptedToken) {
  const decipher = crypto.createDecipher(algorithm, cryptoPassword)
  const dec = decipher.update(ecryptedToken, 'hex', 'utf8')
  dec += decipher.final('utf8');
  try {
    const decoded = jwt.verify(dec, jwtPassword);
    return decoded;
  } catch (err) {
    return err;
  }
}

var encrypted = encrypt({
  username: 'Secret'
});

console.log(decrypt(encrypted));
