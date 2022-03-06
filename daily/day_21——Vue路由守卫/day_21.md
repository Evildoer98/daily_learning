VueJs 路由守卫
* 作用：在路由跳转的时候，做一些判断或其他的操作，可以把一些业务逻辑，写在这个部分
* 三类：
  1. 全局路由守卫：
    beforeEach(to, from, next)
        \_ 跳转的时候

  2. 某个路由内的路由守卫
    beforeEnter(to, from, next)
        \_ 写在某个路由里

  3. 组件内的路由守卫
    beforeRouteEnter(to, from, next)
        \_ 进入某路由的时候

    beforeRouteLeave(to, from, next)
        \_ 在离开某路由的时候
  
  * 参数
    to: 要进入的路由
    from: 要离开的路由
    next: 是否可以进入(true/false),或某个具体路由
    