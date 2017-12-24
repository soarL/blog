//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');

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
	};

	let faceArr = ['http://www.linzantian.com/upload/face/face1.jpg','http://www.linzantian.com/upload/face/face2.jpg','http://www.linzantian.com/upload/face/face3.jpg','http://www.linzantian.com/upload/face/face4.jpg'];

	sqlArr.push('userFace');
	sqlArr.push('askTime');

	sqlValues.push('?');
	sqlValues.push('?');

	addSqlArr.push(faceArr[common.random(3)]);
	addSqlArr.push(common.Format("yyyy-MM-dd"));

	let sql = `INSERT INTO message_table(${sqlArr}) VALUES(${sqlValues})`;
	await db(sql,addSqlArr)
	.then((data)=>{
		ctx.response.body = common.msg('0000','提交成功');
	})
	.catch((data)=>{
		ctx.response.body = common.msg('0002','提交失败数据库错误');
	})
};

let read = async (ctx)=>{
	let sql = `SELECT * FROM message_table`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','查询成功',data);
	})
}

module.exports = {
    'POST /message/add':add,
    'GET /message/read':read
};
