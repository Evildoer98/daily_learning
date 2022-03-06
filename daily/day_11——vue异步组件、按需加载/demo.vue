<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-23 16:07:44
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-26 20:59:27
-->

<template>
  <div>
    <div>{{ msg }}</div>
    <button @click="isTrue = !isTrue"></button>
    <div v-if="isTrue"> 
        <!-- <a/> -->
        <Async_a/>
    </div>
  </div>
</template>
<script>
// import a from "./demo.vue";
import loading from './loading.vue'
import error from './error.vue'

const Async_a = () => {
  component: import('./a.vue')
  loading: loading
  error: error
  delay: 500
  timeout: 3000
}

export default {
  name: "hello",
  data () {
      return {
          msg: 'vue异步组件',
          isTrue: false
      }
  },
  components: {
    // method 1
    // a: () => import ('./a.vue')

    // method 2 
    Async_a
  }
};
</script>
