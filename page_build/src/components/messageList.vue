<template>
	 <section id="comments"> 
	  <!--评论输出--> 
	  <div class="comment-tab"> 
	   <div class="come-comt"> 
	    {{messageListData.title}} 
	    <span id="comment_count">（已有<span style="color:#E1171B">{{messageListData.data.length}}</span>条留言！）</span>
	   </div> 
	  </div> 
	  <div class="shadow-box msg" v-for='(data,index) in messageListData.data' v-if='PageData.PageB <= index && index < PageData.PageE'> 
	   <div class="msgimg"> 
	    <img class="avatar" :src="data.userface" :alt="data.userName" :title="data.userName" /> 
	   </div> 
	   <div class="msgtxt">
	    <div class="msgname">
	     <a rel="nofollow" target="_blank">{{data.userName}} </a>
	     <span class="LevelName aulevel6">游客 </span>
	    </div> 
	    <div class="msgarticle">
	     	{{data.userAsk}}
     		<div class="shadow-box msg" style="visibility: visible; animation-name: fadeInDown;"  v-if='data.msgReply' v-for='reply in JSON.parse(data.msgReply)'>

     		 <div class="msgimg"> 
     		  <img class="avatar" :src="reply.userface" :alt="reply.userName" :title="reply.userName" /> 
     		 </div> 
     		 <div class="msgtxt"> 
     		  <div class="msgname"> 
     		   <a >{{reply.userName}}</a>
     		   <span class="LevelName aulevel1">管理员</span>
     		  </div> 
     		  <div class="msgarticle"> 
     		   	{{reply.userAsk}}
     		  </div> 
     		 </div> 
     		</div>
	    </div> 
	   </div> 
	  </div>
	  <PageTurn v-if='messageListData.data.length > 5' :total='messageListData.data.length' :currents="1" :display='5' :pagegroup='5' :PageData="PageData" :currentMore='false'/>
	 </section> 
</template>
<script>
import PageTurn from 'components/pageTurn.vue';
	export default{
		data(){
			return{
				 PageData:{
				 	PageB:0,
				 	PageE:5
				 }
			}
		},
		mounted:function(){

		},
		components:{
			PageTurn
		},
		methods:{

		},
		props:{
			messageListData:{
				type:Object
			}
		}
	}
</script>
<style scoped>
/*--comments --*/
#comments {background-color:#fff;padding:5px 20px;padding-bottom: 10px;}
#comments h3,#comments h4 {font-size:16px;font-weight:300;line-height:2;padding:0 8px;margin:8px 0;margin-bottom:15px;border-bottom:1px solid #398E9F;color:#398E9F;}
#comments .comment-tab {line-height:25px;border-bottom:1px solid #398E9F;padding:5px 0 5px 5px;}
.comment-text-center {cursor: pointer;text-align: center;margin-top: 10px;font-size: 16px;font-size: 1.15em;color: #338A9C;font-weight: 500;}
.comment-text-center i.fa {position: relative;font-size: 1.2em;top: 1px;}
#comments .come-comt {font-weight:normal;font-size:16px;color: #398E9F;}
span.come-comt i.fa {font-size:1.3em;}
#comments span#comment_count {font-weight:normal;font-size:14px;color:#666;float:none !important;}
#comments h5 {margin:8px;}
#comment h4 span {margin-right:8px;}
#comment h4 span.jubao {float: right;margin-right: 0;}
#comment h4 span.jubao small {color:#338A9C;}
#comment h4 span.jubao small:hover {color:#F05A28;}
#comments .msg {font-size:12px;line-height:22px;border:1px solid #ddd;padding:10px;margin-top:18px;}
#comments .msg:hover {background:#FBFBFB;border-left:1px dotted #bbb;border-right:1px dotted #bbb;}
img.avatar {width:40px;height:40px;position:relative;float:left;margin:4px 6px 0 0;padding:2px;border:1px solid #ddd;background:#fff;cursor: pointer;}
#comments .msg:hover .msgimg img.avatar,
#comments .msg .msgimg:hover img {transform:rotate(360deg);-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);-ms-transform:rotate(360deg);transition:all .5s ease 0s;}
#comments .msg .msgarticle img {margin-top: 0;position: relative;top:4px;}
#cancel-reply small {margin:0 10px;color:#ff6f3d;font-weight:500;}
#comments .msg .msgname {color:#999999;padding-top: 2px;}
#comments .msg .msgarticle {color: #666;padding-top: 4px;min-height: 35px;line-height: 25px;margin-left: 66px;}
#comments .msg .msgarticle .msg {margin-top:10px;margin-bottom: 5px;padding-top:10px;padding-left:12px;border-bottom:none;border-top:none;border:1px solid #E0DDDD;border-radius:5px;box-shadow: 0 0px 0px transparent;}
#comments .msg:hover .commentpost {background:#FBFBFB;}
.msg .msgimg img {clear:left;float:left;margin-right:10px;padding:2px;height:58px;width:58px;border:1px solid #ddd;background-color:#f1f1f1;border-radius:50px;-webkit-border-radius:50px;-moz-border-radius:50px;-webkit-transition:0.4s;-webkit-transition:-webkit-transform 0.4s ease-out;-moz-transition:-moz-transform 0.4s ease-out;transition:transform 0.4s ease-out;}
#comments .msg .msgarticle ul.msgarticle {margin-left:0;}
#comments .msg .msgarticle p {padding-top:10px;}
#backtop i.fa {font-size:1.2em;line-height:0.2em;vertical-align:.0%;text-align:center;}
.shadow-box {border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,0.1);}

.msgtxt .msgarticle {padding-bottom:2px;padding-right:10px;}
.msgtxt {position:relative;font-size: 14px;font-size: 1.2em;}

.msgname .dot {font-size:26px;color:#f4f4f4;float:right;margin-left:15px;font-weight:700;letter-spacing:2px;}
.msg .msgarticle .msg .msgname .dot {display:none;}

.LevelName{color: #fff;border-radius: 3px;padding-left:4px;padding-right: 4px;}
.aulevel6{background-color: #e23737;}
.aulevel1{background-color: #398E9F;}
</style>