---
layout: post
title: Web前端开发最佳实践（1）：前端开发概述
author: dang
categories: [HTML5]
tags: [HTML5]
fullview: false
---	

##引言
我从07年开始进入博客园，从最开始阅读别人的文章到自己开始尝试表达一些自己对技术的看法。可以说，博客园是我参与技术讨论的一个主要的平台。在这其间，随着接触技术的广度和深度的增加，也写了一些得到了大家认可的技术文章，多篇文章也得到了编辑推荐。大家的认可也更激发了我写技术文章的热情，借助公司在博客园的账号[葡萄城控件技术团队博客](http://www.cnblogs.com/powertoolsteam/)发布了多篇有关Web前端开发的文章，尤其是如下三篇前端开发最佳实践相关的文章引来了大家的热烈讨论:

1. [前端代码标准最佳实践：javascript篇](http://www.cnblogs.com/powertoolsteam/archive/2012/07/05/2577713.html)
2. [前端代码标准最佳实践：CSS篇](http://www.cnblogs.com/powertoolsteam/archive/2012/08/08/2627701.html)
3. [前端代码标准最佳实践：HTML篇](http://www.cnblogs.com/powertoolsteam/archive/2012/08/28/2660027.html)

也正是这三篇文章的编写促成了我的新书《Web前端开发最佳实践》的出版。多年来技术的长进都得益于在博客园技术社区的讨论和借鉴前辈们的技术思想。得益于社区，也应该回馈社区，所以从今天起，计划在博客园发布前端开发相关的系列文章，和大家讨论我所认为的Web前端开发最佳实践方法。本文为开篇，简单介绍前端开发的一些概念和方向，后续将依次从HTML、CSS、JavaScript、移动端开发为主体展开讨论。

##Web前端开发需要具备的技能

由于Web前端技术兴起的时间不长，因此还没有明确的界限定义，不同的Web项目中可能要求的Web前端开发技术会有所不同。比如，某些项目可能需要前端开发人员了解一些后端技术，这样前端开发人员才可以更好地与后端开发人员配合，比如在页面上留下一些后端需要调用的钩子等，而某些项目可能需要前端开发懂一些UI设计、Photoshop工具的使用方法等，以便于和UI设计师沟通和配合。尽管Web前端开发的范畴广泛，并且界限模糊，但是以下7点则是Web前端开发必备的技能。



























网站的安全很难引起互联网公司的足够重视，他们更看重的是站点的用户体验、性能等这些更直观的方面。2011年，多个网站用户信息泄露风波震惊整个互联网，网站安全也再次引起业内的重视。从技术上讲，网站的安全瓶颈主要在后端，但是随着前端技术的发展，富客户端应用越来越多，前端安全问题也随之增多，例如，跨站点攻击、cookie劫持等。这些攻击通过设置JavaScript变量、HTML标签的值和属性、CSS属性值等方式伪造恶意代码来达到攻击的目的，那么规范的前端代码至少要针对这些方面做必要的安全校验和必要的编码，提高代码的安全性。