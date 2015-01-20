---
layout: post
title: Web前端开发最佳实践（3）：前端代码和资源的压缩与合并
author: dang
categories: [HTML5]
tags: [HTML5]
fullview: false
---	
一般在网站发布时，会压缩前端HTML、CSS、JavaScript代码及用到的资源文件（主要是图片文件），目的是加快文件在网络中的传输，让网页更快的展现。当然，CDN分发、缓存等方式也是加快代码或资源文件传输的方式，但压缩代码和资源文件是最简单有效的手段，代码压缩的优点逐渐得到了大部分的开发者的认可，并已经成为了Web前端开发中不可或缺的一个步骤。以下是代码和资源压缩的具体实践方法。

## 1. Web服务器开启[Gzip](http://zh.wikipedia.org/wiki/Gzip)压缩

在HTTP协议中允许客户端可以选择从服务器上下载压缩的内容，Gzip就是其中一种支持的格式。Gzip是一种常见的压缩算法，可以参考维基百科的介绍获得这种算法的详细介绍 。目前，Gzip已经得到了大部分的主流Web服务器(比如IIS、nginx、apache、lighttpd等)和主流的浏览器的支持。服务器配置人员可以查看服务器对应的配置文档，开启Gzip压缩。服务器启用了Gzip压缩后，代码文件有更小的体积，尤其是文本文件。

Web服务器开启Gzip压缩后，会在Response的header中增加了Content-Encoding:gzip。可以通过检查此header项来判断服务器是否开启了Gzip压缩。

## 2. JavaScript代码压缩

JavaScript压缩的原理一般是去掉多余的空格和回车、替换长变量名、简化一些代码写法等。 JavaScript代码压缩工具很多，有在线工具、有应用程序、有编辑器插件。其中使用最多的是[UglifyJS](https://github.com/mishoo/UglifyJS) 、[YUI Compressor](http://developer.yahoo.com/yui/compressor) 和[Closure Compiler](https://developers.google.com/closure/compiler)。UgligyJS不仅仅是一个压缩工具，同时具有JavaScript语法分析和代码美化功能，包括代码缩减、代码转化等。如：

	var a = 10; var b = 20; ==> var a=10,b=20;
	if (foo) bar(); else baz(); ==> foo?bar():baz();
	if (foo) bar(); ==> foo&&bar();
	new Array(1, 2, 3, 4)  => [1,2,3,4]

Closure Compiler出自Google，来头不小。功能和UglifyJS类似，只是压缩的算法不同。

YUI Compressor出自Yahoo，此工具不同于以上两个工具。UgligyJS和Closure Compiler不光是Compressor，同时还是compiler，会针对代码进行优化，而YUI Compressor仅仅是压缩。

这三个工具都有对应的在线版，也可以本地安装后使用命令行方式。如果不想手动压缩代码，则可以选择编辑器自动化集成方式，比如在WebStorm编辑器中配置File Watchers。

## 3. CSS代码压缩

CSS代码压缩原理和JavaScript代码压缩的原理类似，也是去掉不必要的空格回车注释等，并同时优化合并一些CSS规则定义，让规则更简洁。比如，如下的代码：

	background-color:#fff;
	background-image: url(image.gif);
	background-repeat:no-repeat; 
	background-position: top left;

会优化为：

	background: #fff url(image.gif) no-repeat top left;
	
CSS代码压缩工具也有在线、本地应用程序和编译器插件。比较有名的在线在线工具是[CSS Compressor](http://www.csscompressor.com)，压缩时可以选择各种配置模式。自动化工具可以选择上面提到的JavaScript压缩工具YUI Compressor，YUI Compressor也可以压缩CSS代码。使用相同的工具压缩JavaScript和CSS代码，省去了安装多个工具的麻烦。

## 4. HTML代码压缩

压缩HTML代码的争议很大，反对的一方觉得压缩的作用不大，不像压缩JavaScript和CSS代码，压缩HTML代码仅仅是去掉空格回车注释等无关字符，并不会简化HTML代码本身，所以觉得在服务器开启Gzip就足够了。另外，压缩HTML代码也有一些限制，比如网站开发时，HTML页面并不是单纯地HTML代码，还是和服务器端脚本混合在了一起，比如PHP、ASP、JSP、ASP.NET等。压缩类似这些页面时，压缩的规则就比较复杂，也容易破坏代码。目前可用使用的HTML压缩工具不多，使用最多的时这款工具：[htmlcompressor](https://code.google.com/p/htmlcompressor)。使用此工具的时候需要仔细调查和测试，避免压缩工具破换页面的代码。

## 5. 图片资源压缩

除了代码的压缩外，网页中使用最多的资源文件就是图片，在一般的网站中，图片资源占有的比重还是挺大的。图片压缩工具主要是在线工具和本地应用程序，还没有好一点的编辑器插件可用。好在一般项目中，图片的变化并不是很大，所以图片的自动化压缩工具的需求并不是很迫切。

图片压缩工具也很多，以在线工具居多。在线工具中，推荐使用[tinypng](http://tinypng.org)工具压缩PNG格式图片，推荐使用[JpegMini](http://www.jpegmini.com)压缩JPG格式图片。本地应用程序，则推荐[ImageOptim](http://imageoptim.com)。这是一款强大的工具，集成了多种压缩工具，所以可以压缩多种格式（如：PNG、JPEG及GIF动画）的图片，支持拖放操作，使用也非常方便。

以上就是网站发布时可以使用的各种资源压缩工具。除了在项目中使用合适压缩工具之外，何时压缩代码也很重要。因为压缩后的代码会影响代码的调试，使得开发者不易确定出错代码的位置，调试JavaScript代码时也不易设置断点，所以推荐在开发后期，甚至是在网站的发布阶段做代码和资源的压缩。如果放在网站发布阶段压缩，则开发者在开发过程中不需要考虑代码压缩的问题，方便了开发者的开发与调试。发布阶段压缩代码的方案也很成熟，比如使用ANT工具。ANT是一个基于Java™ 的构建工具，在这个工具中可以构建代码和资源压缩的任务：使用 YUI 压缩程序合并和压缩 JavaScript和CSS、使用 jpegtran和optipng优化JPG和PNG文件、使用htmlcompressor压缩 HTML及移除调试代码。

目前很流行的前端自动化构建工具[Grunt](http://gruntjs.com) 也可以集成代码和资源的压缩工具。在Grunt的插件列表页面上，有很多的压缩代码和资源文件的插件可用。比如，压缩JavaScript的[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)插件、压缩CSS代码的[grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)插件及压缩图片的[grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)插件等。

## 附录
* [Web前端开发最佳实践（1）：前端开发概述](http://www.cnblogs.com/dangjian/p/4228313.html)
* [Web前端开发最佳实践（2）：前端代码重构](http://www.cnblogs.com/dangjian/p/4233049.html)
* [Web前端开发最佳实践（3）：前端代码和资源的压缩与合并](http://www.cnblogs.com/dangjian/p/4233049.html)