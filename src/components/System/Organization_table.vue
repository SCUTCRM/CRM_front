<template>
    <div class="organization_module">
        <el-row>
            <el-col span="3">
                <el-dropdown>
                    <el-button type="primary">
                        操作<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>编辑</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                        <el-dropdown-item>添加评论</el-dropdown-item>
                        <el-dropdown-item>发送邮件</el-dropdown-item>
                        <el-dropdown-item>发送短信</el-dropdown-item>
                        <el-dropdown-item>转移所有权</el-dropdown-item>
                        <el-dropdown-item divided>导入</el-dropdown-item>
                        <el-dropdown-item>导出</el-dropdown-item>
                        <el-dropdown-item>查重</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
            <el-col span="4">
                <el-button icon="el-icon-plus">
                    添加组织
                </el-button>
            </el-col>
            <el-col span="6">
                <el-dropdown class="search-field">
                    <el-button class="search-field">
                        所有组织<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-input suffix-icon="el-icon-search"></el-input>
                        <el-dropdown-item>这周新的</el-dropdown-item>
                        <el-dropdown-item>期望账户</el-dropdown-item>
                        <el-dropdown-item divided>
                            <span icon="el-icon-plus"></span>
                            添加新域
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
            <el-col span="1">
                <span class="top-menu">
                    1 to 20
                </span>
            </el-col>
            <el-col span="1">
                <el-button round icon="el-icon-refresh">
                </el-button>
            </el-col>
            <el-col span="5">
                <el-breadcrumb separator="|" class="top-menu">
                    <el-breadcrumb-item :to="{ path: '/' }"><</el-breadcrumb-item>
                    <el-breadcrumb-item><a class="el-icon-d-caret">跳转</a></el-breadcrumb-item>
                    <el-breadcrumb-item :to="{path:'/'}">></el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col span="4">
                <el-dropdown class="search-field">
                    <el-button class="search-field" icon="el-icon-setting">
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>编辑域</el-dropdown-item>
                        <el-dropdown-item>编辑工作流</el-dropdown-item>
                        <el-dropdown-item>编辑拾取列表值</el-dropdown-item>
                        <el-dropdown-item>模块排序</el-dropdown-item>
                        <el-dropdown-item>更新网页视图</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
        <el-row>
            <el-col span="24">
                <el-breadcrumb separator="|" CLASS="point-to">
                    <el-breadcrumb-item :to="{ path: '/' }">A</el-breadcrumb-item>
                    <el-breadcrumb-item>B</el-breadcrumb-item>
                    <el-breadcrumb-item>C</el-breadcrumb-item>
                    <el-breadcrumb-item>D</el-breadcrumb-item>
                    <el-breadcrumb-item>E</el-breadcrumb-item>
                    <el-breadcrumb-item>G</el-breadcrumb-item>
                    <el-breadcrumb-item>H</el-breadcrumb-item>
                    <el-breadcrumb-item>I</el-breadcrumb-item>
                    <el-breadcrumb-item>J</el-breadcrumb-item>
                    <el-breadcrumb-item>K</el-breadcrumb-item>
                    <el-breadcrumb-item>L</el-breadcrumb-item>
                    <el-breadcrumb-item>M</el-breadcrumb-item>
                    <el-breadcrumb-item>N</el-breadcrumb-item>
                    <el-breadcrumb-item>O</el-breadcrumb-item>
                    <el-breadcrumb-item>P</el-breadcrumb-item>
                    <el-breadcrumb-item>Q</el-breadcrumb-item>
                    <el-breadcrumb-item>R</el-breadcrumb-item>
                    <el-breadcrumb-item>S</el-breadcrumb-item>
                    <el-breadcrumb-item>T</el-breadcrumb-item>
                    <el-breadcrumb-item>U</el-breadcrumb-item>
                    <el-breadcrumb-item>V</el-breadcrumb-item>
                    <el-breadcrumb-item>W</el-breadcrumb-item>
                    <el-breadcrumb-item>X</el-breadcrumb-item>
                    <el-breadcrumb-item>Y</el-breadcrumb-item>
                    <el-breadcrumb-item>Z</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Organization_table",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .organization_module {
        position: relative;
        left: 5%;
        top: 10px;
    }

    .search-field {
        width:100px;
    }

    .top-menu {
        position: relative;
        top: 10px
    }
    .point-to{
        position: relative;
        top:10px;
        left: 25%;
    }
</style>