<template>
	<div class="widget d_postlist">
	  <h3 class="widget_tit">{{HostArticleData.title}}</h3>
	  <ul>
	    <li v-for="data in HostArticleData.data">
	      <a :href="data.url">
	        <span class="thumbnail">
	          <img :src="data.imgSrc" :alt="data.newsName" :title="data.newsName"/>
	        </span>
	        <span class="text">{{data.newsName}}</span>
	        <span class="muted">{{data.newsTime.split("T")[0]}}</span>
	        <span class="muted">
	            <span class="ds-thread-count" data-replace="1">{{data.viewCount}}次阅读</span>
	        </span>
	      </a>
	    </li>
	  </ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				 
			}
		},
		mounted:function(){
		},
		components:{

		},
		methods:{

		},
		props:["HostArticleData"]
	}
</script>
<style scoped>
	.widget {
		clear: both;
		margin-bottom: 10px;
		border-radius: 5PX;
		background-color: #fff;
		box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
	}
	.widget h3 {
		border-radius: 5px 5px 0 0;
		position: relative;
		margin: 0;
		padding: 11px 15px 14px;
		border-bottom: 1px solid #eaeaea;
		background-color: #fbfbfb;
		font-weight: 400;
		font-size: 18px;
		line-height: 20px
	}
	.widget h3 .btn {
		position: absolute;
		top: 5px;
		right: 10px;
		padding: 2px 7px 1px;
		font-weight: 400
	}
	.widget ul:after,
	.widget ul:before {
		display: table;
		content: "";
		line-height: 0
	}
	.widget ul:after {
		clear: both
	}
	.d_postlist li a {
		position: relative;
		display: block;
		overflow: hidden;
		margin-left: -3px;
		padding: 10px 15px 10px 105px;
		border-bottom: solid 1px #eee;
		border-left: 3px solid transparent;
		font-size: 14px
	}

	.d_postlist li a:hover {
		background-color: #fafff8;
		border-left-color: #81c53f
	}

	.d_postlist .text {
		display: block;
		margin-top: -4px
	}

	.d_postlist .thumbnail {
		float: left;
		margin-left: -90px
	}

	.d_postlist .thumbnail img {
		width: 80px;
		height: 55px
	}
	.d_postlist .muted {
		margin-right: 20px;
		font-size: 12px
	}
</style>