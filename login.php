<?php
	$phone = $_REQUEST["phone"];
	$password = $_REQUEST["password"];
	// 连接数据库
	mysql_connect("localhost:3306","root","");
	// 连接数据库表
	mysql_select_db("h51707");
	// 创建SQL语句
	$sql = "SELECT * FROM usertb WHERE phone = '$phone'AND password = '$password'";
	// 执行sql语句
	$result = mysql_query($sql);
	// 判断是否执行成功
	if ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
		echo '{"status":1, "message":"success", "data":'. json_encode($row) .'}';
	} else {
		echo '{"status":0, "message":"failed", "data":{}}';
	}
	// 关闭数据库
	mysql_close();
	?>