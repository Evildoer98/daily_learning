# Vue

## 父子组件的生命周期

1. 加载渲染阶段：父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
2. 更新阶段：父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
3. 销毁阶段：父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

## Vue.$nextTick

* 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
* nextTick 是 Vue 提供到的一个全局 API，由于 Vue 的异步更新策略，导致我们对数据修改后不会直接体现在 DOM 上，此时想要立即获取更新后的 DOM 状态，就需要借助该方法
* Vue 在更新 DOM 时是异步执行的。当数据发生变化，Vue 将开启一个异步更新队列，并缓冲在同一事件循环中发生的所有数据变更
* 如果同一个 watcher 被多次触发，只会被推入队列一次
