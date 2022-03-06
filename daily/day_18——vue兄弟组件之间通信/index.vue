<template>
  <div>
    <h1>{{msg}}</h1>
    <a_item></a_item>
  </div>
</template>

<script>
import a_item from './a_item.vue'
import b_item from './a_item.vue'

export default {
  name: 'index',
  data () {
    return {
      msg: 'vue 兄弟组件，发布订阅模式传值',
    }
  },
  components: {
    a_item,
    b_item
  }
  
}
</script>