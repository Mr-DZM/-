<template>
  <div class="login">
    <div class="container">
      <img src="@/assets/avatar.jpg" class="avatar">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="myicon myicon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请求输入密码"
            prefix-icon="myicon myicon-key"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { userlogin } from '@/api/user.js'
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login () {
      // console.log(this.$refs)
      // 实现用户的数据验证，因为之前的rules只是一个提示信息布局，并不会真正的阻止用户的登录请求；
      // 注意 登录验证的时候，表单有一个validate函数，这个函数可以真正的实现表单元素的数据验证，这个验证会根据rules规则来验证，验证不通过就会调用回调函数并返回一个false参数的vaild
      // 有多个表单时记得需要传你需要的那个参数
      this.$refs.loginForm.validate(vaild => {
        if (vaild) {
          // 这个是data里面的实例成员loginForm
          // console.log(this.loginForm)
          userlogin(this.loginForm)
            .then(result => {
              console.log(result)
              // 使用本地存储token值
              localStorage.setItem('itcast_pro_token', result.data.data.token)
              if (result.data.meta.status === 400) {
                // 使用element-ui的组件
                this.$message({
                  showClose: true,
                  message: result.data.meta.msg,
                  type: 'error'
                })
              } else {
                // 登录成功后调转到Home页面
                this.$router.push({ name: 'Home' })
              }
            }).catch(() => {
              this.$message({
                showClose: true,
                message: '服务器异常，请稍后登录',
                type: 'error'
              })
            })
        } else {
          this.$message({
            showClose: true,
            message: '错误! 请求输入合法的规则',
            type: 'error'
          })
          return false
          // 阻止代码的向下运行
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
