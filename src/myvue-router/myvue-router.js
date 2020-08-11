// 实现一个插件
// 返回一个函数
// 或者返回一个对象，他有一个install方法

let _Vue

class VueRouter {
  constructor(options) {
    this.$options = options
    // 缓存path和route映射关系
    this.routeMap = {}
    this.$options.routes.forEach((route)=>{
      this.routeMap[route.path] = route;
    })
    const initial = window.location.hash.slice(1) || '/'
    _Vue.util.defineReactive(this, 'current', initial)
    window.addEventListener('hashchange', this.onHashChange.bind(this))
  }

  // 监控url变化

  onHashChange() {
    this.current = window.location.hash.slice(1);
    console.log(this.current)
  }
}

VueRouter.install = function(Vue) {
  _Vue = Vue
  // 1. 挂载$router
  // 问题，use插件的时候，这个实例还没有，怎么取到
  // 使用混入
  Vue.mixin({
    beforeCreate() {
      // 此处的this指的是组件实例
      if(this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 2. 定义两个全局组件router-link，router-view
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        require: true
      },
    },
    render() {
      return <a href={'#'+this.to}>{this.$slots.default}</a>
      // <a href="#/about">XXX</a>
      // return h('a', {
      //   attrs: {
      //     href: `#${this.to}`
      //   }
      // },this.$slots.default)
    }
  })
  Vue.component('router-view', {
    render(h) {
      let component = null
      //找到urlurl对应的组件
      // const route = this.$router.$options.routes.find(route=>route.path === this.$router.current)
      const {routeMap, current} = this.$router
      component = routeMap[current] ? routeMap[current].component: null;
      // if(route){
      //   component = route.component
       
      // }
      return h(component)
    }
  })
}

export default VueRouter