## 懒加载/异步图像解码方案

1. JavaScript 方案实现图片的懒加载
通过 JavaScript 实现的懒加载，主要是两种方式：

监听 onscroll 事件，通过 getBoundingClientRect API 获取元素图片距离视口顶部的距离，配合当前可视区域的位置实现图片的懒加载
通过 HTML5 的 IntersectionObserver API，Intersection Observer（交叉观察器） 配合监听元素的 isIntersecting 属性，判断元素是否在可视区内，能够实现比监听 onscroll 性能更佳的图片懒加载方案

但是，JavaScript 方案的一个劣势在于，不管如何，需要引入一定量的 JavaScript 代码，进行一定量的运算。

2. 使用 content-visibility: auto 实现图片内容的延迟渲染
content-visibility：属性控制一个元素是否渲染其内容，它允许用户代理（浏览器）潜在地省略大量布局和渲染工作，直到需要它为止。

利用 content-visibility 的特性，我们可以实现如果该元素当前不在屏幕上，则不会渲染其后代元素。

content-visibility: auto VS 图片懒加载
当然，其实使用 content-visibility: auto 并不能真正意义上实现图片的懒加载。
这是因为，即便当前页面可视区域外的内容未被渲染，但是图片资源的 HTTP/HTTPS 请求，依然会在页面一开始被触发！
因此，这也得到了一个非常重要的结论：
content-visibility: auto 无法直接替代图片懒加载，设置了 content-visibility: auto 的元素在可视区外只是未被渲染，但是其中的静态资源仍旧会在页面初始化的时候被全部加载。因此，它更像是一个虚拟列表的替代方案。

3. 使用 loading=lazy HTML 属性实现图片懒加载
HTML5 新增了一个 loading 属性。
到今天，除了 IE 系列浏览器，目前都支持通过 loading 属性实现延迟加载。此属性可以添加到 <img> 元素中，也可以添加到 <iframe> 元素中。
属性的值为 loading=lazy 会告诉浏览器，如果图像位于可视区时，则立即加载图像，并在用户滚动到它们附近时获取其他图像。

4. 使用 decoding=async 实现图片的异步解码
除了 loading=lazy，HTML5 还新增了一个非常有意思的属性增强图片的用户体验。那就是 decoding 属性。
HTMLImageElement 接口的 decoding 属性用于告诉浏览器使用何种方式解析图像数据。
它的可选取值如下：

sync: 同步解码图像，保证与其他内容一起显示。
async: 异步解码图像，加快显示其他内容。
auto: 默认模式，表示不偏好解码模式。由浏览器决定哪种方式更适合用户。

* 不同的方式实现图片的懒加载、延迟渲染、异步解码

1. 通过 onscroll 事件与 getBoundingClientRect API 实现图片的懒加载方案
2. 通过 Intersection Observer（交叉观察器）实现比监听 onscroll 性能更佳的图片懒加载方案
3. 通过 content-visibility: auto 实现图片资源的延迟渲染
4. 通过 loading=lazy HTML 属性实现图片懒加载
5. 通过 decoding=async HTML 属性实现图片的异步解码
