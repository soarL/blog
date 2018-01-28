const koa = require('koa');
const url = require('url'); //解析操作url
const superagent = require('superagent'); //这三个外部依赖不要忘记npm install
const fs = require('fs');
const cheerio = require('cheerio');
const common = require('../libs/common');
const db = require('../libs/mysql');
const eventproxy = require('eventproxy');


/*
let targetUrl = "https://www.taobao.com/markets/nanzhuang/2017new?spm=a21bo.2017.201867-main.2.58199862T9SZl8";
superagent.get(targetUrl).end(function (err, res){
  let $ = cheerio.load(res.text);
  $(".layout .grid-1 .main-wrap .cm-items-oneline6-pc").each(function(index, el) {
    var oneJson = JSON.parse(el.attribs["tms-data"]);
    var tms_type = oneJson.items[0].tms_type;
    var tce_vid = oneJson.items[0].data_para.tce_vid;
    var tce_sid = oneJson.items[0].data_para.tce_sid;
    var env = oneJson.items[0].data_para.env;

	let targetUrl = `https://tce.taobao.com/api/mget.htm?callback=${tms_type}&tce_sid=${tce_sid}&tce_vid=${tce_vid}&env=${env}`;

	superagent.get(targetUrl).end(function(err,res){
		let result = res.text;
		let result2 = result.split("(")[1];
		let result3 = result2.split(")")[0];
		let result4 = JSON.parse(result3);
		let result5 = result4.result[tce_sid].result;

		result5.forEach( function(el, index) {
		   var sql = `INSERT INTO taobao_pic_table(id,item_pic,item_title) VALUES(0,"http:${el.item_pic}","${el.item_title}")`;
		   db(sql);


		});

	})

  });

});
*/
// let setArr = new Set();
// db("SELECT item_title FROM taobao_pic_table").then((res)=>{
// 	console.log(res.length);
// 	res.forEach(function(res){
// 		setArr.add(res.item_title);
// 	})
// 	console.log(setArr.size);
// })


// var EventProxy = require('eventproxy');
// //获取EventProxy实例
// var ep = new EventProxy();
// ep.after('tpl', 2,function(tpl){
// 	console.log(tpl);
// });

// fs.readFile('1.jpg', function(err, content){
//     ep.emit('tpl', content);
// });


// db("SELECT * FROM taobao_pic_table  WHERE id < 311 AND id > 200")
// .then((data)=>{
// 	var a = 0;
// 	data.forEach((el,index)=>{
// 		superagent.get(el.item_pic).end(function(err,res){
// 			if(res){
// 				let items_type = el.item_pic.split(".");
// 				if(res.body){
// 					a++;
// 					console.log(a);
// 					fs.writeFile(`./taobao/${el.item_title}${a}.jpg`,res.body,function(){});
// 				}
// 			}
// 		})
// 	});
// })
