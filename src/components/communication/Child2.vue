<template>
    <div>
        <h3>child2</h3>
        <p>{{$attrs.message}}</p>
        <!-- 隔代传参 v-bind 会展开attrs-->
        <Grandson v-bind="$attrs" v-on="$listeners">title from child2</Grandson>
    </div>
</template>

<script>
import Grandson from './Grandson.vue';
    export default {
        components: {
            Grandson
        }
    }
</script>

<style>

</style>