//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');
const fs = require('fs');
const pathfile = require('path');

//修改个人资料接口
let rp = async ctx=>{
	let data = ctx.request.body;
	let dataArr = [];
	for(let i in data){
		if(i=='id'){

		}else{
			dataArr.push(`${i}='${data[i]}'`);
		}
	}
	let sql  = `UPDATE user_table SET ${dataArr.join(',')} WHERE id=${data.id}`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','修改成功');
	})
}


//修改头像接口
let userFace = async ctx =>{
	let newFilenamectx = common.path + ctx.body.filename;
	let sql = `UPDATE user_table SET userFace='${newFilenamectx}' WHERE id=${ctx.session.admin_id}`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','修改成功',{src:newFilenamectx})
	})
}

//获取资料的接口
let getInfo = async ctx =>{
	let sql = `SELECT * FROM user_table WHERE id=${ctx.session.admin_id}`;
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','获取成功',data[0]);
	})
}


//修改密码接口
let changePwd = async ctx =>{
	let oldPwd = ctx.request.body.oldPwd;
	let newPwd = ctx.request.body.newPwd;
	let confirmPwd = ctx.request.body.confirmPwd;
	if(newPwd != confirmPwd){
		ctx.response.body = common.msg('0002','两次密码不一致');
	}
	let sql = `SELECT * FROM user_table WHERE id=${ctx.session.admin_id}`;
	let sqls = await db(sql)
	.then((data)=>{
		let spassword = common.md5(oldPwd+common.MD5_SUFFIX);
		if(data[0].password !=spassword){
			ctx.response.body = common.msg('0001','旧密码输入错误');
		}else{
			let sNewPwd = common.md5(newPwd+common.MD5_SUFFIX);
			let sqls = `UPDATE user_table SET password='${sNewPwd}' WHERE id=${ctx.session.admin_id}`;
			return sqls;
		}
	})
	await db(sqls)
	.then((data)=>{
		ctx.response.body =common.msg('0000','修改密码成功');
	})
}

//验证密码是否正确
let lockPwd = async ctx =>{
	let pwd = ctx.request.body.pwd;
	let sql = `SELECT * FROM user_table WHERE id=${ctx.session.admin_id}`;
	await db(sql)
	.then((data)=>{
		let spassword = common.md5(pwd+common.MD5_SUFFIX);
		if(data[0].password !=spassword){
			ctx.response.body = common.msg('0001','密码错误');
		}else{
			ctx.response.body = common.msg('0000','密码正确');
		}
	})
}

module.exports = {
    'POST /user/rp': rp,
    'POST /user/userFace': userFace,
    'GET /user/getInfo': getInfo,
    'POST /user/changePwd': changePwd,
    'POST /user/lockPwd': lockPwd
};