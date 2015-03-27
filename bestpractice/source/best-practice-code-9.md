---
layout: post
title: 《Web前端开发最佳实践》第9章-源代码
fullview: false
---
## 第9章 高维护性的JavaScript
### 9.1 养成良好编码习惯，提高代码的可维护性
在项目中的一位开发者定义了如下的全局变量和函数：

	var length = 0;
	function init(){…}
	function action() {…}
最简单的方法是把变量和方法封装在一个变量对象上，使其变成对象的属性。例如：

	var myCurrentAction = {
	     length: 0,
	     init: function(){…},
	     action: function(){…}
	}

可以通过定义一个匿名函数实现：

	(function () {
		var length = 0;
		function init(){…}
		function action() {…}
	})();

在实际的业务中，模块之间会有交互，这时则可以使用return语句，返回需要公开的接口，比如要公开上述代码中的init函数，则如上代码应修改为如下形式：

	var myCurrentAction = (function () {
		var length = 0;
		function init(){…}
		function action() {…}
		return {
		    init: init
		}
	})();

如果定义变量时没有使用var，浏览器解析时并不会报错，而是自动把这一变量解析为全局变量，比如如下的代码就定义了一个全局的变量length：

	(function () {
		length = 0;
		function init(){…}
		function action() {…}
	})();

使用复杂的方式创建对象和数组，这种方式是在后端语言中惯用的方式：

	// 对象创建
	var person = new Object();
	person.age = 25;
	person.name = 'dang';

	// 数组创建
	var list = new Array();
	list[0] = 12;
	list[1] = 20;
	list[2] = 24;

可以使用JSON方式创建对象和数组。如果开发者熟悉JavaScript，则使用这种方式更简洁易读，代码如下：

	// 对象创建
	person = {age: 25, name: 'dang'};

	// 数组创建
	list = [12, 20, 24];

原始类型（数值、布尔和字符类型）进行比较时，会先转换为数值类型再比较；对象和原始类型比较时，会先将对象转换为原始类型，然后再比较。来看看相应的示例：

	null == undefined; // true
	0 == null; // false

	false == '0' // true
	false == 'false' // false
	'\n  123  \t' == 123 // true

	var p = {toString: function(){ return '1'}}
	p == 1; // true

在JavaScript中，with语句可用来快捷地访问对象的属性。with语句的格式如下：

	with (object) {
	    statement
	}

with语句的使用原理是：JavaScript解析和运行时，会给with语句单独建立了一个作用域，而和with语句结合的对象上的属性则成为了此作用域的局部变量，因此可以直接访问。比如：

	with (Math) {
	  a = PI * r * r;
	  x = r * cos(PI);
	  y = r * sin(PI / 2);
	}

上面代码和如下的代码会完成同样的事情：

	a = Math.PI * r * r;
	x = r * Math.cos(PI);
	y = r * Math.sin(PI / 2);

首先，使用with语句，使得代码难以阅读，对于with语句内部的变量引用，只有在运行时才能知道变量属于哪个对象。比如：

	function f(x, o) {
		with (o) {
		    print(x);
		}
	}

其次，with语句存在兼容问题，如下的示例来自mozilla开发网站：

	function f(foo, values) {
	    with (foo) {
	        console.log(values)
	    }
	}

with语句的设计方面也有缺陷，在with语句内部修改和with语句结合的对象后，并不能同步到with内部，即不能保证对象数据的一致性。举个例子：

	var group = {
	    value: {
	        node: 1
	    }
	};
	with(group.value) {
	    group.value = {
	        node: 2
	    };
	    // 显示错误： 1
	    console.log(node);
	}
	// 显示正确： 2
	console.log(group.value.node);

在JavaScript中，eval函数的用法很简单，它会接受一个字符串参数，把字符串内容作为代码执行，并返回执行结果。典型的用法如下：

	eval("x=1;y=2; x*y")

比如想得到对象上的属性值，但由于属性名是通过变量传入的，所以无法用点操作符，这个时候就可能会想要使用eval，代码类似如下形式：

	eval('obj.' + key);

其实可以使用下标法取得属性值：

	obj[key]

可把兼容代码放在单独的文件中，页面中添加如下代码：

	<!--[if lt IE 9]>
	<script src="javascript/html5.js"></script>
	<![endif]-->

### 9.2 使用更严格的编码格式
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

