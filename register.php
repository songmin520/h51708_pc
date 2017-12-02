<?php
	$phone = $_POST["phone"];
	$password = $_POST["password"];
	$pwd = $_POST["pwd"];
	//  建立数据库
	$conn = mysql_connect("localhost:3306","root","");
	if(!$conn){
		die('Could not connect: ' . mysql_error());
	}
	// 连接数据库表
	mysql_select_db("h51707");
	// 创建sql语句
	$sql = "INSERT INTO usertb (phone,password,pwd) VALUES ('$phone','$password','$pwd')";
	// 执行sql语句
	$result = mysql_query($sql);
	// 判断是否执行成功
	if($result){
		echo '{"status":1,"message":"success"}';
	}else{
		echo '{"status":0,"message":"failed"}';
	}
	// 关闭数据库
	mysql_close();
	?>