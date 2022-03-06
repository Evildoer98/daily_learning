<template>
  <div>
    <h1></h1>
    <a_item></a_item>
  </div>
</template>

<script>
import a_item from './a_item.vue'

export default {
  name: 'index',
  data () {
    return {
      msg: 'vue 的 provide / inject',
      arrs: ['1','2','3']
    }
  },
  // 注入
  // provide: {
  //   text: 'provide 注入的内容：hello'
  // },
 

  // method_2  传入的都是键值对
  provide () {
    return {
      text: this.arrs
    }
  },
  /**
   * created () {
   *    axios.get( ///)
   *      .then( _d => {
   *          this.arrs = _d.data
   * })
   * 
   * }
   */
  component: {
    a_item
  }
}
</script>