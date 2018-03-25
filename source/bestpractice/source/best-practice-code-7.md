---
layout: post
title: 《Web前端开发最佳实践》第7章-源代码
fullview: false
---
## 第7章 高性能的CSS
### 7.1 使用高效的CSS选择器
简单来说，能被浏览器快速解析和匹配的CSS选择器就是高效的选择器。举个例子:

	.references p.list div {
	}
	.references .list-item{
	}
	#references_list_item{
	}

通配符使用*号表示，它用来匹配页面中所有的元素。如下示例使用通配符设置页面所有元素的字体：

	/*避免使用示例中的选择器*/
	* {
	    font-size: 16px;
	}

如下是使用标签选择器和单个属性选择器的例子：

	/* 避免使用标签选择器及单个属性选择器作为关键选择器*/
	.references p.list div {
	    font-style: italic;
	}
	.references p.list [data-link="#red"] {
	    color: #F00;
	}

页面中的ID都是唯一的，所以在ID选择器前添加标签名是多余的，这无端增加了匹配计算时间。示例如下：

	/* 不好的示例：ID选择器前面添加了标签选择器*/
	div#page_index {}

	/* 好的示例：ID选择器前面不要添加额外的限定*/
	#page_index{}

### 7.3 减小CSS的代码量
CSS中的某些样式是由多个规则组成的，比如字体样式，就包含：font-family、font-style、font-size、font-variant、font-weight及line-height。如下是使用这些规则定义一个元素的字体样式：

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

在CSS样式中，有些属性值可以使用更简洁的方式来展示，比如颜色和尺寸：

	p.reader-title {
	    color: #FF33EE
	    font-size: 0.8em;
	    padding: 0em;
	}

颜色值`#FF33EE`可以简化为#F3E，尺寸值0.8em可以省略小数点之前的0，即简化为.8em。如果尺寸值为0，则可以省略单位。经过简化后，上面的样式定义即为：

	p.reader-title {
	    color: #F3E;
	    font-size: .8em;
	    padding: 0;
	}

可以合并这些相同的样式定义，达到代码重用和缩减代码的目的。比如如下的CSS代码：

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

比如设置内边距为负值等，以及一些因手误引起的属性值拼写错误等。如下是一些常见的无效样式属性：

	.invalid-css {
	    padding-top:-20px;/* 无效的属性值 */
	    border: 1px soild #DDD;/* 拼写错误 */
	}

### 7.4 其他CSS高性能实践
比如某个CSS样式文件base.css中包含有加载其他样式文件的代码：

	@import url("extra.css")

如下是从微软的官方网站上找到的例子：

	<DIV STYLE="width:100%; filter:
	    progid_DXImageTransform.Microsoft.MotionBlur(strength=13, direction=310)
	    progid_DXImageTransform.Microsoft.Blur(pixelradius=2)
	    progid_DXImageTransform.Microsoft.Wheel(duration=3);">
	        Blurry text with smudge of gray.</div>

CSS表达式的作用是动态设置CSS属性。如下是使用CSS表达式的例子：

	<div id="oDiv"
	  style="background-color: #CFCFCF; position: absolute;          left:expression(document.body.clientWidth/2-oDiv.offsetWidth/2);         top:expression(document.body.clientHeight/2-oDiv.offsetHeight/2)">
	Example DIV
	</div>