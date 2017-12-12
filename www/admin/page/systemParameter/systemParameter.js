layui.config({
	base : "js/"
}).use(['form','layer','jquery'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

 	var systemParameter;
 	form.on("submit(systemParameter)",function(data){
 		var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});

 		$.post('http://www.linzantian.com/admin/system/rp',data.field,function(r){
 			if(r.res =='0000'){
 				layer.close(index);
 				layer.msg("系统基本参数修改成功！");
 			}else{
 				layer.close(index);
 				layer.msg(r.msg);
 			}
 		})
 		return false;
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
 		$(".version").val(data.version);		//当前版本
		$(".author").val(data.author);        //开发作者
		$(".homePage").val(data.homePage);    //网站首页
		$(".server").val(data.server);        //服务器环境
		$(".description").val(data.description);//站点描述
		$(".powerby").val(data.powerby);      //版权信息
		$(".record").val(data.record);      //网站备案号
		$(".keywords").val(data.keywords);    //默认关键字
 	}
 	
})
