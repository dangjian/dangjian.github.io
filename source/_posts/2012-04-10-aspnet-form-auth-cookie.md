---
layout: post
title: Asp.Net Forms认证在移动平台中遇到的一个问题以及调查过程
author: dang
categories: [ASP.NET]
tags: [Forms, Authentication, cookie]
fullview: false
date: 2012-04-10
---

我们项目的网站的移动版是基于Asp.Net平台开发的，用户登录也是基于Asp.Net的Forms认证，在整个开发和测试过程中没有发现任何客户登录异常，但是发布后断断续续有用户反映在登录页面登录成功后跳转主页后，主页并没有识别登录用户，也即是Form 认证失败。Asp.Net的Form认证大家应该有所了解，其内部的机制就是把用户数据加密后保存在一个基于cookie的票据FormsAuthenticationTicket中，即认证过程中要借助于cookie。初步判断问题出在cookie上，以下是问题的调查过程。
<!-- more -->

##**搭建调试环境**

移动平台web开发中，调试不像桌面web开发中那么容易，难点在于移动设备多种多样，并且移动设备中也很少有帮助调试的工具。为了测试如上的问题，我们借助了一个强大的HTTP监控工具Fiddler。 Fiddler可以设置容许远程设备通过代理访问服务器，这样Fiddler就可以监控移动设备中的HTTP请求。Fddler中的设置如下图：

