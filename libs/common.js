const crypto = require('crypto');
const multer = require('koa-multer');

//md5
function md5(str){
	var obj=crypto.createHash('md5');
	obj.update(str);
	return obj.digest('hex');
}

//返回数据处理
function msg(res,msg,data){
	data = data || {};
	return {
		res,
		msg,
		data
	}
}

//文件处理
function upload(url){
		//设置文件上传路径
	let storage = multer.diskStorage({  
	  //文件保存路径  
	  destination: function (req, file, cb) {  
	    cb(null, url)  
	  },  
	  //修改文件名称  
	  filename: function (req, file, cb) {  
	    let fileFormat = (file.originalname).split(".");  
	    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
	  }  
	})  
	return multer({ storage: storage });
}


module.exports={
	MD5_SUFFIX:'asdasdasd#@asdajkshkfhaksh!!@#23Dsadasdds#@$%@#$sdfsdf',
	md5,
	msg,
	path:'http://www.linzantian.com/upload/',
	upload:upload('./www/upload/')
}