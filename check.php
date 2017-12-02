<?php
	$phone = $_REQUEST["phone"];
	// 建立数据库
	mysql_connect("localhost:3306","root","");
	// 设置在数据库中读写库时编码为 utf8
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	// 连接数据库表
	mysql_select_db("h51707");
	// 创建sql语句
	$sql = "SELECT * FROM usertb  WHERE phone = '$phone'";
	// 执行sql语句
	$result = mysql_query($sql);
	// 判断是否插入成功
	if($row = mysql_fetch_array($result,MYSQL_ASSOC)){
		echo '{"status":0,"message":"exist"}';
	}else{
		echo '{"status":1,"message":"no exist"}';
	}
	// 关闭数据库
	mysql_close();
	?>