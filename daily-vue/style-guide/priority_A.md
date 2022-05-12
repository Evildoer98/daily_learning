# Priority_A

1. why: 为什么
2. what: 是什么
3. do it happen: 这样做有什么好处
4. don‘t do it happen: 不这样做会发生什么
5. notice: 注意事项

## 组件名为多个单词

1. why: 避免与内置组件和可能会出现的内置元素重名，不能区分组件
2. what: 是多个单词组成的组件名（一般以驼峰命名方式）
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

1. why: 增加对渲染过程可预测性
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

4. don't do it happen:
   就地更新，只更新对应 DOM
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

1. why: Vue 处理指令时，在 Vue2 中 v-if 比 v-for 优先级低, 但是在 Vue3 中 v-if 比 v-for 具有更高的优先级, 每次 v-for 都会执行 v-if,造成不必要的计算,影响性能
2. what: 需要进行有条件渲染的渲染时, 会出现这种场景, v-if 条件渲染, v-for 循环渲染
3. do it happen: 减少性能损耗
4. don‘t do it happen: 增加性能损耗
5. notice:
   1. 在同一个元素上不要同时作用 v-if 和 v-show
   2. 尽量在外层使用 v-if, 内部再使用 v-for
   3. 若内部需要条件判断, 使用 computed 计算属性进行预处理
