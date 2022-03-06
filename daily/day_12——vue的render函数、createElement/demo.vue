<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-26 21:07:54
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-26 21:22:41
-->

<template>
  <div class="body_sty">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      msg: 'vue render 函数',
      strArr: ['Hello', 'World']
    }
  },
  render (createElement) {
    let _elm = createElement('div', {
      class: 'demo',
      // 设置 style
      style: {color: '#fff', fontSzie: '22px'},
      // 设置 html 内容
      // domProps: {innnerHTML: 'I,m Evildoer'},
      // 设置 html 设置
      attr: {id: '123'}
    }, 
    // [
        // createElement('h1', 'Hello'),
        // createElement('h1', 'World')
    // ]
    this.strArr.map(n => createElement('li', n))
    )
    return _elm
  }

}


</script>


