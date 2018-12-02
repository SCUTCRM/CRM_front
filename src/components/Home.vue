<template lang="html">
    <div id="home">
        <el-row>
            <el-col span="3"><p style="font-weight: bold;font-size: 20px">Home</p></el-col>
            <el-col span="12" style="position:relative;left: 60%; top: 20px;"><button class="btn addButton dropdown-toggle" data-toggle="dropdown">
                <strong>Add Widget</strong>
                <i class="caret"></i>
            </button></el-col>
        </el-row>
        <el-row style="padding-bottom: 5%">
            <el-col span="12">
                <el-card class="box-card" style="width: 90%;">
                    <div slot="header" class="clearfix">
                        <span>历史纪录</span>
                        <select class="widgetFilter" id="historyType" name="type"
                                style="width:100px;margin-bottom:0px;position: relative;left: 5%">
                            <option value="all">All</option>
                            <option value="comments">Comments</option>
                            <option value="updates">Updates</option>
                        </select>
                        <el-button style="float: right; padding: 3px" round icon="el-icon-close"></el-button>
                        <el-button style="float: right; padding: 3px" round icon="el-icon-refresh"></el-button>
                            </div>
                            <div v-for="o in 4" :key="o" class="text item">
                                {{'记录' + o }}
                            </div>
                        </el-card>
                    </el-col>
                    <el-col span="12">
                        <el-card class="box-card" style="width: 90%;">
                            <div slot="header" class="clearfix">
                                <span>销售记录</span>
                                <select class="widgetFilter" id="owner" name="owner" style="width:70px;margin-bottom:0px;position: relative;left: 5%">
                                    <option value="1">Mine</option>
                                    <option value="all">All</option>
                                    <optgroup label="Users">
                                        <option value="6">Debra Snowden</option>
                                        <option value="5">Michael Young</option>
                                    </optgroup>
                                    <optgroup label="Groups">
                                        <option value="3">Marketing Group</option>
                                        <option value="4">Support Group</option>
                                        <option value="2">Team Selling</option>
                                    </optgroup>
                                </select>
                                <el-button style="float: right; padding: 3px" round icon="el-icon-close"></el-button>
                                <el-button style="float: right; padding: 3px" round icon="el-icon-refresh"></el-button>
                            </div>
                            <div v-for="o in 4" :key="o" class="text item">
                                {{'记录' + o }}
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col span="12">
                        <el-card class="box-card" style="width: 90%;">
                            <div slot="header" class="clearfix">
                                <span>主要事件</span>
                                <el-button style="float: right; padding: 3px" round icon="el-icon-close"></el-button>
                                <el-button style="float: right; padding: 3px" round icon="el-icon-refresh"></el-button>
                            </div>
                            <div v-for="o in 4" :key="o" class="text item">
                                {{'事件' + o }}
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
    </div>
</template>


<script>
export default {
}
</script>

<style lang="css">
  ul,li{
    list-style: none;
  }
  #home{
    position: absolute;
    left:0;
    top:0;
    right: 0;
    bottom: 0;
    background-color: #1e2d3e;
  }
  .left_menu{
    width: 240px;
    height: 100%;
    /*background-color: #20A0FF;*/
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #1e2d3e;
  }
  .logo_box{
    width: 100%;
    height: 180px;
    /*background-color:#f13d46 ;*/
    background: -webkit-linear-gradient(left top, #25ad9f, #4b9bfa);
  }
  .logo{
    height: 90px;
    width: 90px;
    border-radius: 120px;
    background: url(../assets/login.gif) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: calc(50% - 45px);
    top: 25px;
  }
  .logo_title{
    color:#fff;
    position: absolute;
    left:36px;
    top: 125px;
    font-size: 20px;
  }
  .logo_en{
    color:#fff;
    font-size: 10px;
    position: absolute;
    left: 37px;
    top: 145px;
    letter-spacing: 1px;
    opacity: 0.4;
  }
  .menu{
    width: 240px;
  }
  .tac{
    position: absolute;
    top: 180px;
    width: 240px;;
  }
  .w240{
    width: 240px;
  }
  .right_body{
    width: calc(100% - 240px);
    height: 100%;
    position: absolute;
    left: 240px;
    top: 0;
    bottom: 0;
    background-color: #fff;
  }
  .nav{
    width: 100%;
    height: 64px;
    border-top:2px solid #52a1fd;
    border-bottom: 1px solid #f3f3f3;
    background-color: #fff;
    /*background: -webkit-linear-gradient(top, #37a0dd , #3d9eeb);*/
    justify-content: center;
    line-height: 62px;
  }
  .nav_text{
    color:#000;
    font-size: 14px;
    position: absolute;
    left:30px;
  }
  .nav_list{
    position: absolute;
    right: 0;
  }
  .nav_list li{
    height: 16px;
    line-height: 16px;
    float: left;
    margin-top: 10px;
    border-right: 1px solid #000;
    padding-left: 12px;
    padding-right: 12px;
  }
  .list_top_btn{
    float: left;
    margin-top: -8px;
  }
  .nav_list {
    display: block;
    text-decoration: none;
    color:#000;
    font-size: 14px;
  }
  .show_box{
    width: 100%;
    height: calc(100% - 62px);
    position: absolute;
    top: 62px;
  }
  .w24{
    width: 24px;
  }


</style>
