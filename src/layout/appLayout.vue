<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <v-menu/>
            </el-aside>
            <el-container>
                <el-header>
                    <div>
                        <v-toggle-sidebar></v-toggle-sidebar>
                        <v-bread-crumb></v-bread-crumb>
                    </div>
                    <div>
                        <v-user-info></v-user-info>
                        <v-full-screen></v-full-screen>
                    </div>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import vMenu from './component/menu.vue'
import vBreadCrumb from './component/breadCrumb.vue'
import vFullScreen from './component/fullScreen.vue'
import vToggleSidebar from './component/toggleSidebar.vue'
import vUserInfo from './component/UserInfo.vue'
</script>
<style lang="scss" scoped>
    .common-layout{
        .el-header {
            display: flex;
            justify-content: space-between;
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
        }

        .el-aside {
            width:auto;
            background-color: #304156;
            color: #333;
            text-align: center;
            line-height: 200px;
        }

        .el-main {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
            line-height: 160px;
        }
        .el-container {
            height: 100vh;
        }
    }
</style>
