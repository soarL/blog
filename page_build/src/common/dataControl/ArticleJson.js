const setting =  require("./setting.js");

let strUrl = window.location.href;
let strUrl2 = strUrl.split("?")[1];

var data = {
	"id":'',
	"title":"",
	"author":"",
	"time":"",
	"viewCount":"",
	"note":"",
	"contents":"",
	"message":{
		"title":"评论列表",
		"data":[]
	},
	"prev":{},
	"next":{},
	"url":""
};

if(strUrl2){
	let id = strUrl2.split("=")[1];
	$.get(`${setting.serverLocalhost}/index/article/read?id=${id}`,function(r){
		var nowData = r.data.data;
		var prevData = r.data.prev;
		var nextData = r.data.next;
		data.id =nowData.id;
		data.title =nowData.newsName;
		data.author = nowData.newsAuthor;
		data.time = nowData.newsTime;
		data.viewCount = nowData.viewCount;
		data.note = nowData.newSketch;
		data.contents = nowData.newsContent;
		data.message.data = JSON.parse(nowData.message);

		data.prev.title = prevData.newsName;
		data.prev.url = prevData.url;

		data.next.title = nextData.newsName;
		data.next.url = nextData.url;

		data.url = setting.serverLocalhost+ "/index/article/read?id="+id;
	})	
}else{
	window.location="/page/404.html";
}

module.exports = data;