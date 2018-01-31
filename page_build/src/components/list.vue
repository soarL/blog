<template>
<div class="list">
	<h2 class="title" style="background:#F7F7F7;">{{ListData.title}}</h2>
	<article class="excerpt" v-for="(data,index) in ListData.data" v-if='PageData.PageB <= index && index < PageData.PageE'>
	  <div class="focus" v-if="userAgent">
	    <a :href="data.url" class="thumbnail">
	      <img :src="data.imgSrc" :alt="data.newSketch"/>
	    </a>
	  </div>
	  <header>
	    <h2>
	      <a :href="data.url" :title="data.newsName" >{{data.newsName}}</a>
	    </h2>
	  </header>
	  <p class="note">{{data.newSketch}}</p>
	  <p class="detail">
	    <span class="muted"><i class="icon-user icon12"></i> {{data.newsAuthor}}</span>
	    <span class="muted"><i class="ico icon-time icon12"></i> {{data.newsTime.split("T")[0]}}</span>
	    <span class="muted"><i class="ico icon-eye-open icon12"></i> {{data.viewCount}}次浏览</span>
	    <span class="muted"> 个人博客：[<a href='Javascript:'> {{data.classify}}</a>]</span>
	  </p>
	</article>
	<PageTurn v-if='ListData.data.length > 10' :total='ListData.data.length' :currents="1" :display='10' :pagegroup='10' :PageData="PageData" :currentMore='true'/>
</div>
</template>
<script>
import PageTurn from 'components/pageTurn.vue';
	export default{
		data(){
			return{
				 PageData:{
				 	PageB:0,
				 	PageE:10
				 },
				 userAgent:false
			}
		},
		mounted:function(){
		},
		components:{
			PageTurn
		},
		methods:{

		},
		beforeMount:function(){
		  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		    this.userAgent = false;
		  }else {
		    this.userAgent = true;
		  }
		},
		props:["ListData"]
	}
</script>

<style scoped>
.title {
  position: relative;
  margin: 0;
  padding: 6px 20px;
  height: 20px;
  border-radius: 5px 5px 0 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px
}
.detail{
  margin-top:40px;
}
.excerpt {
	position: relative;
	margin-bottom: 1px;
	padding: 20px 20px 40px 256px;
	border-left: solid 4px #fff;
	background-color: #fff
}
.excerpt header {
	margin: 5px 40px 5px 0
}
.excerpt .focus {
	position: relative;
	float: left;
	margin-top: 0;
	margin-left: -240px;
	width: 220px;
	text-align: center
}
.excerpt .thumbnail img {
	display: block;
	width: 220px;
	height: 150px
}
.excerpt .thumbnail:hover {
	border-color: #ccc;
	border-bottom-color: #bbb
}
.excerpt h2 {
	position: relative;
	top: 1px;
	display: inline;
	margin: 0;
	font-weight: 700;
	font-size: 16px;
	line-height: 25px
}
.excerpt h2 strong {
	margin-right: 10px;
	color: #8CAC52
}
.excerpt .note {
	color: #888;
	font-size: 14px;
	line-height: 24px
}
.excerpt .itag a {
	display: inline-block;
	margin-right: 3px;
	padding: 0 5px;
	border-color: #e2e2e2 #ddd #ddd #e2e2e2;
	border-style: solid;
	border-width: 1px;
	border-radius: 1px;
	line-height: 18px
}
@media screen and (max-width:1000px){
	.excerpt{
		padding: 10px 10px 9px 12px;
		margin-bottom: 10px;
		box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.08)
	}
	.detail{
		margin-top: 13px;
	}
}
</style>