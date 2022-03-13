// 检查对象是否是由 reactive 创建的响应式代理

import { reactive, isReactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      name: 'Evildoer98',
      age: '男'
    })
    console.log(isReactive(state)) // true
  }
}

// 如果该代理是 readonly 创建的，但包裹了由 reactive 创建的另一个代理，它也会返回 true

