<template>
    <div class="widget d_textbanner">
      <a class="style" target="_blank">
        <strong>{{TotalData.title}}</strong>
      </a>
      <p class="ys">
        <span class="ys1">本站运行：<strong style='color:red;'>{{TotalData.total}}</strong>天</span>
        <span class="ys1">本月更新：<strong style="color:#f00;">{{TotalData.monthUpdate}}</strong> 篇</span>
        <span class="ys1">共有文章： <strong style="color:#f00;">{{TotalData.allArticle}}</strong> 篇</span>
        <span class="ys1" style="padding-bottom:20px;"></span>
      </p>
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
		props:["TotalData"]
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
	.ys{
	  width:90%;
	  margin-left:5%;
	  margin-right:5%;
	}
	.ys1{
	  width:60%;
	  font-size:16px;
	  line-height:30px;
	  display:block;
	  margin:auto;
	}
</style>