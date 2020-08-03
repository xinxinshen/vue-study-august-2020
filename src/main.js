import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import create from './plugins/create.js'
import store from './store'

Vue.config.productionTip = false
Vue.use(create);
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
