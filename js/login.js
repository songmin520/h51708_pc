require(["config"],function(){
	require(["jquery","cookie"],function(){
		// 获取焦点提醒输入用户名或密码
		$(".login_box").delegate("input","blur",function(){
			if($(this).val()==null){
				$(this).siblings("#info").text("请填写手机号或者密码");
				console.log("9e9");
			}else{
				console.log("9999");
				$("#btn").on("click",function(){
				$.getJSON("login.php", {
			phone:$("#phone").val(),
			password:$("#password").val()
				}, function(respData){
					console.log(respData)
			if (respData.status == 1) { // 登录成功
				// 配置，使得在保存/读取cookie值时可以自动做格式转换
				$.cookie.json = true;
				// 保存登录成功的用户信息到cookie中
				$.cookie("loginUser", respData.data, {path:"/"});
				// 跳转页面
				location = "index.html";
			} else { // 登录失败
				$("#error").text("用户名或密码错误");
			}
		});
	})
			}
			
		});
	});
});
/*$(function(){
	// 登录按钮点击事件
	$("#btn").click(function(){
		$.getJSON("login.php", {
			username:$("#username").val(),
			password:$("#password").val()
		}, function(respData){
			if (respData.status == 1) { // 登录成功
				// 配置，使得在保存/读取cookie值时可以自动做格式转换
				$.cookie.json = true;
				// 保存登录成功的用户信息到cookie中
				$.cookie("loginUser", respData.data, {path:"/"});
				// 跳转页面
				location = "list.html";
			} else { // 登录失败
				$("#error").text("用户名或密码错误");
			}
		});
	})
});*/