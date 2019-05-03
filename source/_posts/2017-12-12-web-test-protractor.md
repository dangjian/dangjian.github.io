---
layout: post
title: 公司内部技术分享：使用Protractor实施UI自动化测试
author: dang
categories: [Web]
tags: [web, testing, protractor]
fullview: false
date: 2017-12-12
---

## 准备知识
### 熟悉：
* Javascript：[在线教程](http://www.w3school.com.cn/js/) 学习JS教程，JS对象两个部分即可。
* [JSON](https://baike.baidu.com/item/JSON)
* 代码编辑器：推荐 Webstorm，VSCode，Sublime任意一个
* [Selenium WebDriver](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs)
* HTTP协议：[中文教程](http://www.ruanyifeng.com/blog/2016/08/http.html)
* jasmine: [英文官网](https://jasmine.github.io/index.html) [中文](https://www.ibm.com/developerworks/cn/web/1404_changwz_jasmine/index.html)
* protractor：[英文官网](http://www.protractortest.org) 
* [WebDriverManager](https://github.com/bonigarcia/webdrivermanager)
* 快速了解protractor的一个[教程](http://objectpartners.github.io/angular-training/lectures/lecture-11.html) 

<!-- more -->

### 了解：
* 各浏览器控制台工具
* [gulp](https://gulpjs.com/)

## 安装
* [Node.js](https://nodejs.org/en/)
* [JAVA](https://www.java.com/en/download) 及JDK（确保JDK安装）

## 搭建开发环境
* `npm i -g gulp gulp-cli` 使用命令安装gulp
* `npm i` 按照项目依赖
* `gulp webdriver_update` 更新selenium相关依赖
* 如果需要启动本地 selenium server， 运行`gulp webdriver_standalone`。同时修改protractor.conf.js 添加 本地server配置 `seleniumAddress: 'http://localhost:4444/wd/hub'`
* `gulp` 使用gulp命令启动项目
* `gulp lint` 检查测试代码规范
* 测试报告及测试截图位置：`/report/test-report.html` 和 `/report/screenshots`

## 测试用例编写
### Jasmine测试框架API
* [英文官方](https://jasmine.github.io/api/2.8/global)
* [中文教程](https://yq.aliyun.com/articles/53426)
### Protractor测试框架API
* [英文官方](http://www.protractortest.org/#/api)

### 代码风格及最佳实践
* [Protractor Style Guide](https://github.com/CarmenPopoviciu/protractor-styleguide)

### 配置生成测试报告
* [PROTRACTOR-JASMINE2-HTML-REPORTER](http://www.testingbay.com/tutorials/protractor-jasmine-reporting/)

## 常见问题
* `gulp webdriver_update`或者 `gulp webdriver_standalone` 不成功，网络问题
>> 在线下载protractor npm包。修改protractor文件夹里面的路径：替换 `C:\\test\\` 为当前代码文件跟路径路径

>> 另外，可以设置代理 `set HTTP_PROXY=http://127.0.0.1:1080`，然后运行 `gulp webdriver_update` [参考文章](https://github.com/angular/protractor/pull/966)

## 其他文章推荐
* [Protractor小结](http://blog.csdn.net/wosishui21/article/details/38340527)

