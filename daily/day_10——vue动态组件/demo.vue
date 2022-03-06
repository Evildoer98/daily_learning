<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-23 15:59:28
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-23 16:05:25
-->
<template>
    <div>
        {{msg}}
    </div>
    <button @click="itemName = 'a_item'"></button>
    <button @click="itemName = 'b_item'"></button>
    <button @click="itemName = 'b_item'"></button>
    <component :is='itemName'></component>
</template>
<script>
import a from './a.vue'
import b from './b.vue'
import c from './c.vue'


export default {
    name: 'hello',
    data () {
        return {
            msg: '动态组件',
            itemName: 'a_item'
        }
    },
    components: {a, b, c}
}
</script>