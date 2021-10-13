<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$dbc = mysqli_connect('localhost:3306','trishbea_molefe','Faizo@7020','trishbea_SUBSCRIBERS')
			or die('error connection to my sql');


	$query = "INSERT INTO USERS(name,phone,email)VALUES('$name','$phone','$email')";
			

	$result = mysqli_query($dbc,$query)
				or die('Error querying database.');
			
	mysqli_close($dbc);

		require 'phpmailer/PHPMailerAutoload.php';
		$mail = new PHPMailer;
		$mail->IsSMTP(); // enable SMTP
		 $mail->SMTPDebug = 0;  // debugging: 1 = errors and messages, 2 = messages only
		 $mail->SMTPAuth = true;  // authentication enabled
		 $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
		 $mail->Host = 'mail.trishbeautyspa.co.za';
		 $mail->Port = 465; 
		 $mail->Username = 'trishbea';  
		 $mail->Password = 'Faizo@7030';
		$mail->setFrom('no-reply@trishbeautyspa.co.za', 'Trish Beauty Spa');
		$mail->addAddress($email, $name);
		$mail->Subject  = 'Welcome to Trish Beauty Spa';
		$mail->msgHTML(file_get_contents('welcome.html'), dirname(__FILE__));
		$mail->AltBody = "Welcome to Trish Beauty Spa \r\n We are a beauty spa specialising in professional makeup, hair, nail technology, eyelash extensions, massage, wax and various beauty services working with leading brands in the beauty industry.\r\n You can book us for weddings, matric farewells and more. \r\nFrom now on,you'll get regular updates on our promotions,events and specials.";
		$mail->isHTML(true);
		if(!$mail->send()) {
		  echo 'Message was not sent.';
		  echo 'Mailer error: ' . $mail->ErrorInfo;
		} else {
		  header("location:thankyou.php");
		}

	
?>