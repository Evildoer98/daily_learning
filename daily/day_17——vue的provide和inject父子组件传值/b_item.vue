<template>
  <div>
    <h1 v-for="n in msg">{{n}}</h1>
  </div>
</template>

<script>
export default {
  name: 'b_item',
  data () {
    return {
      // msg: 'item_b: '+this.text
      msg: this.text
    }
  },
  inject: ['text']
}
</script>