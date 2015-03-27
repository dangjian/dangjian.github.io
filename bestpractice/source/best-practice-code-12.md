---
layout: post
title: 《Web前端开发最佳实践》第12章-源代码
fullview: false
---
## 第12章 移动Web前端开发最佳实践
### 12.1 移动Web前端开发概述
为了解决这个问题，iOS平台的safari浏览器中定义了一个名为viewport的meta标签 ，具体定义如下：

	<meta name="viewport" content="height = [ pixel_value |device-height] ,width = [ pixel_value |device-width ] ,initial-scale = float_value , minimum-scale = float_value , maximum-scale = float_value ,user-scalable =[yes | no] ,target- densitydpi = [ dpi_value | device-dpi| high-dpi | medium-dpi | low-dpi] "/>

当然，开发者可以自定义页面的viewport的宽度、高度、初始缩放、最大和最小缩放等属性，以适应设计的要求。比如如下的示例代码：

	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>

Media queries是在CSS3中新加入的特性，通过指定媒体类型的方式来限定所包含样式的作用范围。如下是Media queries的使用示例（代码来自于mozilla开发者网站 ）：

	<!-- link元素中的CSS媒体查询 -->
	<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

	<!-- 样式表中的CSS媒体查询 -->
	<style>
	@media (max-width: 600px) {
	  .facet_sidebar {
	    display: none;
	  }
	}
	</style>

另外，在使用Media queries时，限定支持的尺寸点很重要。在编写样式时，针对限定的尺寸点范围，编写不同的样式。推荐按照尺寸从小到大编写不同的样式，比如如下的示例：

	/* 智能手机 <480px */
	@media (max-width: 480px) {
	}

	/* 竖屏的平板 <768px */
	@media (max-width: 768px) and (min-width: 480px) {
	}

	/* 横屏的平板 >768px */
	@media (max-width: 1024px) and (min-width: 768px) {
	}

	/* 桌面PC >1024px */
	@media (min-width: 1024px) {
	}

在一般的网页中，图片是不可或缺的元素，所以有必要解决图片在移动设备的兼容性。一个简单而有效的做法是针对图片设置一个全局的CSS样式，如下：

	img {
	    max-width: 100%;
	}

如下是使用Media queries技术设置背景图的例子：

	@media only screen and (min--moz-device-pixel-ratio: 1.5),
	    (-o-min-device-pixel-ratio: 3/2),
	    (-webkit-min-device-pixel-ratio: 1.5),
	    (min-device-pixel-ratio: 1.5) {

	  #my-image {
	    background:url(high.png);
	  }
	}

示例代码中表明，当设备的像素比大于1.5时，设置高像素的背景图。可以利用image-set实现类似的效果：

	background-image:  -webkit-image-set(
	  url(icon1x.jpg) 1x,
	  url(icon2x.jpg) 2x
	);

尽管HTML5规范中提议了一个picture标签，但还没有浏览器可以支持此标签。使用picture标签的示例如下：

	<picture>
	    <source srcset="responsive-obama-mobile.png 1x, responsive-obama-mobile-2x.png 2x">
	    <source srcset="responsive-obama-512.png 1x, responsive-obama-1024.png 2x" media="(min-width: 512px)">
	    <source srcset="responsive-obama-1024.png 1x, responsive-obama-1024.png 2x" media="(min-width: 1024px)">
	    <source srcset="responsive-obama-2048.png 1x, responsive-obama-4096.png 2x" media="(min-width: 2048px)">
	    <noscript><img src="responsive-obama-512.png"></noscript>
	</picture>

HTML5规范中提供了另外一种设置响应式图片的方式，即使用srcset属性。如下是示例代码：

	<img alt="my awesome image"
	  src="banner.jpeg"
	  srcset="banner-HD.jpeg 2x,
	  banner-phone.jpeg 640w,
	  banner-phone-HD.jpeg 640w 2x">

上一节详细介绍了viewport的概念，这个概念是专门为了移动设备而设计的。所以为了更好地兼容移动设备，对它进行设置是必须的。推荐的设置如下：

	<meta name=viewport content="width=device-width, initial-scale=1">

### 12.2 移动Web前端开发最佳实践
大部分设置是针对iOS系统和Android系统的。常用的设置如下：

	<!-- 移动设备的viewport设置   -->
	<meta name = "viewport" content = "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width">

	<!-- 移动端Safari中，设置页面全屏模式，此设置只有在页面添加到主屏幕后，并从主屏幕启动页面时起作用   -->
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<!-- 设置页面全屏模式，此设置只有在页面添加到主屏幕后，并从主屏幕启动页面时起作用， Andriod平台的Chrome浏览器支持此设置 -->
	<meta name="mobile-web-app-capable" content="yes" />
	<!-- 移动端Safari中，在页面全屏模式，status bar的样式 -->
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />

	<!-- 智能设备中，是否自动识别电话号码 -->
	<meta name="format-detection" content="telephone=no" />

	<!-- iOS平台中，页面添加到主屏幕时使用的图标。分别对应着不同类型的设备 -->
	<link rel="apple-touch-icon" href="touch-icon-iphone.png">
	<link rel="apple-touch-icon" sizes="76x76" href="touch-icon-ipad.png">
	<link rel="apple-touch-icon" sizes="120x120" href="touch-icon-iphone-retina.png">
	<link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad-retina.png">

比如希望浏览器能自动识别电话号码，则按照如下的meta设置：

	<meta name="format-detection" content="telephone=yes" />

类似地，还可以在PC端网页中使用mailto链接，让用户点击并快速发邮件。如下是具体的示例：

	<a href="tel:1-406-666-6666">1-406-666-6666</a>
	<a href="sms:1-406-666-6666">发信息</a>

如下示例展示了使用Bootstrap设置一个搜索图标的情况。

	<span class="glyphicon glyphicon-search"></span>

内联图片可以是CSS背景图，也可以是页面的图片内容。在CSS中使用内联图片的例子如下：

	li {
	  background:
	url(data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7)
	    no-repeat
	    left center;
	}

在HTML中使用内联图片的例子如下：

	<img alt="star" src="data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7" />

具体实现方法很简单，应用如下的CSS样式到对应的控件即可。

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

如果不希望出现这样的效果，则同样可以通过CSS样式来禁用。代码如下：

	-webkit-touch-callout: none;