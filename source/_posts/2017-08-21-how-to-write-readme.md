---
layout: post
title: 公司内部技术分享：如何写好项目README文档
author: dang
categories: [Web]
tags: [project, readme]
fullview: false
date: 2017-08-21
---

## README的作用
README作为说明文件，作用是让浏览者快速、鸟瞰式地了解项目。
为了做到这点，写README的时候应该注意层次和格式，用Markdown书写为佳。
一般至少包含三大部分，第一是介绍项目背景和用处，第二是使用方法（包括导入/安装，暴露的调用接口等），第三遵守的协议（针对开源项目）。

<!-- more -->

## Markdown语法

[Markdown学习：http://www.jianshu.com/p/1e402922ee32](http://www.jianshu.com/p/1e402922ee32)

[Bitbucket上的Mardkown例子](https://bitbucket.org/tutorials/markdowndemo)

[Bitbucket README编辑器](http://writeme.mattstow.com/)

## 详细的README一般包含的内容

### logo，项目名称，项目介绍
用很少的篇幅清晰地完成了对项目的概括。现在，所有人都能通过这小小几行字了解你的项目

### 基础要求 (Before You Begin)
开始项目之前需要学习的技术和掌握的工具

### 环境安装 (Prerequisites Requirements)
开始项目之前需要安装的依赖及要求的最低版本号

### 使用方法

Git clone

npm install & bower install

启动运行项目
环境变量修改
API使用示例代码
oAuth使用

### 文件夹结构及各配置文件简单说明 （Understanding the File Structure）

### 可能问题及解决方案 （Troubleshooting）

### 修改记录 （log）

## 一些README的例子

### Web
[MeanJS的readme： https://github.com/meanjs/mean/blob/master/README.md](https://github.com/meanjs/mean/blob/master/README.md)

[IE Web](https://bitbucket.org/LineageMS/eacoursesweb)

### React Native
[WF app的README](https://bitbucket.org/LineageMS/winningfotos-app)

[facebook的一个官方app：f8app](https://github.com/fbsamples/f8app)

[create-react-native-app](https://github.com/react-community/create-react-native-app)

### Unity3D

todo

## 开始写项目的README

git clone git@bitbucket.org:erealm/readme-test.git

新建项目的文件夹，比如 IEWeb

添加README.md和docs，用于放置子文档和引用的图片

编辑完成后，迁移到对应项目的根目录中（docs和README.md）

