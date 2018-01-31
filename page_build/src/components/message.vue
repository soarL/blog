<template>
	 <section id="comments"> 
	  <!--评论框--> 
	  <div class="commentpost wow fadeInDown" id="comment" style="visibility: visible; animation-name: fadeInDown;"> 
	   <h4><i class="fa fa-pencil"></i>发表留言</h4> 
	   <form id="frmSumbit"> 
	    <div class="comt-box"> 
	     <div class="form-group liuyan form-name">
	      <input type="text" id="inpName" class="text" name="inpName" tabindex="1" value="访客" placeholder="名称（必填）" />
	     </div> 
	     <div class="form-group liuyan form-email">
	      <input type="email" id="inpEmail" class="text" name="inpEmail" tabindex="2" placeholder="邮箱" /> 
	     </div> 
	    </div> 
	    <!--verify--> 
	    <textarea placeholder="请遵守相关法律与法规，文明留言。O(∩_∩)O~~" name="txaArticle" id="txaArticle" class="text input-block-level comt-area" cols="50" rows="4" tabindex="5" ></textarea> 
	    <p>
	      <input type="button" value="提交" class="button" v-on:click='submit'/>
	    </p> 
	   </form> 
	  </div>
	  <!--评论框结束--> 
	 </section> 
</template>
<script>
import MessageList from 'components/messageList.vue';
	export default{
		data(){
			return{
				
			}
		},
		mounted:function(){

		},
		components:{
			MessageList
		},
		methods:{

		},
		props:['submit']
	}
</script>
<style scoped>
/*--comments --*/
#comments {background-color:#fff;padding:5px 20px;padding-bottom: 10px;}
#comments h3,#comments h4 {font-size:16px;font-weight:300;line-height:2;padding:0 8px;margin:8px 0;margin-bottom:15px;border-bottom:1px solid #398E9F;color:#398E9F;}
#comments .comment-tab {line-height:25px;border-bottom:1px solid #398E9F;padding:5px 0 5px 5px;}
#comments .msg:hover .commentpost {background:#FBFBFB;}
.comt-box {height:100%;overflow:hidden;}
.form-group {margin-bottom:15px;margin-top:8px;}
.liuyan {float:left;width:32.32%;position:relative;width:32%;margin-bottom:0px;margin-top:8px;}
.liuyan:last-child {margin-bottom:10px;}
.form-name {margin-right:10px;margin-left:2px;}
.form-email {margin-right:10px;}
#frmSumbit #inpName,#frmSumbit #inpEmail,#frmSumbit #inpHomePage,#frmSumbit #inpVerify {border:1px solid #eee;padding-left:10px;width:95.55%;height:30px;line-height:44px;color:#BBB1C6;background:#FFFFFF;margin-bottom:0px;}
#txaArticle {width:99%;height:120px;line-height: 180%;border:1px solid #ddd;padding:5px 5px 5px 10px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;}
#frmSumbit .button {color:#FFFFFF;background-color:#398E9F;height:30px;width:88px;border-top-width:0;border-right-width:0;border-bottom-width:0;border-left-width:0;border-radius:4px;}
.LevelName{background-color: #2F889A;color: #fff !important;font-size: 12px;margin: 0 5px 0 1px;opacity: 0.9;padding: 2px 7px 2.5px;border-radius: 3px;cursor: pointer;}
.aulevel1{background-color: #de3009}
</style>