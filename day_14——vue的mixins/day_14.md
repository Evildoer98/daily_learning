<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-27 20:58:26
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-27 21:01:44
-->

vue mixins 混入

1. 作用
  1. 更高效的实现组件内容的复用
  2. 将组件内部 data、method 等与父组件相应内容进行合并
  3. 相当于在引入后，父组件的各种属性、方法都被扩充了

2. 本质
  1. 其实就是 js 的深拷贝
  2. 对“对象”对“值”的传递、复制、合并
  3. 分清 js 的应用传递与值传递的区别

3. 知识点
  1. 创建混入对象
  2. 数据、对象的合并，以组件为优先

拓展:
  this.$data

