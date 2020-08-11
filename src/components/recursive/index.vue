<template>
    <div>
        <Node :data="folder"></Node>
        <Tree :data="treeData"></Tree>
    </div>
</template>

<script>
// 实现一个树形结构
// 组件Node
/**
 * 树形input
 * {
 *  value: XX,
 *  children: [
 *  {
 *      value: XXX,
 *      children: [
 *          value: XX,
 *      ]
 *  },
 *  {
 *      value: XXX,
 *      children: [
 *          value: XX,
 *      ]
 *  }
 * ]
 * }
 * 
 * 
 * 输出：
 * 
 */
import Node from '@/components/recursive/Node.vue';
import Tree from '@/components/recursive/Tree.vue';
export default {
    components: {
        Node,
        Tree,
    },
    data() {
        return {
            folder: {
                name: "vue-study", 
                level: 0,
                children: [
                    { 
                        name: "src", 
                        level: 1,
                        children: [{ name: "main.js", level: 2 }] ,
                    },
                    { name: "package.json", level: 1 } 
                ]
            },
            treeData: [
                {
                    title: '一级目录1',
                    children: [
                        {
                            title: '二级目录1',
                        },
                    ],
                },
                {
                    title: '一级目录2',
                    children: [
                        {
                            title: '二级目录2-1',
                                children: [
                                {
                                    title: '二级目录2-1-1',
                                },
                                {
                                    title: '二级目录2-1-2',
                                },
                                {
                                    title: '二级目录2-1-3',
                                },
                            ],
                        },
                        {
                            title: '二级目录2-2',
                        },
                        {
                            title: '二级目录2-3',
                        },
                    ],
                }
            ],

        }
    },
    created() {
        this.$myMethod('test');
        // myGlobalMethod();
    }
}
</script>

<style>

</style>