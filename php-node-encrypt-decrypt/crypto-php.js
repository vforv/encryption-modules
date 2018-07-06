const crypto = require('crypto');

const data = "data to encrypt";
const key = "315a5504d921f8327f73a356d2bbcbf1";
const iv = new Buffer(data.substring(0, 32), 'hex');

const cipher = crypto.createCipher('aes-256-cbc', key, iv);
let crypted = cipher.update(data, 'utf8', 'hex')
crypted += cipher.final('hex');
console.log(crypted);