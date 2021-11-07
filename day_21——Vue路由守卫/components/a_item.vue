<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'a_item',
  data () {
    return {
      msg: 'aaa'
    }
  },

  // 进入路由
  beforeRouteEnter (to, from, next) {
    next(false)
  },

  // 离开路由
  beforeRouteLeave (to, from, next) {
    next(true)
  }
  
}
</script>