<template>
    <div class="login">
        <el-form label-position="top" label-width="80px" :model="formLabelAlign" :ref="formLabelAlign" class="login-form">
            <el-form-item label="用户名">
                <el-input v-model="formLabelAlign.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formLabelAlign.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('formLabelAlign')" class="login-btn">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginIndex',
  data () {
    return {
      formLabelAlign: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm (formName: any) :void {
      console.log(formName)
    }
  }
})
</script>

<style scoped lang="scss">
.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-form {
        padding: 20px;
        width: 400px;
        background-color: #fff;
        border-radius:20px;
    }
    .login-btn {
        width: 100%;
    }
}
</style>
