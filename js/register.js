require(["config"],function(){
	require(["jquery","load"],function(){
		// 注册页面
		var phoneExist = true;
		$(".reg_box").delegate("input","blur",function(){
			// 判断用户名输入的是否合法
			if(!/^[0-9]{3}$/.test($(this).val())){
				$(this).siblings("#info").text("该手机的格式错误，请重新填写");
				$(this).siblings("#info").css("color","red")
				$(this).focus();
				/*var url = "http://route.showapi.com/932-1?showapi_appid=48347&showapi_sign=df5020c1e4bb42d08f69a9f887e6fbc2&checkcode= "+$("#input_code").value+"$sid="+$("#gen_code").sid;
				$.getJSON(url,function(data){
					if(data.showapi_res_body.valid){
						$(this).siblings("#info").text("该手机的格式错误，请重新填写");
					}else{
						$(this).siblings("#info").text("该手机的格式错误，请重新填写");
					}
				});*/
				
			}else{
				$("#info").text("输入正确");
				
				$.ajax({
					type:"get",
					url:"check.php",
					data:{phone:$(this).val()},
					dataType:"json",
					success:function(data){
					if(data.status == 0){
					$("#info").text("该手机已被注册");
					phoneExist = true;
					
				}else{
					$("#info").text("该手机可用");
					$("#info").css("color","green")
					phoneExist = false;
					
				}
					
					}
				});
				
			}
			
			
		});
		// 点击注册，提交注册信息
	$("#btn").click(function(){
		if(!phoneExist){
		$.post("register.php",
		{phone:$("#phone").val(),
		password:$("#password").val(),
		pwd:$("#pwd").val()},
		function(data){
			if(data.status == 1){
				location = "login.html";
			}else{
				$("#error").text("注册失败");
			}
		},"json");
		}
	});
	
	
	// 验证码
	
		$("#getCode").on("click",function(){
			$("#code_bar").show();
			$("#getCode").hide();
			genCode();
			});
			/*$("#code_next").on("click",function(){*/
			function genCode(){
			var url = "http://route.showapi.com/932-2?showapi_appid=48347&showapi_sign=df5020c1e4bb42d08f69a9f887e6fbc2"
			$.getJSON(url,function(data){
				console.log(data)
				var returnData = data.showapi_res_body;
				$("#gen_code").attr("src",returnData.image);
				$("#gen_code").sid = returnData.sid;
			
				
			});
		}

	// 随机产生验证码
	$("#code_next").on("click","#gen_code",function(){
		genCode();
	});

	
	
	});
	
	
	
})
