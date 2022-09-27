<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item 
            v-for="item in routes" 
            :key = item.path>
            <a :href="item.path">{{item.meta.title}}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
const router = useRouter()
console.log(router)
const routes = computed(()=> {
    return router.currentRoute.value.matched.filter((item=>item.meta.title))
})
console.log(routes)
</script>
<style scoped lang="scss">
    .el-header{
        .el-breadcrumb{
            line-height: 60px;
        }
    }
    
</style>