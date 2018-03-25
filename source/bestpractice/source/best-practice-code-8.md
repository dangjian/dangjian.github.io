---
layout: post
title: 《Web前端开发最佳实践》第8章-源代码
fullview: false
---
## 第8章 CSS3相关最佳实践

### 8.1 查看浏览器的支持情况
比如在360导航网站 的首页中，鼠标移动到导航栏上时其背景色的动态效果就是使用的CSS3中新的选择符和新特性transition实现的，代码如下：

	#longlong.menupiano a:not(.hover)+.hover-bg {
	-webkit-transition: 0.2s ease;
	-moz-transition: 0.2s ease;
	-ms-transition: 0.2s ease;
	-o-transition: 0.2s ease;
	top: 38px;
	}

### 8.2 添加必要的浏览器前缀
如下以编写CSS3中transition功能为例，展示如何编写各浏览器都兼容的CSS代码：

	.reader-tips {
		-moz-transition: background-color linear .8s;
		-ms-transition: background-color linear .8s;
		-o-transition:  background-color linear .8s;
		-webkit-transition: background-color linear .8s;
		transition:background-color linear .8s;
	}

比如，对于border-radius，只需要在iOS Safari3.2和Android Browser2.1中添加-webkit-前缀，其他旧版本的浏览器因为占有率极低，可以不予考虑，则此功能完整的定义为：

	.border-style {
	    -webkit-border-radius: 3px;
	    border-radius: 3px;
	}

使用此工具时，在输入框中输入任何的CSS定义，在经过工具处理后所生成兼容各浏览器的CSS代码，就会自动添加或删除浏览器前缀。比如输入如下的CSS代码：

	.border-style {
		border-radius: 3px;
		-webkit-border-radius: 3px;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
	}

经过Prefixr处理会生成如下的代码：

	.border-style {
		border-radius: 3px;

		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
	}

具体的方法是，针对CSS3中的特性定义一份模板样式，比如针对透明背景色特性定义的Less模板类似如下形式：

	.opacity (@opacity: 0.5) {
		-webkit-opacity: @opacity;
		-moz-opacity: @opacity;
		opacity: @opacity;
	}

如下的代码使用了上面定义的模板：

	.myClass {
		.opacity (0.2);
	}

经过编译，生成的CSS代码为：

	.myClass {
	    -webkit-opacity: 0.2;
	    -moz-opacity: 0.2;
	    opacity: 0.2;
	}

某些添加了浏览器前缀的属性定义可能并没有被任何浏览器所支持，比如，有开发者会按照如下的方式定义border-radius：

	.border-style {
	    -webkit-border-radius: 3px;
	    -ms-border-radius: 3px;
	    -moz-border-radius: 3px;
	    -o-border-radius: 3px;
	    border-radius: 3px;
	}

### 8.3 做好CSS3中新特性的兼容处理
为IE浏览器添加filter样式（从图8-5上看，此样式会在IE9及以下版本浏览器中起作用）的代码如下：

	.back-style {
		background-color: #2187e7;
		background-image: -webkit-gradient(linear, 0% top, 100% top, from(#2187e7), to(#a0eaff));
		background-image: -webkit-linear-gradient(left, color-stop(#2187e7 0%), color-stop(#a0eaff 100%));
		background-image: -moz-linear-gradient(left, #2187e7 0%, #a0eaff 100%);
		background-image: linear-gradient(to right, #2187e7 0%, #a0eaff 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff2187e7', endColorstr='#ffa0eaff', GradientType=1);
	}

这样，当多背景图不被支持时，还有单背景图或者背景色起作用。示例如下：

	background: url(../img/bg.png) repeat;
	background: url(../img/upper_bg.png) 0 495px repeat-x, url(../img/bg.png) repeat;
