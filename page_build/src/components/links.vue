<template>
	<div class="widget d_textbanner">
	  <a class="style" :href="LinksData.url">
	  	<strong>{{LinksData.title}}</strong>
	  </a>
	  <ul class="friendlyLink">
	    <li v-for="data in LinksData.data"><a :href='data.linksUrl' target='_blank'>{{data.linksName}}</a></li>
	  </ul>
	  <div class="clearfix"></div>
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
		props:["LinksData"]
	}
</script>
<style scoped>
	.widget {
		clear: both;
		margin-bottom: 10px;
		border-radius: 5PX;
		background-color: #fff;
		box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
		min-height: 110px;
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
		clear: both;
	}
	.d_textbanner a {
		display: block;
		padding: 0 15px 15px;
		cursor: pointer;
		margin-top:10px;
		padding-bottom:0;
	}
	.d_textbanner a strong {
		display: inline-block;
		margin: -1px 0 0 -16px;
		padding: 3px 15px 4px;
		color: #fff;
		font-weight: 400;
		font-size: 14px
	}
	.d_textbanner a.style {
		color: #5CB85C
	}

	.d_textbanner a.style:hover {
		border-color: #5CB85C;
		color: #4CAE4C
	}

	.d_textbanner a.style strong {
		border-radius: 5px 0;
		background-color: #5CB85C
	}
	.d_textbanner a.style:hover strong {
		background-color: #4CAE4C
	}
	.friendlyLink{
	  float: left;
	  width:290px;
	  min-height: 110px;
	  margin-top: 10px;
	}
	.friendlyLink a{
	  display: block;
	  width: 118px;
	  height: 35px;
	  float: left;
	  border: 1px #5CB85C solid;
	  padding: 0px !important;
	  line-height: 35px;
	  text-align: center;
	  color: #5CB85C;
	  transition: all 0.5s;
	  margin: 0px 12.5px 10px 12.5px;
	}
	.friendlyLink li a:hover {
	  color: #fff;
	  border-radius: 40px 0px;
	  background: #5CB85C;
	  color: #fff!important;
	}
	@media screen and ( max-width: 1000px) {
		.friendlyLink{
			width: 100%;
		}
		.friendlyLink a{
		  width:calc(100% / 3 - 30px)
		}
	}
</style>