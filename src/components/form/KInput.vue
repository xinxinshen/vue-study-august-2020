<template>
    <div>
        <!-- 自定义组件双向绑定：value，@input -->
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            type: {
                type: String,
                default: 'text',
            },
            value: {
                type: String,
                default: '',
            }
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value);
                this.$parent.$emit('validate');
            }
        }
    }
</script>

<style>

</style>