export default {
    install(Vue) {
        Vue.myGlobalMethod = function() {
            console.log('This is my global method');
        }
        Vue.prototype.$myMethod = function () {
            // 逻辑...
            console.log('This is my method');
        }
    }
}