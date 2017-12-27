//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');

//添加友情链接路由
let add = async (ctx,next)=>{
	var sqlArr    = ['id'];
	var addSqlArr = [];
	var sqlValues  = [0]; 
	for(let i in ctx.request.body){
		sqlArr.push(i);
		addSqlArr.push(ctx.request.body[i]);
	};
	for(let i = 0 ;i < (sqlArr.length - 1);i++){
		sqlValues.push('?');
	}
	let sql = `INSERT INTO links_table(${sqlArr}) VALUES(${sqlValues})`;
	await db(sql,addSqlArr)
	.then((data)=>{
		ctx.response.body = common.msg('0000','添加成功');
	})
}

//修改友情链接路由
let rp = async (ctx,next)=>{
	var addSqlArr = [];

	for(let i in ctx.request.body){
		if(i=='id'){

		}else{
			addSqlArr.push(ctx.request.body[i]);
		}
	};

	let sql = `UPDATE links_table SET linksName=?,linksUrl=?,linksTime=?,masterEmail=?,linksDesc=? WHERE id=${ctx.request.body.id}`;
	await db(sql,addSqlArr)
	.then((data)=>{
		ctx.response.body = common.msg('0000','添加成功');
	})
}

//查询友情链接内容路由
let read = async (ctx,next)=>{
	let sql=``;
	if(!ctx.query.id){
		sql = `SELECT * FROM links_table`;
	}else{
		sql = `SELECT * FROM links_table WHERE id=${ctx.query.id}`;
	}
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','查询成功',data);
	})
}

//删除友链的路由
let rm =async (ctx,next)=>{
	let rmSql = ctx.request.body.id;
	var str = `(${rmSql.join(',')})`
	let sql = `DELETE FROM links_table WHERE id in ${str}`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','删除成功');
	})
}

//搜索友链接口
let readSome = async (ctx,next)=>{
	let sql = `SELECT * FROM links_table WHERE linksName LIKE '%${ctx.request.body.val}%'`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','查询成功',data);
	})
}

module.exports = {
    'POST /links/add': add,
    'POST /links/rp': rp,
    'GET /links/read': read,
    'POST /links/rm': rm,
    'POST /links/read/some': readSome
};