const setting =  require("./setting.js");

let data = {
	"title":"特别推荐",
	"data":[]
}

$.get(setting.serverLocalhost+"/index/article/recommend",function(r){
	data.data = r.data;
})

//为了美观和速度这里只读6条数据

module.exports=data;