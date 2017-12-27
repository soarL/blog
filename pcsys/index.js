const koa = require('koa');
const url = require('url'); //解析操作url
const superagent = require('superagent'); //这三个外部依赖不要忘记npm install
const fs = require('fs');
const cheerio = require('cheerio');
const common = require('../libs/common');
const eventproxy = require('eventproxy');


let targetUrl = 'https://cnodejs.org/';
superagent.get(targetUrl)
.end(function (err, res){

	var topicUrls = [];
	var $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each(function (idx, element) {
    	var $element = $(element);
        var href = url.resolve(targetUrl, $element.attr('href'));
        topicUrls.push(href);

        let ep = new eventproxy();
        //第二步：定义监听事件的回调函数。
          //after方法为重复监听
          //params: eventname(String) 事件名,times(Number) 监听次数, callback 回调函数
          ep.after('topic_html', topicUrls.length, function(topics){
              // topics 是个数组，包含了 40 次 ep.emit('topic_html', pair) 中的那 40 个 pair
              //.map
              topics = topics.map(function(topicPair){
                  //use cheerio
                  var topicUrl = topicPair[0];
                  var topicHtml = topicPair[1];
                  var $ = cheerio.load(topicHtml);
                  return ({
                      title: $('.topic_full_title').text().trim(),
                      href: topicUrl,
                      comment1: $('.markdown-text').eq(0).text().trim()
                  });
              });
              //outcome
              for(let i=0;i< topics.length;i++){
                if(topics[i].title.length!=0){
                 fs.appendFile('ys.txt',`----------------标题\n${topics[i].title}\n----------------内容\n${topics[i].comment1}\n`);
                }
              }
              return
          });
          //第三步：确定放出事件消息的
          topicUrls.forEach(function (topicUrl) {
              superagent.get(topicUrl)
                  .end(function (err, res) {
                      ep.emit('topic_html', [topicUrl, res.text]);
                  });
          });

     });


});



