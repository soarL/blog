//基础部件
const common = require('../../libs/common');
const db = require('../../libs/mysql');

let loginOut = async (ctx, next) => {
   	ctx.session = null;
	ctx.response.body = common.msg('0000','退出登入成功');
};

module.exports = {
    'GET /loginOut': loginOut
};