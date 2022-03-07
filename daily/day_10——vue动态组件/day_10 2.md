<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-23 15:51:31
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-23 15:55:23
-->

Vue 动态组件

作用：通过 component 的 is 属性，来切换不同的组件

知识点：
    1. <component></component>
        可以使用<component/> 将允许按名称访问全局和本地组件
        可以动态绑定组件，根据数据的不同更换不同的组件
        在这种情况下，更像是一个容器
    2. :is 属性
        is-bind 的缩写
        component 标签中的 is 属性决定了当前采用的是那个组件
