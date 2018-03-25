---
layout: post
title: 《Web前端开发最佳实践》第10章-源代码
fullview: false
---
## 第10章 高性能的JavaScript
### 10.1 加快JavaScript文件的加载速度
推荐的做法是尽量将JavaScript代码的引用放置在body的底部，让页面其他元素优先解析，JavaScript代码文件的加载和解析推迟到整个页面的元素解析完成后进行。代码示例如下：

	<html>
	<head>
	    <title>JavaScript文件引用</title>
	    <link rel="stylesheet" href="sample.css">
	</head>
	<body>
	    <p>sample text</p>

	    <!-- 推荐的JavaScript文件引用位置 -->
	    <script src="script1.js"></script>
	    <script src="script2.js"></script>
	</body>
	</html>

另外，可以通过动态创建script元素的方式达到异步加载和执行JavaScript代码的效果，示例代码如下：

	var script = document.createElement ("script");
	script.type = "text/javascript";
	script.src = "file1.js";
	document.getElementsByTagName_r("head")[0].appendChild(script);

### 10.2养成良好的编码习惯，提高代码运行速度
除非是在数据量非常大，代码的运行有明显的性能影响时，才应考虑选用那些可读性和可维护性差但性能高的编码方式。举个例子，如下是一个常用的字符串拼接方式：

	// 方式1
	str += 'str1' + 'str2'

在旧版本的浏览器中（尤其是IE6），这种方式会有一些临时变量的创建和销毁，影响了性能，所以推荐的字符串拼接方式是如下两种：

	// 方式2
	var str_array = [];
	str_array.push('str1');
	str_array.push('str2');
	str = str_array.join('');
	// 方式3
	str +='str1';
	str +='str2';

如果把上述测试用例都循环1000次，即使用如下的测试用例：

	// 方式1
	var str = '';
	for(var i=0; i < 1000; i++) {
	    str += 'str1' + 'str2';
	}
	// 方式2
	var str_array = [];
	for(var i=0; i < 1000; i++) {
	    str_array.push('str1');
	    str_array.push('str2');
	}
	var str = str_array.join('');
	// 方式3
	var str = '';
	for(var i=0; i < 1000; i++) {
	    str +='str1';
	    str +='str2';
	}

如果计算过程比较耗时，并且计算结果不会改变，则缓存计算结果可以大大提高性能，如下是一个缓存浏览器滚动条宽度的示例：

	function getScrollbarWidth() {
	    if (!scheduler.scroll_width) {
	        var outer = document.createElement("div");
	        outer.style.visibility = "hidden";
	        outer.style.width = "100px";
	        document.body.appendChild(outer);

	        var widthNoScroll = outer.offsetWidth;
	        // 强制显示滚动条
	        outer.style.overflow = "scroll";

	        // 添加一个div
	        var inner = document.createElement("div");
	        inner.style.width = "100%";
	        outer.appendChild(inner);

	        var widthWithScroll = inner.offsetWidth;

	        // 删除div
	        outer.parentNode.removeChild(outer);
	        scheduler.scroll_width = widthNoScroll - widthWithScroll;
	    }

	    return scheduler.scroll_width;
	}

另外，很多开发者把for-in用于对象的克隆，一个类似的示例如下：

	function clone(obj) {
	    if (null == obj || "object" != typeof obj) return obj;
	    var copy = obj.constructor();
	    for (var attr in obj) {
	        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
	    }
	    return copy;
	}

但其实这是一个不好的做法，如果有大量的克隆操作，性能损耗是很大的。最佳的做法在克隆函数中明确复制每个属性，代码类似如下：

	function clone(obj) {
	    if (null == obj || "object" != typeof obj) return obj;
	    var copy = obj.constructor();
	    copy.foo = obj.foo;
	    copy.bar = obj.bar;
	    return copy;
	}

很多开发者认为使用delete关键字删除属性可以让对应的对象销毁，对象垃圾得到了回收。使用的方式类似如下：

	var o = { r: '1' };
	delete o.r; // 删除对象属性

### 10.3 使用高性能的变量或属性值读取方式
如下是一个常见的访问外部作用域变量的示例：

	function update(){
	    var imgs = document.getElementsByTagName("img");
	    for(var i=0, len=imgs.length; i < len; i++){
	        imgs[i].title = document.title + " - image - " + i;
	    }
	}

上面的例子中使用了多次相同的外部域变量，可以使用如下方式改写：

	function update(){
	    var doc = document;
	    var imgs = doc.getElementsByTagName("img");
	    for(var i=0, len=imgs.length; i < len; i++){
	        imgs[i].title = doc.title + " - image - " + i;
	    }
	}

正确使用try-catch表达式的示例代码如下：

	try {
	    // 业务逻辑
	} catch(ex) {
	    errorHandler(ex);
	}

