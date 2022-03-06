<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-28 22:20:40
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-28 22:34:34
-->

<template>
  <div>
    <h1>{{msg}}</h1>    
    <div>
      <router-link to='/item_a'>跳转到a</router-link>
    </div>

    <div>
      <router-link to='/item_b'>跳转到b</router-link>
    </div>


  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      msg: 'vue 的 keep-alive'
    }
  }
}
</script>
