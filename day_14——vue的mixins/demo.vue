<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-27 21:03:55
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-27 21:13:27
-->

<template>
  <div>
    <h1>{{msg}}</h1>
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
    <h1>{{msg}}</h1>
    <button @click="fn">test</button>
  </div>
</template>

<script>
import {mixinsObj} from './mixins/mixinsObj'
export default {
  name: 'demo',
  mixins: [mixinsObj],
  data () {
    return {
      msg: '1111',
      age: 12
    }
  }
}
</script>