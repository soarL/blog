//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');


//添加文章的路由
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
	let sql = `INSERT INTO article_table(${sqlArr}) VALUES(${sqlValues})`;
	await db(sql,addSqlArr)
	.then((data)=>{
		ctx.response.body = common.msg('0000','发表添加成功');
		console.log(`文章发表成功，发表时间：${new Date().toLocaleString()}`)
	})
}


//查询文章的路由
let read = async (ctx,next)=>{
	let sql = `SELECT * FROM article_table`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','查询成功',data);
	})
}

//删除文章的路由
let rm =async (ctx,next)=>{
	let rmSql = ctx.request.body.id;
	var str = `(${rmSql.join(',')})`
	let sql = `DELETE FROM article_table WHERE id in ${str}`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','删除成功');
	})
}

//修改展示状态的接口
let rp = async (ctx,next)=>{
	let sql = 'UPDATE article_table SET isShow = ? WHERE id=?';
	let rmSql = [ctx.request.body.isShow,ctx.request.body.id];
	await db(sql,rmSql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','修改成功');
	})
}

//搜索文章接口
let readSome = async (ctx,next)=>{
	let sql = `SELECT * FROM article_table WHERE newsName LIKE '%${ctx.request.body.val}%'`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','查询成功',data);
	})
}


module.exports = {
    'POST /article/add': add,
    'POST /article/read': read,
    'POST /article/rm': rm,
    'POST /article/rp': rp,
    'POST /article/read/some': readSome
};
