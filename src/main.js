import Vue from 'vue'
// 引入element-ui模块
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// 引入路由模块
import router from '../routes/router.js'
// 引用重置样式
import '@/styles/index.less'
Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  // 注册路由
  router: router,
  // 渲染app模块
  render: h => h(App)
}).$mount('#app')
