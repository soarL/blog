layui.config({
	base : "js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

	//加载页面数据
	var newsData = '';
	$.post("http://www.linzantian.com/admin/article/read", function(data){
		var index = layer.msg(data.msg,{icon: 16,time:false,shade:0.8});
		if(data.res=='0000'){
			layer.close(index);
			newsList(data.data);
		}else{
            layer.close(index);
			layer.msg(data.msg);
		}
	})
	
	//查询
	$(".search_btn").click(function(){
		var data = {val:$(".search_input").val()};
		if($(".search_input").val() != ''){
			var index = layer.msg('查询中，请稍候',{icon: 16,time:false,shade:0.8});
			$.post('http://www.linzantian.com/admin/article/read/some',data,function(r){
				if(r.res =='0000'){
					layer.close(index);
					newsList(r.data);
				}else{
					layer.close(index);
					layer.msg(r.msg);
				}
			})
		}else{
			layer.msg("请输入需要查询的内容");
		}
	})

	//添加文章
	$(".newsAdd_btn").click(function(){
		var index = layui.layer.open({
			title : "添加文章",
			type : 2,
			content : "newsAdd.html",
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

	//推荐文章
	$(".recommend").click(function(){
		layer.msg('功能开发中......');
	})

	//审核文章
	 $(".audit_btn").click(function(){
	 	layer.msg('功能开发中......');
	 })

	//批量删除
	$(".batchDel").click(function(){
		var data = {};
		var id = [];
		var $checkbox = $('.news_list tbody input[type="checkbox"][name="checked"]');
		var $checked = $('.news_list tbody input[type="checkbox"][name="checked"]:checked');
		if($checkbox.is(":checked")){
			layer.confirm('确定删除选中的信息？',{icon:3, title:'提示信息'},function(index){

				var index = layer.msg('删除中，请稍候',{icon: 16,time:false,shade:0.8});

				for(var k =0; k < $checked.length;k++ ){
					id.push($checked[k].dataset.id) 
				}
				data.id = id;
	         	$.post('http://www.linzantian.com/admin/article/rm',data,function(r){
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
			layer.msg("请选择需要删除的文章");
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

	//通过判断文章是否全部选中来确定全选按钮是否选中
	form.on("checkbox(choose)",function(data){
		var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"])');
		var childChecked = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"]):checked')
		if(childChecked.length == child.length){
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = true;
		}else{
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = false;
		}
		form.render('checkbox');
	})

	//是否展示
	form.on('switch(isShow)', function(data){
		var index = layer.msg('修改中，请稍候',{icon: 16,time:false,shade:0.8});

		var data = {
			id:$(this).context.dataset.id,
			isShow:''
		};

		if($(this).prop('checked')){
			data.isShow = '0';
			$.post('http://www.linzantian.com/admin/article/rp',data,function(r){
				if(r.res =='0000'){
					layer.close(index);
					layer.msg("展示状态修改成功！");
				}else{
					layer.close(index);
					layer.msg("展示状态修改失败！"+r.msg);
				}
			})
		}else{
			data.isShow = '1';
			$.post('http://www.linzantian.com/admin/article/rp',data,function(r){
				if(r.res =='0000'){
					layer.close(index);
					layer.msg("展示状态修改成功！");
				}else{
					layer.close(index);
					layer.msg("展示状态修改失败！"+r.msg);
				}
			})
		}
	})
 
	//操作
	$("body").on("click",".news_edit",function(){  //编辑
		layer.alert('您点击了文章编辑按钮，由于是纯静态页面，所以暂时不存在编辑内容，后期会添加，敬请谅解。。。',{icon:6, title:'文章编辑'});
	})

	//删除文章
	$("body").on("click",".news_del",function(){  //删除
		var _this = $(this);
		layer.confirm('确定删除此信息？',{icon:3, title:'提示信息'},function(index){
			var data = {id:[_this.context.dataset.id]};
			$.post('http://www.linzantian.com/admin/article/rm',data,function(r){
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

	function newsList(that){
		//渲染数据
		function renderDate(data,curr){
			var dataHtml = '';
			if(!that){
				currData = newsData.concat().splice(curr*nums-nums, nums);
			}else{
				currData = that.concat().splice(curr*nums-nums, nums);
			}
			if(currData.length != 0){
				for(var i=0;i<currData.length;i++){
					dataHtml += '<tr>'
			    	+'<td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose" data-id="'+data[i].id+'"></td>'
			    	+'<td align="left">'+currData[i].newsName+'</td>'
			    	+'<td>'+currData[i].newsAuthor+'</td>';
			    	if(currData[i].newsLook == "待审核"){
			    		dataHtml += '<td style="color:#f00">'+currData[i].newsLook+'</td>';
			    	}else{
			    		dataHtml += '<td>'+currData[i].newsLook+'</td>';
			    	}
			    	if(currData[i].isShow=='0'){
			    		dataHtml += '<td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" data-id="'+data[i].id+'" checked="checked"></td>';
			    	}else{
			    		dataHtml += '<td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" data-id="'+data[i].id+'"></td>';
			    	}
			    	dataHtml +='<td>'+currData[i].newsTime+'</td>'
			    	+'<td>'
					+  '<a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a>'
					+  '<a class="layui-btn layui-btn-danger layui-btn-mini news_del" data-id="'+data[i].id+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
			        +'</td>'
			    	+'</tr>';
				}
			}else{
				dataHtml = '<tr><td colspan="8">暂无数据</td></tr>';
			}
		    return dataHtml;
		}

		//分页
		var nums = 13; //每页出现的数据量
		if(that){
			newsData = that;
		}
		laypage({
			cont : "page",
			pages : Math.ceil(newsData.length/nums),
			jump : function(obj){
				$(".news_content").html(renderDate(newsData,obj.curr));
				$('.news_list thead input[type="checkbox"]').prop("checked",false);
		    	form.render();
			}
		})
	}

})
