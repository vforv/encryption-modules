var crypto = require('crypto');

var encrypt = function (plain_text, encryptionMethod, secret, iv) {
    var encryptor = crypto.createCipheriv(encryptionMethod, secret, iv);
    return encryptor.update(plain_text, 'utf8', 'base64') + encryptor.final('base64');
};

var decrypt = function (encryptedMessage, encryptionMethod, secret, iv) {
    var decryptor = crypto.createDecipheriv(encryptionMethod, secret, iv);
    return decryptor.update(encryptedMessage, 'base64', 'utf8') + decryptor.final('utf8');
};

var textToEncrypt = new Date().toISOString().substr(0,19) + '|My super secret information.';
var encryptionMethod = 'AES-256-CBC';
var secret = "My32charPasswordAndInitVectorStr"; //must be 32 char length
var iv = secret.substr(0,16);

var encryptedMessage = encrypt(textToEncrypt, encryptionMethod, secret, iv);
var decryptedMessage = decrypt(encryptedMessage, encryptionMethod, secret, iv);

console.log(encryptedMessage);
console.log(decryptedMessage);