<?php
$encryptedMessage = '25a297266aa17c361ef4051b8c4b09a9yuldR/c05Spe5y6ECMAjaFGSZLo619CV3ZJqqmwZgbg=';
$encryptionMethod = 'aes-256-cbc';
$secretHash = "315a5504d921f8327f73a356d2bbcbf1";

//To Decrypt
$iv_size = openssl_cipher_iv_length($encryptionMethod);
$iv = hex2bin(substr($encryptedMessage, 0, $iv_size * 2));

$decryptedMessage = openssl_decrypt(substr($encryptedMessage, $iv_size * 2), $encryptionMethod, $secretHash, 0, $iv);

echo "Decrypted: $decryptedMessage";