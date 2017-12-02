require(["config"],function(){
	require(["jquery","zoom","load",],function(){
            //1. 获取到a标签，注册点击事件
           /* $("#pic_gega").delegate("li","click",function () {
            	console.log($(this).index());
                //2. 改变大图片的src属性
                var href = $(this).children("a").attr("href");
                console.log(href);
                $("#image").attr("src", href);
                
                //3. 改变的描述的内容
               /* var title = $(this).attr("title");
                $("#des").text(title);*/
                //4. 禁止a跳转
              /*  return false;*/
           /* });*/
		// 放大镜的效果
		
       $("#etalage").zoom({
       	zoom_area_width:300,
       /*	autoplay_interval:3000,*/
       	small_thumbs:6,
       	autoplay:true,
       
       });
	
	// 为购物车绑定点击事件，事件委派
	
	
	
	
	
	
	
	
	
	});	
});

