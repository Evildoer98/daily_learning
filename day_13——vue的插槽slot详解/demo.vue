<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-26 22:20:38
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-26 22:27:12
-->

<template>
  <div>
    <h1>{{msg}}</h1>
    <chidlren>
      <p>Hello World</p>
    </chidlren>
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

