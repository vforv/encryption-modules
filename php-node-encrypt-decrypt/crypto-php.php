<?php
date_default_timezone_set('UTC');
$textToEncrypt = substr(date('c'),0,19) . "|My super secret information.";
$encryptionMethod = "AES-256-CBC";
$secret = "My32charPasswordAndInitVectorStr";  //must be 32 char length
$iv = substr($secret, 0, 16);

$encryptedMessage = openssl_encrypt($textToEncrypt, $encryptionMethod, $secret,0,$iv);
$decryptedMessage = openssl_decrypt($encryptedMessage, $encryptionMethod, $secret,0,$iv);

echo "$encryptedMessage\n";
echo "$decryptedMessage\n";
?>