<template>
    <div class="System">
        <el-container>
            <el-header>
                <!----------------------------------------导航栏菜单--------------------------------->
                <el-menu :router="true" default-active="activeIndex" class="navMenu" mode="horizontal"
                         @select="selectOn">
                    <el-menu-item index="1"><img src="../img/home.png" width="30" height="30">首页</el-menu-item>
                    <el-menu-item index="2"><img src="../img/calendar.png"/>日历</el-menu-item>
                    <el-menu-item index="3"><img src="../img/leads.png"/>线索</el-menu-item>
                    <el-menu-item index="4"><img src="../img/organizations.png"/>组织机构</el-menu-item>
                    <el-menu-item index="5"><img src="../img/contacts.png"/>联系人</el-menu-item>
                    <el-menu-item index="6"><img src="../img/products.png"/>产品</el-menu-item>
                    <el-menu-item index="7"><img src="../img/campaigns.png"/>活动</el-menu-item>
                    <el-menu-item index="8"><img src="../img/opportunities.png"/>机会</el-menu-item>
                    <el-menu-item index="9"><img src="../img/documents.png"/>文件</el-menu-item>
                    <el-menu-item index="10"><img src="../img/tickets.png"/>售后</el-menu-item>
                    <el-submenu index="11">
                        <template slot="title">更多</template>
                        <el-menu-item index="11-1"><img src="../img/FAQ.png"/>帮助</el-menu-item>
                        <el-menu-item index="11-2"><img src="../img/recycleBin.png"/>回收箱</el-menu-item>
                        <el-menu-item index="11-3"><img src="../img/report.png"/>报告</el-menu-item>
                    </el-submenu>

                    <!--相关菜单-->
                    <el-dropdown style="position: relative;left: 20%">
                        <el-button circle><img src="../img/info.png"/></el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>文档说明</el-dropdown-item>
                            <el-dropdown-item>反馈</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <!-------------------------------设置菜单--------------------------------->
                    <el-dropdown style="position: relative;left:20%;">
                        <el-button circle><img src="../img/setting.png"/></el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>CRM设置</el-dropdown-item>
                            <el-dropdown-item>用户设置</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <!------登录登出------>
                    <el-dropdown style="position: relative;left:20%;bottom: 10px">
                        <el-button>
                            <i style="font-style: normal;" v-model="username"></i><i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>偏好设置</el-dropdown-item>
                            <el-dropdown-item>登出系统</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu>
            </el-header>
            <el-row>
                <el-col span="1"><img src="../img/CRM.png"/></el-col>
                <el-col span="2"><h1>首页</h1></el-col>
                <el-col span="6">
                    <el-select style="position: relative;top:10px" @select="handl_select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                                   v-model="searchOptions"></el-option>
                    </el-select>
                    <el-button icon="el-icon-search" circle style="position: relative;top:10px"></el-button>
                </el-col>
            </el-row>
        </el-container>
        <el-main>
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
        }
    }
</script>

<style>
  .System{
    width: 100%;
    height: 100%;
  }
</style>
