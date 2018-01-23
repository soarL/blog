<template>
  <div id="app">
    <div class="placeholder"></div>
    <Headers :HeaderData="HeaderData"></Headers>
    <div class="container">
      <div class="margin-top-15">
        <div class="float-left index-list">
          <MessageList :messageListData="messageListData"/>
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
    <Footers :FootersData="FootersData" />
    <Top />
  </div>
</template>
<script>
const setting =  require("common/dataControl/setting.js");
//组件引入
import Headers from 'components/header.vue';
import Message from 'components/Message.vue';
import MessageList from 'components/messageList.vue';
import Host from 'components/host.vue';
import HostArticle from 'components/hostArticle.vue';
import Total from 'components/total.vue';
import Links from 'components/links.vue';
import Footers from 'components/footer.vue';

//数据来源
import HeaderData from 'common/dataControl/HeaderJson';
import HostData from 'common/dataControl/HostJson';
import messageListData from 'common/dataControl/messageListJson';
import HostArticleData from 'common/dataControl/HostArticleJson';
import TotalData from 'common/dataControl/TotalJson';
import LinksData from 'common/dataControl/LinksJson';
import FootersData from 'common/dataControl/FootersJson';


function submit(){
  let data = {
    userName:$('#inpName').val(),
    userEmail:$('#inpEmail').val(),
    userAsk:$('#txaArticle').val()
  };
  if(data.userName.length != 0 && data.userEmail.length != 0 && data.userAsk.length != 0){
    $.post(`${setting.serverLocalhost}/index/message/add`,data,function(r){
      if(r.res=='0000'){
        layer.msg(r.msg);
       $.get(setting.serverLocalhost+"/index/message/read",function(r){
          messageListData.data = r.data;
          $('#inpName').val('');
          $('#inpEmail').val('');
          $('#txaArticle').val('');
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
      HostData,
      HostArticleData,
      messageListData,
      TotalData,
      LinksData,
      FootersData,
      submit,
      userAgent:false
    }
  },
  components:{
    Headers,
    Message,
    MessageList,
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