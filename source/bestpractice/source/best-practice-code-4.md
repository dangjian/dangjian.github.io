---
layout: post
title: 《Web前端开发最佳实践》第4章-源代码
fullview: false
---
## 第4章 高可读性的HTML
### 4.1 HTML语义化
如果仅仅是实现这样的外观，使用下面的HTML代码再加上合适的CSS样式就可以达到要求。

	<div id="reader_main_action" class="reader-main-action">
	    <span class="reader-action-library"></span>
	    <span class="reader-action-spliter">|</span>
	    <span class="reader-action-toc "></span>
	    <span class="reader-action-spliter">|</span>
	    <span class="reader-action-note"></span>
	    <span class="reader-action-bookmark"></span>
	    <span class="reader-action-highlight"></span>
	</div>

再来看看第二种实现方式。从需求来看，这是一个包含5个无序操作项的工具栏，所以应该使用符合语义的`<ul>`标签。代码如下：

	<ul id="reader_main_action" class="reader-main-action">
	    <li class="reader-action-library"></li>
	    <li class="reader-action-spliter">|</li>
	    <li class="reader-action-toc"></li>
	    <li class="reader-action-spliter">|</li>
	    <li class="reader-action-note"></li>
	    <li class="reader-action-bookmark"></li>
	    <li class="reader-action-highlight"></li>
	</ul>

所以此方案需要进一步改进。可去掉多余的两个`<li>`，使用CSS样式来实现分隔符的效果。下面是改进后的代码：

	<ul id="reader_main_action" class="reader-main-action">
	    <li class="reader-action-library"></li>
	    <li class="reader-action-toc spliter"></li>
	    <li class="reader-action-note spliter"></li>
	    <li class="reader-action-bookmark"></li>
	    <li class="reader-action-highlight"></li>
	</ul>

当然如果考虑支持IE7及以下浏览器，也可以使用设置背景图的方式：

	.reader-main-action .spliter {
	    margin-left: 30px;
	}
	.reader-main-action .spliter:before {
	    content: '|';
	    line-height: 28px;
	    font-size: 20px;
	    color: #888;
	    cursor: default;
	    text-indent: 0;
	    float: left;
	    margin: 0 -20px;
	}

可以继续添加文字说明来进一步完善，修改后的代码如下：

	<ul id="reader_main_action" class="reader-main-action">
	    <li class="reader-action-library">library</li>
	    <li class="reader-action-toc spliter">toc</li>
	    <li class="reader-action-note spliter">note</li>
	    <li class="reader-action-bookmark">bookmark</li>
	    <li class="reader-action-highlight">highlight</li>
	</ul>
由于操作项在界面上显示的是图标按钮，因此需要把文字隐藏掉。如下的CSS样式可以实现文字的隐藏：

	.reader-main-action li {
	    text-indent: -9999px;
	}

如下示例展示了这两个属性的使用情况：

	<!—alt属性除了对图片作解释说明之外，当图片在浏览器中未加载时的显示的代替文字-->
	<img src="/img/loading.gif" alt="data loading…" />
	<!—title属性是对元素的解释说明，并且作为在浏览器中当鼠标移到元素上时显示的提示文本-->
	<a href="" title=""></a>

简洁的HTML代码会让语义更加明确。如下是上面的示例中展示分隔符的HTML代码：

	<ul id="reader_main_action" class="reader-main-action">
	    <li class="reader-action-spliter">|</li>
	</ul>

这里展示一个常用的场景，应该很多人写过类似如下清除浮动的代码：

	<div id="main">
	    <div class="sidebar">this is the side bar.</div>
	    <div class="content">this is the main content.</div>
	    <div class="clear"></div>
	</div>

对应的CSS样式为：

	.sidebar { float: left; width:150px; }
	.container { float:right; width:450px;}
	.clear { clear:both; }

