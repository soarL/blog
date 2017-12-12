//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');

//获取去留言信息的路由
let read= async (ctx,next)=>{
	let sql = `SELECT * FROM message_table`;
	await db(sql)
	.then((data)=>{
		for(let i =0; i < data.length; i++){
			 if(data[i].msgReply && data[i].msgReply.length != 0){
				data[i].msgReply = JSON.parse(data[i].msgReply);
			 }
		}
		ctx.response.body = common.msg('0000','查询成功',data);
	})
}

//新增回复内容
let reply = async (ctx,next)=>{
	let sql = `SELECT * FROM message_table WHERE id =${ctx.request.body.id}`;
	let newSql = await db(sql)
				.then((data)=>{
					var newSql;
					if(data[0].msgReply && data[0].msgReply.length != 0){
						let oldReply = JSON.parse(data[0].msgReply);
						oldReply.unshift(ctx.request.body);
						newSql = `UPDATE message_table SET msgReply='${JSON.stringify(oldReply)}' WHERE id=${ctx.request.body.id}`;
						return newSql
					}else{
						let oldReply = [];
						oldReply.push(ctx.request.body);
						newSql = `UPDATE message_table SET msgReply='${JSON.stringify(oldReply)}' WHERE id=${ctx.request.body.id}`;
						ctx.response.body = common.msg('0000','添加成功');
						return newSql
					}
				})
	await db(newSql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','回复成功');
	})
}

module.exports = {
    'GET /message/read': read,
    'POST /message/reply': reply
};