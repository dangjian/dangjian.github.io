---
layout: post
title: 《Web前端开发最佳实践》第3章-源代码
fullview: false
---
## 第3章 标准的HTML代码

### 3.2 标准的 HTML页面结构
可见一个基本的HTML文档结构就是：

	<html>
	    <head>
	    </head>
	    <body>
	    </body>
	</html>
HTML4的规范中定义了多个规范的文档声明，如下是一个典型的使用示例：

	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

在HTML5的规范中简化了文档类型声明，省略了DTD的引用，表明文档以标准模式解析，示例代码如下：

	<!DOCTYPE html>

head部分包含文档的标题，文档的标题是作为站点的名称和简短描述显示在浏览器的标题栏上的。示例代码如下：

	<title>网站标题</title>

如果有引用JavaScript和CSS外部文件，则需要把外部文件的链接添加到head部分。

示例代码：
	<link rel="stylesheet" type="text/css" href="my_style.css" />

此外，head部分还会包含一些必要的Meta标签，是对HTML文档内容的描述，用来表明文档的编码、关键字、介绍、作者等信息。

示例代码：

	<meta name="keywords" content="HTML, web" />
	<meta name="description" content="一个展示HTML页面的例子" />

body部分则包含所有在浏览器上展示的内容，如：文本、图片、表格、音视频等。

示例代码：

	<a href="/news">News</a>
	<img src="green.jpeg" alt="Green" />
	<video src="tgif.vid" autoplay onerror="failed(event)"></video>

综合这些页面的主要组成部分来看，一个稍微完善的页面会具有如下类似的结构：

	<!DOCTYPE html>
	<html>
	    <head>
	        <meta charset="utf-8">
	        <title>Sample page</title>
	        <link rel="stylesheet" href="my_style.css" />
	    </head>
	    <body>
	        <h1>Sample page</h1>
	        <p>This is a <a href="demo.html">simple</a> sample.</p>
	        <!-- this is a comment -->
	    </body>
	</html>

### 3.3 正确闭合HTML标签
规范中规定了所有HTML标签的语法，其中规定非自闭和标签必须有开始标签和结束标签，而自闭合标签没有闭合标签。示例代码如下：

	<!-- 非自闭合标签必须有开始和结束标签 -->
	<a href="demo.html" title="demo">simple</a>
	<!-- 自闭合标签必须没有结束标签 -->
	<img src="demo.png" alt="demo" />

而HTML5最宽松，自闭合标签添加“/”和不添加“/”都符合规范，在自闭合标签中添加符号“/”是可选的。示例代码如下：

	<!-- 如下写法符合XHTML1.0、HTML4.01和HTML5的规范，但在HTML4中不推荐 -->
	<img src="demo.png" alt="demo" />
	<!-- 如下写法不符合XHTML1.0规范，但符合HTML4.01和HTML5的规范 -->
	<img src="demo.png" alt="demo">

如下的这几种写法不符合规范，应该严格禁止：

	<!-- 错误：非自闭合标签没有结束标签 -->
	<a href="demo.html" title="demo">simple
	<!-- 错误：非自闭合标签使用自闭合标签的语法 -->
	<a href="demo.html" title="demo" />
	<!-- 错误：自闭合标签使用非自闭合标签的语法 -->
	<img src="demo.png" alt="demo"></img>

下面的例子中起始标签“`<span>`”在元素div的内容中，而结束标签“`</span>`”则在div元素的内容之外：

	<!-- 错误： 起始标签“<span>”在元素div的内容中，结束标签“</span>”则在div元素的内容之外 -->
	<div>foo <span>bar</div> baz</span>

### 3.4 停止使用不标准的标签和属性，简化HTML代码
不推荐使用单纯设置样式的标签，如：basefont、big、center、font等。应该通过CSS设置样式，让HTML标签功能更单一。不推荐的示例如下：

	<!--不推荐代码：不推荐使用单纯设置样式的标签，应该通过CSS设置样式-->
	<font color=blue>don't use it!</font>
	<big>don't use it!</big>
	<center>don't use it!</center>
不推荐在HTML标签中添加样式属性，如：iframe、img、input、div等标签中的align属性，body标签上的background属性，td和tr标签上的height、width、nowrap、bgcolor、valign等属性，iframe标签中的frameborder、marginheight、scrolling等属性。此类属性应该废弃，并通过添加CSS样式来实现相同的效果。不
推荐的示例如下：

	<!—不推荐代码：标签中添加border、width、height等样式属性-->
	<img src=”#” alt=”demo” border=”1” width="194" height="37" />
	<div id="focusViwer" align=center> </div>

如果一定要这样的效果，可以通过JavaScript代码来实现，并且效果会更好，如：可以使用jQuery Marquee插件 。
不推荐的示例如下：

	<!--不推荐代码：效果丑陋，并且存在浏览器兼容问题，不推荐使用，如果需要实现这样的效果，可以通过JavaScript代码来实现，并且效果会更好-->
	<blink>don't use it!</blink>
	<marquee scrollamount=3 scrolldelay=100 >don't use it</marquee>

这两个标签是给文字添加删除线的，可以用 `<del>`和`<ins>`来代替。

不推荐示例：

	<!--不推荐代码：误语义的标签，单纯设置样式-->
	<b>don't use it!</b>
	<i>don't use it!</i>
	<s> don't use it!</s>
	<strike> don't use it!</strike>

推荐示例：

	<!--推荐代码：使用具有语义的标签，如果单纯为了样式，则应该通过CSS来设置-->
	<strong>important</strong>
	<em>emphasize</em>
	<del>deleted</del>
	<ins>insert</ins>
