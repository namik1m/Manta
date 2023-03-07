<?php
$name = $_POST["clientname"];
$email = $_POST["email"];
$num = $_POST["num"];
$subject= $_POST["subject"];
$note = $_POST["note"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

//$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smpt.gmail.com"; //should it be smpt.gmail.com? or smtp.mantamedia.io
$mail->SMTPSecure = 'TLS'; //PHPMailer::ENCRYPTION_STARTTLS; Enable TLS encryption, `PHPMailer::ENCRYPTION_SMTPS` also accepted
$mail->Port = 587;

$mail->Username = "contact@mantamedia.io";
$mail->Password = "rvkuouzoyqgpttmp";

$mail->setFrom($email, $name);
$mail->AddReplyTo("contact@mantamedia.io","Manta"); //Is the second argument is optional?
$mail->addAddress("contact@mantamedia.io", "Manta"); //Second argument is optional. Add a recipient

$mail->Subject = $subject;
$mail->Body = $note;

$mail->send();

header("Location: sent.html");
//echo "email sent";

//Youtube tutorial: https://www.youtube.com/watch?v=fIYyemqKR58
//Web doc tutorial: https://makitweb.com/how-to-send-email-using-smtp-with-phpmailer-in-php/?utm_content=cmp-true
?>
