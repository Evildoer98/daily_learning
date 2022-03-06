<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-26 22:20:38
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-27 00:21:31
-->

<template>
  <div>
    <h1>{{msg}}</h1>
    <chidlren>
      <p>Hello World</p>
    </chidlren>
    <!-- 使用具名插槽 -->
    <children>这是父组件传入的值</children>

    <!-- 使用具名插槽,可以使用#代替v-slot -->
    <children>
      <template #h_1>
        <p>这是h_1的内容</p>
      </template>

      <template v-slot:h_2>
        <p>这是h_2的内容</p>
      </template>

      <template v-slot:h_3>
        <p>这是h_3的内容</p>
      </template>
    </children>

    <!-- 使用作用域插槽 -->
    <children>
      <template v-slot:n_str="strProps"> 
        {{strProps.str.name}}
      </template>
      <template v-slot:l_str="strProps"> 
        {{strProps.str.name}}
      </template>
    </children>

    
  </div>

</template>

<script>
import children from './children'
export default {
  name: 'index',
  data () {
    return {
      msg: 'vue 插槽 slot - 父组件'
    }
  },
  components: {children}
}

</script>

