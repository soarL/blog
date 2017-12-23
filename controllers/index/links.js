//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');

let read = async (ctx,next)=>{
	let sql = `SELECT * FROM links_table`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','查询成功',data);
	})
}

let add = async (ctx)=>{
	var sqlArr    = ['id'];
	var addSqlArr = [];
	var sqlValues  = [0]; 
	for(let i in ctx.query){
		sqlArr.push(i);
		addSqlArr.push(ctx.query[i]);
	};
	for(let i = 0 ;i < (sqlArr.length - 1);i++){
		sqlValues.push('?');
	}
	let sql = `INSERT INTO link_table(${sqlArr}) VALUES(${sqlValues})`;
	await db(sql,addSqlArr)
	.then((data)=>{
		ctx.response.body = common.msg('0000','提交成功')
	})
}

module.exports = {
    'GET /links/read':read,
    'GET /links/add':add,
};
