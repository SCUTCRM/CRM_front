<template>
    <div class="login">
        <header>
            <title>欢迎使用CRM</title>
        </header>
        <el-container>
            <el-header></el-header>
            <el-main>
                <img src="../img/CRM-Large.png" width="128" height="128">
                <p style="font-size: 30px;font-weight: bold">了解更多关于CRM</p>
                <el-row>
                    <el-col span="10">
                        <el-carousel  :line-height="bannerH+'px'">
                            <el-carousel-item v-for="(item,index) in imgList" :key="index">
                                <img src= item>
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
                    <el-col span="8" style="position:relative;left: 20%">
                        <div class="Login_box" style="width: 80%">
                            <el-form ref="userLoginForm"  :model="Login_box" :rules="rules"    label-position="left" label-width="70px" class="login_box_form">
                                <el-form-item label="用户名" prop="name">
                                    <el-input v-model="Login_box.name" id="user_login_name" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="password">
                                    <el-input v-model="Login_box.password" type="password" id="user_login_password" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form inline="true">
                                    <el-button type="normal" round @click="loginByUser()" style="position: relative;left: 20%">登录</el-button>
                                    <a href="Register.vue" style="position: relative;left: 65%;right: 35%;">忘记密码？</a>
                                </el-form>
                            </el-form>
                            <!-------------------------------
                            <el-form ref="userLoginForm"  :model="Login_box" :rules="rules"    label-position="left" label-width="70px" class="forget-word-box">
                                <el-form-item label="用户名" prop="name">
                                    <el-input auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="邮箱" prop="password">
                                    <el-input auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form inline="true">
                                    <el-button type="normal" round style="position: relative;left: 20%">确认</el-button>
                                    <a href="Register.vue" style="position: relative;left: 65%">返回</a>
                                </el-form>
                            </el-form>
                            -------------->
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer class="vtFooter">
                <i class="footer_s">Powered by vtiger CRM 6.3.0 &nbsp;© 2004 - 2018&nbsp;&nbsp;
                    <a href="//www.vtiger.com" target="_blank">vtiger.com</a>
                    "&nbsp;|&nbsp;"
                    <a href="#" onclick="window.open('copyright.html','copyright', 'height=115,width=575').moveTo(210,620)">
                        Read License</a>
                    <a href="https://www.vtiger.com/crm/privacy-policy" target="_blank">Privacy Policy</a></i>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Loginbeta2",
        data() {
            return {
                bannerH:200,
                imgList:['../img/Login-ad/Viger.JPG','../img/Login-ad/viger2.JPG','../img/Login-ad/viger3.JPG','../img/Login-ad/viger4.JPG','../img/Login-ad/viger5.JPG'],
                Login_box:{
                    name:'',
                    password:''
                },
                rules:{
                    name:[{required:true,message:'用户名不能为空',trigger:'blur'}],
                    password:[{required:true,message:'密码不能为空',trigger:'blur'}],
                }
            }
        },
        methods:{
            loginByUser: function(){
                var that=this;
                this.$refs['userLoginForm'].validate(valid=>{
                    //表单验证成功
                    if(valid){
                        var name=document.getElementById('user_login_name').value;
                        var password=document.getElementById('user_login_password').value;

                        let postData=this.$qs.stringify({
                            name:name,
                            password:password
                        });

                        this.$ajax({
                            method:'post',
                            url:'user/login.do',
                            data: postData
                        }).then(function(reponse){
                            if(reponse.data.success){
                                //跳转
                                var sessionStorage= window.sessionStorage;
                                sessionStorage.setItem("username",reponse.data.name);
                                sessionStorage.setItem("userId",reponse.data.userId);
                                that.$router.push({
                                    path:'/System/home',
                                });
                            }else{
                                that.$msgbox({
                                    title:'登录失败',
                                    message:reponse.data.msg,
                                    type:'error'
                                });
                            }
                        })
                    }
                })
            },
            setBannerH:function(){
                this.bannerH=document.body.clientWidth/4;
            }

        },
        mounted(){
            this.setBannerH()
            window.addEventListener('resize', () => {
                   this.setBannerH()
                   }, false)
        }
    }
</script>

<style scoped>
    .login {
        background-image: url("../img/Login-background.jpg");
        background-size: 100%;
        height: 100%;
        width: 100%;
    }

    .vtFooter {
        position: relative;
        display: block;
        top: 249px;
        width: 100%;
        height: 100px;
        background-color: #fdfffd;
        font-size: 20px;
    }

    .Login_box {
        background-color: white;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        border-radius: 4px;
        text-align: left;
        width: 65%;
        height: 300px;
        border: 1px solid #ddd;
    }

    .footer_s {
        font-style: normal;
        position: relative;
        left: 25%;
        top: 20%;
    }

    .login_box_form {
        position: relative;
        left: 10%;
        width: 80%;
        height: 80%;
        top: 25%;
        font-weight: bold
    }
</style>