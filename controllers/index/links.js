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

module.exports = {
    'GET /links/read':read,
};
