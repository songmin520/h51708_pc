require(["config"],function(){
	require(["jquery","cookie","template"],function($, cookie, template){
		// 配置cookie
		$.cookie.json = true;
		// 从cookie中读取已选购的购物信息
		var _products = $.cookie("products") || [];
		
		if(_products.length === 0){
			$(".cart_body").html("购物车为空，<a href='index.html'>选购商品</a>");
			return;
		}
		// 在页面中显示购物车中的信息
		// 渲染模板
		var html = template("cart_template",{products:_products});
		// 显示
		$(".cart_body").html(html);
		$(".cart_body").on("click",".del",function(){
			if(confirm("是否确定要删除")){
				var id = $(this).parent(".row").children(".id").text(),
					index = findProd(id,_products);
					// 删除数组中指定的索引处的元素
					_products.splice(index,1);
					// 重新保存到cookie中
					$.cookie("products",_products,{expires:7,path:"/"});
					// 从页面DOM结构中删除行
					$(this).parents(".row").remove();
					// 如果全部删除则显示购物车为空
					if(_products.length === 0){
						$(".cart_body").html("购物车为空，<a href='index.html'>选购商品</a>");
					}
			}
		});
		// 修改合计
		$(".cart_body").on("click",".add,.minus",function(){
			// 找出所在的行
			var _row = $(this).parents(".row");
			// 获取商品id
			var _id = $(_row).children(".id").text();
			// 找出数组中所对应的商品对象
			var _prod = _products[findProd(_id,_products)];
			// 
			
			if($(this).is(".add")){
				_prod.amount++;
			}else{
				if(_prod.amount<=1)
				return;
				_prod.amount--;
			}
			// 将加后的数据保存到cookie中
			$.cookie("products",_products,{expires:7,path:"/"});
			// 显示加之后的数量
			_row.find(".amount").val(_prod.amount);
			// 更新小计
			_row.find(".sub").text(_prod.amount*_prod.price);
			// 更新合计
			calcTotal();
			
		});
		// 数量输入修改
		$(".cart_body .amount").blur(function(){
			// 查找所在的行
			var _row = $(this).parents(".row");
			// 获取商品id
			var _id = _row.children(".id").text();
			// 找出数组中对应商品对象
			var _prod = _products[findProd(_id,_products)];
			// 判断修改数量的格式是否合法
			if(!/^[1-9]\d*$/.test($(this).val())){
				$(this).val(_prod.amount);
				return;
			}
			// 数量合法，保存到商品对象属性中
			_prod.amount = $(this).val();
			// 保存cookie
			$.cookie("products",_products,{expires:7,path:"/"});
			// 修改小计金额
			_row.find(".sub").text(_prod.price*_prod.amount);
			// 更新合计
			calcTotal();
		})
		
		// 定义函数，计算商品合计金额
		function calcTotal(){
		var sum = 0;
		$(".cart_body  .amount:text").each(function(index,element){
		sum+=Number($(this).parents(".row").children(".sub").text());
		console.log($(this).index());
		});
		$(".total").text(sum);
		
		}
		
		
		
		// 查找在商品数组中是否有某id的商品，返回其在数组中的下标，如果不存在，则返回-1
	function findProd(id,products){
		for(var i = 0,len = products.length;i<len;i++){
			if(products[i].id == id)
				return i;
		}
		return -1;
	}
	
	});
});
