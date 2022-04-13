<template>
  <div class="login">
    <el-form
      label-position="top"
      label-width="80px"
      :model="formLabelAlign"
      :rules="rule"
      ref="formLabelAlign"
      class="login-form"
    >
      <el-form-item label="用户名" prop="phone">
        <el-input v-model="formLabelAlign.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formLabelAlign.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm"
          class="login-btn"
          :loading="loadFlag"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import { login } from '@/services/user'
export default Vue.extend({
  name: 'LoginIndex',
  data () {
    return {
      formLabelAlign: {
        phone: '18201288771',
        password: '111111'
      },
      rule: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1\d{10}$/,
            message: '请输入正确的手机号',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度是 6 到 10个字符', trigger: 'blur' }
        ]
      },
      loadFlag: false
    }
  },
  methods: {
    async submitForm () {
      try {
        await (this.$refs.formLabelAlign as Form).validate()
        this.loadFlag = true
        const { data } = await login(this.formLabelAlign)
        if (data.state !== 1) {
          this.loadFlag = false
          return this.$message.error(data.message)
        }
        this.$message.success('登录成功！')
        this.$router.push({
          name: 'home'
        })
      } catch (e) {
        this.$message.error('登录失败！')
      }
      this.loadFlag = false
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
    border-radius: 20px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
