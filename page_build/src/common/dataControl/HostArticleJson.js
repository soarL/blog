const setting =  require("./setting.js");

let data={
	"title":'热门文章',
	"data":[]
}

$.get(setting.serverLocalhost+'/index/article/host',(r)=>{
	data.data = r.data;
})


module.exports=data;