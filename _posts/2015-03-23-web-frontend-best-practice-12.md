---
layout: post
title: Web前端开发最佳实践（12）：JavaScript代码中有大量写死的配置数据？这些数据难以维护，你需要合理组织这些数据
author: dang
categories: [Web]
tags: [icon]
fullview: false
---

## 前言
JavaScript代码基本上都是由业务逻辑和数据组成的，逻辑代码根据数据完成一定的操作。很多数据在代码中是写死的，比如一些URL、显示在界面上的提示信息、页面元素相关的样式值及其他使用到的固定值，这部分无逻辑的数据可统称为配置数据。一种好的编码实践是把这部分配置数据和业务逻辑分离，这样修改配置数据时就不需要修改业务逻辑代码了，从而提高了代码的可维护性。同时，配置数据的分离，使得业务逻辑代码也可以重用了，不同的配置数据可以对应相同的业务逻辑。

## 配置数据和逻辑分离

那么，要如何把配置数据和代码逻辑分离呢？第一步是把代码中的配置数据部分抽取出来。抽取的原则是这些数据在代码中是写死的，并且在后期有可能会变更。下面的示例展示了如何把代码中的配置数据分离，配置数据未分离时的代码如下：


	var sm = startHours*60+startMinutes;
	var em = (endHours*60+endMinutes)||(24*60);
	var top = (sm*60*1000-0*60*60*1000)*42;
	var height = Math.max(40,(em-sm)*42/60)+1;


这段代码使用到的数据很多，如果不经过数据的分离，代码是很难维护和阅读的，因为这些数据本身并不能表明实际的用途。经过业务分析，把可变的配置数据分离了出来，并使用命名有意义的属性保存了这些数据。抽离的数据如下：


	this.config = {
	    first_hour:0,
	    last_hour:24,
	    hour_size_px:42,
	    min_event_height:40
	}


同时，修改业务代码，使用配置数据代替原来写死的数据：


	var sm = startHours*60+startMinutes;
	var em = (endHours*60+endMinutes)||(this.config.last_hour*60);
	var top = (sm*60*1000-this.config.first_hour*60*60*1000)*this.config.hour_size_px;
	var height = Math.max(this.config.min_event_height,(em-sm)*this.config.hour_size_px/60);


可以看到，把经常需要更改的数据分离出来后，代码看起来清爽了很多，即使后面碰到配置数据的变更，也不需要修改业务逻辑的代码了，直接修改对应的配置数据项即可。推荐开发者使用这种数据配置模式。

## 开源框架的做法

有部分框架同样把配置数据和逻辑给剥离开了，并且把这部分配置数据作为默认的配置数据，以方便框架使用者通过自定义配置数据来修改框架提供的默认数据。比如，在Bootstrap框架中，所有的控件都有一个默认的属性DEFAULTS，用于保存默认的配置数据。如下代码展示了Bootstrap框架中Tooltip控件的配置数据：


	Tooltip.DEFAULTS = {
	animation: true
	, placement: 'top'
	, selector: false
	, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
	, trigger: 'hover focus'
	, title: ''
	, delay: 0
	, html: false
	, container: false
	}


如果开发者想修改`Tooltip`控件的一些行为或外观，仅仅修改这个配置数据就可以了，比如要修改`Tooltip`展示的外观，则可以修改`Tooltip.DEFAULTS.template`的属性值，如果要修改`Tooltip`展示的时机，则可以修改`Tooltip.DEFAULTS.trigger`的属性值，等等。`YUI`框架等其他流行的框架中也有类似的做法。这种将配置数据分离的做法极大地提高了代码的可维护性和可扩展性，开发者可以很方便地修改配置数据而不会导致逻辑的错误。
这种将配置数据分离的方式也大量应用于前后端数据的交互上，很多时候这些配置数据会随着用户或者场景的不同而不同，后端逻辑会根据当前的用户或场景返回不同的配置数据。在选择配置数据和业务逻辑分离的方式后，就不需要生成内嵌了数据的JavaScript代码了，后端可只关心配置数据的构建。下图中的代码片段展示新浪微博网站在后端生成的配置数据，该数据供前端逻辑使用。


![Imgur](http://i.imgur.com/51qjwze.png)


stackoverflow 网站也使用了类似的方式，它把JSON格式的配置数据作为一个参数传给了一个名为`StackExchange.init`的函数，通过这个函数的处理，可把数据保持在客户端。其代码片段如下图所示。

![Imgur](http://i.imgur.com/BAi1YSK.png)

在JavaScript代码中，分离的配置数据一般以JSON格式保存，JSON格式是JavaScript原生支持的格式，所以更简单一些。如果配置数据过多或者期望客户端缓存配置数据，则推荐把配置数据放置在单独的JavaScript文件中，从而把代码逻辑和配置数据彻底分离，让配置数据的修改变得更方便，同时客户端也可以缓存配置数据文件。