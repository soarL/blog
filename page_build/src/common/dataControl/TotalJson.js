const setting =  require("./setting.js");

var birthDay = new Date("11/02/2017");   // 这里填写网站第一次运行日期
var now = new Date();
var duration = now.getTime() - birthDay.getTime(); 
var total= Math.floor(duration / (1000 * 60 * 60 * 24));

let data = {
	"title":"统计",
	"total":total,
	"monthUpdate":"",
	"allArticle":"",
}

$.get(setting.serverLocalhost+'/index/article/total',(r)=>{
	data.monthUpdate = r.data.monthUpdate;
	data.allArticle = r.data.allArticle;
})

module.exports =data;