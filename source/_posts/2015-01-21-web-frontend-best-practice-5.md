---
layout: post
title: Web前端开发最佳实践（5）：正确闭合HTML标签，停止使用不标准的标签和属性
author: dang
categories: [HTML5]
tags: [HTML5]
fullview: false
date: 2015-01-21
---

## 正确闭合HTML标签

HTML元素的内容模型定义了元素的结构，表明元素可以包含哪些内容以及元素可以有哪些属性。元素可以包含的内容包括其他元素和字符，但是也有一些元素是空元素，即不能包含任何内容，这些元素对应的HTML标签也称之为自闭合标签，下面列出了HTML中所有的自闭合标签：
<!-- more -->

	area、base, br, col, command, embed, hr, img, input, keygen, link, meta, param, source, track, wbr

W3C制定了多个版本的HTML规范，目前流行的HTML规范有XHTML1.0、HTML4.01和HTML5。规范中规定了所有HTML标签的语法，其中规定非自闭和标签必须有开始标签和结束标签，而自闭合标签没有闭合标签。示例代码如下：

	<!-- 非自闭合标签必须有开始和结束标签 -->
	<a href="demo.html" title="demo">simple</a>
	<!-- 自闭合标签必须没有结束标签 -->
	<img src="demo.png" alt="demo" />

有关自闭合标签中是否应该添加符号“/”，在XHTML1.0、HTML4.01和HTML5的规范中稍有不同。XHTML的规范最严格，必须在自闭合标签中添加“/”来表明标签的结束。在HTML4.01的规范中，不推荐在自闭合标签中添加“/”。而HTML5最宽松，自闭合标签添加“/”和不添加“/”都符合规范，在自闭合标签中添加符号“/”是可选的。示例代码如下：

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

当元素的起始标签和结束标签不在同一个元素的内容中时，则会出现交叉嵌套。应该严格禁止标签之间的交叉嵌套。
下面的例子中起始标签“`<span>`”在元素div的内容中，而结束标签“`</span>`”则在div元素的内容之外：

	<!-- 错误： 起始标签“<span>”在元素div的内容中，结束标签“</span>”则在div元素的内容之外 -->
	<div>foo <span>bar</div> baz</span>

一般通过编写层次缩进良好的HTML代码能够最大化避免出现这样交叉嵌套的错误代码。

## 停止使用不标准的标签和属性

W3C在制定的HTML4和HTML5标准中有添加独立的章节来说明那些是不被推荐的标签和属性，这些标签和属性是Web互联网发展早期HTML标准混乱和浏览器各自为政的产物，有些标签甚至使用率颇高，比如marquee滚动效果标签，尽管在现在看来其效果丑陋无比，但在当时几乎所有的网站都会使用这样的效果，风靡一时。但是随着Web互联网的飞速发展，人们对Web的认识也逐渐提高，也开始关注如何让网页HTML代码更统一、更简洁、更易理解等等，不在局限于单纯的外观。在此过程中，一些标签和属性逐渐被更好的方案代替，这些标签也不被标准所推荐，甚至是从标准规范中移除，有些特性在浏览器中也不被继续支持。从这些标签和属性的作用来看，导致不被推荐的原因主要有如下几个：

### 1. 标签没有实际的语义，仅仅是用于设置样式

不推荐使用单纯设置样式的标签，如：basefont、big、center、font等。应该通过CSS设置样式，让HTML标签功能更单一。不推荐的示例如下：

	<!--不推荐代码：不推荐使用单纯设置样式的标签，应该通过CSS设置样式-->
	<font color=blue>don't use it!</font>
	<big>don't use it!</big>
	<center>don't use it!</center>

不推荐在HTML标签中添加样式属性，如：`iframe`、`img`、`input`、`div`等标签中的`align`属性，`body`标签上的`background`属性，`td`和`tr`标签上的`height`、`width`、`nowrap`、`bgcolor`、`valign`等属性，`iframe`标签中的`frameborder`、`marginheight`、`scrolling`等属性。此类属性应该废弃，并通过添加CSS样式来实现相同的效果。不推荐的示例如下：

	<!—不推荐代码：标签中添加border、width、height等样式属性-->
	<img src=”#” alt=”demo” border=”1” width="194" height="37" />
	<div id="focusViwer" align=center> </div>

不推荐使用 `<blink>` 或`<marquee>` (闪动,滚动)。这两个标签的职能已经超出了HTML本身，并且也存在浏览器的兼容问题。以如今的审美来说，这两个标签实现的效果丑陋无比，如果一定要这样的效果，可以通过JavaScript代码来实现，并且效果会更好，如：可以使用[jQuery Marquee](https://github.com/aamirafridi/jQuery.Marquee)插件 。不推荐的示例如下：

	<!--不推荐代码：效果丑陋，并且存在浏览器兼容问题，不推荐使用，如果需要实现这样的效果，可以通过JavaScript代码来实现，并且效果会更好-->
	<blink>don't use it!</blink>
	<marquee scrollamount=3 scrolldelay=100 >don't use it</marquee>

### 2. 让HTML标签具有更好的语义

不推荐使用`<b>`和`<i>`显示黑体字和斜体，推荐使用更具有语义的如 `<strong>` 和 `<em>`，如果单纯是为了样式，推荐用CSS样式定义`font-weight` 和 `font-style`，让页面更简洁。类似的不推荐标签还有`<S>`和`<strike>`，这两个标签是给文字添加删除线的，可以用 `<del>`和`<ins>`来代替。

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

### 3. 移除不常用的HTML标签

此类标签包括`acronym`、`applet`、`dir`等，废弃的原因是使用率极低或者是语义有歧义，并且有其他更好代替方案可以使用。如：表达缩写的标签`<acronym>`，其语义模糊，开发者更常用`<abbr>`来代替；开发者更喜欢使用`<ul>`而不是`<dir>`。


## 附录

* [Web前端开发最佳实践（1）：前端开发概述](http://www.cnblogs.com/dangjian/p/4228313.html)
* [Web前端开发最佳实践（2）：前端代码重构](http://www.cnblogs.com/dangjian/p/4233049.html)
* [Web前端开发最佳实践（3）：前端代码和资源的压缩与合并](http://www.cnblogs.com/dangjian/p/4233049.html)
* [Web前端开发最佳实践（4）：在页面中添加必要的meta信息](http://www.cnblogs.com/dangjian/p/4235505.html)
* [Web前端开发最佳实践（5）：正确闭合HTML标签，停止使用不标准的标签和属性](http://www.cnblogs.com/dangjian/p/4238150.html)
* [Web前端开发最佳实践（6）：过时的块状元素和行内元素](http://www.cnblogs.com/dangjian/p/4249205.html)
* [Web前端开发最佳实践（7）：使用合理的技术方案来构建小图标](http://www.cnblogs.com/dangjian/p/4268463.html)