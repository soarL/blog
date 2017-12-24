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

//格式化日期
let Format = function (fmt) { 
    var o = {
        "M+": new Date().getMonth() + 1, //月份 
        "d+": new Date().getDate(), //日 
        "h+": new Date().getHours(), //小时 
        "m+": new Date().getMinutes(), //分 
        "s+": new Date().getSeconds(), //秒 
        "q+": Math.floor((new Date().getMonth() + 3) / 3), //季度 
        "S": new Date().getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//生成随机数;
function random(num){
	let a = Math.random()*parseInt(num);
	let b =Math.round(a);
	return b;
};

module.exports={
	MD5_SUFFIX:'asdasdasd#@asdajkshkfhaksh!!@#23Dsadasdds#@$%@#$sdfsdf',
	md5,
	msg,
	path:'http://www.linzantian.com/upload/',
	upload:upload('./www/upload/'),
	Format:Format,
	random:random
}