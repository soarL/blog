const Koa = require('koa');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const static = require('koa-static');

const controller = require('./controller');
const common = require('./libs/common');
const db = require('./libs/mysql');
const app = new Koa();

//session中间件
(function(){
	let keys = [];
	for(let i = 0; i< 10000;i++){
		keys.push(i+'_asdahshhhaskjhad');
	}
	app.keys = keys;
	const CONFIG = {
	  key: 'sess_id', 
	  maxAge: 20*60*1000,
	  overwrite: true, 
	  httpOnly: true, 
	  signed: true,
	  rolling: false,
	};
	app.use(session(CONFIG, app));
}());

//post 数据处理中间件
app.use(bodyParser());

//处理登入
//登入路由
router.post('/admin/user/login',async (ctx,next)=>{
	let json = ctx.request.body;
	let spassword = common.md5(json.password+common.MD5_SUFFIX);
	let sql = `SELECT * FROM user_table WHERE username='${json.username}'`;
	await db(sql)
	.then(function(data){
		if(data[0]!=undefined){
			if(data[0].password == spassword){
				ctx.session['admin_id']=data[0].id;
				ctx.response.body = common.msg('0000','登入成功');				
			}else{
				ctx.response.body = common.msg('0002','密码错误');
			}
		}else{
			ctx.response.body = common.msg('0001','用户不存在');
		}
	})
})

app.use(router.routes());

//检查后台登入状态
app.use(async(ctx,next)=>{
	 if(ctx.url.indexOf('/admin')>=0){
		 if(!ctx.session['admin_id'] && ctx.url!='/admin/login.html'){
		 		ctx.redirect('/admin/login.html');
		 	}else {
		 		await next();
		 	}
	 }else {
	 	await next();
	 }
})

//文件上传路由
router.post('/admin/user/userFace', common.upload.single('userFace'), async (ctx, next) => {  
	ctx.body = {  
    	filename: ctx.req.file.filename//返回文件名  
  	}  
  await next();
}) 

//添加控制器:
router.use('/admin',controller('controllers/admin'))


//静态文件的访问
app.use(static('./www'));


app.listen(80);
console.log('app started at port 80...');