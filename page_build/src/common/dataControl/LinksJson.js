const setting =  require("./setting.js");

let data = {
	"title":"申请链接",
	"url":"javascript:",
	"data":[]
}
$.get(setting.serverLocalhost+'/index/links/read',(r)=>{
	data.data = r.data;
})
module.exports=data;