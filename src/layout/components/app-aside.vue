<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item index="/role">
            <i class="el-icon-menu"></i>
            <span slot="title">角色列表</span>
        </el-menu-item>
        <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>
            <span slot="title">菜单列表</span>
        </el-menu-item>
        <el-menu-item index="1-3">
            <i class="el-icon-menu"></i>
            <span slot="title">资源列表</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">课程管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>广告管理</span>
        </template>
        <el-menu-item index="4-1">
            <i class="el-icon-menu"></i>
            <span slot="title">广告列表</span>
        </el-menu-item>
        <el-menu-item index="4-2">
            <i class="el-icon-menu"></i>
            <span slot="title">广告位列表</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style scoped lang="scss">
.el-menu{
    min-height: 100vh;
}
</style>
