// 引入axios插件
import axios from 'axios'
// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 添加登录验证方法
// 在Vue 中，暴露成员可以使用export 暴露出去的是对象形式的
export const userlogin = (data) => {
  return axios({
    url: 'login',
    method: 'post',
    data: data
  })
}
export const getAllUser = (params) => {
  // 返回一个Promise 可以.then和.catch
  // 发送axios请求跟发送ajax请求是一样的
  return axios({
    url: 'users',
    method: 'get',
    // 默认请求是get请求
    params: params
  })
}
