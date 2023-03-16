# Box model

## 盒子模型（盒子的四元素 Content，Padding，Border，Margin）

1. 标准盒子模型 content 不包括 padding border margin
2. IE盒子模型 content 包含了border和padding

### margin

1. 外边距重叠
   1. 兄弟元素外边距重叠，边界折叠，取最大值（加上clear-fix清除浮动，边距相加）
   2. 空的块级元素
   3. 会出现子元素的外边距溢出在父元素的外面
   4. 若外边距中含有负值，折叠后的外边距为最大的正边距与最小的负边距（即绝对值最大的负边距）的和
      eg：-13px 8px 100px  => 87px
   5. 若全为负边距，折叠后的外边距为最小的负边距的值
2. margin-left和margin-right被设置为auto，元素基于父元素居中
3. 有空余的位置会平均分配给auto的元素
4. margin 不计入实际大小，只会影响盒子在页面所占空间，但是影响盒子外部空间
5. 盒子的范围到边框为止————不会延伸到 margin

* float 和 position: absolute 元素不会产生外边距重叠

### padding

1. 不能是负数
2. 可以是数值也可以是百分比，百分比与父元素的宽度有关的
3. 背景色也会出现在padding范围

### border

1. border-width
   1. 明确指定宽度值
   2. 全局关键字：inherit（继承）、initial（初始值）、unset（不设置）
   3. border-width 关键字：thin、medium、thick
   4. border-style
2. none 不显示边框，优先级低，若重叠的话，则显示重叠边框
3. hidden 不显示边框，优先级高，若存在重叠，也不会显示
4. dotted 圆点，圆点半径为 border-width 的一半
5. dashed 方形虚线
6. solid 实线
7. double 双实线  宽度为 border-width
8. groove 雕刻效果
9. ridge 浮雕效果
10. inset 陷入效果
11. outset 突出效果
12. border-color

* 若未设置，则默认值为 color 属性值是文字颜色而非背景色
* 边界 border 与 outline 相似，但 轮廓不占据空间，在元素外绘制，不会影响margin

### content

1. content: 'prefix' <string> 文本内容
2. content: url('http://...')  <url> url() url 值会指定一个外部资源（eg：图片）。如果该资源或图片不能显示，就会被忽略或显示一些占位（eg: 无图片标志）
3. content: chapter_counter  <counter> 计数器可以指定两种不同的函数：counter() 或 counters()
4. content: attr(value string)  attr(x) 将元素的 x 属性以字符串形式返回。如果该元素没有 x 属性，则返回一个空字符串。区分大小写的属性返回值依赖文档的语言设定
5. content: open-quote | close-quote 这些值会被 quotes 中定义的字符串替换
6. content: no-open-quote | no-close-quote 不会生产任何内容，但是回改变（增加或降低）引号层级
7. 伪元素 :: 增加html元素   也是处于正常文档流中，对布局有影响
8. 伪类 : 选择器的一种，用于选择处于特定状态的元素

## box-sizing

1. box-sizing:conent-box 标准盒子模型
2. box-sizing:border-box IE盒子模型
3. 标准盒子模型 content 不包括 padding border margin
4. IE盒子模型 content 包含了border和padding
5. 一般情况下，width是直接作用给content-box的
6. box-sizing:border-box改变的就是width的作用对象。原来width只作用于content-box，用了boder-box后，width = padding + border + content

## 子元素百分比值的相对依据是什么

1. 均在文档流中，宽高百分比相对于父元素的 content 宽高
2. 子元素绝对定位时，参照对象为外围第一个定位非 static、initial、unset 父元素的 content+padding的宽高值
3. 元素竖向百分比是相对容器的宽度
4. 一般元素的宽度用百分比值表示时，元素的总宽度和外边距取决于父元素的width
5. 正常流中的大多数元素都会足够高以包含其后代元素（包括外边距），如果一个元素的上下外边距是父元素的height的百分数，就可能导致一个无限循环，父元素的height会增加，以适应后代元素上下外边距的增加，而相应的，上下外边距因为父元素height的增加也会增加，形成无限循环

