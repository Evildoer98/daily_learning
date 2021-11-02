<template>
  <div>
    <p>{{msg}}</p>
    <p>
      <button @click='btn'>向b发送信息</button>
    </p>
  </div>
</template>

<script>
import eventUtils from './utils/eventUtils'
export default {
  name: 'a_item',
  data () {
    return {
      msg: 'aaa'
    }
  },
  methods: {
    btn() {
      console.log('123');
      eventUtils.$emit('infoEvent', 'Evildoer98')
    }
  }
  
}
</script>