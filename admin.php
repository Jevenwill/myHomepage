<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
		    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns= "http://www.w3.org/1999/xhtml">
	<head>
		<title>Admin-Registration</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" type="text/css" href="register.css"/>
	</head>

	<?php
		ini_set('display_errors', 'On');
		error_reporting(E_ALL | E_STRICT);
		require_once "mysql.php";		
	?>

	<body>
		<h1>Registration for Lecturer Review</h1>
		<form method="post" action="admin.php">
			<label for="slot">Select a section:</label>
			<select name="slot" id="slot" size="1">
				<option value="0">Monday 17:00-19:00</option>
				<option value="1">Tuesday 14:00-16:00</option>
				<option value="2">Thursday 9:00-11:00</option>
				<option value="3">Friday 13:00-15:00</option>
			</select>
			<input type="submit" class="button" name="submit" value="Submit"/>
		</form>

		<h2>Current registration in this section:</h2>

		<table class="table">
			<thead>
				<tr>
					<th>Student Name</th>
					<th>Student ID</th>
					<th>Email Address</th>
				</tr>
			</thead>
			<tbody>
				<?php
					if (isset($_POST['submit'])) {
						$slot = $_POST["slot"];
						$sql = "SELECT * FROM Register WHERE slot='$slot'";
						$result = mysql_query($sql);
						while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {	
							echo "<tr><td>".$row['name']."</td> <td>".$row['sid']."</td> <td>".$row['email']."</td> </tr>\n";
						}
					}
				?>
			</tbody>
		</table>
		<p class="link"><a href="registration.php">Back to the registration page</a></p>
	</body>
</html>	