require.config({
	baseUrl : "/",
	paths : {
		"jquery" : "project/lib/jquery/jquery-1.12.4.min",
		"cookie" : "project/lib/jquery_plugins/jquery.cookie",
		"zoom"  : "project/lib/jquery_plugins/jqzoom",
		"template" : "project/lib/arttemplate/template",
		"load" :  "project/js/include",
		"course" : "project/js/jquery.coursel",
		"register":"project/js/register",
		"login" : "project/js/login",
		"list":"project/js/list",
		"detail" : "project/js/detail",
		"cart" : "project/js/cart",
		"confirm" : "project/js/confirm"
		
	},
	shim: {
		"course" :{
			deps:["jquery"]
		},
		"cart":{deps:["template"]},
		"confirm" :{deps:["zoom"]},
		"zoom" : {deps : ["jquery"]}
	}
});