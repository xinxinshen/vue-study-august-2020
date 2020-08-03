import Notice from '@/components/Notice.vue';
import create from '@/utils/create.js';
export default {
    install(Vue) {
        Vue.prototype.$notice = function(options) {
            const comp = create(Notice, options)
            comp.show()
            return comp
        }
    }
}
