<template>
    <div>
        <div>
            <system/>
        </div>
        <div class="Organization">
            <div class="navBar">
                <el-row>
                    <el-col span="6">
                        <el-menu
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                            <el-menu-item index="1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">组织列表</span>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <i class="el-icon-document"></i>
                                <span slot="title">公告栏</span>
                            </el-menu-item>
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <el-collapse-item name="1">
                                    <template slot="title">
                                    <span class="collapse">
                                    <i class="header-icon el-icon-info"></i>
                                    最近更改
                                    </span>
                                    </template>
                                </el-collapse-item>
                            </el-collapse>
                        </el-menu>
                    </el-col>
                    <el-col span="18">
                        <Organization_table/>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import Organization_table from "../System/Organization_table"
    import System from "../System/System"

    export default {
        name: "Organization",
        data() {
            return {}
        },
        components:{
            Organization_table,
            System
        }
    }
</script>

<style scoped>
.collapse{
    position: relative;
    left: 25px;
}
</style>