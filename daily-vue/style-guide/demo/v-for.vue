<template>
  <div>
    <div>不使用 key</div>
    <!-- <div v-for="item in items">
      <div>{{item.name}}</div>
      <input type="text"/>
    </div> -->
    <div>使用 index 作为 key 值</div>
    <div v-for="(item, index) in items" :key="index">
      <div>{{item.name}}</div>
      <input type="text"/>
    </div>
    <div>使用 属性值 作为 key 值</div>
    <div v-for="item in items" :key="item.id">
      <div>{{item.name}}</div>
      <input type="text"/>
    </div>
    <button @click="exchange"></button>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'vFor',
  setup() {
    const items = [
      {
        id: 1,
        name: '1'
      },
      {
        id: 2,
        name: '2'
      }
    ]
    function exchange() {
      items.reverse()
    }
    return {
      items,
      exchange
    }
  },
})
</script>
