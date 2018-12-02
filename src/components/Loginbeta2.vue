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
                        <el-carousel style="line-height: 100px">
                            <el-carousel-item>
                                <img src="../img/Login-background.jpg" height="300px" width="960px">
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
                    <el-col span="8" style="position:relative;left: 20%">
                        <div class="Login_box" style="width: 80%">
                            <el-form label-position="left" label-width="70px" style="position:relative;left: 10%;width:80%;height: 80%; top: 25%;font-weight: bold">
                                <el-form-item label="用户名">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form inline="true">
                                    <el-button type="normal" style="position: relative;left: 20%">登录</el-button>
                                    <a href="Register.vue" style="position: relative;left: 65%">忘记密码？</a>
                                </el-form>
                            </el-form>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer class="vtFooter">
                <i style="font-style: normal;position: relative;left:25%;top: 20%;">Powered by vtiger CRM 6.3.0 &nbsp;© 2004 - 2018&nbsp;&nbsp;
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
        name: "Lohinbeta2",
        data() {
            return {}
        }
    }
</script>

<style scoped>
.login{
    background-image: url("../img/Login-background.jpg");
    background-size: 100%;
    height: 100%;
    width: 100%;
}
.vtFooter{
    position: relative;
    display: block;
    top:249px;
    width: 100%;
    height: 100px;
    background-color: #fdfffd;
    font-size: 20px;
}
#info{
    margin: 0 0 9px;
    font-family: "Helvetica Neue",Arial, Helvetica, sans-serif;
    line-height: 18px;
}
    .Login_box{
        background-color: white;
        box-shadow: 0 1px 10px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.1)inset;
        border-radius: 4px;
        text-align: left;
        width: 65%;
        height: 300px;
        border: 1px solid #ddd;
    }
</style>