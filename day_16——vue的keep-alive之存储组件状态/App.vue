<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-28 22:36:04
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-28 22:38:16
-->

<template>
  <div id="app">
    <keep-alive include="item_a" exclude="item_b">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>
