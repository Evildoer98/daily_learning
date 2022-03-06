<template>
  <div>
    <p>
      <button @click='btn'></button>
    </p>
  </div>
</template>

<script>
import eventUtils from './utils/eventUtils'
export default {
  name: 'b_item',
  data () {
    return {
      msg: 'aaa'
    }
  },
  mounted() {
    eventUtils.$on('infoEvent', _d => {
      this.msg = 'b组件收到：' + _d
    })
  },
  
}
</script>