<template>
    <el-dropdown>
        <span class="el-dropdown-link">
            {{ user.userInfo?.account}}
            <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item @click="handleLogou">
                    退出登录
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { logout } from "@/api/common";
import { useRouter } from "vue-router";
import { useUserInfoStore } from "@/store";
import { removeItem } from "@/utils/storage"

const router = useRouter();
const user = useUserInfoStore()
console.log(user.userInfo)

const handleLogou = () => {
    // 退出提示
    ElMessageBox.confirm("确认退出吗？", "退出提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    })
        .then(async () => {
            // 确认发出退出请求
            await logout();

            // 清除用户登录信息
            user.setUser( null );

            ElMessage({
                type: "success",
                message: "退出成功!",
            });

            // 跳转到登录页
            router.push({
                name: "login",
            });
            removeItem('user')
        })
        .catch(() => {
            ElMessage({
                type: "info",
                message: "已取消退出",
            });
        });
};
</script>

<style scoped lang="scss">
    .el-header{
        .el-dropdown{
            line-height: 60px;
            display: inline-block;
            margin-right: 8px;
        }
    }
    
</style>
