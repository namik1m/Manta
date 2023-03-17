<?php
// ini_set('display_errors', 1);
// ini_set('error_reporting', E_ALL);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
$name = $_POST['name'];
$email = $_POST['email'];
$num = $_POST['num'];
$subject= $_POST['subject'];
$note =$_POST['note'];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = TRUE;

$mail->Host = "smtp.gmail.com"; 
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; //Enable TLS encryption, `PHPMailer::ENCRYPTION_SMTPS` also accepted
$mail->Port = 587;

$mail->Username = "contact@mantamedia.io";
$mail->Password = "ljfsgjielzkqtgvn";

$mail->setFrom($email, $name);
//$mail->AddReplyTo("contact@mantamedia.io","Manta"); //Is the second argument is optional?
$mail->addAddress("contact@mantamedia.io"); //Second argument is optional. Add a recipient

$mail->Subject = $subject;
$mail->Body = $note;

try{
  $mail->send();
  include "sent.html";
}
catch(Exception $e)
{
  include "fail.html";
}
//echo "email sent";


