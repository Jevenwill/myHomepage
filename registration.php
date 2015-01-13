<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">


<html xmlns= "http://www.w3.org/1999/xhtml">
	<head>
		<title>Registration</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<script type="text/javascript" src="validate_functions.js"></script>
		<link rel="stylesheet" type="text/css" href="register.css"/>
	</head>
	
	<body>
		<noscript>
   		<h2>Note:  This site will not function properly if JavaScript is disabled.</h2>
   		</noscript>
		
		<?php
			require "mysql.php";		
		?>

		<div>
			<h1>COMP207-Register here for a practical slot</h1> 
			<h3>Register only if you know what you are doing.</h3>
			<ul>
				<li>Please enter <b>all</b> information and select your desired day. Please enter a correct 'SID' number!</li>
				<li>Please check the number of available seats before submitting.</li>
				<li>Register only one slot.</li>
				<li>Each slot can be registered with up to 8 students.</li>
				<li>Any problem? Write a message to <a href="mailto:sgjzha21@liv.ac.uk">sgjzha21@liv.ac.uk</a></li>
			</ul>
		</div>
		<div class="form">
			<form method="post" action="registration_handle.php" onSubmit="return validateForm(this);">

			    <pre>
	<label for="name" class="label">Name:</label>          <input type="text" name="name" class="field" id="name" value=""/>
	 
	<label for="sid" class="label">SID:</label>           <input type="text" name="sid" class="field" id="sid" value=""/>
	
	<label for="email" class="label">Email Address:</label> <input type="text" name="email" class="field" id="email" value=""/>
	
	<label for="time_slot" class="label">Select the practical slot:</label> 	

		       <select size=4 name="time_slot" id="time_slot" required>
		        <?php
					$slots = array("Monday 17:00-19:00", "Tuesday 14:00-16:00", "Thursday 9:00-11:00", "Friday 13:00-15:00");
	        		$count0 = mysql_num_rows(mysql_query("SELECT * FROM Register WHERE slot = '0'"));	
	        		echo("<option value='0'>$slots[0], ".(8-$count0)." seats remaining</option>\n");
	        		$count1 = mysql_num_rows(mysql_query("SELECT * FROM Register WHERE slot = '1'"));	
	        		echo("<option value='1'>$slots[1], ".(8-$count1)." seats remaining</option>\n");	        			        		
	        		$count2 = mysql_num_rows(mysql_query("SELECT * FROM Register WHERE slot = '2'"));	
	        		echo("<option value='2'>$slots[2], ".(8-$count2)." seats remaining</option>\n");	        		
	        		$count3 = mysql_num_rows(mysql_query("SELECT * FROM Register WHERE slot = '3'"));	
	        		echo("<option value='3'>$slots[3], ".(8-$count3)." seats remaining</option>\n");		        	
            	?>	       
		       </select>

	 <input type="submit" class="button" name="submit" value="Register"/> <input type="reset" class="button" id="button" value="Clear"/>
				</pre>

			</form>
		</div>
		<p class="link"><a href="admin.php">Lecturer Review Click Here</a><p>
		<div class="footer"></div>
	</body>
</html>