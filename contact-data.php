<?php
// var_dump($_POST);exit();
require $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
// include '../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['fname'])){
	
	$fname = $_POST["fname"];
	$email = $_POST["email"];
	$msg = $_POST["msg"];
	$subject = $_POST["subject"];
	$pageurl = "https://nityanand.org/contact.html";


	date_default_timezone_set("America/New_York");
	$localtime = date("Y-m-d h:i:s");



	   	$message= "<table border='0' cellpadding='4' cellspacing='4' width='100%'>

	   			  <tr><td style='font-size:1.3em;' colspan='2'><strong>Contact Form Details</strong></td></tr>
	   			   	
	   			   	<tr>
	                   <td align='left' width='35%'><strong>Name :</strong></td>
	                   <td align='left' width='60%'>
	                   ".  $fname ."</td>
	                </tr>

	                 <tr>
	                   <td align='left' width='35%'><strong>Email :</strong></td>
	                   <td align='left' width='60%'>
	                   ".  $email ."</td>
	                 </tr>
	                 <tr>
	                   <td align='left' width='35%'><strong>Subject :</strong></td>
	                   <td align='left' width='60%'>
	                   ".  $subject ."</td>
	                 </tr>
	                 <tr>
	                   <td align='left' width='35%'><strong>Message:</strong></td>
	                   <td align='left' width='60%'>
	                   ".  $msg ."</td>
	                 </tr>
	                 
	                 <tr>
	                   <td align='left' width='35%'><strong>Page Url:</strong></td>
	                   <td align='left' width='60%'>
	                   ".  $pageurl ."</td>
	                 </tr>

	                 <tr>
	                   <td align='left' width='35%'><strong>Time :</strong></td>
	                   <td align='left' width='60%'>
	                   ". $localtime ."</td>
	                 </tr>

	               </table>";

					$from_mail = "contact@nityanand.org";
					$doc_mail = "Nityanand Baba Website : Contact Request";
					$emailer = new PHPMailer(true);
					try{

						$emailer->From = $from_mail;
						$emailer->FromName = $doc_mail;
						// $emailer->AddAddress('kevindavis@texasspecialtyclinic.com');


						 //$emailer->AddAddress('operations@gmicro.us');
						 // $emailer->AddAddress('kalpesh@ibridgedigital.com');
						 $emailer->AddAddress('Bhagwan@nityanand.org');




						$emailer->isSMTP();                                            // Send using SMTP
						$emailer->SMTPAuth   = true;                                   // Enable SMTP authentication
						//$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption;
						$emailer->SMTPSecure = 'tls';         							// Enable TLS encryption;
						$emailer->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
						$emailer->Port       = 587;
						$emailer->isHTML(true);

						$emailer->Username   = 'operations@gmicro.us';
						// $emailer->Password   = 'ebpj nmqx fsbq mreu';                               // SMTP password`PHPMailer::ENCRYPTION_SMTPS` encouraged
						$emailer->Password   = 'uugj qwxh grnz pxax';                               // SMTP password`PHPMailer::ENCRYPTION_SMTPS` encouraged
						$emailer->setFrom('contact@nityanand.org');


						$emailer->Subject   = "Nityanand Baba Website : Contact Request";
						$emailer->Body      = $message;
						$emailer->send();
						$_SESSION['success'] = "success";

						$data = array(
							'success' => true
						);
						echo "success";
					}
					catch (Exception $e) {
						$data = array(
							'fail' => false
						);
					//echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
					//echo $e;
					}
					
}
else{
	echo "Please fill the form";
}


?>