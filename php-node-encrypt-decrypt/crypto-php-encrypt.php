<?php
$textToEncrypt = "Secret Text to Encrypt";
$encryptionMethod = 'aes-256-cbc';
$secretHash = "315a5504d921f8327f73a356d2bbcbf1"; // <---- you have to use some persistent key.

$iv_size = openssl_cipher_iv_length($encryptionMethod);
$iv = openssl_random_pseudo_bytes($iv_size);
//To encrypt
$encryptedMessage = openssl_encrypt($textToEncrypt, $encryptionMethod, $secretHash, 0, $iv);

//Concatenate iv with data
$encryptedMessageWithIv = bin2hex($iv) . $encryptedMessage;

echo "Encrypted: $encryptedMessageWithIv";