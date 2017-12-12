var areaData = address;
var $form;
var form;
var $;
layui.config({
	base : "../../js/"
}).use(['form','layer','upload','laydate'],function(){
	form = layui.form();
	var layer = parent.layer === undefined ? layui.layer : parent.layer;
		$ = layui.jquery;
		$form = $('form');
		laydate = layui.laydate;

        pageData();
        
        loadProvince();

        layui.upload({
           url : "http://www.linzantian.com/admin/user/userFace",
           success: function(res){
                var index = layer.msg('提交中，请稍候',{icon: 16,time:false,shade:0.8});
                if(res.res=='0000'){
                    layer.close(index);
                    layer.msg("修改成功！");
                    userFace.src = res.data.src;
                    window.sessionStorage.setItem('userFace',res.data.src);
                }else{
                    layer.close(index);
                    layer.msg(r.msg);
                }
           }
        }); 

        //判断是否修改过头像，如果修改过则显示修改后的头像，否则显示默认头像
        if(window.sessionStorage.getItem('userFace')){
        	$("#userFace").attr("src",window.sessionStorage.getItem('userFace'));
        }else{
        	$("#userFace").attr("src","../../images/userface3.jpg");
        }

        //提交个人资料
        form.on("submit(changeUser)",function(data){
            var send = {};
            //处理下爱好
            var likes = [];
            for(var i in data.field){
                if(data.field[i]=="on"){
                    likes.push(i.split('_')[1])
                }
            }
            send.id = data.field.id;
            send.userNames = data.field.userName;
            send.userEmail = data.field.userEmail;
            send.userLocation = [data.field.province.split('_')[0],data.field.city.split('_')[0],data.field.area];
            send.userBirthday =  data.field.userBirthday;
            send.userGroup = data.field.userGroup;
            send.userNameTrue = data.field.userNameTrue;
            send.userPhone = data.field.userPhone;
            send.like1 = likes;
        	var index = layer.msg('提交中，请稍候',{icon: 16,time:false,shade:0.8});

            $.post('http://www.linzantian.com/admin/user/rp',send,function(r){
                if(r.res == '0000'){
                    layer.close(index);
                    layer.msg("提交成功！");
                    location.reload();
                }else{
                    layer.close(index);
                    layer.msg(r.msg);
                }
            })

        	return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        })

})

 //加载省数据
function loadProvince() {
    var proHtml = '';
    for (var i = 0; i < areaData.length; i++) {
        proHtml += '<option value="' + areaData[i].provinceName + '_' + areaData[i].mallCityList.length + '_' + i + '">' + areaData[i].provinceName + '</option>';
    }
    //初始化省数据
    $form.find('select[name=province]').append(proHtml);
    form.render();
    form.on('select(province)', function(data) {
        $form.find('select[name=area]').html('<option value="">请选择县/区</option>');
        var value = data.value;
        var d = value.split('_');
        var code = d[0];
        var count = d[1];
        var index = d[2];
        if (count > 0) {
            loadCity(areaData[index].mallCityList);
        } else {
            $form.find('select[name=city]').attr("disabled","disabled");
        }
    });
}
 //加载市数据
function loadCity(citys) {
    var cityHtml = '<option value="">请选择市</option>';
    for (var i = 0; i < citys.length; i++) {
        cityHtml += '<option value="' + citys[i].cityName + '_' + citys[i].mallAreaList.length + '_' + i + '">' + citys[i].cityName + '</option>';
    }
    $form.find('select[name=city]').html(cityHtml).removeAttr("disabled");
    form.render();
    form.on('select(city)', function(data) {
        var value = data.value;
        var d = value.split('_');
        var code = d[0];
        var count = d[1];
        var index = d[2];
        if (count > 0) {
            loadArea(citys[index].mallAreaList);
        } else {
            $form.find('select[name=area]').attr("disabled","disabled");
        }
    });
}
 //加载县/区数据
function loadArea(areas) {
    var areaHtml = '<option value="">请选择县/区</option>';
    for (var i = 0; i < areas.length; i++) {
        areaHtml += '<option value="' + areas[i].areaName + '">' + areas[i].areaName + '</option>';
    }
    $form.find('select[name=area]').html(areaHtml).removeAttr("disabled");
    form.render();
    form.on('select(area)', function(data) {
    });
}

//加载页面数据
function pageData(){
    var index = layer.msg('加载中，请稍候',{icon: 16,time:false,shade:0.8});
    $.get('http://www.linzantian.com/admin/user/getInfo',function(r){
        if(r.res=="0000"){
            $('#userName').val(r.data.userNames);
            $('#userGroup').val(r.data.userGroup);
            userFace.src = r.data.userFace;
            layer.close(index);
        }else {
            layer.close(index);
            layer.msg(r.msg);
        }
    })
}

