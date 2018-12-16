<template lang="html">
    <div id="home">
        <System/>
        <el-row>
            <el-col span="3"><p style="font-weight: bold;font-size: 20px">Home</p></el-col>
            <el-col span="12" class="add_wid">
                <el-button type="normal" class="btn addButton dropdown-toggle" data-toggle="dropdown">
                    <strong>Add Widget</strong>
                    <i class="caret"></i>
                </el-button>
            </el-col>
        </el-row>
        <el-row style="padding-bottom: 5%">
            <el-col span="12">
                <el-card class="box-card" style="width: 90%;" v-if="history_show">
                    <div slot="header" class="clearfix">
                        <span>历史纪录</span>
                        <el-select placeholder="请选择" class="select">
                            <el-option value="0">所有记录</el-option>
                            <el-option value="1">评论</el-option>
                            <el-option value="2">更新</el-option>
                        </el-select>
                        <el-button class="card_btn" @click="isShow(history_show)" round icon="el-icon-close"></el-button>
                        <el-button class="card_btn" round icon="el-icon-refresh"></el-button>
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
                        <el-select placeholder="请选择" class="select">
                            <el-option value="mine">我的</el-option>
                            <el-option value="all">所有的</el-option>
                            <el-option-group label="用户">
                                <el-option value="0">bolixinyu</el-option>
                                <el-option value="1">shaohui</el-option>
                            </el-option-group>
                            <el-option-group label="部门">
                                <el-option value="2">市场部</el-option>
                                <el-option value="3">支持部</el-option>
                                <el-option value="4">团队销售</el-option>
                            </el-option-group>
                        </el-select>
                        <el-button class="card_btn" round icon="el-icon-close"></el-button>
                        <el-button class="card_btn" round icon="el-icon-refresh"></el-button>
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
                        <el-button class="card_btn" round icon="el-icon-close"></el-button>
                        <el-button class="card_btn" round icon="el-icon-refresh"></el-button>
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
import System from '../System/System.vue'
    export default {
        components:{
            System
        },
        data(){
            return{
                history_show: true,
                market_show: true,
            }
        },
        methods:{
            isShow: function(card_show){
                console.log(card_show)
                card_show=!card_show
                console.log(card_show)
                this.history_show = card_show;
                /*$.ajax({
                    async:false,
                    success:function(){
                        card_show=!card_show;
                    }
                })*/
            }
        }
    }
</script>

<style lang="css">
    ul, li {
        list-style: none;
    }

    #home {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #1e2d3e;
    }

    .card_btn {
        float: right;
        padding: 3px;
    }

    .nav_list li {
        height: 16px;
        line-height: 16px;
        float: left;
        margin-top: 10px;
        border-right: 1px solid #000;
        padding-left: 12px;
        padding-right: 12px;
    }

    .select {
        position: relative;
        height: 50px;
        width: 100px;
        left: 25%;
    }

    .add_wid {
        position: relative;
        left: 60%;
        top: 10px;
    }

    .clearfix{
        height:40px;
    }
</style>
