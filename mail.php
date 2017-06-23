<?php

$frm_name  = "Дайкин";
$recepient = "office@daikin-klimat.od.ua";
$sitename  = "Daikin Landing";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);

$message = "E-mail: $email \nИмя: $name \nНомер телефона: $phone";

mail($recepient, $subject, $message, "From: $frm_name <$recepient>" . "\r\n" . "Reply-To: $recepient" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
?>