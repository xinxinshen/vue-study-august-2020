<template>
    <div>
        <h3>grandson</h3>
        <p>{{message}}</p>
        <p>foo {{foo}}</p>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        inject: ['foo'],
        props: {
            message: String,
        }
    }
</script>

<style>

</style>