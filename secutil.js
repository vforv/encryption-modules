// This pkg has 2 vuln
// Not working
const secUtil = require('secutil');

const payload = {
    username: 'test'
}

// Encrypt / Decrypt
const data = secUtil.encrypt("aes256","key",payload);
console.log("Encrypt (AES256): " + data);

const data1 = secUtil.decrypt("aes256","key",data);
console.log("Decrypt (AES256): " + data1);

const data2 = secUtil.encrypt("HS512","key",payload);
console.log("Encrypt (HS512): " + data);

const data3 = secUtil.decrypt("HS512","key",data2);
console.log("Decrypt (HS512): " + data3);