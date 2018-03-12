---
layout: post
title: Web前端开发最佳实践（4）：在页面中添加必要的meta信息
author: dang
categories: [HTML5]
tags: [HTML5]
fullview: false
date: 2015-01-20
---

meta标签放置在HTML页面的head中，主要用于标识网站。其中基本上包含了网站的一些描述信息，例如，简介、作者等。这些信息有助于搜索引擎更准确地识别网页的内容，也有助于第三方工具抓取网站基本信息。

按照W3C的标准介绍，`<meta>`标签有四个属性：name、http-equiv、content和charset。`<meta>`标签通过name属性来表述页面文档的元信息，通过http-equiv属性设置HTTP请求指令，通过charset设置页面的字符编码。所以从属性设置分类，meta可以分三类：

<!-- more -->
### 1. name属性和content属性组合，构成名称/值对，用于描述网站信息

这是<meta>标签最主要的功能，使用广泛。标准的meta名称包括：application-name、author、description、generator等。
示例代码：

	<!—页面关键字-->
	<meta name="keywords" content="british,type face,font,fonts" />

此类型meta使用最广泛，其中，又属`keywords`和`description`这两个名称的使用率最高，是搜索引擎优化的主要手段之一，推荐大家使用。设置keywords和description这两个meta时，尽量使用简洁和语义明确的词语，下面的示例展示的是BBC新闻网站设置的application-name、keywords和description对应的meta信息：

	<meta name="application-name" content="BBC"/>
	<meta name="description" content="Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever you are, whatever your age." />
	<meta name="keywords" content="BBC, bbc.co.uk, bbc.com, Search, British Broadcasting Corporation, BBC iPlayer, BBCi" />

### 2. http-equiv属性和content属性组合，设置特定的HTTP指令

根据W3C制定的HTML5规范，指令型meta总共有5种，其中content-type、default-style和refresh已经确定，content-language和set-cookie还未正式确定。

示例代码：

	<!—页面加载5分钟后刷新-->
	<meta http-equiv="refresh" content="300" />

此类型meta应该谨慎使用。`<meta http-equiv="content-type">`可以使用下面介绍的更简洁的方式代替。不推荐使用`<meta http-equiv="refresh">`，某些搜索引擎遇到此meta时会停止解析页面剩余的部分。<meta http-equiv="default-style">在实际的场景中很少使用。

### 3. charset属性，设置页面字符编码。

此属性功能单一，提供了一种保存和传输文档的编码格式。

	<!—声明文档为UTF-8格式-->
	<meta charset="utf-8">
	这是在HTML5中新加入的meta类型，在HTML5的规范中，如下两种页面编码设置是等价的：
	<meta http-equiv='Content-Type' content='Type=text/html; charset=utf-8'>
	<meta charset='utf-8'>
	
代码中的第二种形式更简洁好记，并且得到了所有主流浏览器的支持（尤其是IE8、IE7和IE6），所以不存在浏览器兼容问题，推荐在设置页面编码时使用。为了让浏览器能准确失败编码格式，务必在`<title>`标签之前设置charset，保证标题能正确显示。示例如下：
	
	<head>
	    <meta charset="utf-8">
	    <title>My home page</title>
	</head>
	
以上介绍了三种规范中定义的meta格式， 如果想要了解更详细的内容，可以参考W3C的规范，规范中很详细地描述了meta的种类及其作用。

除了规范中定义的这些meta之外，还有大量的自定义meta类型。这些meta类型主要是有互联网公司或者浏览器厂商为了实现特定的功能而定制的，W3C规范中容许自定义meta类型，但为了防止自定义的meta名称重复，所以所有的自定义meta应该事先注册。目前已经有很多注册的自定义meta，以及一些厂商自定义名称 和自定义的指令 。这些自定义的meta并不能通过W3C提供的标准校验，但并不是说这些meta不标准。下面介绍一些常用的meta。

### 1 设置IE浏览器的兼容模式

