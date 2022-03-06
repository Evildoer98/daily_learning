<template>
  <div>
    <div>{{msg}}</div>
    <router-link to="/item_a">
      <button>跳转到 a</button>
    </router-link>

    <router-link to="/item_b">
      <button>跳转到 b</button>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Vue 路由守卫'
    }
  }
}
</script>