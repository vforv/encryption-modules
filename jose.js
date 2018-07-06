const { JWK, JWE } = require('node-jose');
const jose = require('jose-simple');
const fs = require('fs');
const makeKey = pem => JWK.asKey(pem, 'pem');

async function start() {
    const publicKey = await makeKey(fs.readFileSync('public.key', 'utf8'));
    const privateKey = await makeKey(fs.readFileSync('private.key', 'utf8'));

    const raw = {
        username: 'Secret'
    };

    const { encrypt, decrypt } = jose(privateKey, publicKey);

    return encrypt(raw)
        .then(encrypted => decrypt(encrypted));
}

return start().then((result) => {
    console.log('decrypted', result)
}, (err) => {
    console.error(err);
});