* 在默认的水平文档流方向下，CSS margin和padding属性的垂直方向的百分比值都是相对于父元素宽度计算的
* 使用百分比布局的好处就是子元素的宽高是按父元素的宽高自动调节大小，有适应性，但由于元素默认的宽度有效，默认高度无效，因此盒子的父元素为 width=100% 和 height=100% ,其高度设置为无效，如该盒子无内容的情况下，仅设置背景色和边框，则盒子背景色和边框也不显示。
* 当盒子的定位为绝对定位或固定定位，父元素为 width=100% height=100%，其宽高设置均有效，默认为当前窗口的宽高百分比，若设置了背景色和边框，则盒子的背景颜色和边框均可显示

* dom内容是从上往下，从外往内渲染

1. margin 的百分比相对父元素的宽度

## Flow layout

1. 常规文档流
   1. 块（block）自上而下垂直排列
   2. 行（inline）行内元素水平排列
   3. 脱离常规流
   4. float 浮动元素
   5. position：absolute/fixed
   6. 设置position：fixed，偏移量根据视口决定
2. 堆叠上下文（z-index）
   1. z-index 不为 auto
   2. 可以包含在其他层叠上下文中，并且一起创建一个层叠上下文的层级
   3. 都完全独立于它的兄弟元素：处理层叠时只考虑子元素
   4. 每个层叠上下文都是自包含的：当一个元素的内容发生层叠后，该元素将被作为整体在父级层叠上下文中按顺序进行层叠
   * 没有创建自己的层叠上下文的元素会被父层叠上下文同化
3. block formatting contexts(BFC)
   1. 脱离常规文档流的元素创建一个新的块级格式化上下文
4. 溢出

## positioning

1. position: static relative fixed absolute sticky
   1. static
      1. 此时 top, right, bottom, left 和 z-index 属性无效
      2. 遵循常规文档流
   2. relative
   3. fixed
   4. absolute
   5. sticky
2. top, left, right, bottom（不同 position 值时的含义，以及百分比单位的含义）

## Backgrounds and Border

1. background-xxx
2. border（用border绘制一个三角形）
3. border-radius (百分比数值和多组值时的含义)

## Flex

1. 容器和项目
2. 主轴与从轴
3. 容器属性
4. 项目属性
5. 空间分配（什么情况下会分配以及如何分配的）
6. 压缩配置（什么情况下会压缩以及如何压缩的）

## Grid

1. 容器和项目
2. 行和列
3. 单元格
4. 网格线
5. 容器属性
6. 项目属性

### 盒子

1. 块级盒子 block box
   1. 盒子会在内联的方向上拓展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
   2. 每个盒子都会换行
   3. width 和 height 属性可以发挥作用
   4. 内边距（padding）、外边距（margin）和边框（border）会将其他元素从当前盒子周围推开

2. 内联盒子 inline box
3. 盒子不会产生换行
   1. width 和 height 属性将不起作用
   2. 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开
   3. 水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开

## BFC

1. 解决盒子高度坍塌
2. 解决盒子 margin 坍塌的问题
3. 防止元素被相邻的浮动盒子覆盖

### 创建 BFC

1. 设置浮动，float 属性值不是 none 即可
2. 设置定位 position 不是 static 或 relative
3. 设置 display， display 的值为 inline-block、flex、inline-flex
4. overflow 值不为 visible，为 auto、scroll或 hidden

## 层叠上下文

1. html 元素
2. z-index 的值不为 auto 的定位元素
3. position 值为 fixed 或 sticky 的元素
4. opacity 值小于 1
5. transform/filter/backdrop-filter/perspective/clip-path/mask/mask-image/mask-border 里任意属性值不为 none 的元素

## 同一层叠上下文中元素在 Z 轴上的排列顺序

### 从后到前的排列顺序

1. 创建层叠上下文的元素对的背景、边框
2. z-index 为负值的层叠上下文
3. 常规流非定位到的块盒
4. 非定位的浮动盒
5. 常规流非定位到的行盒、行块盒（ps: 行盒、行块盒都只存在与常规流中）
6. 任何 z-index 的值是 auto 或 0 的定位元素、层叠上下文（ps: 多重同顺序的属性组合不影响顺序。例如同时设置了opacity: 0.9;position:relative; 的元素，跟只设置了opacity: 0.9; 的元素，在排列顺序上同级）
7. z-index 为正值的层叠上下文
8. 多个同顺序的兄弟元素，后覆盖前
