//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');

//劫持文章id
let ArticleId = async(ctx,next)=>{
	console.log(ctx.url);
	await next();
}

module.exports = {
    'GET /article.html': ArticleId
};
