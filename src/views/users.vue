<template>
  <div class="users">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select" :clearable="true" width="200px">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
import { getAllUser } from '@/api/user.js'
export default {
  // 定义数据成员 使用格式 data是函数返回一个对象
  data () {
    return {
      input5: '',
      query: '',
      pagenum: 1,
      pagesize: 10
    }
  },
  methods: {

  },
  // 使用钩子函数mounted
  mounted () {
    getAllUser({
      query: this.query,
      pagenum: this.pagenum,
      pagesize: this.pagesize
    }).then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="less" scoped>
</style>
