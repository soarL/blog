//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');

//设置系统信息路由
let rp = async ctx=>{
	let data = ctx.request.body;
	let dataArr = [];
	for(let i in data){
		dataArr.push(`${i}='${data[i]}'`);
	}
	let sql  = `UPDATE system_table SET ${dataArr.join(',')} WHERE id=1`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','修改成功');
	})
}

//获取系统信息路由
let getSystemInfo = async ctx=>{
	let sql =`SELECT * FROM system_table WHERE id =1`;
	await db(sql)
	.then((data)=>{
		ctx.response.body =common.msg('0000','获取成功',data);
	})
}

module.exports = {
    'POST /system/rp': rp,
    'GET /system/getSystemInfo': getSystemInfo
};