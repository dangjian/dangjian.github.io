---
layout: post
title: Web前端开发最佳实践（7）：在Web网页中，使用合理的技术方案来构建小图标
author: dang
categories: [Web]
tags: [icon]
fullview: false
---

大家都对网站上使用的小图标肯定都不陌生，这些小图标作为网站内容的点缀，增加了网站的美观度，提高了用户体验，可是你有没有看过在这些网站中使用的图标都是用什么技术实现的？虽然大部分网站还是使用普通的图片实现，不过可供使用的技术方案还不少，这些都归功于新的Web技术的应用。

## 常见的小图标应用方案

### 1. 最简单的还是图片，图片

这个方案是使用最广的方案，简单有效。[jQuery UI](http://jqueryui.com/)使用的就是这样的方案。jQuery UI是把所有需要用到的小图标放置在一张大的sprite图片中，类似如下的图片：

![jQuery UI 图标示例](http://download.jqueryui.com/themeroller/images/ui-icons_888888_256x240.png)

用法也很简单。应用图标时，通过设置背景图来展示不同的图标。比如，要添加一个邮件的图标，则需要设置`class`为`ui-icon ui-icon-mail-closed`。`ui-icon` 和 `ui-icon-mail-closed`的定义如下：

    .ui-icon {
        background-image: url("/themeroller/images/ui-icons_888888_256x240.png");
    }

    .ui-icon-mail-closed {
        background-position: -80px -96px;
    }

可以看到jQuery UI的方案还是传统的通过设置不同的`background-position`来切换不同的图标的。此种方法简单，但是不同的皮肤需要有不同的颜色的图片来对应，光jQuery UI默认内置的图片就有很多种。

使用图片的缺点也明显，最大的缺点是不好自定义图标的大小和颜色。限制了页面的设计。

### 2. 使用Web Fonts

通过Web Font技术来构建小图标是目前使用最广泛的代替普通图片的方案。Web Font是在CSS3中引入的技术，w3c官方网站上的地址是：[css3-webfonts](http://www.w3.org/TR/css3-webfonts/)。如下是使用Web Font的示例：

	@font-face {
	    font-family: Delicious;
	    src: url('Delicious-Roman.otf');
	}
	@font-face {
	    font-family: Delicious;
	    font-weight: bold;
	    src: url('Delicious-Bold.otf');
	}

	h3 {
	    font-family: Delicious, sans-serif;
	}

Web Font目前已经得到了所有主流浏览器的支持，所以在网页中已经大量的使用。caniuse网站上查到的Web Font的浏览器支持状况如下：

![Web Font的浏览器支持状况](http://i.imgur.com/Zx3Brej.png)

Web Font的使用使得网站不再是局限于系统内置的字体，网站中字体的显示也更具有个性。Web Font尽管使用广泛，但是中文字体上的应用还很少，这主要是因为中文对应的字体文件过于庞大（中文博大精深~）。目前使用最多的Web Font是由Google提供的服务，这里有一篇文章介绍[Google Web Font的使用](http://www.w3cplus.com/css/how-to-use-google-font-api)。这里就不在详细展开。今天重点要说的是Web Font用于构建小图标。

由于Web Font可以自定义字体，那么就给了设计者设计一种特殊字体的可能，即图标字体。这种字体具有文字的特性，比如可以设置字体的颜色和大小，但同时具有图标的外观。目前使用很广泛的Web Font图标库是[font awesome](http://fontawesome.io/) 和 BootStrap框架包含的图标模块[glyph icons](http://getbootstrap.com/components/#glyphicons)。Font Awesome提供了多达519个图标，BootStrap中也提供了260个图标。这些图标基本上涵盖了网页中常用的图标。如果不知道如何选择图标，[这个网站](http://www.bootstrapicons.com/)可以辅助查找。如下示例使用Font Awesome 和 BootStrap展示邮件图标：

	<!—使用Font Awesome 生成图标-->
	<i class="fa fa-envelope-o"></i>

	<!—使用BootStrap 生成图标-->
	<i class="glyphicon glyphicon-envelope"></i>

这类框架生成图标的原理类似，利用 `::before` 和 `::after` 伪对象在元素中插入内容，然后渲染内容为图标。比如`fa` 和 `fa-envelope-o`的定义如下：

	.fa {
		display: inline-block;
		font: normal normal normal 14px/1 FontAwesome;
		font-size: inherit;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		transform: translate(0, 0);
	}

	.fa-envelope-o:before {
        content: "\f003";
    }

`fa`类定义了元素的字体，即Web Font字体， `fa-envelope-o`的作用是在元素中插入内容文字`"\f003"`，内容文字通过定义的Web Font字体渲染为一个邮件图标。

这种方案的优势明显，通过CSS就可以很方便地控制图标的大小和颜色，在开发中带来了极大的便利性。使用Web Font生成的图标，会自动适用不同的设备分辨率，不会因为放大和缩小而影响图标显示的质量。这个看似很完美的方案，但是在使用过程中还是有一些缺点的。最大的缺点是浏览器的支持上不够完美，浏览器把图标作为文字进行渲染，由于抗锯齿的优化不好，使得图标看起来不够锐利。其次，由于浏览器兼容性的问题，需要提供至少四种不同类型的字体文件。比如BootStrap提供了`eot`、 `ttf`、` woff`、`svg`这四种格式的字体文件。网站中往往只需要少数几个图标，但是需要引入所有的图标文件，增加了额外的开销。

### 3. 使用SVG
SVG是一种基于XML的图形格式。这是一种可缩放的矢量图形。SVG是由W3C制定的标准，在2003年成为了W3C的推荐标准。相比较其他的图像格式，SVG的优势在于：SVG可以被很多工具读取和修改、SVG的尺寸更小、SVG图像在任何的分辨率下都可以高质量地打印。
SVG主要有如下的使用方式：

#### img标签直接引用
这种方式简单，直接把SVG格式图片看作为普通的图片来引用。这种方式在实际的使用场景中应用不多。

#### 内联方式

IE9、Firefox、Opera、Chrome及Safari都支持内联的SVG。IE8及以下版本浏览器可以通过安装插件来支持SVG。内联的SVG直接作为HTML文档的一部分，不需要单独请求。内联的SVG使用上很不方便，如果在HTML中加入大段的SVG代码，则很难维护，代码也无法复用。

#### Data URIs
这种方式是把SVG文件直接转成base64编码格式，然后以Data URIs的方式引用。示例代码如下：

	.icon{
	  background: url(data:text/svg+xml;base64,<base64 encoded data>)
	}

#### 使用SVG中的`<symbol>`元素

在SVG的规范中，可以通过`<symbol>`元素来组合多个图片到一个SVG文件中。在SVG中每个`<symbol>`代表着一个独立的图片或者图标。代码示例如下：

	<svg display="none" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs>
	<symbol id="icon-home" viewBox="0 0 1024 1024">
		<title>home</title>
		<path class="path1" d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
	</symbol>
	<symbol id="icon-home2" viewBox="0 0 1024 1024">
		<title>home2</title>
		<path class="path1" d="M512 32l-512 512 96 96 96-96v416h256v-192h128v192h256v-416l96 96 96-96-512-512zM512 448c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64z"></path>
	</symbol>
	</defs>
	</svg>

如上代码示例来自于 [icomoon.io](https://icomoon.io/app/#/select)。可以看到SVG元素中包含了两个symbol元素，每个元素都有一个id属性。这两个元素实际上是两个图标。使用的方法是通过在SVG中使用use引入具体某个symbol对应的id值，即引入了symbol元素对应的图标。如下是在HTML代码中引入symbol的示例：

![Imgur](http://i.imgur.com/ggTTuna.png?1)

浏览器渲染后的效果如下图：

![Imgur](http://i.imgur.com/Ar8ID8c.png)

可以看到，在SVG中使用use可以引入在一个SVG图片中的不同图标。这样的效果类似于CSS中的雪碧图。

### 4. 纯CSS生成图标

随着CSS的不断发展，使用CSS不仅仅可以产生一些四四方方的线框效果，同时可以产生一些曲线和倾斜效果。主要利用了如下的CSS特性：border-radius、box-shadow、transform等效果及使用伪元素`::before` 和 `::after`。这些效果的搭配使用，则可以产生一些特殊的形状。这就给了我们一个单纯使用CSS来生成一些简单图标的机会。如下图是一个常见的RSS图标：

![Imgur](http://i.imgur.com/hpa8fUv.png)

我们可以尝试使用CSS来生成这样的效果，假设此图标对应的HTML只有一个简单的元素

	<i class="icon-rss"></i>

接下来定义这个`icon-rss`类，先定义基本的高和宽：

	.icon-rss {
		width: 22px;
		height: 22px;
		overflow: hidden;
		margin: 6px;
		position: relative;
	}
接下来利用::before伪对象定义图标左下角的实心圆：

	.icon-rss:before {
		content: '';
		width: 6px;
		height: 6px;
		box-shadow: 0 0 32px inset;
		left: 0;
		bottom: 0;
		position: absolute;
		border-radius: 50%;
	}
如上的代码中，设置元素为绝对定位并定位于左下角。使用border-radius构建一个圆形，然后应用box-shadow，设置圆形内阴影。达到实心圆的效果。

构建完实心圆后，接下来构建右上角的两个半圆弧。这次使用`::after`伪元素。

	.icon-rss:after {
		content: '';
		width: 27px;
		height: 27px;
		right: 15%;
		top: 15%;
		position: absolute;
		border-radius: 50%;
		border: 4px solid transparent;
		box-shadow: inset 0 0 0 2px,0 0 0 2px;
	}

代码中同样设置元素为绝对定位，并定位于右上角。使用border-radius构建一个圆形，但因为设置了元素的高度和宽度远大于外框的高宽，所以超出部分被外框遮挡，达到了1/4圆弧的效果。但仅仅设置这些并不能产生两条圆弧的效果，所以代码中借助了`box-shadow`，产生了内外两个阴影，实际显示成为两条圆弧。两条圆弧的距离太近，通过设置一个透明的`border`，加大了两条阴影的距离。

至此，一个RSS图标产生。看起来很繁琐，构建这样一个图标需要有很好的CSS功底。好在有第三方库可以使用。[icono](http://saeedalipoor.github.io/icono/)就是这样一个纯CSS生成图标的库。所有的图标效果图如下：

![Imgur](http://i.imgur.com/WooNB49.png)

## 结论

以上就是我们在网页中常见的图标构建技术。在实际的使用中需要结合浏览器兼容来选择合适的方案。个人推荐使用Web Font 和 SVG的方案，这样的方案更能适合当前高清屏幕的显示。推荐使用[icomoon.io](https://icomoon.io/app/#/select)库。纯CSS的方案还不够成熟，浏览器兼容性也不够好，可构建的图标有限，不建议在实际的项目中使用，但可以作为学习的资料。