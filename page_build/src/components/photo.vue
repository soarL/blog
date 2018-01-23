<template>
	<div>
		<div class="photo-list" v-for="data in PhotoData">
			<div class="photo-div">
				<img :src="data.imgSrc" :alt="data.title">
			</div>
			<div class="user-photo-box">
				<div class="user-photo">
					<h1>{{data.title}}</h1>
					<h4>{{data.paper}}</h4>	
				</div>
			</div>
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
		props:["PhotoData"]
	}

</script>
<style scoped>
	.photo-list{
		width:calc(100% -10px);
		margin: 10px 5px;
		position: relative;
		transition: all 0.5s;
	}
	.photo-div{
		padding: 4px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2)
	}
	.user-photo-box{
		padding:4px;
		position: absolute;
		bottom:0px;
		left: 0;
		width: auto;
		width: 96.7%;
	}
	.photo-div img{
		width: 100%;
		transition: all 0.4s;
		cursor: pointer;
	}
	.photo-div img:hover{
		transform: scale(0.95);
	}
	.user-photo{
		background-color: rgba(0,0,0,0);
		opacity: 0;
		width: 100%;
		transition: all 0.5s;
		cursor: pointer;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	.user-photo:hover{
		background-color: rgba(0,0,0,0.3);
		opacity: 1;
	}
	.user-photo h1{
		font-size: 13px;
		color: #fff;
		margin: 0;
		line-height: 24px;
		text-indent: 14px;
	}
	.user-photo h4{
		font-size: 12px;
		color: #fff;
		margin: 0;
		text-indent: 20px;
		line-height: 18px;
		padding-bottom: 4px;
		font-weight: normal;
	}

</style>