应该删除这个多余的`<div>`元素，并改用CSS样式来实现，代码如下：

	<div id="main clearfix">
	    <div class="sidebar">this is the side bar.</div>
	    <div class="content">this is the main content.</div>
	</div>

对应的CSS类clearfix的声明为：

	.clearfix {
	*zoom: 1;
	}
	.clearfix:before,
	.clearfix:after {
	display: table;
	content: "";
	}
	.clearfix:after {
	clear: both;
	}

很多新手经常会使用此标签来让元素换行显示，甚至会连续使用多个`<br>`元素来加大元素之间的行距。

	<div>
	    <span>title</span><br><br>
	    <span>item1</span><br>
	    <span>item2</span><br>
	    <span>item3</span><br>
	</div>

这算是很初级的错误了，完全没有理解`<br>`标签的语义。`<br>`标签仅仅用于文本内容中的换行。

如下是从W3C网站上引用的示例：

	<p>P. Sherman<br>42 Wallaby Way<br>Sydney</p>

### 4.2 如何设置网页标题层级

按照HTML标签语义化的原则，在页面内容标题的部分应该使用`<HX>`系列标签，但实际的项目中存在很多不规范写法，如下是一种常见的不规范写法：

	<div class="reader-title"> Holman Christian Standard Bible </div>

根据实际的语义来看，此处是页面内容的顶级标题，正确的写法应该是：

	<h1 class="reader-title">Holman Christian Standard Bible</h1>

BBC新闻网站 就隐藏了顶级标题，代码如下：

	<h1 class="hide">BBC Homepage</h1>

### 4.3 如何正确设计一个表单

实现如上的效果会有很多种选择，按照此表单的布局，能想到的最快的方法是使用`<table>`标签布局。代码如下：

	<form action="/service/user" method="post">
	    <table>
	        <tr>
	            <td colspan="2">Sign in to begin.</td>
	        </tr>
	        <tr>
	            <td>User Name:</td>
	            <td><input type="text" name="userName" /></td>
	        </tr>
	        <tr>
	            <td>Password:</td>
	            <td><input type="text" name="password" /></td>
	        </tr>
	        <tr>
	            <td colspan="2">
	                <input type="checkbox" name="staySigned" />
	                Stay signed in
	            </td>
	        </tr>
	        <tr>
	            <td colspan="2">
	                <input type="submit" value="Login" />
	            </td>
	        </tr>
	    </table>
	</form>

如下的方案抛弃了`<table>`布局，HTML代码更简洁：

	<form action="/service/user" method="post">
	    <div>Sign in to begin.</div>
	    <span>User Name:</span>
	    <input type="text" name="userName" />
	    <span>Password:</span>
	    <input type="text" name="password" />
	    <input type="checkbox" name="staySigned" />
	    <span>Stay signed in</span>
	    <input type="submit" value="Login" />
	</form>
for属性的作用是：不仅把`<label>`元素上的触发事件指向了for属性指代的表单元素，也从语义上绑定了`<label>`元素和此表单元素。重构后的代码如下：

	<form action="/service/user" method="post">
	    <label for="userName">User Name:</label>
	    <input type="text" id="userName" name="userName" />
	    <label for="password">Password:</label>
	    <input type="text" id="password"  name="password" />
	    <input type="checkbox" id="staySigned" name="staySigned" />
	    <label for="staySigned">Stay signed in</label>
	    <input type="submit" value="Login" />
	</form>

表单使用`<label>`标签、`<fieldset>`标签和`<legend>`标签后的代码如下：

	<form action="/service/user" method="post">
	    <fieldset>
	        <legend>Sign in to begin.</legend>
	        <label for="userName">User Name:</label>
	        <input type="text" id="userName" name="userName" />
	        <label for="password">Password:</label>
	        <input type="text" id="password"  name="password" />
	        <input type="checkbox" id="staySigned" name="staySigned" />
	        <label for="staySigned">Stay signed in</label>
	    </fieldset>
	    <input type="submit" value="Login" />
	</form>


