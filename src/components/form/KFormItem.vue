<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="error" class="error">{{error}}</p>
        <p>{{form.rules[prop]}}</p>
    </div>
</template>

<script>
    import Schema from 'async-validator';
    export default {
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: '',
            },
            prop: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                error: '',
            }
        },
        mounted() {
            this.$on('validate', this.validate);
        },
        methods: {
            validate() {
                // 校验规则
                // 当前值
                let rule = this.form.rules[this.prop];
                console.log(rule);
                let value = this.form.model[this.prop];
                console.log(value);
                const schema = new Schema({[this.prop]: rule})
                // 校验，返回Promise
                return schema.validate({[this.prop]: value}, errors=>{
                    console.log(errors);
                    if(errors) {
                        this.error = errors[0].message
                    } else {
                        this.error = ''
                    }
                });

            },
        }
    }
</script>

<style scoped>
.error {
    color: red;
}
</style>