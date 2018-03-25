---
layout: post
title: 《Web前端开发最佳实践》第1章-源代码
fullview: false
---

## 第1章 Web前端开发概述

### 1.2 Web前端开发现状

页面没有body的闭合标签，页面代码缩进随意，页面中大量使用内联样式并且页面中还在使用诸如<marguee>、<font>等标准不推荐的标签

	<marquee width="260" ONMOUSEOUT="this.start()" ONMOUSEOVER="this.stop()" scrollamount=3 scrolldelay=100 >
	                            <font color=blue style="font-size:14px;">近期www.12306.cn网上售票系统升级改造，给您带来的不便敬请谅解。</font>　&nbsp;&nbsp;　 <a href="http://dynamic.12306.cn/surweb/" target="_blank"><font color=blue style="font-size:14px;">2012年10月12日至2013年01月03日开展铁路旅客服务质量问卷有奖调查，欢迎您提出宝贵意见。</font></a>                      </marquee>

站点首页HTML代码中包含有大量不必要的标签和多余的样式设置，代码的可读性差

	<!—第一段代码片段 -->
	<div id="slideshow">
	  <div class="current"><img src="./images/pic011.gif" width="189" height="176" />
	</div>
	  <div><img src="./images/pic012.gif" width="188" height="176" /></div>
	  <div><img src="./images/pic013.gif" width="188" height="176" /></div>
	</div>
	<!—第二段代码片段 -->
	<div><br/>
		<a href="./gljd/gywm/">关于我们</a>  |  <a href="./gljd/wzls/">网站声明</a>
		<br />
	      版权所有 &copy; 2008-2015 铁道部信息技术中心 中国铁道科学研究院 <br /><a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备10009636号</a>
		  </div>

以上两段HTML代码至少可以简化为

	<!—第一段代码片段 -->
	<div id="slideshow">
	    <img src="./images/pic011.gif" class="current" alt="img info" />
	    <img src="./images/pic012.gif" alt="img info" />
	    <img src="./images/pic013.gif" alt="img info" />
	</div>
	<!—第二段代码片段 -->
	<div>
		<a href="./gljd/gywm/">关于我们</a>  |  <a href="./gljd/wzls/">网站声明</a>
		版权所有 &copy; 2008-2015 铁道部信息技术中心 中国铁道科学研究院
		<a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备10009636号</a>
	</div>