### 3.5 样式与结构分离

如media设置为screen表示正常浏览时的CSS样式，设置为print则表示页面打印时的CSS样式。

示例代码：

	<link rel="stylesheet" href="default.css" />
	<link rel="stylesheet" href="print.css" media="print" />

此方式是把CSS样式直接内嵌到HTML页面`<head>`中，所有的CSS样式放置在style标签中。
示例代码：

	<style>
	   body { }
	</style>

在HTML标签中添加内联CSS样式。此方式是样式直接添加到元素的style属性中。

示例代码：

	<span style="color: green; background: transparent">green</span>

在CSS样式文件中加载CSS样式文件

示例代码：

	@import "mystyle.css";
	@import url("mystyle.css");

### 3.6 添加JavaScript禁用的提示信息
`<noscript>`标签常规的用法是当JavaScript不可用时显示提示信息。
示例代码：

	<script type="text/javascript">
	  // 一些操作
	</script>
	<noscript>
	 <p>浏览器不支持JavaScript</p>
	</noscript>

所以最好是不要使用`<noscript>`标签，而是更改设计，让页面从无脚本模式过度到有脚本的模式，即从不支持脚本到支持脚本的渐进增强，从而保证两种模式下页面都可用。如下是给出的示例：

	<form action="calcSquare.php">
	  <p>
	    <label for=x>Number</label>:
	    <input id="x" name="x" type="number">
	  </p>
	  <input id="submit" type=submit value="Calculate Square">
	  <script>
	    var x = document.getElementById('x');
	    var output = document.createElement('p');
	    output.textContent = 'Type a number; it will be squared right then!';
	    x.form.appendChild(output);
	    x.form.onsubmit = function () { return false; }
	    x.oninput = function () {
	      var v = x.valueAsNumber;
	      output.textContent = v + ' squared is ' + v * v;
	    };
	    var submit = document.getElementById('submit');
	    submit.parentNode.removeChild(submit);
	  </script>
	</form>

常用的方式是给页面的HTML标签上添加一个名为no-js的class，并在脚本中添加移除此class的逻辑。在样式代码中可以这样设置不同状态下的样式：

	/* 脚本启用时对应的样式 */
	.product {

	}

	/* 脚本不可用时，通过覆盖以上定义的样式或者添加额外的样式来设置不同的外观*/
	.no-js .product {

	}

### 3.7添加必要的meta标签

这是`<meta>`标签最主要的功能，使用广泛。标准的meta名称包括：application-name、author、description、generator等。

示例代码：

	<!—页面关键字-->
	<meta name="keywords" content="british,type face,font,fonts" />

设置keywords和description这两个meta时，尽量使用简洁和语义明确的词语，下面的示例展示的是BBC新闻网站设置的application-name、keywords和description对应的meta信息：

	<meta name="application-name" content="BBC"/>
	<meta name="description" content="Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever you are, whatever your age." />
	<meta name="keywords" content="BBC, bbc.co.uk, bbc.com, Search, British Broadcasting Corporation, BBC iPlayer, BBCi" />

根据W3C制定的HTML5规范，指令型meta总共有5种，其中content-type、default-style和refresh已经确定，content-language和set-cookie还未正式确定。

示例代码：
	<!—页面加载5分钟后刷新-->
	<meta http-equiv="refresh" content="300" />

charset属性，设置页面字符编码。此属性功能单一，提供了一种保存和传输文档的编码格式。

	<!—声明文档为UTF-8格式-->
	<meta charset="utf-8">

这是在HTML5中新加入的meta类型，在HTML5的规范中，如下两种页面编码设置是等价的：

	<meta http-equiv='Content-Type' content='Type=text/html; charset=utf-8'>
	<meta charset='utf-8'>

为了让浏览器能准确失败编码格式，务必在`<title>`标签之前设置charset，保证标题能正确显示。示例如下：

	<head>
	    <meta charset="utf-8">
	    <title>My home page</title>
	</head>

从IE8浏览器开始支持一种设置页面兼容模式的meta类型，示例代码如下：

	<meta http-equiv="X-UA-Compatible" content="IE=8"/>

根据HTML规范，浏览器是按照页面开头定义的文档类型来解析页面的。比如，使用HTML5的文档类型声明：

	<!DOCTYPE html>

此设置还有一种常见的设置值，即：

	<meta http-equiv="X-UA-Compatible" content="chrome=1">

一般针对移动设备优化的网页都会添加如下一条mata设置，使得网页在移动设备中显示正常，设置的代码类似如下的代码语句：

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

如下代码用于展示人人网 首页中添加的meta定义：
	<meta name="msapplication-task" content="name=新鲜事;action-uri=http://www.renren.com/home;icon-uri=http://a.xnimg.cn/n/res/icons/newsfeed.ico" />
	<meta name="msapplication-task" content="name=日志;action-uri=http://blog.renren.com;icon-uri=http://a.xnimg.cn/n/res/icons/blog.ico" />
	<meta name="msapplication-task" content="name=相册;action-uri=http://photo.renren.com;icon-uri=http://a.xnimg.cn/n/res/icons/photo.ico" />
	<meta name="msapplication-task" content="name=音乐;action-uri=http://music.renren.com;icon-uri=http://a.xnimg.cn/n/res/icons/music.ico" />
	<meta name="msapplication-task" content="name=分享;action-uri=http://share.renren.com;icon-uri=http://a.xnimg.cn/n/res/icons/share.ico" />
	<meta name="msApplication-ID" content="App" />
	<meta name="msApplication-PackageFamilyName" content="57722RenRenpreview.RenrenHD_fknrsfzqca1jw" />
