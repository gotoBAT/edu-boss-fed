<template>
<el-container>
  <el-aside width="210px">
    <app-aside />
  </el-aside>
  <el-container>
    <el-header>
      <app-header />
    </el-header>
    <el-main>
        <router-view />
    </el-main>
  </el-container>
</el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AppAside from './components/app-aside.vue'
import AppHeader from './components/app-header.vue'
export default Vue.extend({
  components: {
    AppAside,
    AppHeader
  }
})
</script>

<style scoped lang="scss">
.el-container{
    min-height: 100vh;
    min-width: 750px;
}
.el-aside{
    background-color: #D3DCE6;
    overflow: hidden;
}
.el-header{
    background-color: #fff;
}
</style>
