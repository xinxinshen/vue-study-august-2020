import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import create from './plugins/create.js'
import testPlugin from './plugins/testPlugin.js'
import store from './store'
import router from './myvue-router'

Vue.config.productionTip = false
Vue.use(create);
Vue.use(testPlugin);
new Vue({
  store,
  router,// 挂载的目的，让我们可以在插件中用到vue实例
  render: h => h(App)
}).$mount('#app')
