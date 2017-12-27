layui.config({
	base : "js/"
}).use(['form','layer','jquery','layedit','laydate'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		layedit = layui.layedit,
		laydate = layui.laydate,
		$ = layui.jquery;

	//创建
 	form.on("submit(addLinks)",function(data){
 		//弹出loading
 		var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});
 		var data = data.field;
 		data.id = $('#dataid').val();

 		$.post('http://www.linzantian.com/admin/links/rp',data,function(r){
 			if(r.res=='0000'){
 				top.layer.close(index);
 				top.layer.msg("修改成功！！");
 				layer.closeAll("iframe");
 				//刷新父页面
 				parent.location.reload();
 			}else{
 				top.layer.close(index);
 				top.layer.msg(r.msg);
 			}
 		})
 		return false;
 	})
	
})
