---
layout: post
title: CSS样式定义排序
author: dang
categories: [CSS]
tags: [CSS,sort]
fullview: false
---	
CSS样式排序是指按照一定的规则排列CSS样式属性的定义，排序并不会影响CSS样式的功能和性能，只是让代码开起来更加整洁。编写整洁的代码是每个程序员应该追求的目标，但估计有不少的前端程序员没有给CSS样式排序的习惯。CSS代码的逻辑性并不强，一般的开发者写CSS样式也很随意，所以如果不借助工具，不太容易能按照既定的顺序来定义CSS属性，这是前端程序员不给CSS样式属性排序的最主要的原因。

尽管给CSS样式属性排序需要花费一些精力，但从代码的可读性和可维护性方面考虑，这些付出还是值得的。如果CSS属性按照一定的规则排序，开发过程中可以防止属性的重复定义，代码的检查者也能很清晰地查看CSS样式定义，更关键的是后续维护过程中能快速定位特定的样式属性。国外有人做过一个调查，结果有超过60%的开发者有给CSS样式排序。可见业内大部分的开发者对CSS样式属性排序持有肯定的态度，只是在排序的方式上有一定的分歧，有45%的人是按照类型分组排序，有14%的人是按照字母序排列，还有2%的人按照定义的长度排序。下面分别介绍这几种排序的方式以及其优缺点。

###按类型分组排序
这种排序方式最复杂，却是最合理的方式。国外著名的Web前端专家andy ford推荐过一种按照类型分组排序的方式，他把CSS属性分为7大类：显示与浮动（Diplay&Flow）、定位（Positioning）、尺寸（Dimensions）、边相关属性（Margins、Padding、Borders、Outline）、字体样式（Typographic Styles）、背景（Backgrounds）、其它样式（Opacity、Cursors、Generated Content）。以此规则，Andy Ford给出了一个例子，基本包含了CSS2.1中所有的样式属性。可以浏览他的文章，查看完整的例子代码。随着CSS3的普及，CSS样式中也添加了很多新的属性，这些新的属性也可以按照如上的规则归类到不同的类别中，如：text-shadow可以归类到字体样式中；border-radius可以归类为边相关属性。

这种按照样式类型分组排列方式不光是把功能相似的属性归类在一起，并且按照样式功能的重要性从上到下排列。把影响元素页面布局的样式（如：float、margin、padding、height、width等）排到了前面，而把不影响布局的样式（如：background、color、font等）放到了后面。这种按照主次清晰的排列，极大地提高了代码的可维护性。

###按字母序排列
按字母序排列的方式也是CSS排序中使用较多的一种方式。相比较前一种方式，这种方式的优点是排列规则简单。按字母序排列的规则是按照属性的首字母从A到Z排列，忽略浏览器前缀（如：-webkit-、-moz-、-o-以及-ms-）。举个例子：

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

###按定义长度排序
这种排序方式是使用较少的一种方式，和按照字母序排列的方式类似，这种方式是按照样式定义的字符长度排列。排列的方式可以从长到短，也可以是从短到长。如下的例子是按照定义由长到短排列：

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

当然，如果纯粹是靠前端工程师编写代码过程中就按照一定的规则排列CSS样式肯定是有难度的，并且也不方便频繁的修改代码。最佳的方式是在编写代码过程中按照最有效率的方式编写，在编写完成并提交代码时使用工具给CSS排序。这样即提高了开发效率有方便了后续代码的阅读和维护。这里推荐一款免费的CSS排序工具：CSScomb。CSScomb提供了在线工具和主流代码编辑器的插件。下面以WebStorm为例，演示CSScomb的使用方法以及效果对比。

按照下载的工具包里面的安装截图安装工具后，就可以直接使用了。使用的方式也很简单，在CSS样式文件上点击右键选择CSScomb工具就可以了。

![Imgur](http://i.imgur.com/qk1K5uM.png)

看看排序的实际效果。

排序前的代码片段：

![Imgur](http://i.imgur.com/ebRa4da.png)

排序后的代码片段：

![Imgur](http://i.imgur.com/owF3NTG.png)

可以看到，排序后，不光是样式定义的次序改变，每个分组之间用了一个空行分割。

总结以上介绍的CSS排序实践，可以归纳如下三点：

* 1，给CSS样式排序。
* 2，推荐按样式属性功能分组排序。
* 3，推荐在CSS样式代码编写完成并准备签入的时候排序。
* 4，使用如CSScomb等工具排序。