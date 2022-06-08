# Priority_B

1. why: 为什么
2. what: 是什么
3. do it happen: 这样做有什么好处
4. don‘t do it happen: 不这样做会发生什么
5. notice: 注意事项

## 组件文件

1. why: 便于维护和查找文件
2. what: 对文件进行归类
3. do it happen: 文件目录结构清晰
4. don‘t do it happen: 文件目录结构混乱, 维护性差
5. notice:

## 单文件组件文件的大小写

1. why:
2. what: 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)
3. do it happen:
4. don‘t do it happen:
5. notice: 在大小写不敏感的文件系统中使用横线连接更好

## 基础组件名称

1. why:
2. what: 应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V
3. do it happen: 分清组件
4. don‘t do it happen: 组件混乱
5. notice: 命名尽量详细

## 单例组件名称

1. why: 每个页面只能使用一次，且不接受任何 prop
2. what: 只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性
3. do it happen:
4. don‘t do it happen:
5. notice:

## 紧密耦合的组件名称

1. why: 把相关联的文件排放在一起
2. what: 与父组件紧密耦合的子组件应该以父组件名作为前缀命名
3. do it happen:
4. don‘t do it happen: 许多文件的名字相同，使得在编辑器中快速切换文件变得困难；过多嵌套的子目录增加了在编辑器侧边栏中浏览组件所花费的时间
5. notice:

## 组件名称中的单词顺序

1. why:
2. what: 组件名称应该以高阶的 (通常是一般化描述的) 单词开头，并以描述性的修饰词结尾
3. do it happen:
4. don‘t do it happen:
5. notice: 不必完全遵从自然语言

## 自闭合组件

1. why: 代码更简洁
2. what: 在单文件组件、字符串模板和 JSX 中，没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做
3. do it happen:
4. don‘t do it happen:
5. notice: HTML 并不支持自闭合的自定义元素——官方的“空”元素除外

## 模板中的组件名称大小写

1. why:
2. what: 对于绝大多数项目来说，在单文件组件和字符串模板中，组件名称应该始终是 PascalCase 的——但是在 DOM 模板中是 kebab-case
3. do it happen:
4. don‘t do it happen:
5. notice: HTML 是大小写不敏感的，在 DOM 模板中必须仍使用 - 形式连接

## JS/JSX 中使用的组件名称

1. why: 更易区分组件与 HTML 元素
2. what: JS/JSX 中的组件名应该始终是 PascalCase 的，尽管在较为简单的应用中，只使用 app.component 进行全局组件注册时，可以使用 kebab-case 字符串
3. do it happen:
4. don‘t do it happen:
5. notice: DOM 内的模板是必须使用 kebab-case

## 完整单词的组件名称

1. why:
2. what: 组件名称应该倾向于完整的单词，而不是缩写
3. do it happen:
4. don‘t do it happen:
5. notice:

## Prop 命名

1. why: 在 JavaScript 中 camelCase 更为自然。而在 HTML 中则是 kebab-case
2. what: 在声明 prop 的时候，其命名应该始终使用 camelCase, 而在模版与 JSX 中应该始终使用 kebab-case
3. do it happen:
4. don‘t do it happen:
5. notice:

## 多个 attribute 的元素

1. why: 更易读
2. what: 多个 attribute 的元素应该分多行撰写，每个 attribute 一行
3. do it happen:
4. don‘t do it happen:
5. notice:

## 模板中的简单表达式

1. why: 复杂的表达式会让模版变得不那么声明式，描述什么就显示什么，而非计算那个值
2. what: 组件模版应该只包含简单的表达式，复杂的表达式应该重构为计算属性或方法
3. do it happen: 使用计算属性或者方法使得代码可复用
4. don‘t do it happen:
5. notice:

##

1. why:
2. what:
3. do it happen:
4. don‘t do it happen:
5. notice:

##

1. why:
2. what:
3. do it happen:
4. don‘t do it happen:
5. notice:

##

1. why:
2. what:
3. do it happen:
4. don‘t do it happen:
5. notice:

##

1. why:
2. what:
3. do it happen:
4. don‘t do it happen:
5. notice:
