<template>
    <div class="toggleBar" @click="toggle">
        <el-icon v-if="collapse.isCollapse"><Fold /></el-icon>
        <el-icon v-else><Expand /></el-icon>
    </div>
</template>
<script lang="ts" setup>
import { useIsCollapseStore } from '@/store/index'
const collapse = useIsCollapseStore()

function toggle(){
    collapse.toggleBar()
}
</script>
<style scoped lang="scss">
.toggleBar{
    display: inline-block;
    vertical-align: top;
    width: 45px;
    font-size: 20px;
    margin-top:4px;
    color:#ffd04b;
    cursor: pointer;
}
</style>