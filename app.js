const Koa = require('koa');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const static = require('koa-static');
const cors = require('koa2-cors');

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
	  maxAge: 1*24*60*60*1000,
	  overwrite: true, 
	  httpOnly: true, 
	  signed: true,
	  rolling: false,
	};
	app.use(session(CONFIG, app));
}());

//post 数据处理中间件
app.use(bodyParser({formLimit: '20mb'}));

// 跨域设置
/*app.use(cors({
    origin: function (ctx) {
            return "*"; // 允许来自所有域名请求
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
ONFLICT (content): Merge conflict in app.js
Automatic merge failed; fix conflicts and then commit the result.

*/
//获取客户端ip生成日志
/*app.use(async(ctx,next)=>{
	let log = `当前访问的ip${ctx.request.ip},访问地址：${ctx.request.url},访问时间：${common.Format("yyyy-MM-dd hh:mm:ss")}`;
	common.fsAp('./log.txt',log+'\n');
	await next();
})
*/

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
		 		if(ctx.url.indexOf('/admin/layui/images/face/')>=0){
		 			await next();
		 		}else{
		 			ctx.redirect('/admin/login.html');
		 		}
		 	}else {
		 		await next();
		 	}
	 }else {
	 	await next();
	 }
})

//静态文件的访问
app.use(static('./www',{maxAge:7*60*60*1000}));

//文件上传路由
router.post('/admin/user/userFace', common.upload.single('userFace'), async (ctx, next) => {  
	ctx.body = {  
    	filename: ctx.req.file.filename//返回文件名  
  	}  
  await next();
})

//文章图片上传路由
router.post('/admin/article/upImg', common.upload.single('articleFace'), async (ctx, next) => {  
	ctx.body = {  
    	filename: ctx.req.file.filename//返回文件名  
  	}  
  await next();
}) 

//添加控制器:
router.use('/admin',controller('controllers/admin'))

//添加控制器:
router.use('/index',controller('controllers/index'))

//设置404页面
app.use(async (ctx,next)=>{
	if(ctx.url != '/favicon.ico'){
		if(ctx.response.message == 'Not Found'){
			ctx.redirect('/page/404.html');
		}
	}
	await next();
})

app.listen(80);
console.log(`app started at port 80...time:${new Date().toLocaleString()}`);
