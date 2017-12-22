//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');

let read = async (ctx,next)=>{
	if(!ctx.query.num || !ctx.query.start){
		ctx.response.body= common.msg('0002','参数错误');
		return
	}

	let num = parseInt(ctx.query.num);
	let start = parseInt(ctx.query.start);

	let sql = `SELECT * FROM photo_table WHERE id > '${start}' LIMIT ${num}`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg("0000",'查询成功',data);
	})
}


module.exports = {
    'GET /photo/read':read,
};
