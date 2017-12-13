const mysql = require('mysql');

//创建数据库连接配置
const pool = mysql.createPool({
		host:'47.52.74.236',
		user:'root',
		password:'lin2598056',
		database:'bolg_database',
		insecureAuth: true
	});

const db = function(sql,addSql=[]){
	return new Promise(function(resolve,reject){
		pool.query(sql,addSql,function(err,data){
			if(err){
				reject(err)
			}else {
				resolve(data);
			}
		})
	})
}


module.exports = db