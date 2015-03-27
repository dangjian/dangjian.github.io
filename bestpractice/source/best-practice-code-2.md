---
layout: post
title: 《Web前端开发最佳实践》第2章-源代码
fullview: false
---
##第2章 高效Web前端开发
### 2.6.4代码和资源的压缩与合并

UgligyJS不仅仅是一个压缩工具，同时具有JavaScript语法分析和代码美化功能，包括代码缩减、代码转化等。
	var a = 10; var b = 20; ==> var a=10,b=20;
	if (foo) bar(); else baz(); ==> foo?bar():baz();
	if (foo) bar(); ==> foo&&bar();
	new Array(1, 2, 3, 4)  => [1,2,3,4]

CSS代码压缩原理和JavaScript代码压缩的原理类似，也是去掉不必要的空格回车注释等，并同时优化合并一些CSS规则定义，让规则更简洁

	background-color:#fff;
	background-image: url(image.gif);
	background-repeat:no-repeat;
	background-position: top left;

会优化为：
	background: #fff url(image.gif) no-repeat top left;

### 2.7.1 HTML命名规范及格式规范
HTML代码所有的标签名和属性应该都为小写，虽然HTML代码是大小写不敏感的，但是W3C的规范建议为小写；属性值应该使用双引号闭合。

不推荐示例：

	<!--不推荐示例：标签名称大写，或者大小写混合；属性值没有用双引号闭合-->
	<IMG src=demo.jpg alt='test' />

推荐示例：
	推荐示例：
	<!—推荐示例：标签名称小写；属性值用双引号闭合-->
	<img src="demo.jpg" alt="test" />

推荐的做法是根据语义和DOM树的层级关系来定义合适的名称，名称中全部使用小写，id名称中的关键词用下划线（_）连接，class的关键词用中划线（-）连接，这样可以最大量保证命名的不重复。

不推荐示例：

	<!--不推荐示例：命名简单随意，很难保证命名不重复-->
	<div id="Reader">
	    <div id="introduce" class="Introduce ">
	        …
	    </div>
	</div>

推荐示例：

	<!--推荐示例：根据语义以及上下层级关系定义名称-->
	<div id="reader">
	    <div id="reader_introduce" class="reader-introduce">
	        …
	    </div>
	</div>

如果class名称仅作为JavaScript调用的“钩子”，可在名称中添加“js”前缀。

示例代码：
	<!--class名称仅作为JavaScript调用的“钩子”，可在名称中添加“js”前缀-->
	<ul id="js_reader_menu">
	    <li class="menu-toc js-active">Toc</li>
	    <li class="menu-store js-active">Store</li>
	    <li class="menu-library">Library</li>
	    <li class="menu-news">News</li>
	</ul>

HTML代码的层级缩进为4个空格；如果元素包含有子元素，则此元素对应的起始标签和闭合标签分别单独占用一行。

不推荐示例：

	<!--不推荐示例：标签树形层级之间没有缩进或者缩进混乱-->
	<ul>
	<li>item1</li><li>item2</li>
	<li>item3</li><li>item4</li></ul>
推荐示例：
	<!--推荐示例：利用缩进体现元素的层级关系-->
	<ul>
	    <li>item1</li>
	    <li>item2</li>
	    <li>item3</li>
	    <li>item4</li>
	</ul>

注释添加的位置在要注释的代码上部并单独占用一行，不要在代码行的后面直接添加。

示例代码：

	<body>
	    <!--main header-->
	    <div id="reader_header">
	        ...
	    </div>
	 	<!--main content-->
	    <div id="reader_content">
	        ...
	        <!--动态绑定列表: toc-->
	        <ul id="reader_content_toc">
	        </ul>
	    </div>
		<!--main footer-->
	    <div id="reader_footer">
	        ...
	    </div>
	</body>

### 2.7.2 CSS命名规范及格式规范

推荐的CSS类的命名规则和元素的id命名规则相似，只是组成类名称的关键字的连接符为中划线（-）。

示例代码：

	.reader-content-title {
	    …
	}

为了避免class命名的重复，命名时取父元素的class名作为前缀。

	/* 父元素的样式声明 */
	.reader-content {
	    …
	}
	/* 子元素的class名称以父元素中的class名称作为前缀 */
	.reader-content-body {
	    …
	}

在CSS样式定义中，左花括号放置在选择器的同一行，并和选择器之间添加一个空格分隔，在保证可读性的基础上缩短代码的行数；在样式声明中，属性名称和值之间用一个空格分隔，提高代码可读性。

不推荐示例：

	/* 不推荐示例：CSS样式定义中的左花括号单独占一行；样式声明没有缩进或缩进混乱；属性名称和值之间没有用空格分隔*/
	.reader-content-title
	{
	background:#FFF;
	    …
	}

推荐示例：

	/* CSS样式定义中的左花括号放置在选择器的同一行；样式声明中属性名称和值之间用一个空格分隔*/
	.reader-content-title {
	    background: #FFF;
	    …
	}

多个选择器具有相同的样式声明时，每个选择器应该单独占一行，便于阅读和维护。

不推荐示例：

	/*不推荐示例：多个选择器具有相同的样式声明时，所有选择器放置于同一行*/
	h1,h2,h3 {
	    font-weight: normal;
	    line-height: 1.2;
	}

推荐示例：
	/*推荐示例：多个选择器具有相同的样式声明时，每个选择器应该单独占一行*/
	h1,
	h2,
	h3 {
	    font-weight: normal;
	    line-height: 1.2;
	}
