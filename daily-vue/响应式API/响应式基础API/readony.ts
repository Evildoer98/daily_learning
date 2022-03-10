import { reactive, readonly, watchEffect, ref } from 'vue'

const original = reactive({count: 0})

const copy = readonly(original)


watchEffect(()=>{
  // 用于响应性追踪
  console.log(copy.count)
})

// 变更 original 会触发依赖于副本的侦听器
original.count++

// 变更副本将失败并导致警告
// Cannot assign to 'count' because it is a read-only property.
copy.count++ // 警告


const raw = {
  count: ref(123)
}

const copy2 = readonly(raw)

console.log(raw.count.value) // 123
console.log(copy2.count) // 123