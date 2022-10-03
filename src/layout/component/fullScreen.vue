<template>
    <div class="full-screen">
        <el-icon @click="toggleFullScreen"><FullScreen /></el-icon>
    </div> 
</template>
<script lang="ts" setup>
const toggleFullScreen =() => {
    if(!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
    } else {
        if(document.exitFullscreen) {
            document.exitFullscreen()
        }
    }
}
</script>
<style scoped lang="scss">
    .el-header{
        .full-screen{
            line-height: 60px;
            display: inline-block;
            cursor: pointer;
        }
    }
    
</style>