![Fddler中的设置](http://i.imgur.com/vqb9oIN.png)

设置移动设备的网络访问代理为Fiddler所在的机器IP，端口为如上图所示Fiddler设置监控的端口号，这样就可以监控移动的所有HTTP的请求了。

##**确定问题点**

搭建好测试环境后，就开始确认问题了，用户无法登陆，那么是否cookie丢失了呢？ 认证的cookie是在登录画面设置的，登录画面的请求是通过HTTPS协议的，而首页的请求是通过HTTP协议的，通过查看Fiddler，用户登录后，登录页面成功设置了认证cookie，并且首页请求时也把认证cookie发回到了服务器端，监控信息如下图显示：

登录画面设置的cookie

![登录画面设置的cookie](http://i.imgur.com/HWLD69q.png)

首页发回到服务器端的cookie

![发回到服务器端的cookie](http://i.imgur.com/rf1HWpy.png)

至此可以判断，问题不是在客户端，而是在服务器端，那么为什么服务器端不能识别返回的认证信息呢？为什么有些从某些设备上登录就失败呢？这些设备的浏览器发到服务器端的请求唯一的差别就是user-agent，那么服务器端针对user-agent又做了些什么呢？带着这些问题，又深入地研究了一下ASP.NET认证原理，以及ASP.NET中有关cookie方面的一些特性。

##**深入理解cookieless在ASP.NET Form认证中的应用**

要确认服务器端为什么没有成功认证，那么必须要理解ASP.Net中的cookieless功能。

cookie失效有很多原因，有用户禁用cookie的，也有设备不支持cookie的，所以ASP.NET中加入了cookieless这样一个特性，使得当cookie失效是也能提供一种类似cookie的作用，比如可以把信息通过URL传递，cookieless这个功能就是基于这样的目的而加入的。

cookieless总共有四种模式：

1. ”UseCookies”，即cookieless功能不启用

2. ”UseUri”，即cookieless功能对所有设备启用

3. ”UseDeviceProfile”,根据发起请求的浏览器来确定应用或者不应用Cookieless，如果ASP.NET识别浏览器不能够支持cookies，那么就启用cookieless功能。另外从技术上说，如果浏览器支持cookie，那么如下两个属性的值为true：**Request.Browser.Cookies** 和 **Request.Browser.SupportsRedirectWithCookie。**

4. “AutoDetect”，从直接意思上理解，就是由ASP.NET来检测当前浏览器是否支持cookies，这个模式有些迷惑用户，并且也较复杂，官方文档上有解释这种模式的伪代码

以上模式中UseDebiceProfile和AutoDetect模式依赖于设备，ASP.NET在维护一份数据库，这份数据库一般保存在如下的路径中：%WINDIR%\Microsoft.Net\Framework\v2.0.50727\CONFIG\Browsers，数据库中保存有已知的各种设备的兼容性，比如是否支持cookie，支持那些版本的javascript等等，从各种设备上的浏览器中发到服务器端的请求都会在HTTP头中带上特有的能标识设备的user-agent，ASP.NET就会自动根据user-agent到数据库中比对，然后确定设备的兼容性。

这个cookieless功能也应用到了ASP.NET的Form认证中了，在web.config中的认证设置中可以配置cookieless属性。默认情况下，Form 认证系统会根据发起请求的user agent来决定认证票是保存在cookie中还是包含在URL中，已知主流的桌面浏览器都是支持cookie的，但并不是所有移动版的浏览器都支持cookie。再次回到本篇文章所调查的bug中来，有些用户不能正常登录就是因为这些用户所使用的设备被ASP.NET识别为不能支持cookie所致的，尽管设备本身是支持cookie的，比如我自己的手持设备MOTO Droid X，从这台设备的默认浏览器发出的请求中包含的user-agent为：`User-Agent: Mozilla/5.0 (Linux; U; Android 2.3.3; zh-cn; DROIDX Build/4.5.1_57_DX5-18) AppleWebKit/533.1 (KHTML, like Gecko) H,/4.0 ��O�/533.1`，经过ASP.NET识别为不支持cookie，所以这台设备无法正常登录我们的web App。

以上我们调查清楚了登录失败的原因了，下面是给出具体的解决方案。

##**解决方案**

明白了以上的Form认证原理，那么我们很容易想到，这是因为移动设备的user-agent无法被系统正确地识别而导致的cookie被禁用，这里有两个解决方案：

###方案1，覆盖系统配置，让所有的设备都能被系统识别为支持cookie。

Asp.NET提供了一种机制，让我们可以自定义某些特定设备的系统支持，在工程中添加系统文件夹Asp_Browsers,并且添加自定义配置文件，如下是为了解决如上问题而添加的配置文件。

[![201204130950466319](http://www.dang-jian.com/wp-content/uploads/2013/03/201204130950466319_thumb.png "201204130950466319")](http://www.dang-jian.com/wp-content/uploads/2013/03/201204130950466319.png)

配置内容如下：

	<browser refID="Mozilla" >
	    <capabilities>
	        <capability name="cookies"  value="true" />
	    </capabilities>
	</browser>
	
	<browser refID="Default">
	    <capabilities>
	        <capability name="cookies" value="true" />
	    </capabilities>
	</browser>

如上的配置代码表示，对所有的设备，都是支持cookies的，这样就解决了某些设备上的cookies问题了。

###方案2，更改form的默认设置，让系统不再根据设备来判断是否支持cookie

在站点的配置文件中有关于Form认证的配置，在配置`<authentication mode="Forms">/<authentication>`中要加上`cookieless="UseCookies"`，默认的配置是`UseDeviceProfile`，即工具设备来决定Cookies的支持。

以上两种方案的目的是一样的，即让系统认为所有的设备都支持cookie，第一种更灵活，第二种解决问题更彻底，可以根据实际情况选择合适的方案。

##**后记**

微软的cookieless设计本身是不错，但是这个默认值为UseDeviceProfile是值得商榷的，如今的浏览器百花齐放，每个浏览器都有其特有的user-agent，尤其是移动版的浏览器，即使是相同的浏览器，不同的设备制造商也会在user-agent加上标识设备型号和品牌的信息，微软又不可能频繁更新ASP.NET维护的浏览器配置，所以就会出现大量的误判情况。以目前的状况，系统应该把默认值设置为UseCookies，即默认为所有的浏览器浏览器支持cookie。

参考文档：

[ASP.NET4中不要相信Request.Browser.Cookies，Form验证要用UseCookies](http://www.cnblogs.com/dudu/archive/2011/03/06/asp_net_4_browser_cookie.html)

[Problem with Asp.Net Forms Authentication when using iPhone UIWebView](http://stackoverflow.com/questions/4158550/problem-with-asp-net-forms-authentication-when-using-iphone-uiwebview)

[Forms Authentication Configuration and Advanced Topics (VB)](http://www.asp.net/web-forms/tutorials/security/introduction/forms-authentication-configuration-and-advanced-topics-vb)

[Understand How the ASP.NET Cookieless Feature Works](http://msdn.microsoft.com/en-us/library/aa479315.aspx)