# blog-
一个博客网站的后台
源项目地址https://github.com/soarL/blog-.git 基于express 开发

2017-12-12
停止开发 项目转战到koa  因为我发现 express 的回调特别的累 后期维护比较麻烦于是选择了 Koa2 连重构项目 

采用mysql 数据库

文件夹结构 -----------------------------------------------------------------------------------------

controllers    -----  
					admin -----
						article.js    文章相关api
						links.js      友情链接相关api
						loginOut.js   退出登入相关api
						message.js    留言信息相关api
						system.js     系统信息相关api
						user.js       用户信息相关api
					index -----

libs           -----
					common.js  		  公共方法 ！注把 www.linzantian.com 改成自己网站的域名这是配置文件路径地址
					mysql.js          数据库链接设置
					test.js           测试使用文件

mysql_table    -----

www            -----
					admin  -----  页面文件 基于layui
					upload -----  文件上传目录

controller.js  路由控件，路由主要文件

app.js         入口文件

package.json   配置文件


使用方法  -----------------------------------------------------------------------------------------

修改mysql.js 数据库配置文件

在数据库指定一个库导入mysql_table 文件

文件根目录下 npm install 安装依赖

npm start 开启程序 ！注 默认开启端口为 80端口 可以在app.js 处更改；

访问localhost/admin即可


---------------------------
---------------------------
---------------------------
---------------------------
---------------------------