# debugger

1. debugger 语句调用任何可用的调试功能
2. 如果没有调试功能可用，则此语句不起作用
3. 当 debugger 被调用时，执行暂停在 debugger 语句的位置

eg：
function fun() {
  ...
  debugger
  ...
}
fun()
当 fun 函数被调用时，才会执行内部，才会执行到 debugger

# 浏览器中调试
## 调试面板

