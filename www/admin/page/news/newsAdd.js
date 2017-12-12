layui.config({
	base : "js/"
}).use(['form','layer','jquery','layedit','laydate'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		layedit = layui.layedit,
		laydate = layui.laydate,
		$ = layui.jquery;

	//创建一个编辑器
 	var editIndex = layedit.build('news_content');

 	form.on("submit(addNews)",function(data){
 		newsName =$(".newsName").val();  //文章名称
 		newsLook=$(".newsLook option").eq($(".newsLook").val()).text(); //开放浏览
 		newsTime=$(".newsTime").val(); //发布时间
 		newsAuthor=$(".newsAuthor").val(); //文章作者
 		newSketch = $('#newSketch').val();//文章概要
 		newsContent = layedit.getContent(editIndex); //文章内容

 		var datas = {
 			newsName,
 			newsLook,
 			newsTime,
 			newsAuthor,
 			newSketch,
 			newsContent
 		}
 		$.post('http://www.linzantian.com/admin/article/add',datas,function(r){
 			var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});
 			//弹出loading
 			if(r.res=='0000'){
 				 top.layer.close(index);
 				 top.layer.msg(r.msg);
 				 layer.closeAll("iframe");
 				 //刷新父页面
 				 parent.location.reload();
 			}else {
 				top.layer.close(index);
 				top.layer.msg(r.msg);
 			}
 		})
 		return false;
 	})
	
})
