layui.config({
	base : "js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

	//加载页面数据
	var linksData = '';

	$.get('http://www.linzantian.com/admin/links/read',function(r){
		if(r.res=='0000'){
			linksData = r.data;
			if(window.sessionStorage.getItem("addLinks")){
				var addLinks = window.sessionStorage.getItem("addLinks");
				linksData = JSON.parse(addLinks).concat(linksData);
			}
			//执行加载数据的方法
			linksList();
		}else{
			layer.msg(r.msg);
		}
	})

	//查询
	$(".search_btn").click(function(){
		var data = {val:$(".search_input").val()};
		if($(".search_input").val() != ''){
			var index = layer.msg('查询中，请稍候',{icon: 16,time:false,shade:0.8});
			$.post('http://www.linzantian.com/admin/links/read/some',data,function(r){
				if(r.res =='0000'){
					layer.close(index);
					linksList(r.data);
				}else{
					layer.close(index);
					layer.msg(r.msg);
				}
			})
		}else{
			layer.msg("请输入需要查询的内容");
		}
	})

	//添加友情链接
	$(".linksAdd_btn").click(function(){
		var index = layui.layer.open({
			title : "添加友情链接",
			type : 2,
			content : "linksAdd.html",
			success : function(layero, index){
				layui.layer.tips('点击此处返回文章列表', '.layui-layer-setwin .layui-layer-close', {
					tips: 3
				});
			}
		})
		//改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）
		$(window).resize(function(){
			layui.layer.full(index);
		})
		layui.layer.full(index);
	})



	//批量删除
	$(".batchDel").click(function(){
		var data = {};
		var id = [];
		var $checkbox = $('.links_list tbody input[type="checkbox"][name="checked"]');
		var $checked = $('.links_list tbody input[type="checkbox"][name="checked"]:checked');
		if($checkbox.is(":checked")){
			layer.confirm('确定删除选中的信息？',{icon:3, title:'提示信息'},function(index){

				var index = layer.msg('删除中，请稍候',{icon: 16,time:false,shade:0.8});
				for(var k =0; k < $checked.length;k++ ){
					id.push($checked[k].dataset.id) 
				}
				data.id = id;
	         	$.post('http://www.linzantian.com/admin/links/rm',data,function(r){
	         		if(r.res =='0000'){
	         			layer.close(index);
	         			layer.msg(r.msg);
	         			location.reload();
	         		}else{
	         			layer.close(index);
	         			layer.msg(r.msg);
	         		}
	         	})
	        })
		}else{
			layer.msg("请选择需要删除的链接");
		}
	})


	//全选
	form.on('checkbox(allChoose)', function(data){
		var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"])');
		child.each(function(index, item){
			item.checked = data.elem.checked;
		});
		form.render('checkbox');
	});


	//通过判断是否全部选中来确定全选按钮是否选中
	form.on("checkbox(choose)",function(data){
		var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"])');
		var childChecked = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"]):checked')
		data.elem.checked;
		if(childChecked.length == child.length){
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = true;
		}else{
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = false;
		}
		form.render('checkbox');
	})
 
	//操作
	$("body").on("click",".links_edit",function(){  //编辑
		//编辑友情链接
			var id = $(this).context.dataset.id;
			var index = layui.layer.open({
			  type: 2,
			  content: 'linksRp.html',
			  success: function(layero, index){
			    var body = layui.layer.getChildFrame('body', index);
			    var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
			   
			    $.get('http://www.linzantian.com/admin/links/read?id='+id,function(r){
			    	 body.find('.linksName').val(r.data[0].linksName);
			    	 body.find('.linksUrl').val(r.data[0].linksUrl);
			    	 body.find('.linksTime').val(r.data[0].linksTime);
			    	 body.find('.masterEmail').val(r.data[0].masterEmail);
			    	 body.find('.linksDesc').text(r.data[0].linksDesc);
			    	 body.find('#dataid').val(r.data[0].id);
			    })
			  }
			})
			//改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）
			$(window).resize(function(){
				layui.layer.full(index);
			})
			layui.layer.full(index);
	})


	//删除友链
	$("body").on("click",".links_del",function(){  //删除
		var _this = $(this);
		layer.confirm('确定删除此信息？',{icon:3, title:'提示信息'},function(index){
			var data = {id:[_this.context.dataset.id]};
			$.post('http://www.linzantian.com/admin/links/rm',data,function(r){
				if(r.res =='0000'){
					layer.close(index);
					layer.msg(r.msg);
					location.reload();
				}else{
					layer.close(index);
					layer.msg(r.msg);
				}
			})
		});
	})


	function linksList(that){
		//渲染数据
		function renderDate(data){
			var dataHtml = '';
			// if(!that){
			// 	currData = linksData.concat().splice(curr*nums-nums, nums);
			// }else{
			// 	currData = that.concat().splice(curr*nums-nums, nums);
			// }
			var currData = data;
			if(currData.length != 0){
				for(var i=0;i<currData.length;i++){
					dataHtml += '<tr>'
			    	+'<td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose" data-id="'+data[i].id+'"></td>'
			    	+'<td align="left">'+currData[i].linksName+'</td>'
			    	+'<td><a style="color:#1E9FFF;" target="_blank" href="'+currData[i].linksUrl+'">'+currData[i].linksUrl+'</a></td>'
			    	+'<td>'+currData[i].masterEmail+'</td>'
			    	+'<td>'+currData[i].linksTime+'</td>'
			    	+'<td>'
					+  '<a class="layui-btn layui-btn-mini links_edit" data-id="'+data[i].id+'"><i class="iconfont icon-edit"></i> 编辑</a>'
					+  '<a class="layui-btn layui-btn-danger layui-btn-mini links_del" data-id="'+data[i].id+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
			        +'</td>'
			    	+'</tr>';
				}
			}else{
				dataHtml = '<tr><td colspan="7">暂无数据</td></tr>';
			}
		    return dataHtml;
		}

		//不能使用分页
		// var nums = 13; //每页出现的数据量
		if(that){
			linksData = that;
		}
		laypage({
			cont : "page",
			// pages : Math.ceil(linksData.length/nums),
			jump : function(obj){
				$(".links_content").html(renderDate(linksData,obj.curr));
				$('.links_list thead input[type="checkbox"]').prop("checked",false);
		    	form.render();
			}
		})
	}
})
