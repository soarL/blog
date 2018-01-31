<template>
  <div id="app">
    <div class="placeholder"></div>
    <Headers :HeaderData="HeaderData"></Headers>
    <div class="container">
      <div class="margin-top-15">
       <PhotoShow></PhotoShow>
      </div>
    </div>
    <Footers :FootersData="FootersData"></Footers>
    <Top></Top>
  </div>
</template>
<script>
//组件引入
import Headers from 'components/header.vue';
import PhotoShow from "components/PhotoShow.vue";
import Footers from 'components/footer.vue';

//数据来源
import HeaderData from 'common/dataControl/HeaderJson';
import FootersData from 'common/dataControl/FootersJson';

export default {
  name: 'app',
  data(){
    return{
      HeaderData,
      FootersData
    }
  },
  components:{
    Headers,
    Footers,
    PhotoShow,
    Top:resolve=>require(['components/top.vue'],resolve)
  },
  mounted:function(){
  }
}
</script>
<style scoped>
@import "../../common/css/common.css";
</style>