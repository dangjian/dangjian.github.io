---
layout: post
title: 《Web前端开发最佳实践》第6章-源代码
fullview: false
---
## 第6章 高维护性的CSS
### 6.1 如何高效地组织CSS代码
例如，常见的一个公有class是用来设置文字不可见，代码如下：

	.text-hide {
	    font: 0/0 a;
	    color: transparent;
	    text-shadow: none;
	    background-color: transparent;
	    border: 0
	}

在页面中使用IE浏览器独有的条件注释方式引用此样式文件。示例代码如下：

	<!--[if lt IE 8]>
	<link rel='stylesheet' href="IE-style.css" />
	<![endif]-->

按照上述的规则，定义的CSS样式框架应如下：

	/* 定义最外框的父元素的样式 */
	.reader-header-container {
	    …
	}
	/* 定义最上面黑色背景的工具条的样式 */
	.reader-header-bar {
	    …
	}
	/* 定义工具条内部的3个可点击菜单项目的样式 */
	.reader-header-bar li {
	    …
	}
	/* 定义下部的主体工具栏的样式 */
	.reader-header-main {
	    …
	}
	/* 定义下部工具栏中最左边的logo的样式 */
	.reader-header-logo {
	    …
	}
	/* 定义下部工具栏中间的5个图标按钮的外框的样式 */
	.reader-main-action {
	    …
	}
	/* 定义工具栏中图标按钮的共通样式 */
	.reader-main-action li {
	    …
	}
	/* 定义工具栏中分隔竖线的共通样式 */
	.reader-main-action .spliter {
	    …
	}
	/* 按照从左到右依次定义工具栏中5个图标按钮的样式 */
	.reader-main-action .library {
	    …
	}
	.reader-main-action .toc {
	    …
	}
	.reader-main-action .note {
	    …
	}
	.reader-main-action .bookmark {
	    …
	}
	.reader-main-action .highlight {
	    …
	}

如下代码展示了使用Less写样式代码的示例：

	// LESS
	.rounded-corners (@radius: 5px) {
	  border-radius: @radius;
	  -webkit-border-radius: @radius;
	  -moz-border-radius: @radius;
	}

	#header {
	  .rounded-corners;
	}
	#footer {
	  .rounded-corners(10px);
	}
	经过编译后最终产生的CSS样式代码为：
	/* 生成的 CSS */
	#header {
	  border-radius: 5px;
	  -webkit-border-radius: 5px;
	  -moz-border-radius: 5px;
	}
	#footer {
	  border-radius: 10px;
	  -webkit-border-radius: 10px;
	  -moz-border-radius: 10px;
	}

### 6.2 使用CSS Reset：统一浏览器显示效果
其中的某些差异给开发带来了不小麻烦，比如如下的HTML代码片段：

	<input type="search" />
	<input type="button" value="Save" />

由于在这3个浏览器中`<input>`标签的默认样式margin的值不一致造成的。解决的办法就是重新设置`<input>`标签的margin样式：

	input {
	    margin: 0;
	}

国外一个名叫Tantek的开发者开发了第一个的重置样式文件，命名为undohtml.css 。除去注释，重置样式代码总共包括六条样式规则：

	:link,:visited { text-decoration:none }
	ul,ol { list-style:none }
	h1,h2,h3,h4,h5,h6,pre,code { font-size:1em; }
	ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,body,html,p,blockquote,fieldset,input
	{ margin:0; padding:0 }
	a img,:link img,:visited img { border:none }
	address { font-style:normal }

后来陆续有了多种版本的样式重置方案，其中一个方案火爆一时，此方案总共就一行代码：

	* { margin: 0; padding: 0 }

如果在项目中需要使用HTML5中新添加的标签，则重置某些标签的display样式，因为在IE8/9中没有定义这些标签的默认display样式。样式代码如下：

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	nav,
	section,
	summary {
	    display: block;
	}

	audio,
	canvas,
	video {
	    display: inline-block;
	}

在Eric的方案中，也是重置了大部分的标签的padding、margin和border样式，代码如下：

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
	    margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
	    vertical-align: baseline;
	}

来看看YUI中的方案：

	body,div,dl,dt,dd,ul,ol,
	li,h1,h2,h3,h4,h5,h6,pre,
	code,form,fieldset,legend,
	input,button,textarea,select,
	p,blockquote,th,td {
	    margin: 0;
	    padding: 0;
	}

当`<img>`标签在一个`<a>`标签内部时，会在IE8/9中出现默认的border，所以需要重置`<img>`标签的border样式：

	img {
	    border: 0;
	}

