<template>
    <div>
        <KForm :model="model" :rules="rules" ref="loginForm">
            <KFormItem label="姓名" prop="username">
                <KInput v-model="model.username" placeholder="请输入姓名"></KInput>
            </KFormItem>
            <KFormItem label="密码" prop="password">
                <KInput type="password" v-model="model.password" placeholder="请输入密码"></KInput>
            </KFormItem>
            <KFormItem>
                <button @click="login">登录</button>
            </KFormItem>
        </KForm>
        {{model.username}}
        <!-- KForm: 指定管理数据和校验规则 -->
        <!-- KFOrmItem：数据校验和错误提示 -->
        
    </div>
</template>

<script>
import KInput from '@/components/form/KInput.vue';
import KFormItem from '@/components/form/KFormItem.vue';
import KForm from '@/components/form/KForm.vue';
// import Notice from '@/components/Notice.vue';
// import create from '@/utils/create';
export default {
    data() {
        return {
            model: {
                username: '',
                password: '',
            },
            rules: {
                username: [{
                    required: true,
                    message: '必须输入用户名'
                }],
                password: [{
                    required: true,
                    message: '必须输入密码'
                }
                ]
            },
        }
    },
    components: {
        KInput,
        KFormItem,
        KForm,
    }, 
    methods: {
        login() {
            this.$refs.loginForm.validate(isValid=>{
                // create(Notice,{
                //     title: 'tishi',
                //     message: isValid ?'请求登录': '校验失败',
                //     duration: 1000,
                // }).show();
                this.$notice({
                    title: 'tishi',
                    message: isValid ?'请求登录': '校验失败',
                    duration: 1000,
                })
                // if(isValid) {
                //     console.log('提交登录')
                // } else {
                //     console.log('失败');
                // }
            });
        }
    }
}
</script>

<style>

</style>