查找对象上的属性或方法时，首先会查找自身是否存在此属性或方法，如果未找到则会继续在原型链上查找，直到找到或者未找到返回undefined值。如下是一个原型的示例：

	function Person(name){
	    this.name = name;
	}
	Person.prototype = { location : 'china' };

	var personA = new Person('name1');
	var personB = new Person('name2');

	alert(personA.location); // china
	alert(personB.location); // china

最佳的做法是把属性值缓存在局部变量中，提高读取对象属性的性能。比如如下的代码：

	for (var i = 0; i < numbers.length; i++) {
	    numbers[i] *= 2;
	}

在整个循环过程中，会反复读取numbers的length属性值，性能改进的方案是使用一个局部变量缓存此属性值，修改代码如下：

	for (var i = 0, len = nambers.length; i < len; i++) {
	    numbers[i] *= 2;
	}

### 10.4 高效的DOM的操作
最常见频繁进行DOM操作的是频繁修改DOM元素的样式，代码类似如下：

	element.style.borderColor = '#f00';
	element.style.borderStyle = 'solid';
	element.style.borderWidth = '1px';

推荐的方式是把DOM操作尽量合并，如上的代码可以优化为：

	// 优化方案1
	element.style.cssText += 'border: 1px solid #f00;';
	// 优化方案2
	element.className += 'empty';

对页面性能的影响只存在于最后把文档片段附加到页面的这一步操作上。代码类似如下：

	var fragment = document.createDocumentFragment();
	// 大量基于fragment的DOM操作
	...
	document.getElementById('myElement').appendChild(fragment);

对于这类会引起页面重绘或重排的操作，就只有隐藏和显示DOM元素这两个步骤了。代码类似如下：

	var myElement = document.getElementById('myElement');
	myElement.style.display = 'none';
	// 一些基于myElement的大量DOM操作
	...
	myElement.style.display = 'block';

这样一来，影响性能的操作就只是最后替换元素的这一步操作了，在内存中操作克隆元素不会引起页面上的性能损耗。代码类似如下：

	var old = document.getElementById('myElement');
	var clone = old.cloneNode(true);
	// 一些基于clone的大量DOM操作
	...
	old.parentNode.replaceChild(clone, old);

前面讨论过，获取DOM的布局信息会有性能的损耗，所以如果存在重复调用，最佳的做法是尽量把这些值缓存在局部变量中。考虑如下的一个示例：

	for (var i=0; i < len; i++) {
	    myElements[i].style.top = targetElement.offsetTop + i*5 + 'px';
	}

此方案只是调用了一遍元素的offsetTop值。更改后的代码如下：

	var targetTop = targetElement.offsetTop;
	for (var i=0; i < len; i++) {
	    myElements[i].style.top = targetTop+ i*5 + 'px';
	}

如果需要这些布局信息，最好是在DOM操作之前就取得。考虑如下一个示例：

	var newWidth = div1.offsetWidth + 10;
	div1.style.width = newWidth + 'px';

	var newHeight = myElement.offsetHeight + 10; // 强制页面重排
	myElement.style.height = newHeight + 'px'; // 又会重排一次

因为浏览器会优化连续的DOM操作，所以实际上只会有一次的页面重排出现，优化后的代码如下：

	var newWidth = div1.offsetWidth + 10;
	var newHeight = myElement.offsetHeight + 10;

	div1.style.width = newWidth + 'px';
	myElement.style.height = newHeight + 'px';

这种方式也有很大的灵活性，可以很方便地添加或删除子元素，不需要考虑因元素移除或改动而需要修改事件绑定。示例代码如下：

	// 获取父节点，并添加一个click事件
	document.getElementById('list').addEventListener("click",function(e) {
	    // 检查事件源元素
	    if(e.target && e.target.nodeName.toUpperCase == "LI") {
	        // 针对子元素的处理
	        ...
	    }
	});

比如在jQuery中可以使用如下方式实现事件的托管（示例代码来自jQuery官方网站）：

	$( "table" ).on( "click", "td", function() {
	    $( this ).toggleClass( "chosen" );
	});

### 10.5 使用辅助工具优化JavaScript代码性能
当然，如果不希望使用在线工具，也可以使用JavaScript性能测试库，例如JSLitmus 。使用方法很简单，如下是使用JSLitmus的示例：

	<script type="text/javascript" src="JSLitmus.js"></script>
	<script>
	    JSLitmus.test('test1', function() {
	        var list = document.getElementsByTagName('p');
	        for (var i = 0; i < list.length; i++) {
	        }
	    });
	    JSLitmus.test('test2', function() {
	        var list = document.getElementsByTagName('p');
	        for (var i = 0, l = list.length; i < l; i++) {
	        }
	    });
	</script>