样式声明的顺序按字母顺序排列，不考虑浏览器前缀。单纯靠手写代码并保证样式声明按照一定的顺序是不现实的。建议使用一些CSS美化工具做样式声明排序的工作。

示例代码：

	/*样式声明的顺序以字母序排列*/
	.reader-content-title {
	    background: #FFF;
	    border: 1px solid;
	    -moz-border-radius: 4px;
	    -webkit-border-radius: 4px;
	    border-radius: 4px;
	    color: black;
	    text-align: center;
	}

样式定义按照模块来分组，相同模块的样式定义放在一起，不同模块的定义之间用一个空行分割。

示例代码：

	/* reader header*/
	.reader-header-title {
		...
	}
	.reader-header-introduce {
		...
	}

	/*reader footer*/
	.reader-footer-copyright{
		...
	}
	.reader-footer-links {
		...
	}

文件信息一般包括文件版本、版权信息以及作者等；解释说明性的注释有给模块的注释和单独给选择器的注释，模块的注释则需要添加注释表明模块样式定义的开始和结束，CSS选择器的注释需要添加在选择器的上一行，而不是和选择器相同一行。

示例代码：

	/* 注释规范说明：文件头部的文件信息注释 */
	/*!
	 * reader content v1.0
	 *
	 * Copyright 2012
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 *
	 * Designed and built by dangjian
	 */

	/* 注释规范说明：模块样式定义的开始和结束 */
	/* Content containers start */
	/* 注释规范说明：注释需要添加在选择器的上一行，而不是和选择器相同一行 */
	/* content title */
	.reader-content-title {
	    ...
	}
	...
	/* Content containers end */

### 2.7.3 JavaScript命名规范及格式规范

JavaScript局部变量命名采用首字母小写，其他单词首字母大写的方式。命名时建议采用有意义的单词命名，不推荐使用标识变量类型的前缀，如int、str、obj等。不推荐使用单词缩写命名，变量以缩写命名则降低了其可读性。如果认为变量名太长而使JavaScript脚本文件的体积变大，则可以在发布阶段通过JavaScript脚本混淆压缩等手段来缩小文件的体积。

不推荐示例：

	// 不推荐示例：变量命名首字母大写
	var ReaderBookmark = 'bookmark';
	// 不推荐示例：变量命名意义不明确
	var object = {};
	// 不推荐示例：变量命名以类型作为前缀
	var strName = 'Note';
	// 不推荐示例：变量命名使用语义不明确的缩写
	var newNT = function(){
	    …
	}

推荐示例：

	// 推荐示例：变量命名语义明确
	var bookmarkDefaultTitle = 'Untitled Bookmark';

现在流行JavaScript的面向对象编程，那么就会有公有或私有接口的概念。原则上公有接口的命名首字母大写，私有接口的命名首字母小写。

示例代码：

	Reader.Content = function(){
	    // 私有变量
	    var info, title;
	    // 私有方法
	    var getContent = function(){
	        ...
	    };

	    return {
	        // 公有方法
	        SetTitle: function(contentTitle){
	            title = contentTitle;
	        },
	        // 公有属性
	        ContentInfo: info
	    }
	}();

jQuery框架在项目中使用广泛，推荐给jQuery类型变量添加“$”符作为前缀。

示例代码：

	var $tocTitle = $('.reader-toc-title');

左花括号应该在行的结束，而不应该单独一行，因为这样增加了不必要的行数。应该一直使用花括号括起逻辑块，即使逻辑只有一行，也应该用花括号括起来，以便提高代码的可读性和可维护性。

示例代码：

	//左花括号应该在行的结束，而不应该单独一行。
	for (var i=0; i<100; i++) {
	     doSomething(i);
	}

	//应该一直使用花括号括起逻辑块，即使逻辑只有一行。
	var isFound = false;
	if (statement) {
	    isFound = true;
	}

JavaScript中可以用单引号或者双引号定义字符串，但是因为习惯于定义html的元素属性值时使用双引号，而JavaScript中又经常包含html代码，所以字符串定义使用单引号也可方便于在字符串内部包含含有双引号的html代码。

示例代码：

	var content = '<span id="main_content">…';
空格的作用是提高代码的可读性，在函数参数的逗号后面使用一个空格，在操作符前后各使用一个空格。另外，使用一个空行来区分业务逻辑段。

示例代码：
	doSomething(myChar, 0, 1);

	while (x === y){
	    …
	}

看似合理的设计，但其实如果应用不慎就会导致一些莫名其妙的错误，如下的这个示例是由于自动添加分号而导致的逻辑错误。

错误示例：

	return
	{
	    a + b
	}

按照自动添加分号的算法，会在return后面添加一个分号，代码等价于：

	// return 后面会添加一个分号
	return ；
	{
	    a + b
	}

不想添加分号的地方被自动添加了分号，下面的例子则是因为没有在该添加分号的地方添加分号而导致的逻辑错误。
错误示例：

	var b = function(){
	    return function(){return 1}
	}
	var a = b
	(function(){
	    ...
	})()

根据自动添加分号的算法，”var a = b”这行语句的后一行代码以左括号开头，所以不会为这行语句自动添加分号，此行代码等价于：

	var b = function(){
	    return function(){return 1}
	}
	var a = b(function(){
	    ...
	})()

和CSS代码的注释规范相似，JavaScript代码的注释主要也是文件信息注释和代码逻辑注释。

示例代码：

	/* 文件头部的文件信息注释 */
	/*!
	 * reader content v1.0
	 *
	 * Copyright 2012
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 *
	 * Designed and built by dangjian
	 */
	Reader.Content = (function(){
	    return {
	        // reader初始化。
	        Init: function(){
	            …
	        };
	    };
	})();