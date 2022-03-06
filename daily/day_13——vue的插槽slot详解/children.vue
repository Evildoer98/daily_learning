<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-26 22:24:27
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-27 00:20:56
-->

<template>
  <div>
    <h1>{{msg}}</h1>
    <slot></slot>
    <!-- 默认插槽 -->
    <h1><slot>这是子组件默认的值</slot></h1>

    <!-- 具名插槽 -->
    <h1> <slot name='h_1'></slot></h1>
    <h1> <slot name='h_2'></slot></h1>
    <h1> <slot name='h_3'></slot></h1>

    <!-- 作用域插槽 -->
    <h1> <slot v-bind:str="strData" name="n_str">{{strData.name}}</slot> </h1>
    <h1> <slot v-bind:str="strData" name="l_str">{{strData.name}}</slot> </h1>


  </div>

</template>

<script>
export default {
  name: 'children',
  data () {
    return {
      msg: '子组件',
      strData: {
        name: 'Evildoer',
        age: 23
      }
    }
  }
}

</script>
