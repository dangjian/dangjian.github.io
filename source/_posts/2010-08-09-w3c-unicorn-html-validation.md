---
layout: post
title: 使用Web验证工具：Unicorn，构建规范Web页面
author: dang
categories: [HTML]
tags: [HTML, Validation]
date: 2010-08-09
fullview: false
---

浏览器的智能识别纠错能力，导致了大量的不规范Web页面充斥于各种各样的网站中，浏览器的这种溺爱式的容错方式，也宠坏了大量的网页设计师。但是随着浏览器版本的升级和Firefox、Chrome等多个浏览器的流行，以前大量基于旧浏览器（尤其是IE6）开发的不规范Web页面则无法正确地展示，由此带来的是大量的维护工作，所以不规范的Web页面对维护者和浏览者都是一场噩梦。近日，W3C发布了一款WEB验证工具：[Unicorn](http://validator.w3.org/unicorn/), 可以方便地检查我们的Web页面是否合乎规范，帮助我们开发出规范的Web页面，从而降低开发的维护的代价。

<!-- more -->
[Unicorn](http://validator.w3.org/unicorn/)验证的内容包括： 页面Markup、CSS样式、MobileOK检查、Feed验证，Unicorn提供了3种验证方式：提交URL、上传文件、直接输入代码。由此可知Unicorn是一个一站式的Web规范检查工具，可以直接应用于项目的验证测试中，下图显示工具的界面：

![Unicorn工具的界面](http://i.imgur.com/2H90ZDT.jpg)

我们用本博客地址测试一下，输入：[http://www.cnblogs.com/dangjian](http://www.cnblogs.com/dangjian)，点击Check按钮，页面很快返回了结果，检查内容包括页面HTML、CSS和Rss内容，如下截图

![image](http://i.imgur.com/nTXRDZU.png)

可以看到，返回的信息列表分为3类：info、error和warning，每一条信息都有对应的不规范代码和原因，非常方便我们快速的查找和修改。另外，这个工具也是一个很好的辅导我们学习规范代码的工具，大家可以用它来检查各个有名的站点，看看这些网站表现如何。经过检查各大站点，能完全通过检查的寥寥无几，看来WEB页面规范化还是任重道远。

工具还给我们WEB页面规范化提供了一种激励的方式，如果我们的站点全部通过了这样的测试，我们可以在自己的网站醒目位置放置检查通过标识，工具提供了3种图标，HTML代码类似如下：

	<div>
		<a href="http://validator.w3.org/check?uri=www.dang-jian.com">
			<img style="border: 0;" src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" />
		</a>
		<a href="http://jigsaw.w3.org/css-validator/validator?uri=www.dang-jian.com">
			<img style="border: 0;" src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!" />
		</a>
		<a href="http://feed.w3.org/check.cgi?url=http%3A//www.dang-jian.com/rss.aspx">
			<img style="border: 0;" src="http://feed.w3.org/images/valid-rss-rogers.png" alt="[Valid Atom 1.0]"
		title="Validate my Atom 1.0 feed" />
		</a>
	</div>

显示效果图：

![image](http://i.imgur.com/vsYCpu2.png)

另外，这个工具是一个开源的工具，可以下载代码来进一步研究，开发语言为JAVA。代码下载地址：[http://code.w3.org/unicorn/wiki/Documentation/Install](http://code.w3.org/unicorn/wiki/Documentation/Install "http://code.w3.org/unicorn/wiki/Documentation/Install")

Unicorn工具只是一个验证辅助工具，WEB页面的规范化应该引起我们广大的WEB页面设计师和程序员重视，需要项目开发中形成一种意识，我们广大的程序员不光能写规范的简洁的后台C#、JAVA代码，也应该能设计出规范的前台WEB页面。希望我们能开发出规范的WEB页面，结束当前WEB页面设计混乱的局面。