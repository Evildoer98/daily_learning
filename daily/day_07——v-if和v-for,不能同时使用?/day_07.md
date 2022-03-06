<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-18 21:13:59
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-18 21:15:02
-->

vue 中，v-if 和 v-for 不能同时使用？

原因：
    1. v-for 优先级高
    2. 会造成性能浪费

解决方案：
    1. 把 v-if 写在外层 dom 中
    2. 把 v-if 卸载外层 template 中
    