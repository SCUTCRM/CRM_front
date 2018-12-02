<template>
    <div class="Organization">
        <div class="navBar">
            <el-row>
                <el-col span="8">
                    <el-menu
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose">
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">组织列表</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-document"></i>
                            <span slot="title">公告栏</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">最近更改</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
                
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Organization",
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>