以下是笔者推荐的一种重置方案，代码片段来自YUI框架：

	address,
	caption,
	cite,
	code,
	dfn,
	em,
	strong,
	th,
	var {
	font-style:normal;
	font-weight:normal;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
	font-size:100%;
	font-weight:normal;
	}
	abbr, acronym {
	border: 0;
	font-variant: normal;
	}

	input,
	textarea,
	select {
	font-family:inherit;
	font-size:inherit;
	font-weight:inherit;
	}
	/*to enable resizing for IE*/
	input,
	textarea,
	select {
	*font-size:100%;
	}

但在实际项目中很少会使用这种默认的列表项样式，所以会重置列表项的样式，如下：

	li {
	    list-style: none;
	}

表格元素的样式重置其目的是重置单元格之间的默认空间，重置样式代码如下：

	table {
	    border-collapse: collapse;
	    border-spacing: 0;
	}

大部分的情况下，链接并没有设计为有下划线的形式。所以需要重置链接默认添加了下划线的样式，重置代码如下：

	a:link, a:visited
	{
	    text-decoration: none;
	}

以下是YUI框架中针对部分元素的重置方案：

	q:before,
	q:after {
		content:'';
	}
	abbr,
	acronym {
		border:0;
		font-variant:normal;
	}
	sup {
		vertical-align:text-top;
	}
	sub {
		vertical-align:text-bottom;
	}

### 6.3 给CSS样式定义排序
如下是一个按照字母序排列的例子：

	#element {
	    -webkit-border-radius: 4px;
	    -moz-border-radius: 4px;
	    border-radius: 4px;
	    color: #FFF;
	    font-family: "Times New Roman", serif;
	    font-weight: bold;
	    height: 300px;
	    line-height: 20px;
	    top: 10px;
	    width: 100px;
	}

如下的例子将按照定义由长到短排列：

	#element {
	    font-family: "Times New Roman", serif;
	    -webkit-border-radius: 4px;
	    -moz-border-radius: 4px;
	    border-radius: 4px;
	    font-weight: bold;
	    line-height: 20px;
	    height: 300px;
	    width: 100px;
	    color: #FFF;
	    top: 10px;
	}

### 6.4 合理利用CSS的权重：提高代码的重用性
分别计算abc的值后，按顺序连接abc三个数字组成一个新数值，此新数值即为所计算的选择符的权重。举例如下（例子摘自W3C官方文档）：

	*                  /* a=0 b=0 c=0 -> 权重 =   0 */
	LI                 /* a=0 b=0 c=1 -> 权重 =   1 */
	UL LI             /* a=0 b=0 c=2 -> 权重 =   2 */
	UL OL+LI         /* a=0 b=0 c=3 -> 权重 =   3 */
	H1 + *[REL=up]  /* a=0 b=1 c=1 -> 权重 =  11 */
	UL OL LI.red    /* a=0 b=1 c=3 -> 权重 =  13 */
	LI.red.level    /* a=0 b=2 c=1 -> 权重 =  21 */
	#x34y            /* a=1 b=0 c=0 -> 权重 = 100 */
	#s12:not(FOO)  /* a=1 b=0 c=1 -> 权重 = 101 */

如果要覆盖使用了id选择器的样式，就必须在原先使用id选择器的基础上添加新的选择符（类选择器或者是标签类型选择器）或者使用!important，但这样做的结果是无法重用的样式代码会越来越多。举个例子：

	<style type="text/css">
	#test{
	        font-size:40px;
	    }
	    #test span {
	        color: #CCC;
	    }
	</style>
	<div id="test">这是一段<span>重要的文字</span>，请<span>不要删除。</span></div>

这个时候，如果想把“不要删除”这几个字标识为红色，则可能会写这样的代码：

	<style type="text/css">
	    #test{
	        font-size:40px;
	    }
	    #test span {
	        color: #CCC;
	    }
	    .important {
	        color: #F00;
	    }
	</style>
	<div id="test">这是一段<span>重要的文字</span>，请<span class="important">不要删除。</span></div>

如果要让“不要删除”这四个字为红色，只能提高.important样式的权限，有两种方式可提高选择符的权重：

	/* 添加id选择符 */
	#test .important {
	    color: #F00;
	}

	/* 选择important关键字 */
	.important {
	    color: #F00 !important;
	}

对于上面的示例，其实可以在基础选择符中使用类选择器而不是id选择器，如下:

	<style type="text/css">
	    .test{
	        font-size:40px;
	    }
	    .test span {
	        color: #CCC;
	    }
	    span.important {
	        color: #F00;
	    }
	</style>

上面的例子中，不变的样式是文字的字体尺寸，可变的是文字的颜色，下面以此设计思想重新定义了3个样式。

	<style type="text/css">
	    .test{
	        font-size:40px;
	    }
	    .common {
	        color: #CCC;
	    }
	    .important {
	        color: #F00;
	    }
	</style>
	<div id="test" class="test">这是一段<span class="common">重要的文字</span>，请<span class="important">不要删除。</span></div>

