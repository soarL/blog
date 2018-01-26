<template>
  <div id="app">
<!--     <div class="placeholder"></div>
    <Headers :HeaderData="HeaderData"></Headers>
    <div class="container">
      <Swiper :SwiperData="SwiperData" v-if="userAgent" />
      <div class="margin-top-15">
        <div class="float-left index-list">
          <Recommend :RecommendData="RecommendData" v-if="userAgent" />
          <List :ListData="ListData" />
        </div>
        <div class="float-right tuijian">
          <Host :HostData="HostData"  v-if="userAgent" />
          <HostArticle :HostArticleData="HostArticleData"  v-if="userAgent" />
          <Total :TotalData="TotalData"  v-if="userAgent" />
          <Links :LinksData="LinksData"  v-if="userAgent" />
        </div>
      </div>
       <Links :LinksData="LinksData"  v-if="!userAgent" />
    </div>
    <Footers :FootersData="FootersData" />
     <Top /> -->
    <Sec :tit="标题" :hint="请输入密码" :input_type="text" :str="123" :form_element_id="123" :max_length=213 :name="name"/>
  </div>
</template>
<script>
//组件引入
import Headers from 'components/header.vue';
import Swiper from 'components/swiper.vue';
import Recommend from 'components/recommend.vue';
import List from 'components/list.vue';
import Host from 'components/host.vue';
import HostArticle from 'components/hostArticle.vue';
import Total from 'components/total.vue';
import Links from 'components/links.vue';
import Footers from 'components/footer.vue';
import Sec from 'components/Sec.vue';

//数据来源
import HeaderData from 'common/dataControl/HeaderJson';
import SwiperData from 'common/dataControl/SwiperJson';
import RecommendData from 'common/dataControl/RecommendJson';
import ListData from 'common/dataControl/ListJson';
import HostData from 'common/dataControl/HostJson';
import HostArticleData from 'common/dataControl/HostArticleJson';
import TotalData from 'common/dataControl/TotalJson';
import LinksData from 'common/dataControl/LinksJson';
import FootersData from 'common/dataControl/FootersJson';

export default {
  name: 'app',
  data(){
    return{
      HeaderData,
      SwiperData,
      RecommendData,
      ListData,
      HostData,
      HostArticleData,
      TotalData,
      LinksData,
      FootersData,
      userAgent:false,
      text:"text"
    }
  },
  components:{
    Headers,
    Swiper,
    Recommend,
    List,
    Host,
    HostArticle,
    Total,
    Links,
    Footers,
    Sec,
    Top:resolve=>require(['components/top.vue'],resolve)
  },
  mounted:function(){
  },
  beforeMount:function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.userAgent = false;
    }else {
      this.userAgent = true;
    }
  }
}
</script>
<style scoped>
@import "common/css/common.css";
.index-list{
  width:74.5%;
}
.tuijian{
  width:24.3%;
}
@media screen and (max-width:1000px){
  #app .container{
    margin-top: 0px;
  }
  .index-list{
    width: 100%;
  }
  .tuijian{
    display: none;
  }
}
</style>