比如如下的代码中，在代码文件设置了全局严格模式，应该避免这样的设置方式。

	"use strict";
	function doSomething() {
	    // 这部分代码会运行于严格模式
	}
	function doSomethingElse() {
	    // 这部分代码也会运行于严格模式
	}

所以尽量把严格模式限定在函数作用域范围内。类似如下的设置方式：

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

### 9.3 事件处理和业务逻辑分离
如下是一个典型的例子，该例是处理鼠标拖动页面元素，事件处理函数对应的代码如下：

	var move_while_dnd = function(e){
	    var lb = scheduler._get_lightbox(); // 取得元素
	    // 设置元素位置
	    lb.style.top = e.clientY+"px";
	    lb.style.left = e.clientX+"px";
	};

在事件处理的代码中则专门处理和事件相关的逻辑，比如取得event对象上的信息、阻止事件冒泡，或者默认行为等。经过如此调整后，上述代码可以改写为：

	var setLightBoxPosition = function(top, left) {
	    var lb = scheduler._get_lightbox(); // 取得元素
	    // 设置元素位置
	    lb.style.top = top+"px";
	    lb.style.left = left+"px";
	}

	var move_while_dnd = function(e){
	    setLightBoxPosition(e.clientY, e.clientX);
	};

### 9.4 配置数据和代码逻辑分离

下面的示例展示了如何把代码中的配置数据分离，配置数据未分离时的代码如下：
	var sm = startHours*60+startMinutes;
	var em = (endHours*60+endMinutes)||(24*60);
	var top = (sm*60*1000-0*60*60*1000)*42;
	var height = Math.max(40,(em-sm)*42/60)+1;

经过业务分析，把可变的配置数据分离了出来，并使用命名有意义的属性保存了这些数据。抽离的数据如下：

	this.config = {
	    first_hour:0,
	    last_hour:24,
	    hour_size_px:42,
	    min_event_height:40
	}

同时，修改业务代码，使用配置数据代替原来写死的数据：

	var sm = startHours*60+startMinutes;
	var em = (endHours*60+endMinutes)||(this.config.last_hour*60);
	var top = (sm*60*1000-this.config.first_hour*60*60*1000)*this.config.hour_size_px;
	var height = Math.max(this.config.min_event_height,(em-sm)*this.config.hour_size_px/60);

如下代码展示了Bootstrap框架中Tooltip控件的配置数据：

	Tooltip.DEFAULTS = {
	animation: true
	, placement: 'top'
	, selector: false
	, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
	, trigger: 'hover focus'
	, title: ''
	, delay: 0
	, html: false
	, container: false
	}