### 6.5 CSS代码的兼容：如何兼容IE浏览器
如下是一份完整的IE浏览器hack的方式 ：

	/* 选择器的hack */
	/* IE 6及以下版本 */
	* html .selector  {}
	 /* IE 7及以下版本 */
	.selector, {}
	/* IE 7 */
	*:first-child+html .selector {}
	.selector, x:-IE7 {}
	*+html .selector {}
	/* 除了IE 6 */
	html > body .selector {}
	/* 除了IE 6/7 */
	html > /**/ body .selector {}
	head ~ /* */ body .selector {}
	/* 除了IE 6/7/8 */
	:root *> .selector {}
	body:last-child .selector {}
	body:nth-of-type(1) .selector {}
	body:first-of-type .selector {}


	/* 样式属性的hack */
	/* IE 6 */
	.selector { -color: blue; }
	/* IE 6/7 -和以下字符的组合:
	 ! $ & * ( ) = % + @ , . / ` [ ] # ~ ? : < > | */
	.selector { !color: blue; }
	.selector { $color: blue; }
	.selector { &color: blue; }
	.selector { *color: blue; }
	/* ... */
	/* IE 6/7 - 类似!important */
	.selector { color: blue !ie; }

	/* IE 8/9 */
	.selector { color: blue\0/; }

	/* IE 9/10 */
	.selector:nth-of-type(1n) { color: blue\9; }
	/* IE 6/7/8/9/10 */
	.selector { color: blue\9; }
	.selector { color/*\**/: blue\9; }
	/* 除了IE 6 */
	.selector { color/**/: blue; }

在IE浏览器中可以使用条件注释，让不同浏览器加载不同的样式文件来达到兼容代码和正常代码分离的目的。例如：

	<link rel="stylesheet" media="screen" href="css/style.css" />
	<!--[if IE 8]><link rel="stylesheet" media="screen" href="css/ie8.css"  />< ![endif]-->
	<!--[if IE 7]><link rel="stylesheet" media="screen" href="css/ie7.css"  />< ![endif]-->

为了提高兼容样式的优先级，可以在根元素（html或者body元素）上针对不同的浏览器添加不同的样式类，示例代码如下：

	<!--[if IE 7]>         <html class="ie7"> <![endif]-->
	<!--[if IE 8]>         <html class="ie8"> <![endif]-->
	<!--[if gt IE 8]><!--> <html>         <!--<![endif]-->

当使用IE8时，在html元素上添加了名称为ie8的类，当使用IE7浏览器时，在html元素上添加了名称为ie7的类，这样在样式中就可以针对不同的类添加不同的样式了，例如：

	.footer { color: inherit;}
	.ie7 .footer { color: #f00; } /* 兼容IE7的样式*/
	.ie8 .footer { color: #0f0; } /* 兼容IE8的样式*/

很多新手会分不清楚百分比和em这两个概念，em的计算是相对于自身元素的字体尺寸的，而百分比是相对于父元素的尺寸的，举个例子：

	<style type="text/css">
	    body {
	        width: 100px;
	        border: 1px solid #CCC;
	    }
	    .test1 {
	        font-size: 16px;
	        width:2em;
	        border: 1px solid red;
	    }
	    .test2 {
	        font-size: 16px;
	        width: 200%;
	        border: 1px solid red;
	    }
	</style>
	<body>
	这是body
	    <div class="test1">长度为2em</div>
	    <div class="test2">长度为200%</div>
	</body>

整体左右两栏的宽度设置：

	<style>
	.featured-photography {
	    width: 65.71815718%;
	    margin-right: 2.7100271%;
	    float: left;
	}
	.trending-stories {
	    width: 31.43631436%;
	    float: right;
	}
	</style>
	<div class="group">
	    <section class="featured-photography">
	    </section>
	    <section class="trending-stories">
	    </section>
	</div>

左下模块中等宽的两个模块的宽度设置如下：

	<style>
	.featured-photography .photo {
	    float: left;
	    width: 47.83505155%;
	    margin-left: 4.12371134%;
	    color: #333;
	}
	.featured-photography .photo:first-child {
	    margin-left: 0;
	}
	</style>
	<section class="featured-photography module">
	    <header class="primary-photo">
	    </header>
	    <div class="secondary-photos">
	        <div class="photo"></div>
	        <div class="photo"></div>
	    </div>
	</section>

如果继承的层级很多，并且每个层级都设置有相对的字体大小，就很不方便预知子元素的实际字体大小了。比如：

	<style type="text/css">
	    body {
	        font-size: 16px;
	    }
	    .container {
	        font-size: 0.8em;
	    }
	    .inner {
	        font-size: 0.8em;

	    }
	</style>
	<body>
	    <div class="container">
	        outer text
	        <div class="inner">inner text</div>
	    </div>
	</body>