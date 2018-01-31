<template>
	<div id="toTop">
		<ul>
			<li class="backBtn" title="返回顶部"><a href="javascript:;" class="icon_backTo"></a></li>
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
		    $(function(){
		        $(window).scroll(function(){
		            if($(this).scrollTop() > 300){
		                $('.backBtn').fadeIn();
		            }else{
		                $('.backBtn').fadeOut();
		            }
		        });
		        $('.backBtn').click(function(){
		            $('body,html').animate({scrollTop:0},300);
		        })
		    })
		},
		components:{

		},
		methods:{

		}
	}
</script>
<style scoped>
#toTop {
	position: fixed;
	right: 0;
	bottom: 50px;
	z-index: 10;
	width: 54px;
	min-height: 72px;
	color: #fff;
	text-align: center;
	font-size: 14px;
	-webkit-transition: all .2s ease-out;
	-moz-transition: all .2s ease-out;
	transition: all .2s ease-out;
}

#toTop>ul li {
	position: relative;
	margin-bottom: 10px;
	width: 54px;
	height: 54px
}

#toTop>ul li a {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: block;
	padding: 5px;
	border-radius: 5px;
	background: #666;
	color: #fff;
	text-align: center;
	font-size: 16px;
	line-height: 28px
}
#toTop>ul li.backBtn {
	display: none
}
#toTop>ul li.backBtn a {
	display: block;
	padding: 0;
	width: 54px;
	height: 54px;
	background: url(../../static/img/icon_backto.png) no-repeat 0 -46px;
	opacity: .8;
}
#toTop>ul li.backBtn a:hover {
	opacity: 1;
	-webkit-transition: all .2s ease-out;
	-moz-transition: all .2s ease-out;
	transition: all .2s ease-out
}
@media screen and (max-width:1000px){
	#toTop {
		right: 20px;
		bottom: 30px;
	}
}
</style>