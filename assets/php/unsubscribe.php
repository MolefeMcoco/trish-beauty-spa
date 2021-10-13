<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];

   $dbc = mysqli_connect('localhost:3306','trishbea_molefe','Faizo@7020','trishbea_SUBSCRIBERS')
         or die('error connection to my sql');


   $query = "DELETE FROM USERS WHERE email = '$email'";
         

   $result = mysqli_query($dbc,$query)
            or die('Error querying database.');
         

   $result = mysqli_query($dbc,$query)
            or die('Error querying database.');
            

   mysqli_close($dbc);

   header("location:unsubscribe-successful.php");

?>