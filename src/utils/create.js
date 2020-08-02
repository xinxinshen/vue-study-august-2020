import Vue from 'vue'

// Component - 组件配置对象
// props - 传递给它的属性
function create(Component, props) {
    // 1. 创建构造器
    const Comp = Vue.extend(Component);
    // 2. 通过propsData将props传入，并创建Comp实例；
    const vm = new Comp({
        propsData:{
            ...props,
            remove:()=>{
                document.body.removeChild(vm.$el)
                vm.$destroy()
            }
        }
    // 3. 调用$mount方法，不传参，将vnode转化为真实node
    }).$mount();
    // 4. append到body最下方
    document.body.appendChild(vm.$el)
    return vm;
}
export default create



// // Component - 组件配置对象
// // props - 传递给它的属性
// function create(Component, props) {
//   // const Ctor = Vue.extend(Component)
//   // new Ctor()
  
//   // 1.构建Component的实例
//   const vm = new Vue({
//     render(h) {
//       // h是createElement
//       // 它可以返回一个vnode
//       return h(Component, { props })
//     }
//   }).$mount() // 不设置挂载目标，依然可以转换vnode为真实节点$el
//   // 2.挂载到body上
//   document.body.appendChild(vm.$el)


//   // 3.获取组件实例
//   const comp = vm.$children[0]

//   comp.remove = () => {
//     document.body.removeChild(vm.$el)
//     vm.$destroy()
//   }
  
//   return comp
// }
// export default create