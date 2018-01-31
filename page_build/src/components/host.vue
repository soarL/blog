<template>
	<div class="widget">
	 	<h3 class="widget_tit">{{HostData.title}}</h3>
		<div class="tag_list">
		  <ul>
		    <li v-for="data in HostData.data"><a :href="data.url">{{data.value}}</a></li>
		  </ul>
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
		},
		components:{

		},
		methods:{

		},
		props:['HostData']
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
	.tag_list ul {
		padding: 20px;
	}
	.tag_list ul li {
		float: left;
		display: block;
		margin-right: 8px;
		margin-bottom: 15px
	}
	.tag_list ul li{
		display: inline-block;
		padding: 4px 14px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background: #fff;
		color: #666;
		font-size: 12px;
		transition: all .3s ease 0s
	}
	.tag_list ul li:hover {
		background: #fff;
		color: #00c3b6;
		border: 1px solid #00c3b6
	}
</style>
