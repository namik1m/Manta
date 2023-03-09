<?php
ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$name = "name";
$email = "contact@mantamedia.io";
$num = "+310618340893";
$subject= "hello";
$note ="this is a test by nami";

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = TRUE;

$mail->Host = "smpt.gmail.com"; //should it be smpt.gmail.com? or smtp.mantamedia.io
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; //Enable TLS encryption, `PHPMailer::ENCRYPTION_SMTPS` also accepted
$mail->Port = 587;

$mail->Username = "contact@mantamedia.io";
$mail->Password = "ljfsgjielzkqtgvn";

$mail->setFrom($email, $name);
//$mail->AddReplyTo("contact@mantamedia.io","Manta"); //Is the second argument is optional?
$mail->addAddress("contact@mantamedia.io"); //Second argument is optional. Add a recipient

$mail->Subject = $subject;
$mail->Body = $note;

$mail->send();

header("Location: sent.html");
//echo "email sent";

//Youtube tutorial: https://www.youtube.com/watch?v=fIYyemqKR58
//Web doc tutorial: https://makitweb.com/how-to-send-email-using-smtp-with-phpmailer-in-php/?utm_content=cmp-true
?>
