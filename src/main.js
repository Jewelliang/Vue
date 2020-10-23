import Vue from 'vue'
import App from './App.vue'
import router from './router' //引入路由配置
import store from './store' //引入Vuex状态管理
import './plugins/iview.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //使用路由配置
  store //使用Vuex进行状态管理
}).$mount('#app')