从IE8浏览器开始支持一种设置页面兼容模式的meta类型，示例代码如下：

	<meta http-equiv="X-UA-Compatible" content="IE=8"/>

根据HTML规范，浏览器是按照页面开头定义的文档类型来解析页面的。比如，使用HTML5的文档类型声明：

	<!DOCTYPE html>
	
IE就会以标准模式解析HTML文档。但是某些已有页面由于各种原因不能在最新标准模式下正确显示，只支持特定的标准。针对这种状况，IE浏览器提供了一种兼容的方案，通过设置X-UA-Compatible指定页面在IE浏览器中渲染时执行的标准。在IE浏览器中，此设置的优先级高于通过DOCTYPE设置的文档标准。有关此meta的具体使用方式可参考微软网站中的相关介绍 。在实际的项目中应该谨慎使用此方式，当在IE浏览器中出现兼容问题时，最好的做法是修改页面，编写规范的HTML代码，让页面支持最新的标准，而不是设置IE的兼容模式。

此设置还有一种常见的设置值，即：

	<meta http-equiv="X-UA-Compatible" content="chrome=1">

很迷惑吧，IE定义的meta为啥会出现chrome呢？其实设置为chrome=1时，则会在IE9及以下浏览器中激活Chrome Frame ，强制IE使用Chrome Frame渲染页面。

### 2. 设置页面在移动设备中的显示

一般针对移动设备优化的网页都会添加如下一条mata设置，使得网页在移动设备中显示正常，设置的代码类似如下的代码语句：

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	
### 3. 设置IE浏览器的“固定网站”功能

这是IE浏览器的独有功能，是从IE9开始支持的，它能够将网站如同应用程序一样固定在Windows Vista及以上版本系统的任务栏中，并且在点击图标后显示网站相关的菜单列表。此功能可以通过定义网页meta来实现，如下代码用于展示人人网 首页中添加的meta定义：

	<meta name="msapplication-task" content="name=新鲜事;action-uri=http://www.renren.com/home;icon-uri=http://a.xnimg.cn/n/res/icons/newsfeed.ico" />
	<meta name="msapplication-task" content="name=日志;action-uri=http://blog.renren.com;icon-uri=http://a.xnimg.cn/n/res/icons/blog.ico" />
	<meta name="msapplication-task" content="name=相册;action-uri=http://photo.renren.com;icon-uri=http://a.xnimg.cn/n/res/icons/photo.ico" />
	<meta name="msapplication-task" content="name=音乐;action-uri=http://music.renren.com;icon-uri=http://a.xnimg.cn/n/res/icons/music.ico" />
	<meta name="msapplication-task" content="name=分享;action-uri=http://share.renren.com;icon-uri=http://a.xnimg.cn/n/res/icons/share.ico" />
	<meta name="msApplication-ID" content="App" />
	<meta name="msApplication-PackageFamilyName" content="57722RenRenpreview.RenrenHD_fknrsfzqca1jw" />
	
添加到系统的任务栏后的效果如图3-7所示，可以看到在图标上点击右键后弹出的菜单中包含有五项定义的菜单项，点击这些菜单项则可以跳转到对应的页面中：

![image](http://i.imgur.com/OyE77nB.png)
 
图 人人网网站定义的网站导航菜单

如果想更深入地了解具体如何设置对应的meta来实现此功能，则可以参考微软提供的[详细文档](http://msdn.microsoft.com/zh-cn/library/ie/gg491725(v=vs.85).aspx)。

## 附录

* [Web前端开发最佳实践（1）：前端开发概述](http://www.cnblogs.com/dangjian/p/4228313.html)
* [Web前端开发最佳实践（2）：前端代码重构](http://www.cnblogs.com/dangjian/p/4233049.html)
* [Web前端开发最佳实践（3）：前端代码和资源的压缩与合并](http://www.cnblogs.com/dangjian/p/4233049.html)
* [Web前端开发最佳实践（4）：在页面中添加必要的meta信息](http://www.cnblogs.com/dangjian/p/4235505.html)