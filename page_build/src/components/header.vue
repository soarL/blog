<template>
	<div>
		<header class="header">
		  <div class="navbar">
		  <p class="logo" >
		    <a href="/" title="林赞田个人博客" alt="个人博客"><img style="display: block;" alt="logo" :src="HeaderData.logo"></a>
		  </p>
		  <div class="phone-shade">
		  	
		  </div>
		  <ul class="nav">
			<li class="menu-item" v-for="data in HeaderData.nav">
			  <a :href="data.url" >{{data.name}}</a>
			  <ul class="sub-menu">
			    <li class="menu-item" v-for="datas in data.page"><a :href="datas.url">{{datas.name}}</a></li>
			  </ul>
			</li>
		  </ul>
		  <div class="menu pull-right">
		    <form name="formsearch" action="/plus/search.php" method="get">
		      <input class="search-input" name="q" type="text" id="search-keyword" value="" required="required"  placeholder=" 输入你要找的内容"  />
		      <button type="submit" class="searchbtn search-submit" name="search" title="搜一下"><i class="fa"></i></button>
		    </form>
		  </div>
		  </div>
		</header>
		<div class="phone-menu-on">
			
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		mounted:function(){

			$(".phone-menu-on").click(function(){
				$(".header").stop().fadeToggle(300);
				$(this).toggleClass("phone-menu-off");
			})
		},
		components:{

		},
		methods:{

		},
		props:['HeaderData']
	}
</script>

<style scoped>
.phone-menu-on{
	display: none;
}
.header{
	height: 52px;
}
.nav>li>a {
	display: block
}
.navbar {
	margin: 0 auto;
	width: 1200px;
	height: 52px;
}
.navbar:after,
.navbar:before {
	display: table;
	content: "";
	line-height: 0
}

.navbar:after {
	clear: both
}

.navbar .logo {
	float: left;
	overflow: hidden;
	margin: 0;
	width: 200px;
	height: 52px;
	color: #fff;
	font-weight: 700;
	font-size: 18px;
	line-height: 208px
}
.navbar .logo a {
	display: block;
	overflow: hidden;
	height: 52px;
	color: #fff
}
.navbar .nav {
	position: relative;
	left: 0;
	float: left;
	display: block;
	margin: 0 10px 0 0;
	font-size: 14px
}
.navbar .pull-right {
	float: right;
	margin-right: 0
}
.navbar .nav>li {
	position: relative;
	float: left;
	margin-right: 1px;
	width: 100px;
	text-align: center
}
.navbar .nav li a {
	padding: 16px 20px;
	color: #eee
}
.navbar .nav li a:focus,
.navbar .nav li a:hover {
	background-color: #404040;
	color: #fff
}
.navbar .nav li:hover>ul {
	display: block
}
.navbar .nav>li>ul {
	position: absolute;
	top: 52px;
	left: 0;
	z-index: 10;
	display: none;
	padding-bottom: 0;
	min-width: 100px;
	text-align: left;
	font-size: 12px
}
.navbar .nav>li>ul>li>ul {
	position: absolute;
	top: 0;
	left: 100%;
	z-index: 10;
	display: none;
	padding-bottom: 10px;
	min-width: 140px;
	text-align: left;
	font-size: 12px;
}
.navbar .nav>li>ul>li {
	position: relative;
	float: none;
	margin: 0;
	text-align: center
}
.navbar .nav>li>ul>li>a,
.navbar .nav>li>ul>li>ul>li>a {
	float: none;
	display: block;
	padding: 5px 20px 4px;
	color: #eee
}
.navbar .nav li li a:hover,
.navbar .nav li li.current-menu-item a {
	background-color: #56A856
}
.navbar .nav li ul,
.navbar .nav li:hover a {
	background-color: #404040
}

input.search-input {
	float: left;
	margin-right: -35px;
	padding-right: 35px;
	width: 195px;
	border: 1px solid #ccc;
	border-radius: 30px;
	color: #bbb;
	line-height: 14px
}

input.search-input:focus,
input.search-input:hover {
	border-color: #ccc;
	border-radius: 5px;
	border-radius: 30px;
	color: #444
}
.search-submit {
	float: left
}
.searchbtn {
	width: 16px;
	outline: 0;
	border: none;
	background: url(../../static/img/searchbtn.png) no-repeat 0 6px;
	margin-top: 2px;
    height: 25px;
}
.navbar .menu {
	margin-top: 11px;
	width: 240px
}
.navbar .menu .button {
	margin-top: 1px;
	height: 28px;
	border: 0;
	border-radius: 5px;
	background: 0 0;
	color: #cbcbcb;
	font-size: 14px;
	line-height: 26px
}
.navbar .menu .button:hover {
	color: #333
}
@media screen and (max-width:1000px){
	.logo{
		display: none;
	}
	.navbar{
		width: 100%;
	}
	.navbar .menu {
		display: none;
	}
	.navbar .nav>li{
		float: none;
		background-color: #222;
		width: 100%;
	}
	.navbar .nav{
		width: 100%;
	}
	.navbar .nav li a[data-v-f5291272] {
	    padding:13px 15px;
	}
	.header{
		position: fixed;
		display: none;
	}
	.phone-shade{
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.08);
		transition: all 0.5s;
	}
	.navbar .nav li:hover>ul {
		display: none
	}
	.phone-menu-on{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		position: fixed;
		bottom: 10px;
		left: 10px;
		z-index: 20006;
		background: no-repeat center center;
		background-image: url("../../static/img/homeMeun1.png");
		background-size: 100%;
		display: block;
		cursor: pointer;
	}
	.phone-menu-off{
		background-image: url("../../static/img/homeMeun2.png");
	}
}
</style>