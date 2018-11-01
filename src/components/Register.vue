<template>
    <div class="registe-input">
    <el-row :gutter="20">
        <el-col :span="24">注册邮箱<el-input v-model="input" placeholder="请输入邮箱地址"></el-input></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="24">用户名<el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="24">密码<el-input v-model="input" placeholder="请输入密码"></el-input></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="24">确认密码<el-input v-model="input" placeholder="请再次输入密码"></el-input></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-button round align="center">圆角按钮</el-button>
    </el-row>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>