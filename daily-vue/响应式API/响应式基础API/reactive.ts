import { ref, reactive } from 'vue'

/**
 *
 * reactive 将解包所有深层的 refs
 * function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
 *
 * 响应式转换是”深层“的 ———— 它影响所有嵌套 property
 *
 *
 */

// tip:
// reactive 将解包所有深层的 refs，同时维持 ref 的响应性
const count = ref(1)
const obj = reactive({count})


// ref 会被解包
console.log(obj.count === count.value) // true

// 更新 obj.count
count.value++
console.log(count) // 2
console.log(obj.count) // 2

// 更新 count
obj.count++
console.log(count) // 3
console.log(obj.count) // 3


// 当将 ref 分配给 reactive property 时，ref 将被自动解包
const count2 = ref(1)
const obj2 = reactive({})

// Property 'count' does not exist on type '{}'.ts(2339)
obj2.count = count2

// Property 'count' does not exist on type '{}'.ts(2339)
console.log(obj2.count)
console.log(obj.count === count.value)



