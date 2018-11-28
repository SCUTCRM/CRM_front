<template>
  <div>
    <el-input v-model="input_usr"  id="input_usr" placeholder="请输入账号"></el-input>
    <el-input v-model="input_pwd"  id="input_pwd" placeholder="请输入密码"></el-input>
  </div>
</template>

<script>
export default {
    data(){
        return{
            input_usr:'',
            input_pwd:''
        }
    }
}
</script>

<style>
  #input_usr{
      text-align: center;
      height: 2.7em;
      width: 50%;
  }
  #input_pwd{
      align-self: center;
      width: 50%;
  }
</style>


