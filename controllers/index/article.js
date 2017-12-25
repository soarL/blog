//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');

//首页文章展示
let list = async(ctx,next)=>{
	var sql; 
	switch (ctx.request.body.type) {
		case 'all':
			sql = `SELECT * FROM article_table ORDER BY id DESC`;
			break;
		case "some":
			if(!ctx.request.body.limit || ctx.request.body.limit==''){
				sql = `SELECT * FROM article_table ORDER BY id DESC`;
			}else{
				sql = `SELECT * FROM article_table ORDER BY id DESC LIMIT ${ctx.request.body.limit}`;
			}
			break;
		case "javascript":
			sql = `SELECT * FROM article_table WHERE classify LIKE "%javascript%" ORDER BY id DESC`;
			break;
		case "html":
			sql = `SELECT * FROM article_table WHERE classify LIKE "%html%" ORDER BY id DESC`;
			break;
		case "css":
			sql = `SELECT * FROM article_table WHERE classify LIKE "%css%" ORDER BY id DESC`;
			break;
		case "nodejs":
			sql = `SELECT * FROM article_table WHERE classify LIKE "%nodejs%" ORDER BY id DESC`;
			break;
		case "php":
			sql = `SELECT * FROM article_table WHERE classify LIKE "%php%" ORDER BY id DESC`;
			break;
		default:
			sql = `SELECT * FROM article_table ORDER BY id DESC LIMIT 10`;
			break;
	}
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','查询成功',data);
	})
}

//文章详情页面的路由
let read = async (ctx,next)=>{

	let strUrl = ctx.url.split('?')[1];
	let id = strUrl.split("=")[1];

	if(ctx.session[`article_${id}`]!=id){
		let viewCountSql = `UPDATE article_table SET viewCount=viewCount+1 WHERE id=${id}`;
		await db(viewCountSql);
	}
	
	ctx.session[`article_${id}`]=id;

	let ctxSql = `SELECT CASE WHEN SIGN(id - ${id}) > 0 THEN 'Next' ELSE 'Prev' END AS DIR, CASE WHEN SIGN(id - ${id}) > 0 THEN MIN(id) WHEN SIGN(id - ${id}) < 0 THEN MAX(id) END AS id FROM article_table WHERE id <> ${id} GROUP BY SIGN(id - ${id}) ORDER BY SIGN(id - ${id})`;
	
	let sql = await db(ctxSql)
	.then((data)=>{
		if(data.length !=2){
			if(data.DIR == "Prev"){
				let prevId = data[0].id;
				return `SELECT * FROM article_table WHERE id in (${id},${prevId})`;
			}else {
				let nextId = data[0].id;
				return `SELECT * FROM article_table WHERE id in (${id},${nextId})`;
			}
		}else{
			let prevId = data[0].id;
			let nextId = data[1].id;
			return `SELECT * FROM article_table WHERE id in (${prevId},${id},${nextId})`;	
		}
	})
	await db(sql)
	.then((data)=>{
		if(data.length !=3){
			let datas = {};
			let one = data[0].id;
			let second = data[1].id;
			if(one == id){
				datas.prev = {
					"url":"javascript:",
					"newsName":"没有了"
				};
				datas.data = data[0];
				datas.next = data[1];
			}else {
				datas.prev = data[0];
				datas.data = data[1];
				datas.next = {
					"url":"javascript:",
					"newsName":"没有了"
				};
			}
			ctx.response.body = common.msg('0000','查询成功',datas);
		}else{
			let datas = {};
			datas.prev = data[0];
			datas.data = data[1];
			datas.next = data[2];
			ctx.response.body = common.msg('0000','查询成功',datas);
		}
	})
}

//特别推荐数据
let recommend = async(ctx,next)=>{
	let sql = `SELECT * FROM article_table WHERE isShow LIKE '0' ORDER BY id DESC LIMIT 6`; 
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','查询成功',data);
	})
}

//热门文章数据
let host = async (ctx,next)=>{
	let sql= `SELECT * FROM article_table ORDER BY  viewCount DESC LIMIT 3`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg("0000","查询成功",data);
	})
}

//月更新文章查询
let total = async (ctx,next)=>{
	let all = `SELECT id FROM article_table`;
	let mounthSql = `SELECT id FROM article_table WHERE DATE_FORMAT( newsTime, '%Y%m' ) = DATE_FORMAT( CURDATE( ) , '%Y%m' )`;
	let sendData = {
		"monthUpdate":"",
		"allArticle":"",
	}
	await db(all)
	.then((data)=>{
		sendData.allArticle = data.length;
	})
	await db(mounthSql)
	.then((data)=>{
		sendData.monthUpdate = data.length;
	})
	ctx.response.body = common.msg("0000",'查询成功',sendData);
}
//文章留言
let message = async(ctx,next)=>{
	let faceArr = ['http://www.linzantian.com/upload/face/face1.jpg','http://www.linzantian.com/upload/face/face2.jpg','http://www.linzantian.com/upload/face/face3.jpg','http://www.linzantian.com/upload/face/face4.jpg'];
	var messageArr=[];
	let sql = `SELECT message FROM article_table WHERE id = ${ctx.request.body.id}`;
	await db(sql)
	.then((data)=>{
		if(data[0].message==null){

		}else{
			messageArr = JSON.parse(data[0].message);
		}
	})
	let data = ctx.request.body;
	data.msgReply = null;
	data.userface = faceArr[common.random(3)];
	messageArr.push(data);
	let addSql = `UPDATE article_table SET message='${JSON.stringify(messageArr)}' WHERE id=${ctx.request.body.id}`;
	await db(addSql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','发表成功')
	})
	.catch((data)=>{
		console.log(data);
		ctx.response.body = common.msg('0002','发表失败')
	})
}

module.exports = {
    'GET /article/read':read,
    'POST /article/list':list,
    'GET /article/recommend':recommend,
    'GET /article/host':host,
    'GET /article/total':total,
    'POST /article/message':message
};
