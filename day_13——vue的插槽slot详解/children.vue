<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-26 22:24:27
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-26 22:32:55
-->

<template>
  <div>
    <h1>{{msg}}</h1>
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: 'children',
  data () {
    return {
      msg: '子组件'
    }
  }
}

</script>
