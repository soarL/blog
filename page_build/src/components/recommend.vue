<template>
	<div class="sticky">
	  <h2 class="title" style="background:#F7F7F7;">{{RecommendData.title}}</h2>
	  <ul>
	    <li v-for ="data in RecommendData.data">
	      <a :href="data.url" target="_blank">
	        <img :src="data.imgSrc" :alt="data.newsName" />
	         <h3>{{data.newsName}}</h3>
	         <p class="muted">{{data.newSketch}}</p>
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
		props:['RecommendData']
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
	.sticky {
		overflow: hidden
	}
	.sticky ul {
		margin-right: -2px
	}
	.sticky li {
		float: left;
		margin-bottom: 1px;
		width: 50%
	}
	.sticky li span {
		margin-left: -20px
	}
	.sticky li a {
		display: block;
		margin-right: 1px;
		padding: 5px 20px 2px 140px;
		background-color: #fff
	}
	.sticky h3{
		overflow: hidden;
		margin: 10px 0 0 0;
		height: 25px;
		font-weight: 700;
		font-size: 14px
	}
	.sticky img {
		float: left;
		margin: 8px 0 0 -120px;
		width: 110px;
		height: 80px
	}
	.sticky p {
		overflow: hidden;
		height: 56px
	}
	.sticky a:hover {
		background-color: #fafff8
	}
	.sticky a:hover span {
		background-color: #428BCA
	}
</style>