<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-26 21:02:01
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-26 21:06:25
-->

render 函数用途
  创建 html 模版的

知识点：
  1. render 函数的参数是 createElement 函数
      createElement 返回值是一个虚拟 dom。即 VNode 也就是要渲染的节点
  2. createElement 有三个参数
      第一个参数，必需，{String | Object | Function}
        是要渲染的 html 标签
      第二个参数，可选 {Object}
        html 标签的各种属性
      第三个属性，可选 {String | Array}
        子虚拟节点（VNodes）
        当前 html 标签的子元素
  3. 渲染过程
    1. 独立构建
        包含模版编译器，html 字符串 -> render 函数 -> VNode -> 真实 DOM 节点
    2. 运行时构建
        不包含模版编译器，render 函数 —> VNode -> 真实 DOM 节点
        
