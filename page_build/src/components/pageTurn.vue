<template>
	<nav>
		<div id="pageContainer">
		    <ul class="pagination">
		        <li :class="{'disabled': current == 1}"><a href="javascript:;" v-on:click="setCurrent(1)"> 首页 </a></li>
		        <li :class="{'disabled': current == 1}"><a href="javascript:;" v-on:click="setCurrent(current - 1)"> 上一页 </a></li> 
		        <li v-for="p in grouplist" :class="{'active': current == p.val}"><a href="javascript:;" v-on:click="setCurrent(p.val)"> {{ p.text }} </a></li>
		        <li :class="{'disabled': current == page}"><a href="javascript:;" v-on:click="setCurrent(current + 1)"> 下一页</a></li>
		        <li :class="{'disabled': current == page}"><a href="javascript:;" v-on:click="setCurrent(page)"> 尾页 </a></li>
		    </ul>
		    <ul class="pagination pull-right" v-if='currentMore'>
		        <li><span> 共 {{ total }}  条数据 </span></li>            
		        <li><span> 每页显示 {{ display }}  条数据 </span></li>
		        <li><span> 共 {{ page }} 页 </span></li>
		        <li><span> 当前第 {{ current }} 页 </span></li>
		    </ul>
		</div>
		<div class="clearfix"></div>
	</nav> 
</template>
<script>


	export default{
		data(){
			return{
				 current:this.currents,
			}
		},
		mounted:function(){
			
		},
		components:{

		},
		computed:{
	        page:function() { // 总页数
	            return Math.ceil(this.total / this.display);
	        },
	        grouplist:function(){ // 获取分页页码
	            var len = this.page , temp = [], list = [], count = Math.floor(this.pagegroup / 2) ,center = this.current;
	            if( len <= this.pagegroup ){
	                while(len--){ temp.push({text:this.page-len,val:this.page-len});};
	                return temp;
	            }
	            while(len--){ temp.push(this.page - len);};
	            var idx = temp.indexOf(center);                
	            (idx < count) && ( center = center + count - idx); 
	            (this.current > this.page - count) && ( center = this.page - count);
	            temp = temp.splice(center - count -1, this.pagegroup);                
	            do {
	                var t = temp.shift();
	                list.push({
	                    text: t,
	                    val: t
	                });
	            }while(temp.length);                
	            if( this.page > this.pagegroup ){
	                (this.current > count + 1) && list.unshift({ text:'...',val: list[0].val - 1 });
	                (this.current < this.page - count) && list.push({ text:'...',val: list[list.length - 1].val + 1 });
	            }
	            return list;
	        }
		},
		methods:{
			setCurrent: function(idx) {
            if( this.current != idx && idx > 0 && idx < this.page + 1) {
                this.current = idx;
                this.PageData.PageB = idx*this.display-this.display;
                this.PageData.PageE = idx*this.display;
                setTimeout(function(){
                	$('html,body').animate({scrollTop:$("#pageContainer").offset().top-$("#pageContainer").parent().parent().height()},300);
                },200)
          	  }                
        	}
		},
		props:{
	        total: {            // 数据总条数
	            type: Number,
	            default: 0
	        },
	        display: {            // 每页显示条数
	            type: Number,
	            default: 10
	        },
	        currents: {            // 当前页码
	            type: Number,
	            default: 1
	        },
	        pagegroup: {        // 分页条数 -- 奇数
	            type: Number,
	            default: 5,
	            coerce:function(v){
	                v = v > 0 ? v : 5;
	                return v % 2 === 1 ? v : v + 1;
	            }
	        },
	        PageData:{
	        	type:Object,
	        	default:0
	        },
	        currentMore:{
	        	type:Boolean,
	        	default:true
	        }
		}
	}
</script>
<style scoped>
#pageContainer{
	display: table;
    margin: 0 auto
}
.pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
}
.pagination>li {
    display: inline;
}
.pagination>li:first-child>a, .pagination>li:first-child>span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.pagination>.disabled>a, .pagination>.disabled>a:focus, .pagination>.disabled>a:hover, .pagination>.disabled>span, .pagination>.disabled>span:focus, .pagination>.disabled>span:hover {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
}
.pagination>li>a, .pagination>li>span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
}
.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}
</style>