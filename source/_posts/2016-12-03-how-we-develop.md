---
layout: post
title: 公司内部技术分享：我们如何做软件开发
author: dang
categories: [management]
tags: [management]
fullview: false
date: 2016-12-03
---

## 开发理念
1. 敏捷开发：JIRA，Tower，Mingle
2. 重视客户沟通，理解客户核心关注点
3. 开发人员主导：主导用户体验，代码质量
4. 小步快跑，不断试错：新功能快速开发，快速上线。有问题，快速修改
5. 简单至上，不过度设计和开发
6. 敢于犯错，不犯相同的错误和低级错误，能快速改正错误
7. 鼓励在项目中使用新技术，新版本

<!-- more -->
## 技术架构
1. 擅长技术领域：Web，VR，App（android，iOS），Winform
2. 基本架构：客户端 （App，Web，Winform） + API （oAuth） + 微服务
3. 使用到的技术：nodejs，.NET，React，Angular，MongoDB，React Native，Unity3D，UWP
4. 自动化测试技术: mocha, protractor，jest
5. 云服务：Azure， 阿里云，华为云系列

## 代码质量管控
1. 编码规范：HTML，CSS，JS，C#基础编码规范
2. 代码共享：统一解决方案，通用模块；最大量共享高质量代码，避免内部重复造轮子。
3. 优先使用成熟稳定方案，优先使用第三方稳定服务
4. 技术委员会：定期会议，跨项目组技术重用，重大技术方案调研
5. 代码审查制度
6. 代码自动化检查工具：eslint，csslint，resharper
7. 上线前代码必须通过功能，性能，安全的审查

## 持续集成 + 运维
1. Web端发布：gulp，WebPack， Jenkins
2. App发布：App center自动编译发布；远程mac + 自动编译 + 手动上传
3. App热更新：Microsoft Code Push，ulua
4. 自动化测试：代码签入触发自动化测试 + Jenkins
5. Git代码管理: develop + master + release + feature 分支
6. DB backup：script + Jenkins
7. Server and Service restart: script + Jenkins
8. log + 监控：splunk，Application Insights，Microsoft App Center，程序内置检测API

## 开发及工具支撑
1. Common Service，Common Web，Common Unity，Common Form，Common APP 五大通用基础架构
2. 内部项目管理工具：Story分析统计，代码提交统计
3. JIRA，Bitbucket，Tower，Skype

## 团队技术进阶
1. 新人培养：老带新，重视基础知识，每周考核，三个月的完善培养计划。
2. 详细技术能力等级划分，全员定期技术摸底
3. 不定期技术分享：平均每周一次：常用架构的原理讲解，核心技术点详细讲解，新技术分享
4. 尊重个人技术发展意愿：在没有项目进度压力前提下，个人可以选择自己想使用的技术和方向