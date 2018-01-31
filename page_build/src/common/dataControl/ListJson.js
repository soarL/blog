const setting =  require("./setting.js");

let sendData = {
	"type":"some",
	"limit":"10"
}

let data = {
	"title":"最新文章",
	"data":[]
}

let hrefs = window.location.href.split('.html')[0].split("/")
let learningUrl = hrefs[hrefs.length-1];
switch (learningUrl) {
	case 'learning':
		let lnTrun = window.location.href.split('html')[1];
		if (lnTrun=="" || lnTrun.length < 6){
			sendData.type ='all';
			data.title = "学习"; 
		}else{
			let lnType = window.location.href.split("?")[1].split("=")[1];
			sendData.type =lnType;
			data.title = lnType; 
		}
		break;
	case 'growUp':
		sendData.type ='all';
		data.title = "成长"; 
		break;
	default:
		sendData.type ='some';
		data.title = "最新文章";
		break;
}

$.post(setting.serverLocalhost+"/index/article/list",sendData,function(r){
	data.data = r.data;
})

module.exports = data;