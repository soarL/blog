//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');


//文章详情页面的路由
let read = async (ctx,next)=>{
	let strUrl = ctx.url.split('?')[1];
	let id = strUrl.split("=")[1];
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
		ctx.response.body = common.msg('0000','查询成功',data);
	})
}	

module.exports = {
    'GET /article/read': read
};
