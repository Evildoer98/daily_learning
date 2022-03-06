# provide 和 inject (提供 / 注入)

1. 用处:
    父组件可以向其所有子组件传入数据
    而“不管子组件结构层次有多深”
2. 特性:
    父组件有一个 provide 选项来提供数据
    子组件有一个 inject 选项来开始使用这个数据

* 参考：
  index 组件
    \_a组件
      \_b组件

props 方式传值: index -> a -> b
provide/inject 方式传值
  index -> a
  index -> b