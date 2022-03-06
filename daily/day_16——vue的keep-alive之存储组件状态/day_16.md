<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-28 22:16:49
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-28 22:19:02
-->

keep-alive 会缓存不活动的组件的状态

作用：
  避免多次重复渲染降低性能

知识点：
  1. include - 字符串或正则表达式。只有名称匹配点组件会被缓存

  2. exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存

  3. max - 数字。最多可以缓存多少组件实例

  4. 结合 Router，缓存部分页面   $route.meta.keepAlive 选项


