const koa = require('koa');
const url = require('url'); //解析操作url
const superagent = require('superagent'); //这三个外部依赖不要忘记npm install
const fs = require('fs');
const cheerio = require('cheerio');
const common = require('../libs/common');
const eventproxy = require('eventproxy');


let targetUrl = "https://www.taobao.com/markets/nvzhuang/taobaonvzhuang?spm=a21bo.2017.201867-main.1.33eef6850zIeV7";
superagent.get(targetUrl).end(function (err, res){
  var $ = cheerio.load(res.text);
  $(".layout .grid-1 .main-wrap .cm-items-oneline6-pc").each(function(index, el) {
    var oneJson = JSON.parse(el.attribs["tms-data"]);
    var tce_vid = oneJson.items[0].data_para.tce_vid;
    var tce_sid = oneJson.items[0].data_para.tce_sid;
    var env = oneJson.items[0].data_para.env;
    
  });




  // {"moduleinfo":{"itemRowCountPC":0,"bgColor":"0","items_count":[{"count_phone":48,"count":48}],"marginBottomPC":0},"items":[{"data_para":{"tce_vid":"0","tce_sid":1911959,"env":"online"},"tms_type":"jsonp","data_type":"tceonline"}],"countinfo":{"items":{"length_pc":48,"length":48}},"$tmsId":"tce/1000690"}


  // let result = res.text;
  // let result2 = result.split("(")[1];
  // let result3 = result2.split(")")[0];
  // let result4 = JSON.parse(result3);
  // let result5 = result4.result[1911959].result;

  // result5.forEach( function(el, index) {
  //    console.log(el.item_pic);
  //    console.log(el.item_title);
  //    console.log(el.item_url);
  // });
 

	// var topicUrls = [];
	// var $ = cheerio.load(res.text);
  // $(".ipic a img").each(function(idx,el){
  //   console.log(el.attribs.src)
  // })
    // $('#topic_list .topic_title').each(function (idx, element) {
    // 	var $element = $(element);
    //     var href = url.resolve(targetUrl, $element.attr('href'));
    //     topicUrls.push(href);

    //     let ep = new eventproxy();
    //     //第二步：定义监听事件的回调函数。
    //       //after方法为重复监听
    //       //params: eventname(String) 事件名,times(Number) 监听次数, callback 回调函数
    //       ep.after('topic_html', topicUrls.length, function(topics){
    //           // topics 是个数组，包含了 40 次 ep.emit('topic_html', pair) 中的那 40 个 pair
    //           //.map
    //           topics = topics.map(function(topicPair){
    //               //use cheerio
    //               var topicUrl = topicPair[0];
    //               var topicHtml = topicPair[1];
    //               var $ = cheerio.load(topicHtml);
    //               return ({
    //                   title: $('.topic_full_title').text().trim(),
    //                   href: topicUrl,
    //                   comment1: $('.markdown-text').eq(0).text().trim()
    //               });
    //           });
    //           //outcome
    //           for(let i=0;i< topics.length;i++){
    //             if(topics[i].title.length!=0){
    //              fs.appendFile('ys.txt',`----------------标题\n${topics[i].title}\n----------------内容\n${topics[i].comment1}\n`);
    //             }
    //           }
    //           return
    //       });
    //       //第三步：确定放出事件消息的
    //       topicUrls.forEach(function (topicUrl) {
    //           superagent.get(topicUrl)
    //               .end(function (err, res) {
    //                   ep.emit('topic_html', [topicUrl, res.text]);
    //               });
    //       });

    //  });


});



