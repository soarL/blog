<template>
  <div class="input_type" :id="form_element_id" :version="str" >
    <label >
      <p>{{tit}}</p>
      <input :type="stype" @focus="look(result)"  :placeholder="hint" v-model="result" :maxlength="max_length" :name="name"><!--@change="check(result)"-->
    </label>
  </div>
</template>

<script>
  export default {
    data:function(){
      return{
        result:'',
        stype:'',
      }
    },
    props:{
      tit:{
        type:String
      },
      hint:{
        type:String
      },
      input_type:{
        type:String,
      },
      form_element_id:{

      },
      str:{

      },
      max_length:{

      },
      name:{
        type:String
      }
    },
    methods:{
      look:function (se) {
        if(this.input_type =='text'){
          this.stype = 'tel'
          let re = /^\d+$/
          if(!re.test(se)){
            console.log('123')

          }
        }
        if(this.input_type =='number_decimal') {
          this.stype = 'password'
          // let re = /^d+.{0,1}d{0,}$/
          // if (!re.test(se)) {
          //   this.$message({
          //     showClose: true,
          //     message: '请输入正整数',
          //     type: 'error'
          //   })
          //   this.result = ''
          // }
        }
      }
      // check:function (res) {
      //   var re = /^\d+$/
      //   if(!re.test(res)){
      //     this.$message({
      //       showClose: true,
      //       message: '格式错误',
      //       type: 'error'
      //     })
      //     this.result = ''
      //   }
      // }
    },
    created(){
      
    },
    mounted(){
    }
  }
</script>

<style>

</style>
