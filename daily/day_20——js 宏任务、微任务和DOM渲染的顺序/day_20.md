js 宏任务、微任务和DOM渲染的顺序

* 微任务 > DOM渲染 > 宏任务

* 不要在 .then() 中进行耗时的操作  会影响后续 DOM 渲染和宏任务

* 如果想尽快的在某个时间之后更新 dom ，那么应该写在 .then() 里面