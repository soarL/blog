const setting =  require("./setting.js");

let data = {
	"title":"留言列表",
	"data":[]
}

$.get(setting.serverLocalhost+"/index/message/read",function(r){
	data.data = r.data;
})

module.exports = data;