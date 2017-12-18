let fs = require('fs')
let data = [
{"imgSrc":"http://www.linzantian.com/upload/1512986839289.jpg"}
]


for(let i=0;i<data.length;i++){
	let fileurl = `../www/${data[i].imgSrc.split(".com")[1]}`;
	fs.unlink(fileurl,(err,data)=>{
		console.log(err);
	})
}