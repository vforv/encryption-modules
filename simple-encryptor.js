const jwt = require('jsonwebtoken');
const jwtPassword = 'asdtgfwra'
const fs = require('fs');
var key = 'real secret keys should be long and random';
 
// Create an encryptor:
var encryptor = require('simple-encryptor')(key);

const RSA_PRIVATE = fs.readFileSync('private.key');
const RSA_PUBLIC = fs.readFileSync('public.key');

const token = jwt.sign({ username: 'Secret' }, RSA_PRIVATE, { algorithm: 'RS256'});
const encrypted = encryptor.encrypt(token);

const decrypted = encryptor.decrypt(encrypted);
const payload = jwt.verify(decrypted, RSA_PUBLIC);

console.log(payload);
