---
layout: post
title: Web前端开发最佳实践（8）：还没有给CSS样式排序？其实你可以更专业一些
author: dang
categories: [Web]
tags: [icon]
fullview: false
---

## 前言

CSS样式排序是指按照一定的规则排列CSS样式属性的定义，排序并不会影响CSS样式的功能和性能，只是让代码看起来更加整洁。CSS代码的逻辑性并不强，一般的开发者写CSS样式也很随意，所以如果不借助工具，不太容易按照既定的顺序来定义CSS属性，这是前端程序员很少给CSS样式属性排序的最主要原因。

尽管给CSS样式属性排序需要花费一些精力，但从代码的可读性和可维护性角度来考虑，这些付出还是值得的。如果CSS属性按照一定的规则排序，在开发过程中可以防止属性的重复定义，代码的检查者也能很清晰地查看CSS样式定义，更关键的是后续维护过程中能快速定位特定的样式属性。国外有人做过一个调查，该调查显示有超过60%的开发者会给CSS样式排序。可见业内大部分的开发者对CSS样式属性排序持有肯定的态度，只是在排序的方式上会有一定的分歧：大约有45%的人是按照类型分组排序，有14%的人是按照字母序排列，还有2%的人按照定义的长度排序。下面分别介绍这几种排序的方式以及其优缺点。

## 常见的CSS定义排序方式

### 1. 按类型分组排序

这种排序方式最复杂，却也是最合理的方式。国外著名的Web前端专家Andy Ford推荐过一种按照类型分组排序的方式，他把CSS属性分为7大类：显示与浮动（`Diplay&Flow`）、定位（`Positioning`）、尺寸（`Dimensions`）、边框相关属性（`Margins`、`Padding`、`Borders`、`Outline`）、字体样式（`Typographic Styles`）、背景（`Backgrounds`）、其他样式（`Opacity`、`Cursors`、`Generated Content`）。以此规则，Andy Ford给出了一个例子，基本包含了CSS2.1中所有的样式属性。可以通过浏览[他的文章 ](http://www.dang-jian.com/?p=320)查看完整的例子代码。

随着CSS3的普及，CSS样式中也添加了很多新的属性，这些新的属性也可以按照如上的规则归类到不同的类别中，如：`text-
shadow`可以归类到字体样式中；`border-radius`可以归类为边框相关属性等。

### 2. 按字母序排列
按字母序排列的方式也是CSS排序中使用较多的一种方式。相比较于前一种方式，这种方式的优点是排列规则简单。按字母序排列的规则是按照属性的首字母从A到Z排列，忽略浏览器前缀（如：`-webkit-`、`-moz-`、`-o-`以及`-ms-`）。如下是一个按照字母序排列的例子：

	#element {
	    -webkit-border-radius: 4px;
	    -moz-border-radius: 4px;
	    border-radius: 4px;
	    color: #FFF;
	    font-family: "Times New Roman", serif;
	    font-weight: bold;
	    height: 300px;
	    line-height: 20px;
	    top: 10px;
	    width: 100px;
	}

### 3. 按定义长度排序

这种排序方式是使用较少的一种方式。和按照字母序排列的方式类似，这种方式是按照样式定义的字符长度排列。排列的方式可以从长到短，也可以是从短到长。如下的例子将按照定义由长到短排列：


	#element {
	    font-family: "Times New Roman", serif;
	    -webkit-border-radius: 4px;
	    -moz-border-radius: 4px;
	    border-radius: 4px;
	    font-weight: bold;
	    line-height: 20px;
	    height: 300px;
	    width: 100px;
	    color: #FFF;
	    top: 10px;
	}

以上三种常见的CSS排序方式中，第一种最为合理，代码的可读性和可维护性也是最好的，但是规则相对复杂。其余两种方式规则简单，但仅仅是让代码看起来更整洁，并没有提高多少代码的可维护性。在实际的应用中，推荐使用第一种排列方式。

## 借助工具

当然，如果纯粹是靠前端工程师在编写代码过程中按照一定的规则来排列CSS样式肯定是有难度的，并且也不方便频繁地修改代码。最佳的方式是在编写代码过程中按照最有效率的方式来编写，在编写完成并提交代码时使用工具给CSS排序。这样即提高了开发效率又方便了后续代码的阅读和维护。推荐一款免费的CSS排序工具：[CSScomb](http://csscomb.com) 。CSScomb提供了在线工具及主流代码编辑器的插件。

CSScomb的排序方式类似如上的第一种方式，但是默认规则稍有不同，当然CSScomb容许开发者自定义排序方式。下面以WebStorm为例，演示CSScomb的使用方法以及效果对比。

下载的CSScomb工具包，根据教程安装插件到WebStorm，然后就可以直接使用CSScomb了。使用的方式也很简单，在CSS样式文件上点击右键选择CSScomb工具，如下图所示。

 ![Imgur](http://i.imgur.com/2Lag3YI.png)

图 WebStorm编辑器中使用CSScomb插件

看看排序的实际效果。如下是排序前的代码片段：

 ![Imgur](http://i.imgur.com/fCxTv1a.png)

图 示例样式代码片段

下图是排序后的代码片段。

 ![Imgur](http://i.imgur.com/onbi7Tr.png)

图 示例样式代码经过CSScomb排序后的效果


可以看到，排序后，不只是样式定义的顺序改变，每个分组之间还用了一个空行分割。提高了CSS代码的可读性和可维护性。

CSScomb提供了大量的其他工具的[集成解决方案](https://github.com/csscomb)，如grunt对应的有[grunt-csscomb](https://github.com/csscomb/grunt-csscomb)，sublime编辑器有对应的[sublime-csscomb](https://github.com/csscomb/sublime-csscomb)插件，等等。

## 总结

总结以上介绍的CSS样式规则排序的实践，可以归纳为如下四点：

* 给CSS样式排序
* 推荐按样式属性功能分组排序
* 推荐在CSS样式代码编写完成并准备签入的时候排序
* 使用如CSScomb等工具排序

## 附录

* [Web前端开发最佳实践（1）：前端开发概述](http://www.cnblogs.com/dangjian/p/4228313.html)
* [Web前端开发最佳实践（2）：前端代码重构](http://www.cnblogs.com/dangjian/p/4233049.html)
* [Web前端开发最佳实践（3）：前端代码和资源的压缩与合并](http://www.cnblogs.com/dangjian/p/4233049.html)
* [Web前端开发最佳实践（4）：在页面中添加必要的meta信息](http://www.cnblogs.com/dangjian/p/4235505.html)
* [Web前端开发最佳实践（5）：正确闭合HTML标签，停止使用不标准的标签和属性](http://www.cnblogs.com/dangjian/p/4238150.html)
* [Web前端开发最佳实践（6）：过时的块状元素和行内元素](http://www.cnblogs.com/dangjian/p/4249205.html)
* [Web前端开发最佳实践（7）：使用合理的技术方案来构建小图标](http://www.cnblogs.com/dangjian/p/4268463.html)
* [Web前端开发最佳实践（8）：还没有给CSS样式排序？其实你可以更专业一些](http://www.cnblogs.com/dangjian/p/4281004.html)