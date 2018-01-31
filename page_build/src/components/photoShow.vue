<template>
	<div class="container" id="photoBox">
		<ul class="pb-box">
			<li class="float-left">
				<Photo :PhotoData='PhotoData.photo1'></Photo>
			</li>
			<li class="float-left">
				<Photo :PhotoData='PhotoData.photo2'></Photo>
			</li>
			<li class="float-left">
				<Photo :PhotoData='PhotoData.photo3'></Photo>
			</li>
			<li class="float-left">
				<Photo :PhotoData='PhotoData.photo4'></Photo>
			</li>
			<li class="float-left">
				<Photo :PhotoData='PhotoData.photo5'></Photo>
			</li>
			<div class="clearfix"></div>
		</ul>
	</div>
</template>
<script>
//组件加载
import Photo from "components/photo.vue";

//数据来源
import PhotoData from "common/dataControl/PhotoJson";

export default{
	data(){
		return{
			PhotoData		
		}
	},
	mounted:function(){

	},
	components:{
		Photo
	},
	methods:{

	}
}
</script>

<style scoped>
	.container{
		margin-top: 20px;
	}
	.float-left{
		width: calc(100% / 5);
	}
</style>