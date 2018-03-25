---
layout: post
title: 《Web前端开发最佳实践》第5章-源代码
fullview: false
---
## 第5章 积极拥抱HTML5
### 5.1 HTML5新特性的使用
如下展示一个符合HTML4.01规范的类型声明：

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

在HTML5中则去掉了DTD的引用，简化为：

	<!DOCTYPE html>

从形式上看，第二种方式是第一种方式的简化版。代码如下：

	<!—HTML4.01中定义的设置页面编码的方式-->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<!—HTML5中定义的设置页面编码的方式-->
	<meta charset="UTF-8">

在一个符合HTML4.01规范的页面中，开发者引用样式和脚本的代码类似如下形式：

	<link rel="stylesheet" type="text/css" href="/css/lib/base.css"/>
	<script type="text/javascript" src="jquery.min.js"></script>

按照HTML5的规范，在常规情况下页面引用样式或脚本时就可以省略type属性的设置，相应的代码可以简化为：

	<link rel="stylesheet" href="/css/lib/base.css"/>
	<script src="jquery.min.js"></script>

下面的代码是一个典型的页面HTML框架：

	<body>
	    <div id="header">...</div>
	    <div id="navigation">...</div>
	    <div id="main">...</div>
	    <div id="sidebar">...</div>
	    <div id="footer">...</div>
	</body>

如下是一个符合HTML5规范的页面结构：

	<body>
	    <header id="header">...</header>
	    <nav id="navigation">...</nav>
	    <section id="main">...</section>
	    <aside id="sidebar">...</aside>
	    <footer id="footer">...</footer>
	</body>

使用defer和async属性的示例代码如下：

	<!-- HTML4.01规范中定义了defer属性 -->
	<script src="file.js" defer="defer"></script>
	<!-- HTML5规范中定义了async属性 -->
	<script src="file.js" async="async"></script>

此属性的作用是指定页面`<a>`标签的默认窗口，省去了在`<a>`标签上定义target属性。例如：

	<head>
		<base target="_blank">
	</head>

placeholder对应的一个jQuery插件jquery-placeholder ，使用方法也很简单，如下是使用此插件的示例代码：

	$('input, textarea').placeholder();

此外还需要设置placeholder对应的字体颜色：

	.placeholder { color: #aaa; }

如下示例展示自定义数据的定义和读取：

	<ol>
	 <li id="byond_sea" data-length="2m11s">Beyond The Sea</li>
	 ...
	</ol>

对应的读取和设置数据的方式如下：

	var beyondSea = document.getElementById('byond_sea');
	// 获取数据
	beyondSea.dataset['length'];
	// 设置数据
	beyondSea.dataset['length'] = '3m11s';

如下是使用jQuery API的例子：

	<div data-role="page" data-last-value="43" data-hidden="true" data-options='{"name":"John"}'></div>
	$("div").data("role") === "page";
	$("div").data("lastValue") === 43;
	$("div").data("hidden") === true;
	$("div").data("options").name === "John";

如下是一个用于包含XML数据的例子，此例子来自于mozilla开发中心网站：

	<script id="purchase-order" type="application/xml">
	<purchaseOrder xmlns="http://example.mozilla.org/PurchaseOrderML">
	  <lineItem>
	    <name>Line Item 1</name>
	    <price>1.25</price>
	  </lineItem>
	  <lineItem>
	    <name>Line Item 2</name>
	    <price>2.48</price>
	  </lineItem>
	</purchaseOrder>
	</script>

读取此段数据的方式也很简单，对应JavaScript代码如下：

	var orderSource = document.getElementById("purchase-order").textContent;
	  var parser = new DOMParser();
	  var doc = parser.parseFromString(orderSource, "application/xml");

### 5.3 如何处理浏览器的兼容问题
庆幸的是IE8/IE7/IE6支持通过document.createElement方法产生的标签，可以利用这一特性让这些浏览器支持HTML5新标签，代码如下：

	var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
	var i= e.length;
	while (i--){
	    document.createElement(e[i])
	}

浏览器支持新标签后，还需要添加标签默认的样式：

	article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}
	mark{background:#FF0;color:#000}

html5shim的使用方法很简单，在页面的head部分添加框架的引用即可：

	<!--[if lt IE 9]>
	<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
	<![endif]-->

Modernizr的使用方法很简单，首先要在head部分引入框架的JavaScript文件：

	<script src="js/modernizr.min.js"></script>

其次在html标签上添加一个名称为no-js的类：

	<html class="no-js">

如果浏览器没有禁用JavaScript，则浏览器加载页面后，html标签上的类会动态替换和添加。加载后，html标签类似如下：

	<html class="js canvas canvastext geolocation rgba hsla no-multiplebgs borderimage borderradius boxshadow opacity no-cssanimations csscolumns no-cssgradients no-cssreflections csstransforms no-csstransforms3d no-csstransitions  video audio cufon-active fontface cufon-ready">

在CSS代码中，可以通过使用这些类添加向后兼容的代码，如下是一个使用多背景图的例子：

	#nice {
	    background: url(background-one.png) top left repeat-x;
	}
	.multiplebgs #nice {
	    background: url(background-one.png) top left repeat-x,
	    url(background-two.png) bottom left repeat-x;
	}

要让所有的浏览器可以播放audio元素上的音频，最佳的方式是提供MP3和Ogg两种格式，兼容代码如下：

	<audio controls>
	    <source src="elvis.mp3" type='audio/mpeg; codecs="mp3"'>
	    <source src="elvis.oga" type='audio/ogg; codecs="vorbis"'>
	    <!-- 向后兼容代码：如，显示提示信息、提供下载链接使用flash播放器等 -->
	    浏览器不支持<code>audio</code>标签
	</audio>

从浏览器支持的视频格式来看，最佳的方式是提供WebM和MP4两种格式的视频。兼容代码如下：

	<video controls>
	    <source src=video.webm type=video/webm>
	    <source src=video.mp4 type=video/mp4>
	    <!—向后兼容代码: -->
	    <iframe width="480" height="360" src="http://www.youtube.com/embed/xzMUyqmaqcw?rel=0" frameborder="0" allowfullscreen></iframe>
	</video>