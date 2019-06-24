import Vue from 'vue'
// 1. 引入路由模块
import VueRouter from 'vue-router'
// 2.引入组件
// 在项目中引入资源，一般使用的是绝对路径
// 在配置文件中，已经进行根目录的配置，@符号就代表src根目录
// import Login from '@/views/login.vue'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import Welcome from '@/views/welcome.vue'
import Users from '@/views/users.vue'
Vue.use(VueRouter)
// es6语法是先import完成后再执行.use
// 让Vue使用router模块

// 3. 创建路由模块
var router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Home',
      path: '/home',
      component: Home,
      // 添加重定向
      redirect: {
        name: 'Welcome'
      },
      // 添加嵌套路由
      children: [
        {
          name: 'Welcome',
          path: 'welcome',
          component: Welcome
        },
        {
          aname: 'Users',
          path: 'users',
          component: Users
        }
      ]

    }
  ]
})

// module.exports = router  这是node.js的写法 在Vue项目中不适用
// 使路由router暴露
export default router
