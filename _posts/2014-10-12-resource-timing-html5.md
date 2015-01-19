---
layout: post
title: 使用Resource Timing API监控网页加载性能
author: dang
categories: [CSS]
tags: [CSS, reset]
fullview: false
---	
今天在微博上闲逛，看到了有开发者推荐一个性能检测工具：PerfMap，github上的地址在这里：[https://github.com/zeman/perfmap](https://github.com/zeman/perfmap)。这款工具使用很简单，把如下的代码作为连接加入到浏览器书签中：

	javascript:(function(){ 
	    var el=document.createElement('script');
	    el.type='text/javascript';
	    el.src='//zeman.github.io/perfmap/perfmap.js';
	    document.getElementsByTagName('body')[0].appendChild(el);
	})();
	
则页面加载后点击此书签，会在页面上直观地显示页面中各图片资源加载的耗时。示例如下：

![Screen Shot 2014 10 12 at 5 46 01 PM](http://i.imgur.com/oFLUDBe.png)

从技术上讲，这个实现并不复杂，其利用了最新的规范：Resource Timing API。

## 什么是Resource Timing API？

Resource Timing是HTML5中的新特性，目前已经是[候选推荐版](http://www.w3.org/TR/resource-timing/)，意思是这个规范基本上已经确定。Resource Timing 可以用来取得和分析页面上所有资源网络加载的时间信息。有了这些信息，我们就可以追踪页面上资源加载的性能。如下是一个使用此API取得图片加载信息的代码示例（示例来自于网络）：

	img = window.performance.getEntriesByName("http://mysite.com/mylogo.webp");
	var dns  = parseInt(img.domainLookupEnd - img.domainLookupStart), 
	tcp  = parseInt(img.connectEnd - img.connectStart),
	ttfb = parseInt(img.responseStart - img.startTime),
	transfer = parseInt(img.responseEnd - img.responseStart),
	total = parseInt(img.responseEnd - img.startTime);

从代码中可以看到，通过Resource Timing API可以取得DNS、TCP及其他网络传输信息。如果想取得整个网站的所有资源加载信息，则可以调用如下代码：

	window.performance.getEntries()

运行结果示例如下：

![Screen Shot 2014 10 12 at 5 49 28 PM](http://i.imgur.com/EXvLlJN.png)

## 目前都有哪些浏览器支持Resource Timing API

目前已经有很多浏览器支持此特性，查看caniuse网站可以看到具体的支持情况：

![Screen Shot 2014 10 12 at 5 50 17 PM](http://i.imgur.com/Vme5bXB.png)

可以看到IE、Chrome、Firefox等最新版本浏览器已经支持了此特性，而safari目前还依然不支持此特性。