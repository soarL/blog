<template>
  <div id="app">
    <div class="placeholder"></div>
    <Headers :HeaderData="HeaderData" />
    <div class="container">
      <div class="margin-top-15">
        <div class="float-left index-list">
          <Articles :ArticleData="ArticleData" />
          <Message :submit="submit"/>
        </div>
        <div class="float-right tuijian">
          <Host :HostData="HostData"  v-if="userAgent"/>
          <HostArticle :HostArticleData="HostArticleData"  v-if="userAgent"/>
          <Total :TotalData="TotalData" v-if="userAgent"/>
          <Links :LinksData="LinksData" v-if="userAgent"/>
        </div>
      </div>
    </div>
    <Footers :FootersData="FootersData" v-if="userAgent"/>
     <Top />
  </div>
</template>
<script>
const setting =  require("common/dataControl/setting.js");
//组件引入
import Headers from 'components/header.vue';
import Articles from 'components/Article.vue';
import Message from 'components/Message.vue';
import Host from 'components/host.vue';
import HostArticle from 'components/hostArticle.vue';
import Total from 'components/total.vue';
import Links from 'components/links.vue';
import Footers from 'components/footer.vue';

//数据来源
import HeaderData from 'common/dataControl/HeaderJson';
import ArticleData from 'common/dataControl/ArticleJson';
import HostData from 'common/dataControl/HostJson';
import HostArticleData from 'common/dataControl/HostArticleJson';
import TotalData from 'common/dataControl/TotalJson';
import LinksData from 'common/dataControl/LinksJson';
import FootersData from 'common/dataControl/FootersJson';



function submit(){
  let data = {
    id:ArticleData.id,
    userName:$('#inpName').val(),
    userEmail:$('#inpEmail').val(),
    userAsk:$('#txaArticle').val()
  };
  if(data.userName.length != 0 && data.userEmail.length != 0 && data.userAsk.length != 0){
    $.post(`${setting.serverLocalhost}/index/article/message`,data,function(r){
      if(r.res=='0000'){

        layer.msg(r.msg);
        
        $.get(ArticleData.url,function(r){
          var nowData = r.data.data;
          ArticleData.message.data = JSON.parse(nowData.message);
        })

      }else{
        layer.msg(r.msg);
      }           
    })
  }else {
    layer.msg('请填写相关内容');
  }
};

export default {
  name: 'app',
  data(){
    return{
      HeaderData,
      ArticleData,
      HostData,
      HostArticleData,
      TotalData,
      LinksData,
      FootersData,
      submit,
      userAgent:false
    }
  },
  components:{
    Headers,
    Articles,
    Message,
    Host,
    HostArticle,
    Total,
    Links,
    Footers,
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
@import "../../common/css/common.css";
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