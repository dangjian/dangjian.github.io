---
layout: post
title: Web页面中5种超酷的Hover效果
author: dang
categories: [HTML5]
tags: [HTML5,CSS3]
fullview: false
---	
想在自己的网站中应用超酷的hover效果吗？也许你可以从如下的这些实例中获得一些灵感，如果你喜欢这些效果，也可以直接拷贝代码并应用到你的站点。

## 给平淡的站点带来活力

hover效果能给网页增加一些动态效果，并且使得站点更具有活力。原来的做法是使用javascript来实现这些动态效果，但是随着CSS3的引入和现代浏览器的支持，我们可以用纯粹的CSS代码来实现这些有趣的效果。所谓的现代浏览器，更多的是指以Mozilla和Webkit为核心的浏览器，IE的表现稍微差强人意，所以请使用FireFox，Safari或者Chrome查看一下的效果。如下就是要介绍的5个非常酷的纯CSS hover 效果。

### 向上跳跃

![向上跳跃](http://i.imgur.com/KTEUTMr.png)

这种效果非常适合于当页面上有一横排图片的场景，当鼠标hover时就产生波浪一样的效果。

这个效果实现是非常简单的，并且有多种方法实现，如下的核心实现方法是：初始给所有图片设置mergin，当hover时，给相应的图片减少mergin的值，这样就实现了向上跳跃的效果。

这种效果不光可以应用于图片，一般的横向排列的导航栏也可以应用这样的效果。

效果中的透明效果是并不是必须的，不设置透明属性并不影响hover时的跳跃效果，加上透明只是为了让效果更平滑。

CSS代码：

	.ex1 img{
	    border: 5px solid #ccc;
	    float: left;
	    margin: 15px;
	    -webkit-transition: margin 0.5s ease-out;
	    -moz-transition: margin 0.5s ease-out;
	    -o-transition: margin 0.5s ease-out;
	}
	
	.ex1 img:hover {
	    margin-top: 2px;
	}


###层叠与放大

![层叠与放大](http://i.imgur.com/R6Ys6Zi.png)

这种效果类似于熔岩灯效果，当鼠标从上至下移动时，每个图片都是慢慢地放大然后恢复到原始的状态。

为了实现这样的效果，首先把原始图片显示的时候缩小一点，当鼠标hover时，放大图片的尺寸。

因为图片是居中显示的，所以当鼠标hover时，也增加了图片的margin，这样使得当图片放大时也是居中的效果。

CSS代码

	/*Example 2*/
	#container {
		width: 300px;
		margin: 0 auto;
	}
	
	#ex2 img{
	    height: 100px;
	    width: 300px;
	    margin: 15px 0;
	     -webkit-transition: all 1s ease;
	    -moz-transition: all 1s ease;
	    -o-transition: all 1s ease;
	}
	
	#ex2 img:hover {
		height: 133px;
		width: 400px;
		margin-left: -50px;
	}


###文字淡入

![文字淡入](http://i.imgur.com/3XM8zK2.png)

类似的这种效果，一般是用JavaScript来实现的，当hover其中某个元素时，另一个元素发生一些变化。本例为了实现这一效果，首先把图片和文字放在一个div里，然后设置div的color：transparent和line-height:0px。当hover时，更改color和line-height属性，使得文字显示。

CSS代码

	#ex3 {
		width: 730px;
		height: 133px;
		line-height: 0px;
		color: transparent;
		font-size: 50px;
		font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
		   font-weight: 300;
		text-transform: uppercase;
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
	}
	
	#ex3:hover {
		line-height: 133px;
		color: #575858;
	}
	
	#ex3 img{
		float: left;
		margin: 0 15px;
	}


###旋转的图片

![旋转的图片](http://i.imgur.com/iWguxAm.png)

实现这个效果是非常容易的，但是因为这是一个非常重要的效果，尤其对于画廊中的缩略图。这个效果中我们使用了一些较新的CSS样式。这个例子使用了box-shadows,transitions和transforms。transform是实现旋转部分，transition是为了让效果更平滑。

CSS代码

	#ex4 {
		width: 800px;
		margin: 0 auto;
	}
	
	#ex4 img {
		margin: 20px;
		border: 5px solid #eee;
		-webkit-box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
		-moz-box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
		box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
		-webkit-transition: all 0.5s ease-out;
		-moz-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
	}
	
	#ex4 img:hover {
		-webkit-transform: rotate(-7deg);
		-moz-transform: rotate(-7deg);
		-o-transform: rotate(-7deg);
	}


###淡入和倒影

![淡入和倒影](http://i.imgur.com/NwDt63A.png)

这个效果是相对复杂的效果，首先，设置减少图片的初始的透明度，当hover时，把透明度设置回默认值，另外会有一个图片边缘发光的效果和倒影效果（只在以Webkit为内核的浏览器中起作用）。

如果你对倒影效果不太懂的话，可以参考这篇文章（[Image Reflections with CSS](http://davidwalsh.name/css-reflection)）

CSS代码

	#ex5 {
		width: 700px;
		margin: 0 auto;
		min-height: 300px;
	}
	
	#ex5 img {
		margin: 25px;
		opacity: 0.8;
		border: 10px solid #eee;
	
		/*Transition*/
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
	
		/*Reflection*/
		-webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(.7, transparent), to(rgba(0,0,0,0.1)));
	}
	
	#ex5 img:hover {
	   opacity: 1;
	
	   /*Reflection*/
	  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(.7, transparent), to(rgba(0,0,0,0.4)));
	
	   /*Glow*/
	  -webkit-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
	  -moz-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
	  box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
	}


##总结

经过测试，这些效果在以Webkit为核心的浏览器上表现最出色，Mozilla次之，IE最差，如果要使得在IE9中的效果更好，则需要其它的第三方JS库。以上的这五个纯CSS实现的hover效果，应该会给你带来一些设计上的灵感，你可以综合运用这些CSS样式，并加入一些其他的CSS来产生一些有意思的效果。如果你也有一些非常酷的CSS效果，欢迎参与讨论。

##编注

以上的五种CSS Hover效果都应用了最新的CSS3效果，在现代的浏览器中，应用这些CSS能展现出非常漂亮的效果。值得一提的是IE9，IE9不支持transition和transform这两种效果，使得这五种效果在IE9下表现的不佳，寄希望于IE10吧。

文章编译来源（[5 Cool CSS Hover Effects You Can Copy and Paste](http://designshack.co.uk/?p=19746)）