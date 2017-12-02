require(["config"],function() {
	require(["jquery", "cookie"], function($){
		$.ajax("html/include/header.html").done(function(data){
			$(".header_box").html(data)
			var _user = $.cookie("loginUser");
//			console.log(typeof _user)
			if (_user) {
				$("#login_reg").html("<a href='#'>欢迎您来到麦包包："+ JSON.parse(_user).phone +"</a>");
			}
		});
	
		$(".footer_box").load("html/include/footer.html");
	});
	
	
	});
	