<template>
<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
        <router-view />
    </el-main>
  </el-container>
</el-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style scoped lang="scss">
.el-container{
    min-height: 100vh;
    min-width: 750px;
}
.el-aside{
    background-color: #D3DCE6;
}
.el-header{
    background-color: #B2C0D0;
}
</style>
