<template>
    <div>
        <TreeNode v-for="item in data" :key="item.title" :model="item"></TreeNode>
    </div>
</template>

<script>
import TreeNode from '@/components/recursive/TreeNode.vue';
export default {
    components: {
        TreeNode,
    },
    props: {
        data: {
            type: Array,
            required: true
        },
    },
    
}
</script>

<style>

</style>