### 9.5 逻辑与结构样式分离
如下示例通过JavaScript给元素设置了大量的样式：

	var el = document.getElementById('main_container');
	var list = el.getElementsByTagName(‘li');
	for(var i=0,j=list.length ;i<j;i++){
	   if(list[i].innerHTML === ''){
	      list[i].style.borderColor = '#f00';
	      list[i].style.borderStyle = 'solid';
	      list[i].style.borderWidth = '1px';
	   }
	}

也可以通过设置style上的cssText属性，来设置元素的样式，比如上述代码可以改写为：

	var el = document.getElementById('main_container');
	var list = el.getElementsByTagName(‘li');
	for(var i=0,j=list.length ;i<j;i++){
	   if(list[i].innerHTML === ''){
	      list[i].style.cssText += 'border: 1px solid #f00;';
	   }
	}

在JavaScript代码中，仅仅是设置元素的Class。如上的代码可修改为：

	var el = document.getElementById('main_container');
	var list = el.getElementsByTagName(‘li');
	for(var i=0,j=list.length ;i<j;i++){
	   if(list[i].innerHTML === ''){
	       list[i].className += 'empty';
	        // HTML5: list[i].classList.add('empty');
	   }
	}

然后在页面引用的CSS文件中添加一条CSS规则：

	.empty {
	    border: 1px solid #f00;
	}

在JavaScript中，可以通过多种方式生成元素，最常见的是通过元素的innerHTML属性设置元素内部子元素，示例代码如下：

	var d2=document.createElement("DIV");
	d2.innerHTML="<textarea class='editor'>location</textarea>";
	d.appendChild(d2);

这是一个简单的例子，再来看一个稍微复杂点的例子，它将根据数据动态拼接HTML结构，如下：

	var html = '<div event_id="' + obj.id + '">';
	html += '<div class="title"><div class="title_icon"></div>' + obj.title + '</div>';
	html += '<div class="body">' + obj.content + '</div>';
	html += '<div class="footer"><div class="footer_icon"></div>' + obj.footer +'</div></div>';
	d.innerHTML = html;

在这个例子中，根据五个已有数据拼接了一个复杂的结构，这代码是不是看起来很乱？一个稍有改进的方案是使用简单的JavaScript模板，即将其改写为：

	var template = '<div event_id="%id%">';
	template += '<div class="title"><div class=" icon"></div>%title%</div>';
	template += '<div class=" body">%content%</div>';
	template += '<div class=" footer"><div class=" footer_icon"></div>%footer%</div></div>';

	var html = template.replace(/%\w+%/g, function(matchs){
	    return obj[matchs.replace(/%/g, "")]
	});
	d.innerHTML = html;

或者是把JavaScript模板放置于单独的文件中，需要时才从服务器端加载。下面是从服务器端取得HTML代码的示例：

	var xhr = new XMLHttpRequest();
	xhr.open('GET', "content/templates/store.html", true);
	xhr.onreadystatechange = function() {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	        document.getElementById('store_container').innerHTML = xhr.responseText;
	    }
	};
	xhr.send(null);

如果页面中引用了jQuery框架，则使用jQuery中提供的方式更简单：

	$('#store_container').load("content/templates/store.html");

开发者可利用这一特点，把JavaScript模板代码放置在script标签中，更重要的是，script标签中的代码会保留代码的缩进格式。如下是一个典型的示例：

	<script id="main_info" type="text/x-tmpl">
	    <li><b>${name}</b> (${class})</li>
	</script>

当需要取得模板代码时，通过innerHTML 属性即可得到：

	var infoTemplate = document.getElementById('main_info').innerHTML;

### 9.6 JavaScript模板的使用
其实这些循环或条件判断等逻辑块可以使用子模板的形式代替。比如：

	<h1>Comments</h1>
	<div id="comments">
	  {{#each comments}}
	  <h2><a href="/posts#{{id}}">{{title}}</a></h2>
	  <div>{{body}}</div>
	  {{/each}}
	</div>

上述这个模板就可以更改为如下的方案，首先把静态部分移到页面的静态HTML代码中：

	<h1>Comments</h1>
	<div id="comments">
	</div>

然后把内部的可变部分作为子模板分离出来：

	<h2><a href="/posts#{{id}}">{{title}}</a></h2>
	<div>{{body}}</div>

如下的代码演示underscore中模板的预编译情况：

	// 取得模板代码并预编译
	var template = _.template($( "template" ).html());

	// 在需要模板的地方，可以直接使用编译后的template函数
	template(templateData);

如下的代码是一个缓存预编译后的模板方案：

	TemplateCache = {
	  get: function(selector){
	    if (!this.templates){ this.templates = {}; }

	    var template = this.templates[selector];
	    if (!template){
	      template = $(selector).html();

	      // 预编译模板
	      template = _.template(template);

	      this.templates[selector] = template;
	    }

	    return template;
	  }
	}

### 9.8 JavaScript模块化开发
按照模块的设计思想，在JavaScript中利用立即执行函数，可以实现在不暴露私有数据的前提下公开一些公共的接口，如下是模块的具体实现示例：

	var module1 = (function(){
	    var length = 0;
	    var init = function(){
	        //...
	    };
	    var action = function(){
	        //...
	    };
	    return {
	        init: init,
	        action : action
	    };
	})();

如果模块之间存在很紧的依赖关系，则模块内部最好不要直接访问所依赖的外部模块，而是通过参数的方式传入模块，示例代码如下：

	var module1 = (function ($, module2) {
	    //...
	)(jQuery, module2);

如下代码就是以CommonJS规范定义的方式加载math模块的：

	var add = require('math').add;
	add(val, 1);

AMD规范采用异步的方式加载模块，所以为了在加载时不影响后续的执行，在实现上使用了回调函数，将如上的代码写成AMD规范，就是如下的样子：

	require('math'， function(math){
	    var add = math.add;
	    add(val, 1);
	});

jQuery框架代码的结尾处就添加有支持CommonJS和AMD规范的代码，如下：

	if ( typeof module === "object" && module && typeof module.exports === "object" ) { // CommonJS
	    module.exports = jQuery;
	} else { // AMD
	    window.jQuery = window.$ = jQuery;
	    if ( typeof define === "function" && define.amd ) {
	        define( "jquery", [], function () { return jQuery; } );
	    }
	}
