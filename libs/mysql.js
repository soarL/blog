const mysql = require('mysql');

//创建数据库连接配置
const pool = mysql.createPool({
		host:'localhost',
		user:'root',
		password:'root',
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