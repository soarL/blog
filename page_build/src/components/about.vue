<template>
	<div class="box">
		<h1 class="title">About Me</h1>
		<div class="boxs">
			<p>
				嗨！欢迎光临我的个人博客，还希望不要嫌弃我的博客比较丑，工作之余做的，我放弃了对虚拟主机，wordpress,等一些开源的快速建站的博客系统，主要还是为了熟悉vue 框架，koa2框架。可谓两全其美。我还真的把它做成了前后端完全分析的模式，组件化开发。完成到现在这样我已经挺开心了，接下就是完善网站。建博客也算是一种学习的过程吧！收益颇多
			</p>
			<p>
				林赞田，1994年出生，一个喜欢编程，喜欢前端开发，也喜欢写些后端的码农。在编程的路上，每天都感觉很充实，没有了以前的迷茫，每一步都是那么的踏实。如果你经历过一直换工作，直到有一天找到了自己喜欢的工作的那天，你会明白这种感受的。
			</p>
			<p>
				关于本博客，界面是借鉴了 <a href="http://www.zbboke.com/" style="font-weight: bold;">张兵博客</a> 的，实在懒得写样式作图设计，于是把它博客的样式直接复制了部分。后期的时候在慢慢调整吧！<br>
				基于 NodeJs 的 koa2框架 做的后台写起来也比较方便，现在的感觉这个框架还是比较新，相比上一代的 express 要整洁不少。相当顺手！<br>
				前端界面：在建站的时候接触了vue 于是就毫无疑问就用上了，用上了vue-cli，webpack构建工具，也给开发带来了相当大的便捷，虽然起手的时候简直。。哈哈！<br>
				我把整个项目全部放到了 github 上！可以随意使用，（弄个星弄个叉子什么的不用我说了吧！）<br>
				网站后台：<a href="https://github.com/soarL/blog" style="font-weight: bold;">https://github.com/soarL/blog</a><br>
				网站前端：<a href="https://github.com/soarL/myProject/tree/master/bolg" style="font-weight: bold;">https://github.com/soarL/myProject/tree/master/bolg</a><br>
				<h3>
					单词拼错我也知道，懒得改了就这样把！欢迎随时找我交流，QQ：271105196 
				</h3>
			</p>
		</div>
		<h1 class="title">友链申请</h1>
		<div class="form-box">
			<form>
				<label for="">
					<input type="text" placeholder="网站名字" onfocus="this.value='张三'" required="required"  name="linksName"> <span style="color:red">*</span> 必填
				</label>
				<label for="">
					<input type="text" placeholder="网站地址" onfocus="this.value='http://'" required="required" name="linksUrl"> <span style="color:red">*</span> 必填
				</label>
				<label for="">
					<input type="email" placeholder="邮箱" required="required" name="masterEmail"> <span style="color:red">*</span> 必填
				</label>
				<label for="">
					<button type="button" id="btn">{{btn}}</button>
				</label>
			</form>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				 btn:'提交'
			}
		},
		mounted:function(){
			$('#btn').click((function(){
				let data = {
					linksName:$('input[name="linksName"]').val(),
					linksUrl:$('input[name="linksUrl"]').val(),
					masterEmail:$('input[name="masterEmail"]').val()
				}
				if(data.linksName.length!=0 || data.linksUrl.length!=0 || data.masterEmail.length!=0){
					$.get("http://www.linzantian.com/index/links/add",data,(r)=>{
						if(r.res=='0000'){
							layer.msg(r.msg);
						}else {
							layer.msg(r.msg);
						}
					})
				}else{
					layer.msg('请填写相关内容');
				}
			}).bind(this))
		},
		components:{

		},
		methods:{

		},
		props:[""]
	}
</script>

<style scoped>
.title{
	color: #fff;
	background-color: #2a7497;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	width: 168px;
	line-height: 44px;
	text-align: center;
	text-shadow:1px 1px 1px rgba(39,56,60,0.98);
	margin-bottom: 10px;
	cursor: pointer;
	transition: all 0.5s;
}
.title:hover{
	width: 200px;
}
.box{
	box-shadow: 1px 1px 1px 1px rgba(39,56,60,0.2);
	background-color: #fff;
	padding: 10px 0;
}
.boxs p{
	text-indent: 20px;
}
.boxs{
	padding: 10px 30px;
}
.form-box label{
	display: block;
}
.form-box input{
	width: 300px;
}
.form-box button {
	padding: 8px 0;
	width: 90px;
	background-color: #2a7497;
	color: #fff;
	font-size: 12px;
	box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
	outline: none;
	transition: all 0.3s;
	border-radius: 3px;
	border:1px solid transparent;
}
.form-box button:active{
	border:1px solid #eee;
}
.form-box{
	margin-left: 60px;
	margin-top: 30px;
	margin-bottom: 40px;
}
</style>