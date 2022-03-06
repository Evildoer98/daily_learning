# forEach 是函数
1. 不是例如 if、for 之类的语句
2. 它的每个参数都是一个匿名函数，是一个 callback，没有返回值
3. 实际每次 forEach 操作的是一个函数
# forEach 方法的机制
* 是对数组的每个有效元素执行一次 callback 函数
# forEach 跳出循环
* try catch 