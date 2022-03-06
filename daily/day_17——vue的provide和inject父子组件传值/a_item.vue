<template>
  <div>
    <b_item></b_item>
  </div>
</template>

<script>
import b_item from './b_item.vue'
export default {
  name: 'a_item',
  data () {
    return {
      // msg: 'item_a: ' + this.text
      msg: this.text
    }
  },
  inject: ['text'],
  components: {
    b_item
  }
}
</script>