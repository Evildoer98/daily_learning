# Priority_A

1. why: 为什么
2. what: 是什么
3. do it happen: 这样做有什么好处
4. don‘t do it happen: 不这样做会发生什么
5. notice: 注意事项

## 组件名为多个单词

1. why: 避免与内置组件和可能会出现的内置元素重名，不能区分组件
2. what: 是多个单词组成的组件名（一般以驼峰命名方式或者_形式连接）
3. do it happen: 易区分内置组件元素与自定义组件
4. don‘t do it happen: 不易区分内置组件元素与自定义组件，可能结果与需求不一样，以及编辑器直接可能会提示报错
5. notice: 与已有组件的重名

## Prop 定义应尽量详细

1. why: 可以对组件的 prop 进行验证，避免使用组件时参数不规范，组件出现问题、警告以及意料之外的结果等
2. what: 定义 Prop 的 type（类型检测）、default（默认值）、required（是否必填）、validator（验证函数）等（prop名 一般以驼峰命名）
3. do it happen: 组件的 prop 定义规范，在查找错误时更易查找，增加可阅读性
4. don‘t do it happen: 发生不可预测的错误、警告等, 阅读性差
5. notice: null 和 undefined 会通过任何类型验证

## 为 v-for 设置 key 值

1. why:
   1. 增加对渲染过程可预测性
   2. key 主要是用在 Vue 的虚拟 DOM 算法中，在新旧的 Nodes 中对比辨识中更容易辨识 Nodes
2. what:
   1. v-for='xx in xxx' :key='xx.xx' 是在 v-for 后面使用 自身属性作为唯一标识作为 key 属性值
   2. v-for='(xx, index) in xxx' :key='index' 是在 v-for 后面使用 索引 index 作为 key 属性值
3. do it happen:
   1. 使用 索引 index 作为 key 属性值，能区分已被渲染的 DOM，但是不能准确的区分，未处于当前索引的元素的 DOM 渲染是未可知的

        ```ts
          <!-- 未加 key, li 里面的 input 可能按照对应的 item 更新 -->
            <ul>
              <li v-for="(item, index) in list" :key='index'>
                <span>{{item.name}}</span>
                <input type="text" />
              </li>
            </ul>
            <!-- 对 DOM 进行操作后, input 对应输入的内容不会被更新 -->
        ```

   2. 使用自身属性唯一标识作为 key 属性值，能够准确的区分已被渲染的 DOM 元素

       ```ts
          <!-- 未加 key, li 里面的 input 可能按照对应的 item 更新 -->
            <ul>
              <li v-for="item in list" :key='item.id'>
                <span>{{item.name}}</span>
                <input type="text" />
              </li>
            </ul>
            <!-- 对 DOM 进行操作后, input 对应输入的内容也同样会被更新 -->
        ```

   * 使用 key，Vue 会基于 key 的变化重新排列元素

4. don't do it happen:
   1. 就地更新，只更新对应 DOM
   2. Vue 会最大限度减少动态元素，重复利用相同的元素
5. notice: 尽量使用属性内部的唯一标识, DOM 更新更为准确
6. eg:

   ```ts
   <!-- 未加 key, li 里面的 input 可能按照对应的 item 更新 -->
      <ul>
        <li v-for="item in list">
          <span>{{item.name}}</span>
          <input type="text" />
        </li>
      </ul>
   ```

## 避免 v-if 和 v-for 一起使用

1. why: Vue 处理指令时
   1. 在 Vue2 中 v-if 比 v-for 优先级低
   2. Vue3 中 v-if 比 v-for 具有更高的优先级, 每次 v-for 都会执行 v-if,造成不必要的计算,影响性能
2. what: 需要进行有条件渲染的渲染时, 会出现这种场景, v-if 条件渲染, v-for 循环渲染
3. do it happen: 减少性能损耗, 每个 DOM 的渲染都是有迹可循的, 都是在预定方向渲染的
4. don‘t do it happen: 增加性能损耗, 对不存在的变量进行 v-for 渲染会出现不可知错误
5. notice:
   1. 在同一个元素上不要同时作用 v-if 和 v-show
   2. 尽量在外层使用 v-if, 内部再使用 v-for
   3. 若内部需要条件判断, 使用 computed 计算属性进行预处理

## 为组件样式设置作用域

1. why: 全局样式容易污染其他组件
2. what:
   1. 使用 CSS scope 规范
      1. 在 style 设置 scoped 属性，表明 style 的 css 样式仅适用于当前元素
   2. 使用 CSS Modules 规范
      1. 在 style 设置 module
3. do it happen: 隔离组件样式,组件样式不被污染
   1. 使用 CSS scope 规范

      ```vue
        <style scope>
        ...
        </style>
      ```

   2. 使用 CSS modules 规范

      ```vue
        <template>
          <div :class='[$style.default]'>...</div>
        </template>
        <style module>
          .default{
            ...
          }
        </style>

      ```

4. don't it happen: 组件样式被污染，样式混乱，维护性差
5. notice:
   1. 使用 CSS scope 规范需要父级组件修改子级组件样式或者第三方组件库样式时, 可以选择 深选择器 >>> 或者 /deep/
      1. stylus 预处理语言的样式穿透使用 >>> 选择器
      2. sass 和 less 预处理语言的样式穿透使用 /deep/ 选择器

   2. 尽量使用对样式设置作用域, 减少全局样式
   3. 只对单组件有用

## 私有 property 名称

1. why: 避免与其他正在使用以及将要使用的 property 名称冲突
2. what: 将 property 命名的更细节
3. do it happen: 将自定义的 property 私有化, 避免与内置的 property 冲突
4. don‘t do it happen: 可能覆盖实例 property
5. notice: 尽量使用特有性质的名称, 确保不会重复