如下是使用<label>元素和复选框关联的两种形式：

	<input type="checkbox" id="keepSigned" name="keepSigned" value="" />
	<label for="keepSigned">Keep Me Signed In For 30 Days.</label>
	// 省略for属性，把输入控件作为label的子元素
	<label><input type="checkbox" id="keepSigned" name="keepSigned" value="" /> Keep Me Signed In For 30 Days.</label>

设置placeholder的示例代码如下：

	<input type="text" name="email" id="email" placeholder="user@lifeway.com" />

如果实际的顺序并不是期望的顺序，则需要给输入控件设置tabindex属性来设置输入控件的切换顺序。示例代码如下：

	<input type="text" tabindex="2" />

最终的HTML代码为：

	<form action="/service/user" method="post">
	    <fieldset>
	        <legend>Sign in to begin.</legend>
	        <label for="userName">User Name:</label>
	        <input type="email" id="userName" name="userName" placeholder="user@lifeway.com" tabindex="1" required="true" />
	        <label for="password">Password:</label>
	        <input type="text" id="password"  name="password" placeholder="password" tabindex="2" required="true" />
	        <label for="staySigned">
	            <input type="checkbox" id="staySigned" name="staySigned" tabindex="3" />
	            Stay signed in
	        </label>
	    </fieldset>
	    <input type="submit" value="Login" tabindex="4" />
	</form>

### 4.4 精简HTML代码
其实，在很多情况下，这些元素完全是多余的，仅仅起到了一个容器的作用。如下是一个典型的代码示例：

	<div id="container-up">
	    <div id="signin_logo">
	        <img alt="" src="images/signin.png" />
	    </div>
	<span><a href="#">Click to close</a></span>
	</div>

可以通过设置图片的display样式为block来代替。代码精简为：

	<div id="container-up">
		<img id="signin_logo" alt="" src="images/signin.png"/>
		<a href="#">Click to close</a>
	</div>

不严谨的HTML代码可能是这样的：

	<a id="more-intro">点击此处 <img src="down-arrow.png" /></a>

效果图中的向下箭头不属于内容的一部分，所以应该通过设置CSS样式实现，代码类似如下：

	<style>
	    .more-intro {
	        background: url(ico.png) no-repeat 420px -28px
	    }
	</style>
	<a id="moreIntro">点击此处</a>

另外一个很有用的技巧是使用::before和::after伪元素。Bootstrap框架中正是利用这两个伪元素来实现下拉菜单的箭头的
代码如下：
	.navbar .nav > li > .dropdown-menu::before {
	  position: absolute;
	  top: -7px;
	  left: 9px;
	  display: inline-block;
	  border-right: 7px solid transparent;
	  border-bottom: 7px solid #ccc;
	  border-left: 7px solid transparent;
	  border-bottom-color: rgba(0, 0, 0, 0.2);
	  content: '';
	}

	.navbar .nav > li > .dropdown-menu::after {
	  position: absolute;
	  top: -6px;
	  left: 10px;
	  display: inline-block;
	  border-right: 6px solid transparent;
	  border-bottom: 6px solid #ffffff;
	  border-left: 6px solid transparent;
	  content: '';
	}

### 4.5 过时的块状元素和行内元素
按照HTML4.01定义的内容模型规则，行内元素是不能够包含块状元素的，假设区域的HTML代码如下：

	<h1>标题<h1>
	<div>正文内容</div>

在HTML4.01规范中，只能在`<h1>`元素和`<div>`元素内部添加`<a>`元素，并把文本放置在`<a>`元素内。

	<h1><a href=detail.html>标题</a><h1>
	<div><a href=detail.html>正文内容</a></div>

但在HTML5中，可以这样添加：

	<a href=detail.html>
		<h1>标题<h1>
		<div>正文内容</div>
	</a>
