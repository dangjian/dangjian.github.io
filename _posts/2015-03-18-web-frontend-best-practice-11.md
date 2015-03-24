---
layout: post
title: Web前端开发最佳实践（11）：使用更严格的JavaScript编码方式，提高代码质量
author: dang
categories: [Web]
tags: [icon]
fullview: false
---

## 前言

JavaScript语言由于其固有的灵活性，所以导致开发者可以写出很多诡异的代码，甚至一些较为正常的特性，如类型隐式转换、this的指代等等，也会让刚接触此语言的开发者头大不已。尤其是那些熟知其他诸如Java和C#等高级语言的开发者。使用更严格的编码方式，可以最大量避免

## 启用严格模式

随着JavaScript的发展，开发者及规范制定者也意识到了JavaScript语言本身的一些设计缺陷，所以在ECMAScript5中引入了严格模式。设立严格模式的目的主要是为了消除JavaScript语法上不合理的地方，从而提高代码安全性、编译效率，增加运行速度且更好地兼容JavaScript未来的新版本等。

具体来说，严格模式主要是针对如下不合理的地方作了改进，包括：

禁用with关键字、防止意外地全局变量、函数中的this不再默认指向全局、防止函数参数重名、防止对象属性重名、更安全地使用eval等。具体可以参考mozilla网站上的[详细介绍](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)。


在严格模式中针对一些编码的格式进行了限制。有些在普通模式下不会报错的代码，在严格模式中可能就会出现运行错误。这种显式抛出错误的方式比以怪异方式运行代码能更早地发现问题。


严格模式目前已经得到了除IE8之外的[大部分主流浏览器的支持](http://caniuse.com/use-strict)，所以推荐在代码中使用。


启用严格模式很简单，只要在代码中添加如下代码即可：


	"use strict"；


在不支持严格模式的浏览器中，如下代码会被当作普通的语句运行，不会产生副作用：


	<script>
	    "use strict";
	    console.log("这是严格模式。");
	</script>
	<script>
	    console.log("这是正常模式。");
	</script>


下面介绍在使用严格模式时需要遵循的几条最佳实践。


### 1. 不要在全局中启用严格模式


若全局设置严格模式，将意味着代码文件中所有的代码都必须遵守严格模式。除非所有的代码都是自己维护，否则这么做会带来风险，因为不能保证其他人维护的代码也是符合严格模式的。比如如下的代码中，在代码文件设置了全局严格模式，应该避免这样的设置方式。


	"use strict";
	function doSomething() {
	    // 这部分代码会运行于严格模式
	}
	function doSomethingElse() {
	    // 这部分代码也会运行于严格模式
	}


即使是其他人维护的代码在不同的文件中也不建议这么做，因为很难保证发布时候代码不会合并，所以尽量把严格模式限定在函数作用域范围内。类似如下的设置方式：


	function doSomething() {
	    "use strict";
	    // 这个函数中的代码将会运行于严格模式
	}
	function doSomethingElse() {
	    // 这个函数中代码不会运行于严格模式
	}


如果想给大量的代码设置严格模式，可以把代码包含在一个立即执行的函数内，并在函数开头启用严格模式，示例代码如下：


	(function (){
	    "use strict";
	    // 其他代码
	})();


### 2. 在已有代码中谨慎启用严格模式


如果代码中还包含有不符合严格模式的代码，则启用严格模式会产生风险，因为有可能会导致代码运行错误，页面无法正常展示和交互。在已有代码中启用严格模式要和代码的重构一样受到重视——必须有足够的代码检查和测试，确保每一行代码都可以正常运行。


尽管使用严格模式有如上这些的风险，但是只要使用得当，严格模式可以帮助开发者尽早发现一些潜在的问题。所以推荐在编写JavaScript代码时启用严格模式。

## 使用JSHint和JSLint


如果要更严格地编写JavaScript代码，可以使用JavaScript代码检查工具。目前，流行的检查工具主要是JSLint和JSHint。JSLint是JavaScript大牛Douglas Crockford所创立的。而JSHint则是从JSLint派生出来的，比JSLint更轻量级，并且它提供了一系列的可配置项，让开发者可关掉某些觉得没有必要的错误提示。JSHint使用起来更灵活，并不带有强制性的限制，所以推荐开发者使用。


JSHint的检查规则涵盖了大部分的基本编码规范，比如：缺少分号、空格和tab混合使用、错误的转义等。JSHint官方网站上列出了详细的[检查项](http://www.jshint.com/docs/options)，每个检查项都有具体的解释，这些也是学习JavaScript基本规范的好资料。


很多的代码编辑器也集成了JSLint和JSHint这两个代码检查工具，比如在WebStorm代码编辑器的设置中就有针对此工具的单独配置项，配置界面如图所示。

![Imgur](http://i.imgur.com/5eKxI2Q.png)

图 WebStorm中配置JSLint和JSHint


在WebStorm中启用JSHint后，JavaScript代码文件中就会有进行JSHint检查的提示信息，如下图所示。

 ![Imgur](http://i.imgur.com/S0ATwwM.png)

这样就可以很方便地找到代码中不够严谨或存在问题的地方。当然，如果不想使用IDE的插件，也可以使用一些自动化的工具，我最近一直在借助Grunt工具来构建和发布Web项目，[**grunt-contrib-jshint**](https://github.com/gruntjs/grunt-contrib-jshint)就是其中一个自动化的工具，此工具的运行效果图如下：

![Imgur](http://i.imgur.com/TrZxByW.png)

此工具配合[**grunt-contrib-watch**](https://github.com/gruntjs/grunt-contrib-watch) 使用，会持续不断地检查JavaScript代码的质量。

如上就是在JavaScript编码中提高代码质量的一些基本手段，这些方式可以避免一些最基本的低级错误，并提高代码的可读性，但并不是说使用了严格模式和JSHint工具就能写出高质量的代码。高质量的代码还需要代码本身逻辑清晰，运行性能高，这些就需要开发者更深入地了解JavaScript语言特性。
