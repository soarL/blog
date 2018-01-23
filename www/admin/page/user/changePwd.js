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

        //添加验证规则
        form.verify({
            oldPwd : function(value, item){
                if(value.length < 6){
                    return "密码错误，请重新输入！";
                }
            },
            newPwd : function(value, item){
                if(value.length < 6){
                    return "密码长度不能小于6位";
                }
            },
            confirmPwd : function(value, item){
                if(!new RegExp($("#oldPwd").val()).test(value)){
                    return "两次输入密码不一致，请重新输入！";
                }
            }
        })

        //修改密码
        form.on("submit(changePwd)",function(data){
            var index = layer.msg('提交中，请稍候',{icon: 16,time:false,shade:0.8});
            $.post('http://www.linzantian.com/admin/user/changePwd',data.field,function(r){
                if(r.res=='0000'){
                    layer.close(index);
                    layer.msg("密码修改成功！");
                     $(".pwd").val('');
                }else{
                    if(r.res=='0001'){
                        layer.close(index);
                        var indexs = layer.msg('旧密码输入错误',{icon: 16,time:false,shade:0.8});
                        setTimeout(function(){
                            layer.close(indexs);
                        },1000);
                        $(".pwd").val('');
                    }else{
                        layer.close(index);
                        layer.msg(r.msg);
                    }
                }
            })
        	return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        })

})
 

//加载页面数据
function pageData(){
    var index = layer.msg('加载中，请稍候',{icon: 16,time:false,shade:0.8});
    $.get('http://www.linzantian.com/admin/user/getInfo',function(r){
        if(r.res=="0000"){
            $('#userNames').val(r.data.userNames);
            layer.close(index);
        }else {
            layer.close(index);
            layer.msg(r.msg);
        }
    })
}