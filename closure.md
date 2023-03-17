# 闭包：重用变量，又保护变量不受污染的一种机制

1. 有权访问另一个函数作用域中的变量和函数
2. 创建闭包的常见方式，就是在一个函数内部创建另一个函数
3. 一个函数以及其捆绑的周边环境状态的应用的组合。闭包让开发者可以从内部函数访问外部函数的作用于
4. 在 JS 中，闭包会随着函数的创建而被同时创建

## 闭包的作用

1. 兼顾全局变量和局部变量的优点：能重用变量，又不使其被污染，形成一个私有环境
2. 缺点：无法在调用后释放，占用我们的内存内容
3. 一旦不再使用闭包，应及时释放
4. 外层函数调用后，外层函数的函数作用域对象无法释放，造成执行环境里的内存泄漏。
5. 解决：
   1. 将保存内层函数的变量赋值为null;
   2. 在DOM上绑定事件里的回调函数及时销毁或采用事件委托的方式减少内存开销

## 使用场景

1. 卖票、排队取号
2. 节流、防抖、柯里化函数
3. 柯里化，模拟私有方法，回调函数