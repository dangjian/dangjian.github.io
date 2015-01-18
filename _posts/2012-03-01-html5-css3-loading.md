---
layout: post
title: 用css3制作旋转加载动画的几种方法
author: dang
categories: [HTML5]
tags: [HTML5,CSS3,Loading]
fullview: false
---	
以WebKit为核心的浏览器，例如Safari和Chrome，对html5有着很好的支持，在移动平台中这两个浏览器对应的就是IOS和Android。最近在开发一个移动平台的web app，那么就有机会利用css3去实现一些很酷的效果，这些效果原来更多的是利用图片来实现。最近的一个改进就是利用css3制作旋转加载动画。以下将分别介绍几种实现的方案。

##**方案1，图片辅助**

传统做法是直接用动态的GIF图片，这个方案是用PNG图片加上背景颜色来模拟静止的加载图片，然后利用css中的animation处理图片的旋转。相比传统方案，这个方案的好处是可以直接通过修改CSS来改变背景色，可以修改大小和旋转速度。如下是具体的CSS代码：

	@-webkit-keyframes rotate {
	  from {-webkit-transform:rotate(0deg);}
	  to {-webkit-transform:rotate(360deg);}
	}
	p#spinner {
	  height: 30px;
	  width: 30px;
	  overflow: hidden;
	  background: #000;
	  -webkit-mask-image: url("data:image/png[...]");
	  -webkit-mask-size: 30px 30px;
	  -webkit-animation-name: rotate;
	  -webkit-animation-duration: 1.5s;
	  -webkit-animation-iteration-count: infinite;
	  -webkit-animation-timing-function: linear;
	}


这个方案，只有safari可以很好地支持。chrome下支持不是很好，所以这是一个不太成熟的方案。

##**方案2， 纯CSS实现**

方案的思路是，首先用css渲染12个静态的bar，每个bar间隔30度的角度，给每个bar添加背景变淡的动画，但是相邻bar的动画效果延迟1/12秒，来保证12个bar是按顺序变亮然后变暗。从而模拟出旋转的效果。

这个旋转效果是伪旋转，所有的bar都没有真正做到旋转。

	@-webkit-keyframes fade {
	    from {opacity: 1;}
	    to {opacity: 0.25;}
	}
	div.spinner {
	    position: relative;
	    width: 30px;
	    height: 30px;
	    display: inline-block;
	}
	div.spinner div {
	    width: 20%;
	    height: 40%;
	    background: #000;
	    position: absolute;
	    left: 100%;
	    top: 100%;
	    opacity: 0;
	    -webkit-animation: fade 1s linear infinite;
	    -webkit-border-radius: 30px;
	}
	div.spinner div.bar1 {
	    -webkit-transform:rotate(0deg) translate(0, -142%);
	        -webkit-animation-delay: 0s;
	}
	[......]
	div.spinner div.bar12 {
	    -webkit-transform:rotate(330deg) translate(0, -142%);
	    -webkit-animation-delay: -0.0833s;
	}


safari和chrome都能很好地渲染这个效果，并且也很容易定义实际大小，因为所有的bar的高度，宽度有是用百分比来定义的。缺点也很明显，需要定义12个bar，并且每个bar都要定义独立的css，相对来说html和css的代码量有点多。

##**方案3，这个方案类似sencha touch中实现的效果**

方案的基本思想是：首先利用html和css呈现4个bar，再通过css的伪元素: before和：after定义每个bar的前后内容，这样使得由原始的4个bar产生12个bar的效果，其次通过css设置让12个bar的透明度逐渐递减，最后应用css3中旋转动画达到实际loading的效果。

	.x-loading-spinner {
	    font-size: 250%;
	    height: 1em;
	    width: 1em;
	    position: relative;
	    -webkit-transform-origin: 0.5em 0.5em;
	}
	.x-loading-spinner > span, .x-loading-spinner > span:before, .x-loading-spinner > span:after {
	    display: block;
	    position: absolute;
	    width: 0.1em;
	    height: 0.25em;
	    top: 0;
	    -webkit-transform-origin: 0.05em 0.5em;
	    -webkit-border-radius: 0.05em;
	    border-radius: 0.05em;
	    content: " ";
	}
	.x-loading-spinner > span.x-loading-top {
	    background-color: rgba(170, 170, 170, 0.99);
	}
	.x-loading-spinner > span.x-loading-top::after {
	    background-color: rgba(170, 170, 170, 0.9);
	}
	.x-loading-spinner > span.x-loading-left::before {
	    background-color: rgba(170, 170, 170, 0.8);
	}
	.x-loading-spinner > span.x-loading-left {
	    background-color: rgba(170, 170, 170, 0.7);
	}
	.x-loading-spinner > span.x-loading-left::after {
	    background-color: rgba(170, 170, 170, 0.6);
	}
	.x-loading-spinner > span.x-loading-bottom::before {
	    background-color: rgba(170, 170, 170, 0.5);
	}
	.x-loading-spinner > span.x-loading-bottom {
	    background-color: rgba(170, 170, 170, 0.4);
	}
	.x-loading-spinner > span.x-loading-bottom::after {
	    background-color: rgba(170, 170, 170, 0.35);
	}
	.x-loading-spinner > span.x-loading-right::before {
	    background-color: rgba(170, 170, 170, 0.3);
	}
	.x-loading-spinner > span.x-loading-right {
	    background-color: rgba(170, 170, 170, 0.25);
	}
	.x-loading-spinner > span.x-loading-right::after {
	    background-color: rgba(170, 170, 170, 0.2);
	}
	.x-loading-spinner > span.x-loading-top::before {
	    background-color: rgba(170, 170, 170, 0.15);
	}
	.x-loading-spinner > span {
	    left: 50%;
	    margin-left: -0.05em;
	}
	.x-loading-spinner > span.x-loading-top {
	    -webkit-transform: rotate(0deg);
	    -moz-transform: rotate(0deg);
	}
	.x-loading-spinner > span.x-loading-right {
	    -webkit-transform: rotate(90deg);
	    -moz-transform: rotate(90deg);
	}
	.x-loading-spinner > span.x-loading-bottom {
	    -webkit-transform: rotate(180deg);
	    -moz-transform: rotate(180deg);
	}
	.x-loading-spinner > span.x-loading-left {
	    -webkit-transform: rotate(270deg);
	    -moz-transform: rotate(270deg);
	}
	.x-loading-spinner > span::before {
	    -webkit-transform: rotate(30deg);
	    -moz-transform: rotate(30deg);
	}
	.x-loading-spinner > span::after {
	    -webkit-transform: rotate(-30deg);
	    -moz-transform: rotate(-30deg);
	}
	.x-loading-spinner {
	    -webkit-animation-name: x-loading-spinner-rotate;
	    -webkit-animation-duration: 0.5s;
	    -webkit-animation-iteration-count: infinite;
	    -webkit-animation-timing-function: linear;
	}
	
	@-webkit-keyframes x-loading-spinner-rotate {
	    from {
	    -webkit-transform: rotate(30deg);
	    }
	    to {
	    -webkit-transform: rotate(330deg);
	    }
	}


这个方案是3个方案中应用css技术最彻底的一个，html的代码最少，并且也真正做到了旋转效果。缺点是不易扩展，chrome浏览器支持不是很理想。

综上分析，方案1浏览器支持不好，但是实现简单，方案2的html代码太多，但扩展好，浏览器支持不错，方案3的扩展性不好，浏览器支持也不好，但是较好地利用了css的特性。

如果开发桌面web系统，推荐方案2，如果是mobile系统，则方案2和方案3各有优势。