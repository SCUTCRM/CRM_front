<template>
    <el-row>
        <el-col span="3">
            <span class="btn-group listViewMassActions"><button class="btn dropdown-toggle" data-toggle="dropdown"><strong>Actions</strong>&nbsp;&nbsp;<i class="caret"></i></button><ul class="dropdown-menu"><li id="Accounts_listView_massAction_LBL_EDIT"><a href="" onclick="">Edit</a></li><li id="Accounts_listView_massAction_LBL_DELETE"><a href="javascript:void(0);" onclick="">Delete</a></li><li id="Accounts_listView_massAction_LBL_ADD_COMMENT"><a href="" onclick="">Add Comment</a></li><li id="Accounts_listView_massAction_LBL_SEND_EMAIL"><a href="" onclick="">Send Email</a></li><li id="Accounts_listView_massAction_LBL_SEND_SMS"><a href="" onclick="">Send SMS</a></li><li id="Accounts_listView_massAction_LBL_TRANSFER_OWNERSHIP"><a href="" onclick="">Transfer Ownership</a></li><li class="divider"></li><li id="Accounts_listView_advancedAction_LBL_IMPORT"><a href="">Import</a></li><li id="Accounts_listView_advancedAction_LBL_EXPORT"><a href="" onclick="">Export</a></li><li id="Accounts_listView_advancedAction_LBL_FIND_DUPLICATES"><a href="" onclick="">Find Duplicates</a></li></ul></span>
        </el-col>
    </el-row>
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

</style>