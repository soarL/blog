var $,tab,skyconsWeather;
layui.config({
	base : "js/"
}).use(['bodyTab','form','element','layer','jquery'],function(){
	var form = layui.form(),
		layer = layui.layer,
		element = layui.element();
		$ = layui.jquery;
		tab = layui.bodyTab();

	//加载首页数据
	indexData();

	//锁屏
	function lockPage(){
		layer.open({
			title : false,
			type : 1,
			content : $("#lock-box"),
			closeBtn : 0,
			shade : 0.9
		})
	}

	$(".lockcms").on("click",function(){
		window.sessionStorage.setItem("lockcms",true);
		lockPage();
	})

	// 判断是否显示锁屏
	if(window.sessionStorage.getItem("lockcms") == "true"){
		lockPage();
	}

	// 解锁
	$("#unlock").on("click",function(){
		if($(this).siblings(".admin-header-lock-input").val() == ''){
			layer.msg("请输入解锁密码！");
		}else{
			lockPwd()
		}
	});

	//退出登入逻辑
	$('#loginOut').click(function(){
		var index = layer.msg('安全退出中...请稍后',{icon: 16,time:false,shade:0.8}); 
		$.get('http://www.linzantian.com/admin/loginOut',function(r){
			if(r.res=='0000'){
				setTimeout(function(){
					window.location ='http://www.linzantian.com/admin/login.html';
				},500);
			}else{
				layer.close(index);
				layer.msg(r.msg);
			}
		})
	})		


	$(document).on('keydown', function() {
		if(event.keyCode == 13) {
			$("#unlock").click();
		}
	});

	//手机设备的简单适配
	var treeMobile = $('.site-tree-mobile'),
		shadeMobile = $('.site-mobile-shade')

	treeMobile.on('click', function(){
		$('body').addClass('site-mobile');
	});

	shadeMobile.on('click', function(){
		$('body').removeClass('site-mobile');
	});

	// 添加新窗口
	$(".layui-nav .layui-nav-item a").on("click",function(){
		addTab($(this));
		$(this).parent("li").siblings().removeClass("layui-nav-itemed");
	})

	//公告层
	function showNotice(){
		layer.open({
	        type: 1,
	        title: "系统公告", //不显示标题栏
	        closeBtn: false,
	        area: '310px',
	        shade: 0.8,
	        id: 'LAY_layuipro', //设定一个id，防止重复弹出
	        btn: ['火速围观'],
	        moveType: 1, //拖拽模式，0或者1
	        content: '<div style="padding:15px 20px; text-align:justify; line-height: 22px; text-indent:2em;border-bottom:1px solid #e2e2e2;"><p>测试版本！！</p></div>',
	        success: function(layero){
				var btn = layero.find('.layui-layer-btn');
				btn.css('text-align', 'center');
				btn.on("click",function(){
					window.sessionStorage.setItem("showNotice","true");
				})
				if($(window).width() > 432){  //如果页面宽度不足以显示顶部“系统公告”按钮，则不提示
					btn.on("click",function(){
						layer.tips('系统公告躲在了这里', '#showNotice', {
							tips: 3
						});
					})
				}
	        }
	    });
	}
	//判断是否处于锁屏状态(如果关闭以后则未关闭浏览器之前不再显示)
	if(window.sessionStorage.getItem("lockcms") != "true" && window.sessionStorage.getItem("showNotice") != "true"){
		showNotice();
	}
	$(".showNotice").on("click",function(){
		showNotice();
	})

	//刷新后还原打开的窗口
	if(window.sessionStorage.getItem("menu") != null){
		menu = JSON.parse(window.sessionStorage.getItem("menu"));
		curmenu = window.sessionStorage.getItem("curmenu");
		var openTitle = '';
		for(var i=0;i<menu.length;i++){
			openTitle = '';
			if(menu[i].icon.split("-")[0] == 'icon'){
				openTitle += '<i class="iconfont '+menu[i].icon+'"></i>';
			}else{
				openTitle += '<i class="layui-icon">'+menu[i].icon+'</i>';
			}
			openTitle += '<cite>'+menu[i].title+'</cite>';
			openTitle += '<i class="layui-icon layui-unselect layui-tab-close" data-id="'+menu[i].layId+'">&#x1006;</i>';
			element.tabAdd("bodyTab",{
				title : openTitle,
		        content :"<iframe src='"+menu[i].href+"' data-id='"+menu[i].layId+"'></frame>",
		        id : menu[i].layId
			})
			//定位到刷新前的窗口
			if(curmenu != "undefined"){
				if(curmenu == '' || curmenu == "null"){  //定位到后台首页
					element.tabChange("bodyTab",'');
				}else if(JSON.parse(curmenu).title == menu[i].title){  //定位到刷新前的页面
					element.tabChange("bodyTab",menu[i].layId);
				}
			}else{
				element.tabChange("bodyTab",menu[menu.length-1].layId);
			}
		}
	}

})

//打开新窗口
function addTab(_this){
	tab.tabAdd(_this);
}

//锁屏后验证密码是否正确
function lockPwd(){
	var pwd = $('#lockPwd').val();
	var data = {
		"pwd":pwd
	};
	$.post('http://www.linzantian.com/admin/user/lockPwd',data,function(r){
		if(r.res == '0000'){
			window.sessionStorage.setItem("lockcms",false);
			$('#lockPwd').val('');
			layer.closeAll("page");
		}else{
			$('#lockPwd').val('');
			layer.msg("密码错误，请重新输入！");
		}
	})
}

//首页页面数据加载
function indexData(){
	var index = layer.msg('安全退出中...请稍后',{icon: 16,time:false,shade:0.8});
	$.get('http://www.linzantian.com/admin/user/getInfo',function(r){
		if(r.res=='0000'){
			layer.close(index);
			$('.userName').text(r.data.userNames);
			$('#lockUserName').text(r.data.userNames);
			$('.userFace').attr('src',r.data.userFace);
			$('.lockUserFace').attr('src',r.data.userFace);
		}else{
			layer.close(index);
			layer.msg(r.msg);
		}
	})
	$.get('http://www.linzantian.com/admin/system/getSystemInfo',function(r){
		if(r.res=='0000'){
			$('#powerby p').text(r.data[0].powerby);
		}else{
			layer.msg(r.msg);
		}
	})
}