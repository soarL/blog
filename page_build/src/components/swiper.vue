<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='data in SwiperData'><img :src="data.src" :alt="data.alt"></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from '../../static/js/swiper.min.js';
	export default{
		data(){
			return{
				 
			}
		},
		mounted:function(){
			var swiper = new Swiper('.swiper-container', {
			  pagination: '.swiper-pagination',
			  paginationClickable: true,
			  spaceBetween: 30,
			  centeredSlides: true,
			  autoplay: 4000,
			  autoplayDisableOnInteraction: false,
			  loop: true
			});
		},
		components:{

		},
		beforeMount:function(){

		},
		methods:{

		},
		props:['SwiperData']
	}
</script>
<style scoped>
@import "https://lib.f2ex.cn/cdn/swiper/3.3.1/css/swiper.min.css";

</style>