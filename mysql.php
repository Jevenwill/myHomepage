<?php
	$db_server = mysql_connect("mysql", "m4jz", "jeven911");
	if (!$db_server) die ("Unable to connect to MySQL: ".mysql_error());
	mysql_select_db("m4jz", $db_server) or die ("Unable to select database: ".mysql_error());
?>