<template>
    <el-menu 
        class="el-menu-vertical-demo"
        default-active="2" 
        background-color="#304156"
        text-color="#fff" 
        active-text-color="#ffd04b"
        :collapse="collapse.isCollapse"
        router>
        <el-menu-item index="home">
            <el-icon><Menu /></el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="product">
            <template #title>
                <el-icon><location /></el-icon>
                <span>商品</span>
            </template>
            <el-menu-item index="product_list">商品列表</el-menu-item>
            <el-menu-item index="product_classify">商品分类</el-menu-item>
            <el-menu-item index="product_attr">商品规格</el-menu-item>
            <el-menu-item index="product_reply">商品评论</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="order">
            <template #title>
                <el-icon><location /></el-icon>
                <span>订单</span>
            </template>
            <el-menu-item index="1-1">商品列表</el-menu-item>
            <el-menu-item index="1-2">商品分类</el-menu-item>
            <el-menu-item index="1-2">商品规格</el-menu-item>
            <el-menu-item index="1-2">商品评论</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="media">
            <el-icon><setting /></el-icon>
            <span>媒体</span>
        </el-menu-item>
        <el-sub-menu index="permission">
            <template #title>
                <el-icon><location /></el-icon>
                <span>权限</span>
            </template>
            <el-menu-item index="1-1">商品列表</el-menu-item>
            <el-menu-item index="1-2">商品分类</el-menu-item>
            <el-menu-item index="1-2">商品规格</el-menu-item>
            <el-menu-item index="1-2">商品评论</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>
<script lang="ts" setup>
import { useIsCollapseStore } from '@/store/index'
const collapse = useIsCollapseStore()
</script>
<style scoped>
    .el-menu{
        border:none
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
