<template>
    <div class="registe-input">
        <el-container style="height: 100%;">
            <el-aside width="30%" style="height:100%;background-color: rgba(191,187,187,0.53);opacity: 60%">
                <img src="../img/hubspot-crm.png" height="40%" width="100%" style="position:relative;top: 35%;
                opacity: 90%">
            </el-aside>
            <el-container style="width: 100%;background-color: rgba(76,72,72,0.53)">
                <el-header height="10%"
                           style="width:100%;background-color: rgba(255,255,248,0.11);color: #000000;opacity: 20%">
                    <h1 style="text-align: center;font-family: 'Bookman Old Style';font-size: 30px">欢迎使用CRM</h1>
                </el-header>
                <el-main>
                    <div class="inputs">
                        <el-row :gutter="20">
                            <el-col :span="12" class="register email">注册邮箱:
                                <el-input v-model="input" placeholder="请输入邮箱地址" style="color: blue"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="12" class="register username">用户名:
                                <el-input v-model="input" placeholder="请输入用户名"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="12" class="register pwd1">新密码:
                                <el-input v-model="input" placeholder="请输入密码"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="12" class="register pwd2">
                                确认密码:
                                <el-input v-model="input" placeholder="请再次输入密码"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="12">
                            <el-button round class="register button">确认</el-button>
                        </el-row>
                    </div>
                </el-main>
                <el-footer height="10%" style="width: 100%;background-color: rgba(245,245,245,0.11);">
                    <i style="position: relative;top: 10%;left: 30%;padding-left: 10px">
                        <i style="font-style: normal">有问题？联系我们:</i>
                        <i style="position: relative;top: 10px">
                            <a href="https://github.com/SCUTCRM/CRM_front"><img src="../img/GitHub.png" height="37px"
                                                                            width="37px"/></a>
                        <img src="../img/QQ.png" @click="contact_QQ" width="40px" height="40px"
                             style="position:relative; top: 3px;"/>
                        <img src="../img/email.png" @click="contact_email" width="40px" height="40px"
                             style="position: relative; top: 2px;"/>
                        </i>
                    </i>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {}
        },
        methods:{
            contact_QQ:function () {
                this.$alert('2818229676','请通过QQ联系我',{
                    confirmButtonText:'我知道了'
                });
            },
            contact_email:function () {
                this.$alert('2818229676@qq.com','请通过邮件联系我',{
                    confirmButtonText:'我知道了'
                });
            }
        }
    }
</script>

<style scoped>
    .registe-input{
        position: absolute;
        padding: 0;
        /*background-color: #58B7FF;*/
        background: -webkit-linear-gradient(left top, #ffffff, #ffffff);
        margin:0;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
    }

    .inputs{
        margin-top: 5%;
    }
    .register{
        position: relative;
        padding: 0;
        width: 50%;
        height: 100%;
        left: 0;
        right: 0;
    }
    .email{
        position: relative;
        left:35%;
        width: 30%;
        text-align: center;
        color: ivory;
    }
    .username{
        position: relative;
        top: 30%;
        left:35%;
        width: 30%;
        text-align: center;
        color: ivory;
    }
    .pwd1{
        position: relative;
        top: 30%;
        left:35%;
        width: 30%;
        text-align: center;
        color: ivory;
    }
    .pwd2{
        position: relative;
        top: 30%;
        left:35%;
        width: 30%;
        text-align: center;
        color: ivory;
    }
    .button{
        position: relative;
        left:45%;
        height:30px;
        width:10%;
        top:10px;
    }

</style>