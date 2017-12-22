//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');
const fs = require('fs');

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
	})
	let urlSql = await db(`SELECT id FROM article_table ORDER BY id DESC LIMIT 1`)
	.then((data)=>{
		let lastID = data[0].id;
		return `UPDATE article_table SET url = 'http://www.linzantian.com/page/article.html?id=${lastID}' WHERE id=${lastID}`;
	})
	await db(urlSql)
	.then((data)=>{
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
	var str = `(${rmSql.join(',')})`;
	let imgSql = `SELECT imgSrc FROM article_table WHERE id in ${str}`;
	await db(imgSql)
	.then((data)=>{
		for(let i=0;i<data.length;i++){
			let fileurl = `./www/${data[i].imgSrc.split(".com")[1]}`;
			fs.unlink(fileurl,(err,data)=>{
				if(err){
					console.log(err);
					return	
				}
			})
		}
	})
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

//文章图片上传
let upImg = async(ctx,next)=>{
	let newFilenamectx = common.path + ctx.body.filename;
	let sql = await db(`SELECT id FROM article_table ORDER BY id DESC LIMIT 1`)
	.then((data)=>{
		return `UPDATE article_table SET imgSrc ='${newFilenamectx}' WHERE id=${data[0].id}`;
	})
	await db(sql)
	.then((data)=>{
		ctx.response.body = common.msg('0000','上传成功',data);
	})
}

module.exports = {
    'POST /article/add': add,
    'POST /article/read': read,
    'POST /article/rm': rm,
    'POST /article/rp': rp,
    'POST /article/read/some': readSome,
    'POST /article/upImg': upImg,
};
