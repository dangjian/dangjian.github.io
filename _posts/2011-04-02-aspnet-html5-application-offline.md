---
layout: post
title: 如何在ASP.NET中生成HTML5离线Web应用
author: dang
categories: [HTML5]
tags: [HTML5]
fullview: false
---	
传统的Web应用程序有一个很大的症结是当用户的网络连接不好时，应用会加载失败，为了 解决这一问题，HTML5中引入了Web的离线工作的功能。离线功能使得Web应用程序类似于本机应用程序，当断开网络连接时可以继续浏览未浏览完成的内 容，离线功能的另一个好处是可以永久缓存静态的内容，而没有缓存过期的限制，这样很大程度上加速了网页的加载速度。

###**离线应用的创建**

不同于传统的缓存机制，HTML5定义了一套独立的缓存机制，有一个单独的文件来记录要缓存的文件列表，这就意味着用户可以自己决定哪些文件需要缓 存。离线应用看起来是个非常酷的特性，并且在ASP.NET应用程序中创建一个离线Web应用也是非常简单的，构建离线web应用大概可分两个步骤：

###（1） 创建一个离线清单文件

HTML5离线缓存是基于这个缓存清单来确定缓存文件的，如下的图片显示这个文件的格式：

![创建一个离线清单文件](http://i.imgur.com/OTETpKA.png)

可以看到这个文件是以CACHE MANIFEST开头的，#后面的内容是注释，表明当前文件的版本号，值得注意的是当这个文件更新的时候，应用程序会重新加载缓存的文件，所以当缓存的文 件有更新的时候，一个让程序重新加载缓存文件的标准方法是修改这个清单中的版本号，这样应用程序就知道需要重新加载缓存的文件。上面的清单的版本号是 0.2，如果清单中的某个文件有更新，则只需要把0.2修改为0.3即可。

如上清单中的路径都是相对路径，所有的相对路径都是基于这个清单文件所在的路径的。我们也可以使用绝对路径来确定要缓存的文件的。

###（2） 在ASP.NET应用程序中把清单信息通知给浏览器

 HTML5规范规定这个清单文件必须以text/cache-manifest格式发送到客户端，但是现在没有标准的后缀来识别这一类型文件。在ASP.NET中，可以通过一种变通的方式来达到这一目的。
 
* 1）把清单文件保存为单独文件，可以加任何后缀名，假设保存为manifest.mf。
* 2）新建一个ASP.NET handler，Manifest.ashx
 
代码如下：

	<%@ WebHandler Language="C#" Class="Manifest" %>
	using System;
	using System.Web;
	 
	 
	public class Manifest : IHttpHandler {
	 
	    public void ProcessRequest (HttpContext context) {
	    context.Response.ContentType = "text/cache-manifest";
	    context.Response.WriteFile(context.Server.MapPath("manifest.mf"));
	    }
	     
	    public bool IsReusable {
	        get
	        {
	            return false;
	        }  
	    }
	 
	}

然后在首页页面中把这个handler标识为清单文件：

    <html manifest="Manifest.ashx"">

如下是添加了缓存清单的aspx页面：

![添加了缓存清单的aspx页面](http://i.imgur.com/Lf9fFAB.png)

以上两个步骤就完成了离线应用程序的构建，当程序第一次加载时，会加载这个缓存清单，并且根据清单中文件列表缓存文件，当浏览器再次加载时就不会去 服务器中加载缓存过的文件，可以想象，如果我们把一些静态的网页添加为缓存文件，那么用户只需要第一次下载这些缓存的文件，以后就可以向本地应用一样，无 需再连接网络。


##**需要注意的点**

虽然离线应用是一个非常酷的应用，但是在使用的过程中也会出现一些困扰，当我们更改页面的内容时，会发现修改的内容并没有起作用，原因可能是我们没 有升级缓存清单的版本，另外即使缓存清单更改完成后，浏览器也并不是立即会更新缓存的内容，浏览器下载和缓存内容完全是在后台自动进行的，所以在实际的开 发过程中，因为有这些困扰，所以最好是在开发过程中禁用这种离线缓存的功能，等项目发布的时候再添加。我们无法控制浏览器的缓存过程，但是离线应用提供了 一些接口，我们可以调用这些API来让浏览器更新缓存的内容，ApplicationCache.update() 是用来更新缓存的内容，ApplicationCache.swapCache() 是加载最新版的Web应用。

##**离线应用在浏览器中的表现**

以下是离线应用在各个浏览器中的表现形式，当用浏览器打开应用了离线功能的页面，浏览器的表现也是不一样的，FireFox中会提示是否容许保存内容到本地，效果如下：

![ireFox中会提示是否容许保存内容到本地](http://i.imgur.com/9UsJqy2.png)

当点击Allow，浏览器就会自动下载要缓存的内容，并保存到本地，当再次打开页面时，浏览器首先会加载本地存储的内容。

在Chrome和safari浏览器下，浏览器会自动缓存内容而不会有任何的提示，但在Chrome中你可以查看缓存的内容：

![Chrome中你可以查看缓存的内容](http://i.imgur.com/NTq8syG.png)

同时也可以看到当前缓存的状态，如上的图片显示当前的状态是UNCACHED，意思是还没有把要缓存的内容缓存。具体的状态值可以参考[HTML5离线应用规范](http://www.whatwg.org/specs/web-apps/current-work/multipage/offline.html#appcacheevents)。

##**总结**

以上就是介绍如何在ASP.NET中应用HTML5离线功能，在其它的平台中的设置也是类似的，不同点在于如何把缓存文件以text/cache- manifest格式发送到客户端。HTML5离线应用是HTML5规范中的一个非常重要的特性，用户可以随时随地打开浏览Web应用，而不需要关心网络 是否已经连接，这极大地提高了Web应用在用户中的体验度，也极大地提高应用程序的加载速度。