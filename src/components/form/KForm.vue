<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                form: this,
            }
        },
        props: {
            model: {
                type: Object,
            },
            rules: {
                type: Object,
            }
        },
        methods: {
            // 检查所有的表单项，他们都校验通过
            validate(cb) {
                // 获得一个promise，数组
                const tasks = this.$children.filter(item => item.prop).map(item=>item.validate());
                Promise.all(tasks).then(()=>cb(true)).catch(()=>cb(false))
            }
        }
    }
</script>

<style>

</style>