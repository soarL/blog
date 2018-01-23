<template>
	<footer class="footer">
	  <div class="footer-inner">
	    <div style="padding:0 20px;overflow:hidden;">
	      <div class="copyright pull-left">
	        <a href="javescript:">{{FootersData.title}}</a> | 
	        <a href="javescript:">学习</a> | 
	        <a href="javescript:">娱乐</a> | 
	        <a href="javescript:">成长</a> | 
	        <a href="javescript:">copyright @2017</a> | 
	        <a href="javescript:">QQ  271105196号</a>
	        <a target="_blank" href="javescript:">网站地图</a>
	      </div>
	    </div>
	  </div>
	</footer>
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
		props:["FootersData"]
	}
</script>

<style scoped>
.footer {
	position: relative;
        bottom:0px;
	z-index: 1;
	clear: both;
	width: 100%;
	background: #414141;
	color: #ddd;
	text-shadow: 0 -1px 0 #333
}
.footer-inner {
	margin: 0 auto;
	padding: 16px 0 14px;
	width: 100%;
	max-width: 1200px;
	border-left: 0 solid #428bca;
	background-color: #414141;
	color: #aaa;
	text-shadow: 0 -1px 0 #333
}
.footer-inner:after,
.footer-inner:before {
	display: table;
	content: "";
	line-height: 0
}

.footer-inner:after {
	clear: both
}
.footer a {
	color: #aaa
}
.footer a:hover {
	color: #ddd;
	text-decoration: underline
}
</style>