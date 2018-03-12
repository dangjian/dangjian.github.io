---
layout: post
title: Web前端开发最佳实践（9）：精简CSS代码，提高代码的可读性和加载速度
author: dang
categories: [Web]
tags: [icon]
fullview: false
date: 2015-02-20
---

## 前言
提高网站整体加载速度的一个重要手段就是提高代码文件的网络传输速度。之前提到过，所有的代码文件都应该是经过压缩了的，这可提高网络传输速度，提高性能。除了压缩代码之外，精简代码也是一种减小代码文件大小的手段。以下将讨论CSS代码相关的代码精简方案。

<!-- more -->
## 定义简洁的CSS规则

CSS的每条规则中都包含了规则的属性及属性值。定义简洁的CSS规则主要是指合并相关规则和定义简洁的属性值。

### 1. 合并相关CSS规则


CSS中的某些样式是由多个规则组成的，比如字体样式，就包含：`font-family`、`font-style`、`font-size`、`font-variant`、`font-weight`及`line-height`。如下是使用这些规则定义一个元素的字体样式：

	p.reader-title {
	font-family: Georgia, serif;
	    font-size: 12px;
	    font-style: italic;
	    font-weight: bold;
	    line-height: 30px;
	}    

其实，这些字体相关的样式规则可以合并为一个样式规则，即font样式。如下是合并后的样式：

	p.reader-title {
	    font:italic bold 12px/30px Georgia, serif;
	}

合并后的样式更简洁，代码量缩减了很多。类似的样式还有：`background`、`border`、`margin`、`padding`、`text`、`list-style`、`transform`、`transition`、`animation`等。可以在CSS规范中查看各样式对应的子规则。


### 2. 定义简洁的属性值


在CSS样式中，有些属性值可以使用更简洁的方式来展示，比如颜色和尺寸：

	p.reader-title {
	    color: #FFFFFF;
	    font-size: 0.8em;
	    padding: 0em;
	}

	
颜色值#FF33EE可以简化为#F3E，尺寸值0.8em可以省略小数点之前的0，即简化为.8em。如果尺寸值为0，则可以省略单位。经过简化后，上面的样式定义即为：


	p.reader-title {
	    color: #F3E;
	    font-size: .8em;
	    padding: 0;
	}

	
## 合并相同的定义


很多时候在CSS代码中，定义的规则会有相同的部分。可以合并这些相同的样式定义，达到代码重用和缩减代码的目的。比如如下的CSS代码：


	.library-title {
	    text-align: center;
	    font-weight: 700;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    color: #FFF;
	    font-size: 1.2em;
	    line-height: 2em;
	}
	.search-title {
	    text-align: center;
	    font-weight: 700;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    color: #FFF;
	    font-size: 1.4em;
	    line-height: 2.5em;
	}

	
以上的代码中，定义了两个CSS规则，这两个规则中大部分的定义是相同的，在这种情况下，即可合并定义这些相同部分，优化后的代码如下：


	.library-title,.search-title {
	    text-align: center;
	    font-weight: 700;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    color: #FFF;
	}
	.library-title {
	    font-size: 1.2em;
	    line-height: 2em;
	}
	.search-title {
	    font-size: 1.4em;
	    line-height: 2.5em;
	}


在CSS中，有些属性是可以继承的，比如`color`、`font`、`line-height`、`list-style`、`text-align`、`text-indent`、`text-transform` 等。如果某个父元素的多个子元素上设置了相同的可继承属性定义，则可以把相同的定义合并，且设置在父元素上。在网页设计中常见的问题是在CSS代码中字体设置混乱，并且会重复设置相同的字体。一般情况下，同一个网页中会有一个主要的字体，只需要把这个主字体设置在网页的body标签上即可。个别子元素的字体和主字体不同，则单独定义即可覆盖主字体。


## 删除无效的定义
CSS代码中的无效定义，并不会影响页面的功能展示，但会影响页面展示的性能。无效的定义在增加代码量的同时，也增加了浏览器对样式的解析时间，浏览器会根据CSS样式构建样式树，样式树中当然也包括了无效的样式。


无效的定义包括无效的规则及无效的样式属性。无效的规则一般是在开发过程中引入的，比如，在开发过程中，失效的CSS规则并没有得到及时的删除，而从直观上无法判断某个CSS规则是否已经失效，这应该也是CSS规则没有被删除的原因之一。对于这种情况，可以使用工具来进行查找，比如，用Chrome浏览器自带的开发工具就可以查找CSS代码中的无效样式，如下图所示。


 ![Imgur](http://i.imgur.com/KS7gjwB.png)

 
图 使用Chrome浏览器自带的开发工具查找无效样式规则的结果图


当然，查找的结果只能作为参考，因为很多时候CSS规则对应的模块并没有加载，或者有些元素上的CSS类是通过JavaScript代码动态设置的，这需要在删除规则时仔细考虑。


无效的样式属性指的是设置的样式并没有起作用。比如设置内边距为负值等，以及一些因手误引起的属性值拼写错误等。如下是一些常见的无效样式属性：


	.invalid-css {
	    padding-top:-20px;/* 无效的属性值 */
	    border: 1px soild #DDD;/* 拼写错误 */
	}

	
同样，使用Chrome自带的开发工具可以检测无效的属性定义，下图是使用此工具的一个检测结果。
 
![Imgur](http://i.imgur.com/jSWfkqR.png)
 
图 使用Chrome浏览器自带的开发工具查找无效样式属性及属性值的结果图


使用此工具需要注意的是，工具检测时列出了Chrome无法识别的CSS属性或者选择器，某些属性或者选择器是为其他浏览器添加的，并不是真正的无效定义，比如以上图中的选择器`input:-ms-input-placeholder`等。
