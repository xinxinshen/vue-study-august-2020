<template>
    <div>
        <h2 class="a">组件通信</h2>
        <Child1></Child1>
        <Child2 message="message from parent"></Child2>
    </div>
</template>

<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
    export default {
        provide() {
            return {
                foo: 'foo'
            }
        },
        components:{
            Child1,
            Child2,
        }
    }
</script>

<style>

</style>