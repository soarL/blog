webpackJsonp([8,1],{0:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(37),r=s(n),i=a(171),o=s(i);new r.default({el:"#app",template:"<App/>",components:{App:o.default}})},1:function(t,e){"use strict";var a={serverLocalhost:"http://www.linzantian.com:81"};t.exports=a},2:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},mounted:function(){},components:{},methods:{},props:["FootersData"]}},3:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},mounted:function(){$(".phone-menu-on").click(function(){$(".header").stop().fadeToggle(300),$(this).toggleClass("phone-menu-off")})},components:{},methods:{},props:["HeaderData"]}},4:function(t,e){"use strict";var a={title:"关于"};t.exports=a},5:function(t,e){"use strict";var a={logo:"/static/img/logo.png",nav:[{name:"首页",url:"/"},{name:"关于",url:"/page/about.html"},{name:"成长",url:"/page/growUp.html"},{name:"学习",url:"/page/learning.html",page:[{name:"javascript",url:"/page/learning.html?type=javascript"},{name:"html",url:"/page/learning.html?type=html"},{name:"css",url:"/page/learning.html?type=css"},{name:"nodejs",url:"/page/learning.html?type=nodejs"},{name:"php",url:"/page/learning.html?type=php"}]},{name:"留言",url:"/page/message.html"}]};t.exports=a},6:function(t,e){},7:function(t,e){},8:function(t,e,a){var s,n;a(7),s=a(2);var r=a(11);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-cc83e9d8",t.exports=s},9:function(t,e,a){var s,n;a(6),s=a(3);var r=a(10);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-8a1f21f4",t.exports=s},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"header"},[a("div",{staticClass:"navbar"},[a("p",{staticClass:"logo"},[a("a",{attrs:{href:"/",title:"林赞田个人博客",alt:"个人博客"}},[a("img",{staticStyle:{display:"block"},attrs:{alt:"logo",src:t.HeaderData.logo}})])]),t._v(" "),a("div",{staticClass:"phone-shade"}),t._v(" "),a("ul",{staticClass:"nav"},t._l(t.HeaderData.nav,function(e){return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),t._v(" "),a("ul",{staticClass:"sub-menu"},t._l(e.page,function(e){return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:e.url}},[t._v(t._s(e.name))])])}))])})),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"phone-menu-on"})])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu pull-right"},[a("form",{attrs:{name:"formsearch",action:"/plus/search.php",method:"get"}},[a("input",{staticClass:"search-input",attrs:{name:"q",type:"text",id:"search-keyword",value:"",required:"required",placeholder:" 输入你要找的内容"}}),t._v(" "),a("button",{staticClass:"searchbtn search-submit",attrs:{type:"submit",name:"search",title:"搜一下"}},[a("i",{staticClass:"fa"})])])])}]}},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer-inner"},[a("div",{staticStyle:{padding:"0 20px",overflow:"hidden"}},[a("div",{staticClass:"copyright pull-left"},[a("a",{attrs:{href:"javescript:"}},[t._v(t._s(t.FootersData.title))]),t._v(" | \n        "),a("a",{attrs:{href:"javescript:"}},[t._v("学习")]),t._v(" | \n        "),a("a",{attrs:{href:"javescript:"}},[t._v("娱乐")]),t._v(" | \n        "),a("a",{attrs:{href:"javescript:"}},[t._v("成长")]),t._v(" | \n        "),a("a",{attrs:{href:"javescript:"}},[t._v("copyright @2017")]),t._v(" | \n        "),a("a",{attrs:{href:"javescript:"}},[t._v("QQ  271105196号")]),t._v(" "),a("a",{attrs:{target:"_blank",href:"javescript:"}},[t._v("网站地图")])])])])])},staticRenderFns:[]}},12:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},mounted:function(){},components:{},methods:{},props:["HostData"]}},13:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},mounted:function(){},components:{},methods:{},props:["HostArticleData"]}},14:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},mounted:function(){},components:{},methods:{},props:["LinksData"]}},15:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},mounted:function(){},components:{},methods:{},props:["TotalData"]}},16:function(t,e,a){"use strict";var s=a(1),n={title:"热门文章",data:[]};$.get(s.serverLocalhost+"/index/article/host",function(t){n.data=t.data}),t.exports=n},17:function(t,e){"use strict";var a={title:"热门标签",data:[{url:"javascript:",value:"ajax"},{url:"javascript:",value:"Dreamweaver"},{url:"javascript:",value:"js"},{url:"javascript:",value:"css"},{url:"javascript:",value:"搞笑"},{url:"javascript:",value:"娱乐"},{url:"javascript:",value:"MySQL"},{url:"javascript:",value:"PHP"},{url:"javascript:",value:"dedeCMS"},{url:"javascript:",value:"dedeCMS"},{url:"javascript:",value:"博客"}]};t.exports=a},18:function(t,e,a){"use strict";var s=a(1),n={title:"申请链接",url:"javascript:",data:[]};$.get(s.serverLocalhost+"/index/links/read",function(t){n.data=t.data}),t.exports=n},19:function(t,e,a){"use strict";var s=a(1),n=new Date("11/02/2017"),r=new Date,i=r.getTime()-n.getTime(),o=Math.floor(i/864e5),l={title:"统计",total:o,monthUpdate:"",allArticle:""};$.get(s.serverLocalhost+"/index/article/total",function(t){l.monthUpdate=t.data.monthUpdate,l.allArticle=t.data.allArticle}),t.exports=l},20:function(t,e){},21:function(t,e){},22:function(t,e){},23:function(t,e){},24:function(t,e,a){var s,n;a(21),s=a(12);var r=a(29);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-4c4fbe3e",t.exports=s},25:function(t,e,a){var s,n;a(22),s=a(13);var r=a(30);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-608b4bf6",t.exports=s},26:function(t,e,a){var s,n;a(20),s=a(14);var r=a(28);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-2ec78550",t.exports=s},27:function(t,e,a){var s,n;a(23),s=a(15);var r=a(31);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-6c24535b",t.exports=s},28:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widget d_textbanner"},[a("a",{staticClass:"style",attrs:{href:t.LinksData.url}},[a("strong",[t._v(t._s(t.LinksData.title))])]),t._v(" "),a("ul",{staticClass:"friendlyLink"},t._l(t.LinksData.data,function(e){return a("li",[a("a",{attrs:{href:e.linksUrl,target:"_blank"}},[t._v(t._s(e.linksName))])])})),t._v(" "),a("div",{staticClass:"clearfix"})])},staticRenderFns:[]}},29:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widget"},[a("h3",{staticClass:"widget_tit"},[t._v(t._s(t.HostData.title))]),t._v(" "),a("div",{staticClass:"tag_list"},[a("ul",t._l(t.HostData.data,function(e){return a("li",[a("a",{attrs:{href:e.url}},[t._v(t._s(e.value))])])}))])])},staticRenderFns:[]}},30:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widget d_postlist"},[a("h3",{staticClass:"widget_tit"},[t._v(t._s(t.HostArticleData.title))]),t._v(" "),a("ul",t._l(t.HostArticleData.data,function(e){return a("li",[a("a",{attrs:{href:e.url}},[a("span",{staticClass:"thumbnail"},[a("img",{attrs:{src:e.imgSrc,alt:e.newsName,title:e.newsName}})]),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(e.newsName))]),t._v(" "),a("span",{staticClass:"muted"},[t._v(t._s(e.newsTime.split("T")[0]))]),t._v(" "),a("span",{staticClass:"muted"},[a("span",{staticClass:"ds-thread-count",attrs:{"data-replace":"1"}},[t._v(t._s(e.viewCount)+"次阅读")])])])])}))])},staticRenderFns:[]}},31:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widget d_textbanner"},[a("a",{staticClass:"style",attrs:{target:"_blank"}},[a("strong",[t._v(t._s(t.TotalData.title))])]),t._v(" "),a("p",{staticClass:"ys"},[a("span",{staticClass:"ys1"},[t._v("本站运行："),a("strong",{staticStyle:{color:"red"}},[t._v(t._s(t.TotalData.total))]),t._v("天")]),t._v(" "),a("span",{staticClass:"ys1"},[t._v("本月更新："),a("strong",{staticStyle:{color:"#f00"}},[t._v(t._s(t.TotalData.monthUpdate))]),t._v(" 篇")]),t._v(" "),a("span",{staticClass:"ys1"},[t._v("共有文章： "),a("strong",{staticStyle:{color:"#f00"}},[t._v(t._s(t.TotalData.allArticle))]),t._v(" 篇")]),t._v(" "),a("span",{staticClass:"ys1",staticStyle:{"padding-bottom":"20px"}})])])},staticRenderFns:[]}},91:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{btn:"提交"}},mounted:function(){$("#btn").click(function(){var t={linksName:$('input[name="linksName"]').val(),linksUrl:$('input[name="linksUrl"]').val(),masterEmail:$('input[name="masterEmail"]').val()};0!=t.linksName.length||0!=t.linksUrl.length||0!=t.masterEmail.length?$.get("http://www.linzantian.com/index/links/add",t,function(t){"0000"==t.res?layer.msg(t.msg):layer.msg(t.msg)}):layer.msg("请填写相关内容")}.bind(this))},components:{},methods:{},props:[""]}},97:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(9),r=s(n),i=a(166),o=s(i),l=a(24),c=s(l),u=a(25),d=s(u),f=a(27),p=s(f),v=a(26),_=s(v),m=a(8),h=s(m),g=a(5),b=s(g),y=a(17),C=s(y),j=a(16),x=s(j),D=a(19),k=s(D),w=a(18),F=s(w),A=a(4),H=s(A);e.default={name:"app",data:function(){return{HeaderData:b.default,HostData:C.default,HostArticleData:x.default,TotalData:k.default,LinksData:F.default,FootersData:H.default,userAgent:!1}},components:{Headers:r.default,Abouts:o.default,Host:c.default,HostArticle:d.default,Total:p.default,Links:_.default,Footers:h.default,Top:function(t){return a.e(0,function(e){var a=[e(39)];t.apply(null,a)}.bind(this))}},mounted:function(){},beforeMount:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?this.userAgent=!1:this.userAgent=!0}}},142:function(t,e){},147:function(t,e){},166:function(t,e,a){var s,n;a(147),s=a(91);var r=a(182);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-3eb34f24",t.exports=s},171:function(t,e,a){var s,n;a(142),s=a(97);var r=a(177);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-00fadb7c",t.exports=s},177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"placeholder"}),t._v(" "),a("Headers",{attrs:{HeaderData:t.HeaderData}}),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"margin-top-15"},[a("div",{staticClass:"float-left index-list"},[a("Abouts")],1),t._v(" "),a("div",{staticClass:"float-right tuijian"},[t.userAgent?a("Host",{attrs:{HostData:t.HostData}}):t._e(),t._v(" "),t.userAgent?a("HostArticle",{attrs:{HostArticleData:t.HostArticleData}}):t._e(),t._v(" "),t.userAgent?a("Total",{attrs:{TotalData:t.TotalData}}):t._e(),t._v(" "),t.userAgent?a("Links",{attrs:{LinksData:t.LinksData}}):t._e()],1)])]),t._v(" "),a("Footers",{attrs:{FootersData:t.FootersData}}),t._v(" "),a("Top")],1)},staticRenderFns:[]}},182:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("h1",{staticClass:"title"},[t._v("About Me")]),t._v(" "),t._m(0),t._v(" "),a("h1",{staticClass:"title"},[t._v("友链申请")]),t._v(" "),a("div",{staticClass:"form-box"},[a("form",[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("label",{attrs:{for:""}},[a("button",{attrs:{type:"button",id:"btn"}},[t._v(t._s(t.btn))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boxs"},[a("p",[t._v("\n\t\t\t嗨！欢迎光临我的个人博客，还希望不要嫌弃我的博客比较丑，工作之余做的，我放弃了对虚拟主机，wordpress,等一些开源的快速建站的博客系统，主要还是为了熟悉vue 框架，koa2框架。可谓两全其美。我还真的把它做成了前后端完全分析的模式，组件化开发。完成到现在这样我已经挺开心了，接下就是完善网站。建博客也算是一种学习的过程吧！收益颇多\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t林赞田，1994年出生，一个喜欢编程，喜欢前端开发，也喜欢写些后端的码农。在编程的路上，每天都感觉很充实，没有了以前的迷茫，每一步都是那么的踏实。如果你经历过一直换工作，直到有一天找到了自己喜欢的工作的那天，你会明白这种感受的。\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t关于本博客，界面是借鉴了 "),a("a",{staticStyle:{"font-weight":"bold"},attrs:{href:"http://www.zbboke.com/"}},[t._v("张兵博客")]),t._v(" 的，实在懒得写样式作图设计，于是把它博客的样式直接复制了部分。后期的时候在慢慢调整吧！"),a("br"),t._v("\n\t\t\t基于 NodeJs 的 koa2框架 做的后台写起来也比较方便，现在的感觉这个框架还是比较新，相比上一代的 express 要整洁不少。相当顺手！"),a("br"),t._v("\n\t\t\t前端界面：在建站的时候接触了vue 于是就毫无疑问就用上了，用上了vue-cli，webpack构建工具，也给开发带来了相当大的便捷，虽然起手的时候简直。。哈哈！"),a("br"),t._v("\n\t\t\t我把整个项目全部放到了 github 上！可以随意使用，（弄个星弄个叉子什么的不用我说了吧！）"),a("br"),t._v("\n\t\t\t网站后台："),a("a",{staticStyle:{"font-weight":"bold"},attrs:{href:"https://github.com/soarL/blog"}},[t._v("https://github.com/soarL/blog")]),a("br"),t._v("\n\t\t\t网站前端："),a("a",{staticStyle:{"font-weight":"bold"},attrs:{href:"https://github.com/soarL/myProject/tree/master/bolg"}},[t._v("https://github.com/soarL/myProject/tree/master/bolg")]),a("br")]),a("h3",[t._v("\n\t\t\t\t单词拼错我也知道，懒得改了就这样把！欢迎随时找我交流，QQ：271105196 \n\t\t\t")]),t._v(" "),a("p")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:""}},[a("input",{attrs:{type:"text",placeholder:"网站名字",onfocus:"this.value='张三'",required:"required",name:"linksName"}}),t._v(" "),a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" 必填\n\t\t\t")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:""}},[a("input",{attrs:{type:"text",placeholder:"网站地址",onfocus:"this.value='http://'",required:"required",name:"linksUrl"}}),t._v(" "),a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" 必填\n\t\t\t")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:""}},[a("input",{attrs:{type:"email",placeholder:"邮箱",required:"required",name:"masterEmail"}}),t._v(" "),a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" 必填\n\t\t\t")])}]}}});
//# sourceMappingURL=about.f809e963ba87506d4ce8.js.map