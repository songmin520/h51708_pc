require(["config"], function(){
	require(["jquery", "load","cookie"], function(){
		$.cookie.json = true;
		$(".header_box").css({
			height:173,
		});
	// 异步加载商品
	/*require(["jquery","cookie"],function(){*/
		$.getJSON("mock/products.json", function(data){
		$.each(data, function(index, product){
			$(".template").clone(true)
						  .show()
						  .removeClass("template").addClass("floor-1")
						  /*.children(".f_title").children(".man").html(product.f_title.man).end()
						  .children(".f_left").children(".img").html(product.f_left).end()
						  .children(".f_1_course").html(product.f_1_course).end()
						  .children(".nav1").html(product.nav1).end()*/
						  .children(".id").val(product.id).end()
						  .appendTo(".floor");
		});
	});
	// 为加入购物车绑定点击事件
	$(".floor").delegate("li","click",function(){
		
		var _nav1 = $(this).children("a");
		
		// 将当前的商品信息保存到对象中
		var prod = {
			id:_nav1.children(".id").val(),
			title:_nav1.children(".title").text(),
			price:_nav1.children(".price").text(),
			img : _nav1.children(".img1").attr("src"),
			amount:1
		};
		// 获取cookie 中以保存的购物车数组结构，如果没有新建数组
		var _products = $.cookie("products") || [];
		console.log(_products);
		// 判断数组中是否有当前选购的商品
		var index = findProd(prod.id,_products);
		// 
		if(index !== -1)
			_products[index].amount++;
		else 
			_products.push(prod);
		// 将选购的商品操作之后的数组保存到cookie中
		$.cookie("products",_products,{expires:7,path:"/"});
		console.log("chenggong");
		location.href="list.html";
	})
	
	// 查找在商品数组中是否有某id的商品，返回其在数组中的下标，如果不存在，则返回-1
	function findProd(id,products){
		for(var i = 0,len = products.length;i<len;i++){
			if(products[i].id === id)
			return i;
		}
		return -1;
	}
	
	
	// 楼层导航
	$(window).on("scroll",function(){
		// 获取页面中滚动的高度
		var _scrollTop = $(this).scrollTop();
		// 获取1L楼层前布局结构的高度
		var _top = $(".floor-1").offset().top;
		// 获取窗口的高度
		var winHeight = $(window).height();
		// 判断，显示/隐藏菜单
		if(_scrollTop>_top - winHeight/2){
			$(".meun").show();
		}else{
			$(".meun").hide();
		}
		// 贴换菜单中楼层汉字的显示隐藏
		$(".floor-1").each(function(index,element){
			if(_scrollTop>$(element).offset().top-winHeight/2){
				$(".meun li").eq(index)
							.addClass("current")
							.children("span").show().end()
							.siblings()
							.removeClass("current")
							.children("span").hide();
			}
		})
	});
	// 处理菜单中li的点击事件
	$(".meun").on("click","li:not(:last)",function(){
		// 获取当前点击的li索引
		var _index =$(this).index();
		// 查找对应的楼层。获取在文档中距离顶部的距离
		var _top = $(".floor-1").eq(_index).offset().top;
		// 向指定的楼层滚动
		$("html,body").animate({scrollTop:_top},2000);
	})
	// 鼠标移入或者移出li显示或者隐藏汉字
	$(".meun li:not(:last)").hover(function(){
		$(this).children("span").show();
	},function(){
		if(!$(this).is(".current"))
		$(this).children("span").hide();
	});
	$(".meun li:last").on("click",function(){
		$("html,body").animate({scrollTop:0},2000);
	});
	
	
	//轮播图
	require(["jquery","course"],function(){
		$(".banner").carousel({
			width:1349,
			height:440,
			imgs:[
				{src:"images/1018.jpg"},
				{src:"images/092101.jpg"},
				{src:"images/092102.jpg"},
				{src:"images/092103.jpg"},
				{src:"images/092104.jpg"},
				
			],
		isPrevNext:true,
		isAuto:true,
		shiftTime:5000,
		type:"fade",
		});
	});
	require(["jquery","course"],function(){
		$(".f_1_course").carousel({
			width:952,
			height:440,
			imgs:[
			{src:"images/952-440-1.jpg"},
			{src:"images/952-440-2.jpg"},
			{src:"images/952-440-3.jpg"},
			{src:"images/952-440-4.jpg"},
			{src:"images/952-440-5.jpg"},
			],
			isAuto:true,
			shifTime:5000,
			type:"fade",
		});
	});
});
});