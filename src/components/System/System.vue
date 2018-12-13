<template>
    <div class="System">
        <el-container>
            <el-header>
                <el-menu :router="true" default-active="activeIndex" class="navMenu" mode="horizontal"
                         @select="selectOn"  style="font-size: 18px;font-weight: bold;">
                    <el-menu-item index="1" class="menu_item"><img src="../../img/System/home.png" width="30" height="30">首页</el-menu-item>
                    <el-menu-item index="2" class="menu_item"><img src="../../img/System/calendar.png"/>日历</el-menu-item>
                    <el-menu-item index="3" class="menu_item"><img src="../../img/System/leads.png"/>线索</el-menu-item>
                    <el-menu-item index="/System/Organization" class="menu_item"><img src="../../img/System/organizations.png"/>组织机构</el-menu-item>
                    <el-menu-item index="/System/Prodcut" class="menu_item"><img src="../../img/System/contacts.png"/>联系人</el-menu-item>
                    <el-menu-item index="6" class="menu_item"><img src="../../img/System/products.png"/>产品</el-menu-item>
                    <el-menu-item index="7" class="menu_item"><img src="../../img/System/campaigns.png"/>活动</el-menu-item>
                    <el-menu-item index="8" class="menu_item"><img src="../../img/System/opportunities.png"/>机会</el-menu-item>
                    <el-menu-item index="9" class="menu_item"><img src="../../img/System/documents.png"/>文件</el-menu-item>
                    <el-menu-item index="10" class="menu_item"><img src="../../img/System/tickets.png"/>售后</el-menu-item>
                    <el-submenu index="11" class="menu_item">
                        <template slot="title">更多</template>
                        <el-menu-item index="11-1"><img src="../../img/System/FAQ.png"/>帮助</el-menu-item>
                        <el-menu-item index="11-2"><img src="../../img/System/recycleBin.png"/>回收箱</el-menu-item>
                        <el-menu-item index="11-3"><img src="../../img/System/report.png"/>报告</el-menu-item>
                    </el-submenu>

                    <!--相关菜单-->
                    <el-dropdown style="position: relative;left: 20%">
                        <el-button circle><img src="../../img/System/info.png"/></el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>文档说明</el-dropdown-item>
                            <el-dropdown-item>反馈</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <!-------------------------------设置菜单--------------------------------->
                    <el-dropdown style="position: relative;left:20%;">
                        <el-button circle><img src="../../img/System/setting.png"/></el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>CRM设置</el-dropdown-item>
                            <el-dropdown-item>用户设置</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <!------登录登出------>
                    <el-dropdown class="logout_drop">
                        <el-button>
                            <i style="font-style: normal;" ></i><i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>偏好设置</el-dropdown-item>
                            <el-dropdown-item>登出系统</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu>
            </el-header>
            <el-row>
                <el-col span="1"><img src="../../img/System/CRM.png"/></el-col>
                <el-col span="2"><h1>首页</h1></el-col>
                <el-col span="12" style="position: relative;left:20%">
                    <el-select v-model="condition" style="position: relative;top:10px;width: 150px; font-weight: bold" >
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                                   ></el-option>
                    </el-select>
                    <el-input v-model="input" placeholder="请输入内容" class="search_input"></el-input>
                    <el-button @click="handSelect" icon="el-icon-search" circle class="search_btn" type="primary"></el-button>
                </el-col>
            </el-row>
        </el-container>
        <el-main style="background-color: gray">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-main>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                condition:'所有记录',
                options:[{
                    value:'default',
                    label:'所有记录'
                },{
                    value:'选项1',
                    label:'机会'
                },{
                    value:'选项2',
                    label:'联系人'
                }, {
                    value: '选项3',
                    label: '组织机构'
                },{
                    value:'选项4',
                    label:'线索'
                },{
                    value:'选项5',
                    label:'文件'
                },{
                    value:'选项6',
                    label:'日历'
                },{
                    value:'选项7',
                    label:'售后'
                },{
                    value:'选项8',
                    label:'产品'
                },{
                    value:'选项9',
                    label:'帮助'
                },{
                    value:'选项10',
                    label:'活动'
                }]
            }
        },
        methods:{
        }
    }
</script>

<style>
    .System {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .menu_item {
        padding-right: 30px;
        font-size: large;
        color: black;
    }

    .logout_drop {
        position: relative;
        left: 20%;
        bottom: 10px
    }

    .search_input {
        width: 300px;
        position: relative;
        top: 10px;
    }

    .search_btn {
        position: relative;
        top: 10px
    }
</style>
