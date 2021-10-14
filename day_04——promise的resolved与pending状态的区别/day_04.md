<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-14 23:38:04
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-14 23:39:15
-->

1. async 函数，返回一个 promise 对象
    如果在函数中 return 一个直接量
    async 会把这个直接量通过 promise.resolve() 封装成 promise 对象

2. Resolved 完成状态

3. Pending 进行状态，表示延迟（异步）操作正在进行
