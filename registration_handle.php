<?php 
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);

require "mysql.php";

if (isset($_POST["name"]) && isset($_POST["sid"]) && isset($_POST["email"]) && isset($_POST["time_slot"])) {

	$name = $_POST["name"];
	$sid = $_POST["sid"];
	$email = $_POST["email"];
	$slot = $_POST["time_slot"];

	$search_query = "SELECT * FROM Register WHERE sid = '$sid'";
	$insert_query = "INSERT INTO Register VALUES('$name', '$sid', '$email', '$slot')";
	$delete_query = "DELETE FROM Register WHERE sid = '$sid'";
	$update_query = "UPDATE Register SET slot='$slot' WHERE sid='$sid'";
	
	$result0 = mysql_query($search_query);
	if (!$result0) die ("Database access failed: ".mysql_error());
	$rows = mysql_num_rows($result0);

	if ($rows == 0) {
		// the first student to register
		$state = mysql_query($insert_query);
		if ($state) {
			echo "<script type='text/javascript'>if (confirm('Registration completed!')) {window.location='http://cgi.csc.liv.ac.uk/~m4jz/registration.php';}</script>";
		}

	} else {
		// there are some students registered already
		$sql1 = "SELECT * FROM Register WHERE slot = '$slot'";
		$result1 = mysql_query($sql1);
		$rows = mysql_num_rows($result1);
		// check the goup limitation
		if ($rows < 8) {

			echo "<script type='text/javascript'> alert('You are already registered, this will change your previous registration.');</script>";
						
			$result2 = mysql_query($update_query);
			
			if ($result2) {
				echo "<script type='text/javascript'>if (confirm('Registration completed!')) {window.location='http://cgi.csc.liv.ac.uk/~m4jz/registration.php';}</script>";
			}

		} else {
			echo "<script type='text/javascript'>alert('The group of this time slot is full, please register for another one.'); window.location='http://cgi.csc.liv.ac.uk/~m4jz/registration.php';</script>";
		}
	}

}

?>