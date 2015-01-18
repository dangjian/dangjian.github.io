---
layout: post
title: Web程序员们，你准备好迎接HTML5了吗？
author: dang
categories: [HTML5]
tags: [HTML5]
fullview: false
---	

HTML5作为下一代的web开发标准，其特性已经慢慢地出现在主流的浏览器中，这种新的HTML将会让浏览器不必再依赖Flash、QuickTime、Silverlight等插件，也简化了原来需要大量JS才能达到的效果。虽然HTML5还在讨论过程中，但是其优越的特性已经得到了大家的认可，各大浏览器厂商，一些知名的内容发布网站也都是积极地推动， 尤其是即将发布的IE9会完全支持HTML5。作为Web开发人员的我们，需要做的是：如何把HTML5转化为各种Web应用，如何做到现有的Web应用过渡到HTML5。下面将介绍作为Web开发人员必须知道的HTML5特性，以及各特性可能的应用场景。

##用Canvas绘制图形

![](http://images.cnblogs.com/cnblogs_com/dangjian/5.jpg)

不用怀疑，这张3D的图画就是用canvas画出来的。

Canvas的出现颠覆了传统在Web应用中画图的方式，传统的画图方式有在服务器端先画好图片，再把图片发到浏览器中，或者用Flash，还有用第三方插件。但是这些方法都不是原生的HTML， HTML5 canvas提供了通过javascript绘制图形的方法，方法简单但是功能强大，作为开发工程师可以使用canvas API随心所欲地控制图画。

点击这里查看canvas的API：[Canvas API](http://dev.w3.org/html5/canvas-api/canvas-2d-api.html)

创建一个canvas元素非常简单：

	<canvas id="myCanvas" width="300" height="200">
	    你的浏览器是老古董了，不支持canvas，扔了吧.
	</canvas>
	
开发人员开发过程中需要注意的是：为了Javascript中能应用canvas对象，需要给元素设置ID；通常也要设置其高度和宽度；为了网站的友好性，需要给元素中添加不支持的文字说明，在不支持canvas的浏览器中给用户提醒。

Canvas是HTML5中最让人期待的特性之一，目前大部分的Web浏览器的支持（Chrome，Firefox，Safari，Opera支持，IE8不支持），canvas可以应用于游戏设计、增强图形用户界面。

下面是一些非常cool的Canvas应用：

非常cool的游戏应用：[Best HTML5 Canvas Games](http://savedelete.com/best-html5-canvas-games.html)

令人惊讶的canvas动画效果：[8 Simply Amazing HTML5 Canvas and Javascript Animations](http://www.queness.com/post/3885/8-simply-amazing-html5-canvas-and-javascript-animations)

##多媒体音频和视频

`<audio>`和`<video>`是首批添加到HEML5规范中的标记。它们的加入使得web浏览器能够以一种更方便的方式来处理音频和视频文件，结束了在web浏览器中安装播放插件的历史。比较令人头疼的是，各大浏览器厂商对音频和视频格式有重大的分歧，Firefox坚持将开放的ogg标准，而Safari则希望是MP3和MP4的标准，这就造成了我们开发过程中需要提供多个版本的音频和视频文件来兼容浏览器。

下图中可以看到各大浏览器和多媒体分享站点支持的格式：

![](http://pic002.cnblogs.com/img/dudu/201005/2010051523085023.jpg)

目前浏览器对音频文件的支持情况：

<table width="100%" border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr style="background: #e5eedd;"><th align="left" width="20%">Format</th><th align="left" width="16%">IE 8</th><th align="left" width="16%">Firefox 3.6</th><th align="left" width="16%">Opera 10.5</th><th align="left" width="16%">Chrome 5.0</th><th align="left" width="16%">Safari 5.0</th></tr>
<tr>
<td>Ogg Vorbis</td>
<td><span style="color: red;">No</span></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td><span style="color: red;">No</span></td>
</tr>
<tr>
<td>MP3</td>
<td><span style="color: red;">No</span></td>
<td><span style="color: red;">No</span></td>
<td><span style="color: red;">No</span></td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Wav</td>
<td><span style="color: red;">No</span></td>
<td>Yes</td>
<td>Yes</td>
<td><span style="color: red;">No</span></td>
<td>Yes</td>
</tr>
</tbody>
</table>

目前浏览器对视频文件的支持：

<table width="100%" border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr style="background: #e5eedd;"><th align="left" width="20%">Format</th><th align="left" width="16%">IE 8</th><th align="left" width="16%">Firefox 3.6</th><th align="left" width="16%">Opera 10.5</th><th align="left" width="16%">Chrome 5.0</th><th align="left" width="16%">Safari 5.0</th></tr>
<tr>
<td>Ogg</td>
<td><span style="color: red;">No</span></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td><span style="color: red;">No</span></td>
</tr>
<tr>
<td>MPEG 4</td>
<td><span style="color: red;">No</span></td>
<td><span style="color: red;">No</span></td>
<td><span style="color: red;">No</span></td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>

点击这里查看audio和video的属性：[HTML5 Audio](http://www.w3schools.com/html5/html5_audio.asp)   [HTML5 Video](http://www.w3schools.com/html5/html5_video.asp)

创建audio和vedio元素：

	<audio controls="controls">
	    <source src="song.ogg" type="audio/ogg" />
	    <source src="song.mp3" type="audio/mpeg" />
	    您的浏览器不支持音频标签！
	</audio>
	
	<video width="320" height="240" controls="controls">
	    <source src="movie.ogg" type="video/ogg" />
	    <source src="movie.mp4" type="video/mp4" />
	    您的浏览器不支持视频标签！
	</video>

点击这里查看音频和视频标签在浏览器中的效果：[Audio](http://www.w3schools.com/html5/tryit.asp?filename=tryhtml5_audio_simple) - [Vedio](http://www.w3schools.com/html5/tryit.asp?filename=tryhtml5_video_all)

就开发者而言，目前的情况是，我们需要准备多个版本的音频和视频，并把文件路径都添加到audio和vedio中，web浏览器会跳过不支持的格式，另外，最好添加针对不支持audio和vedio的浏览器的文字提示或者其他多媒体播放方式。

Audio和Vedio是两个简单而强大的标签，目前国内外已经有多个多媒体分享网站开始支持或测试HTML5。

如下是一些HTML5 Vedio体验资源：

**[Video showcase from Apple](http://www.apple.com/html5/showcase/video/)**

Google 联合 [Arcade Fire](http://www.arcadefire.com/) 推出了一个 HTML5 互动电影： [The Wilderness Downtown](http://www.thewildernessdowntown.com/)，[点击这里](http://www.chromeexperiments.com/arcadefire/)可以进入其在 Chrome Experiment 的页面

[_HTML5 Video_ Player ](http://videojs.com/)

[YouTube - Broadcast Yourself](http://www.youtube.com/html5)（哦，对不起，这是个不存在的网站）

##Web存储

随着Web应用的发展，需要在客户端存储的场景越来越多，传统的客户端存储方式有cookie、Firefox下有globalStorage、Flash在插件的支持下有其自己的存储方式，但是这几种方式都有其局限性（安全性和兼容性）。HTML5提供的在客户端存储方式有：Web Database和Web storage，Web Database适应与客户端复杂数据的存储，其标准还不成熟，浏览器的支持也很有限，需要Web开发人员进一步的关注，假如存储的是简单的数据，则可以使用Web storage方式，不占用带宽，并且得到了主流浏览器的支持，包括IE8。

Web存储有两种方式：localStorage和sessionStorage，参考这里查看[详细定义](http://www.w3schools.com/html5/html5_webstorage.asp)，两者的区别简单来说，localStorage可以永久保存数据，也就是说关闭浏览器，下次打开浏览器还能取得存储的数据，而sessionStorage只在当前的会话中可用。

下面的例子演示统计用户访问网站的次数：

	<script type="text/javascript">
	    if (typeof(localStorage) == "undefined") {
	        document.write("你的浏览器不支持Web存储");
	    } else {
	        if (localStorage.pagecount){
	            localStorage.pagecount=Number(localStorage.pagecount) +1;
	        }
	        else{
	            localStorage.pagecount=1;
	        }
	        document.write("您已经光临本站 "+ localStorage.pagecount + " 次了.");
	    }
	</script>

点击这里查看运行效果：[Demo](http://www.dang-jian.com/Tools/HTML5Demo/HTML5-Web-Storage.htm)

开发中需要注意的是，Web storage有安全方面的权限的，不要在其中存储私密的数据， 另外，这个存储的数据是不能跨浏览器读取的，也就是说用一种浏览器打开站点保存的数据，用其他浏览器是取不到的。

尽管Web存储有这样的缺陷，但是这个特性使得应用程序在离线状态下也可以正常工作，当程序需要处理大量的数据时，可以避免数据频繁地在客户端和服务器端的往来，对移动设备来说，可以极大地减少流量的消耗。

这里有一篇很好的文章介绍Web存储：[Web Storage全解析](http://www.baiduux.com/blog/2010/06/21/web-storage%E5%85%A8%E8%A7%A3%E6%9E%90/)

## 其他的简化了开发的HTML5特性

*   一些常用输入类型：Email，url，number，date pickers等
*   一些标准属性：contenteditable 等
*   一些input属性：placeholder，required，autofocus，min，max，step，

这里推荐两篇介绍这些HTML5特性的文章，请参考：[你必须知道的28个HTML5特征、窍门和技术](http://kb.cnblogs.com/page/72404/)和[给网页设计师的30个HTML5学习资源](http://news.cnblogs.com/n/65747/)

以上这些HTML5特性是目前浏览器支持较好的特性，也是关注度非常高的HTML5特性，本文是从一个Web开发人员的角度来理解HTML5，目的是希望有更多的Web开发人员能尽快地融入HTML5的开发中来，最近优酷已经开始应用HTML5和HTTP Live Streaming技术，让更多的用户可以在移动平台分享多媒体，这对国内的HTML5的推广起到了积极的作用，微软承诺IE9将全面支持HTML5，这对HTML5的推广是一个振奋人心的消息。可以预见，未来几年HTML5将快速地发展，作为Web开发人员，我们更应该尽快熟悉HTML5的各种特性，在项目开发过程中也应该更多考虑如何利用HTML5的特性加强web应用程序的易用性和可移植性。