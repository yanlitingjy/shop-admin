<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <v-menu/>
            </el-aside>
            <el-container>
                <el-header>
                    <v-bread-crumb></v-bread-crumb>
                    <v-full-screen></v-full-screen>
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
