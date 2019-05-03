---
layout: post
title: 公司内部技术分享：构建新一代Web平台基础架构
author: dang
categories: [Web]
tags: [common, web]
fullview: false
date: 2019-04-21
---

公司目前使用的Web基础平台已经平稳运行了超过五个年头了，这五年来服务了超过了十个项目，基本涵盖了所有公司的项目。但是随着Web技术的不断更新，尤其是模块化开发，和ES6的广泛应用，迫使我们紧跟时代步伐，重新构建新一代的Web基础平台。

<!-- more -->
## 上一代Web基础平台回顾
上一代Web基础平台基于著名的Meanjs，也是当时比较流行的Web端解决方案。Meanjs使用的核心技术主要有：
* 前端：Angularjs 1.6， Bootstrap， UI-Bootstrap， Angular-ui-router， Angular-resource等。前端是Angular1搭配Bootstrap
* 后端：node.js， express， passport， mongoose(MongoDB)。后端主要是node.js搭配express。
* 前后端通信：Restful API，passport (local, public auth: facebook google paypal twitter)
* 包管理：npm，bower
* 项目构建：grunt， gulp
* 自动化测试：protractor （e2e），mocha （server），karma （client）
![image](http://kriyatec.com/wp-content/uploads/2017/09/meanjs-1024x492.png)

CommonService 在Meanjs基础上的功能
* 前端：限定sass和css， 按照dashboard的设计重写base UI， 重写了403 404 400错误页面
* 后端：支持第三方客户端，添加了oAuth认证机制；添加了dotenv，做到环境变量可配置；添加了cron自动化任务
* 发布：重写了项目发布流程，发布使用gulp命令
* 添加了新模块：
    * config：配置系统菜单，添加全局配置
    * message：全局消息管理
    * auth：用户登录注册，修改密码
    * client：第三方客户端接口调用管理 （basic认证）
    * email：email发送端，email模板管理端
    * staff：后台管理员管理，提供oauth认证
    * user：第三方平台用户管理，提供oauth认证
    * file：文件管理，上传

## 新版Web基础平台
### 新版Web平台主要的变化：
* 全面使用ES6，包括前后端
* 前端改用React技术栈
* 项目构建改用Webpack + babel
* 前端端包管理统一使用npm
* 更严格的数据输入校验

### 保持了上一版的设计：
* 保持了代码结构 （server， src结构）
* 继续使用Restful API设计
* 后端继续使用node.js + express + mongodb结构
* 继续使用passport做认证管理，但改用jwt技术
* 基本保持了上一版UI设计
* 保留了core，auth，staff，user，file，mail，client模块，添加dashboard模块用于大数据可视化展示实践

### 比较上一版需要的新技能
* ES6
* React + Redux
* Bootstrap4
* mongoose新接口
* Webpack + babel （可选）
* redis （可选）
* TypeScript （延后）

## 新旧版Web基础平台详细对比
对比点 | 旧版 | 新版 | 是否一致
---|---|---|---
ECMAScript | 5.1 | 6 |  ==否==
前端JS框架 | Angular  | React + redux |  ==否==
前端路由 | Angular router | React router |  ==否==
前端Ajax请求 | Angular resource | axios |  ==否==
前端UI框架 | Bootstrap3 | Bootstrap4 | ==部分一致==
CSS  | sass + css | sass + css | 是
icons | Glyphicons | font awesome | ==否==
* | * | * | *
后端基础平台 | node.js | node.js | 是
后端Web引擎 | express | express | 是
后端数据库 | mongodb | mongodb + redis | 是
后端认证  | passport + oauth | passport + jwt |  ==否==
后端API数据校验  | express validate | joi |  ==否==
后端环境变量 | dotenv | dotenv | 是
后端日志 | winston | winston | 是
* | * | * | *
项目构建 | gulp | webpack |  ==否==
API doc   | swagger | swagger | 是
语法检查 | eslint + csslint | eslint + csslint | 是

## 新版改进计划
* 使用TS重写前后端代码
* 引入feathersjs，改进后端API系统
* 使用Material UI重写一版UI
