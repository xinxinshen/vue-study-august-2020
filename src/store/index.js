import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    }
  },
  actions: {
    login({commit}, username) {
      // action 不修改状态，还是通过mutation更改状态
      // 模拟登录api的调用
      // 2秒后，如果用户名是admin，则登录成功
      // 参数1: vuex传递的上下文context {commit, dispatch}
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          if(username === 'admin') {
            commit('login')
            resolve()
          } else {
            reject()
          }
        },2000);
      })
    }
  },
  modules: {
  }
})
