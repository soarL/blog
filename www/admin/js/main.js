layui.config({
	base : "js/"
}).use(['form','element','layer','jquery'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		element = layui.element(),
		$ = layui.jquery;

	$(".panel a").on("click",function(){
		window.parent.addTab($(this));
	})

	//动态获取文章总数和最新文章
	$.post("http://www.linzantian.com/admin/article/read",
		function(r){
			$(".allNews span").text(r.data.length);  //文章总数
			//加载最新文章
			var hotNewsHtml = '';
			for(var i=0; i <5;i++){
				hotNewsHtml += '<tr>'
		    	+'<td align="left">'+r.data[i].newsName+'</td>'
		    	+'<td>'+r.data[i].newsTime.split("T")[0]+'</td>'
		    	+'</tr>';
			}
			$(".hot_news").html(hotNewsHtml);
		}
	)

	//图片总数
	$.get("../json/images.json",
		function(data){
			$(".imgAll span").text(data.length);
		}
	)

	//友情链接总数
	$.get('http://www.linzantian.com/admin/links/read',function(r){
		if(r.res=='0000'){
			$(".userAll span").text(r.data.length);
		}else{
			layer.msg(r.msg);
		}
	})


	//新消息
	$.get("http://www.linzantian.com/admin/message/read",function(r){
		if(r.res=='0000'){
			$(".newMessage span").text(r.data.length);
		}else{
			layer.msg(r.msg);
		}
	})
			

	//数字格式化
	$(".panel span").each(function(){
		$(this).html($(this).text()>9999 ? ($(this).text()/10000).toFixed(2) + "<em>万</em>" : $(this).text());	
	})

	//加载默认数据
	$.get('http://www.linzantian.com/admin/system/getSystemInfo',function(r){
		if(r.res=='0000'){
			fillData(r.data[0]);
		}else{
			layer.msg(r.msg);
		}
	})

 	//填充数据方法
 	function fillData(data){
 		$(".version").text(data.version);		//当前版本
		$(".author").text(data.author);        //开发作者
		$(".homePage").text(data.homePage);    //网站首页
		$(".server").text(data.server);        //服务器环境
		$('.userRights').text(data.userRights) //当前用户权限
 	}

})
