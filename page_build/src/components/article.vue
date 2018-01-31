<template>
<div>
	<header class="article-header">
	  <h1 class="article-title"><h1>{{ArticleData.title}} </h1></h1>  
	  <div class="meta">
	    <span class="muted"><i class="icon-user icon12"></i>{{ArticleData.author}}</span>
	    <time class="muted"><i class="ico icon-time icon12"></i>{{ArticleData.time.split("T")[0]}}</time>
	    <span class="muted"><i class="ico icon-eye-open icon12"></i>{{ArticleData.viewCount}}次浏览</span>

	  </div>
	</header>
	<article class="article-content">
		  <blockquote>
		  <p> <strong>摘要：</strong>{{ArticleData.note}}</p>
		  </blockquote>
		  <p v-html="ArticleData.contents">
		  </p>   
		<!--related:end-->
	</article>
	<nav class="article-nav">
		<span class="article-nav-prev">上一篇：<a :href='ArticleData.prev.url'>{{ArticleData.prev.title}}</a> </span>
		<span class="article-nav-next">下一篇：<a :href='ArticleData.next.url'>{{ArticleData.next.title}}</a></span>
	</nav>
	<MessageList :messageListData="ArticleData.message"/>
</div>
</template>

<script>
import MessageList from 'components/messageList.vue';
	export default{
		data(){
			return{
			}
		},
		mounted:function(){
		},
		components:{
    		MessageList
		},
		methods:{

		},
		props:["ArticleData"]
	}
</script>

<style scoped>
.article-header .cate,
.article-header .muted,
.excerpt .muted {
	margin-right: 20px
}
.article-author,
.article-content,
.article-footer,
.article-header {
	position: relative;
	padding: 20px;
	background-color: #fff
}
.article-author,
.article-footer {
	overflow: hidden;
	padding: 15px 20px
}
.article-header {
	margin-bottom: 1px;
	padding: 8px 20px 12px;
	background-color: #F7F7F7
}
.article-title a {
	color: #444
}
.article-content {
	padding-bottom: 5px;
	word-wrap: break-word;
	font-size: 14px;
	line-height: 25px;
	word-break: break-all;
	overflow: hidden;
}
.article-content img:hover {
	border-color: #ddd;
	background-color: #fbfbfb
}
.article-content h3,
.article-content h4， .article-content h5 {
	margin-bottom: 20px;
	padding-bottom: 5px;
	border-bottom: #eee 1px solid
}

.article-content h2 {
	margin: 20px -20px 20px -24px;
	padding: 10px 20px 9px 20px;
	border-left: 4px solid #428BCA;
	background-color: #fbfbfb;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px
}

.article-content h3 {
	font-size: 16px
}

.article-content h4 {
	font-size: 14px
}

.article-content h5 {
	font-size: 12px
}

.article-content ul {
	margin: 0 0 16px 26px
}

.article-content ol {
	margin: 16px
}

.article-content ul li {
	margin-bottom: 10px;
	padding-left: 20px
}

.article-content ol li {
	margin-left: 28px;
	list-style: decimal;
	line-height: 25px
}

.article-content p {
	margin-bottom: 15px
}

.article-content pre {
	word-wrap: break-word;
	word-break: break-all
}

.article-content table {
	margin-bottom: 16px;
	width: 100%;
	border-top: solid 1px #ddd;
	border-left: solid 1px #ddd
}

.article-content table th {
	background-color: #f9f9f9;
	text-align: center
}

.article-content table td,
.article-content table th {
	padding: 5px 10px;
	border-right: solid 1px #ddd;
	border-bottom: solid 1px #ddd
}

.article-content .alignleft {
	float: left;
	margin-right: 10px;
	text-align: left
}

.article-content .aligncenter {
	text-align: center
}

.article-content .alignright {
	float: right;
	margin-left: 10px;
	text-align: right
}

.article-content a {
	color: #428bca
}

.article-content a:hover {
	color: #D9534F
}

.article-footer {
	border-top: 1px solid #f7f7f7;
	background-color: #fff
}

.article-tags {
	margin: 15px
}

.article-tags a {
	display: inline-block;
	margin: 0 1px;
	padding: 2px 7px 1px;
	background-color: #4a4a4a;
	color: #eee;
	font-size: 12px;
	opacity: .9;
	filter: alpha(opacity=90)
}

.article-tags a:hover {
	background-color: #428bca;
	color: #fff;
	opacity: 1;
	filter: alpha(opacity=100)
}

.article-tags a:nth-child(5n) {
	background-color: #4A4A4A
}

.article-tags a:nth-child(5n+1) {
	background-color: #428BCA
}

.article-tags a:nth-child(5n+2) {
	background-color: #5CB85C
}

.article-tags a:nth-child(5n+3) {
	background-color: #D9534F
}

.article-tags a:nth-child(5n+4) {
	background-color: #F0AD4E
}

.tag-clouds {
	overflow: hidden
}

.tag-clouds li {
	float: left;
	overflow: hidden;
	margin-bottom: 12px;
	padding-bottom: 2px;
	width: 25%;
	height: 76px;
	border-bottom: 1px dotted #ddd
}

.tag-clouds strong {
	display: inline-block;
	margin-bottom: 10px;
	margin-left: 2px;
	color: #666
}

.article-info-text {
	margin-top: 15px;
	font-size: 14px
}

.article-content pre,
.comment pre {
	margin: 20px 0;
	padding: 10px 20px;
	border: solid 1px #E6E6E6;
	border-radius: 0;
	background: #eee;
	color: #666;
	font: 12px/20px 'courier new'
}

.article-content blockquote {
	margin: 15px auto;
	padding: 10px 15px 5px;
	border: 1px solid #D6E9C6;
	background-color: #F4FFEF;
	font-size: 12px;
	line-height: 20px;
	border-left-width: 3px
}

.article-content blockquote p {
	margin: 0;
	margin-bottom: 5px;
	padding: 0;
	font-size: 14px;
	line-height: 30px
}

.article-nav {
	overflow: hidden;
	padding: 15px 20px;
	border-top: 1px solid #f2f2f2;
	background-color: #FBFBFB;
	color: #bbb;
	font-size: 14px
}

.article-nav span {
	position: relative;
	float: left
}

.article-nav span.article-nav-next {
	float: right;
	text-align: right
}
</style>