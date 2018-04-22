---
layout: post
title: 在RN项目中使用Code Push热更新技术
author: dang
categories: [Web]
tags: [ReactNative, CodePush]
fullview: false
date: 2018-04-19
---

## 什么是Code Push
* Code Push是微软开发的一个用于动态更新Cordova和 RN应用程序的云服务
* Code Push目前作为微软App center平台的一个功能，App Center包含了其他诸如：Build,Test, Analytice， Push Notification等功能
* 热更新，意味着可以通过不发布App到store的方式来更新App

<!-- more -->
## 在RN项目中安装Code Push
* https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native#getting-started
* 安装 appcenter-cli `npm install appcenter-cli -g`
* https://appcenter.ms/apps 注册Apps，iOS和Android为两个App
* 控制台登录appcenter `appcenter login`
* https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli#app-management
* Code Push平台注册Apps： 
    *  `appcenter apps create -d MyApp-Android -o Android -p React-Native`
    *  `appcenter codepush deployment add -a <ownerName>/<appName> Staging` 和 `appcenter codepush deployment add -a <ownerName>/<appName> Production`
* 使用 `appcenter codepush deployment list -a <ownerName>/<appName>` 取得code push部署token

## 项目中配置Code Push
* 按照官方文档，逐步配置Code Push, android和ios配置不同，https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native#codepushnotifyappready
* 建议使用 `react-native link react-native-code-push` 方式完成配置
* 运行如上命令时如果没有输入code push token，则需要手动输入到对应的文件中 （iOS和Android中配置的地方不同）
* 自动配置完成后建议手动检查一遍

## 项目中使用Code Push
* 使用Code Push方式有两种：静默更新，弹窗提醒更新。让更新起作用的方式有三种：IMMEDIATE， ON_NEXT_RESTART， ON_NEXT_RESUME
* 具体的教程：https://docs.microsoft.com/en-us/appcenter/distribution/codepush/tutorials
* 建议的方式：静默方式，ON_NEXT_RESTART，在页面上有更新提示
* 使用notifyAppReady方法，通知CodePush更新完成。
* checkForUpdate检查是否有更新
* sync方法用于执行更新操作
* 具体API文档：https://github.com/Microsoft/react-native-code-push/blob/master/docs/api-js.md
* 调试技巧：先在appcenter上disable 热更新，进入RN App调试模式后，enable热更新。这样可以在断点处查看到热更新包的具体信息。

## 发布热更新
* 使用RN命令生成热更新发布包
    * `react-native bundle --platform android --entry-file index.android.js --bundle-output ./CodePush/index.android.bundle --assets-dest ./CodePush --dev false`
    * `react-native bundle --platform ios --entry-file index.ios.js --bundle-output ./CodePush/main.jsbundle --assets-dest ./CodePush --dev false`
* 使用code push命令发布热更新
    * `appcenter codepush release -a LineageSolutions/CSF-Connect-Android -c ./CodePush -t 0.2.16 -d Production`
    * `appcenter codepush release -a LineageSolutions/CSF-Connect-iOS -c ./CodePush -t 1.0.8 -d Production`

* 测试环境，建议发布到Staging环境，测试后切换到Production
* 务必制定热更新的目标版本号，iOS的版本号在info.plist里面的CFBundleShortVersionString（不包含build号），Android的版本号在build.gradle的versionName。
* 可以在appcenter portal中管理和查看热更新：enable和disable，Staging与Productionz之间切换，查看更新情况。https://appcenter.ms

## Code Push使用过程中常见错误
* 热更新不起作用
    * 检查token和发布环境是否一致：token错误时，codePush.sync会报400错误，RN App调试环境可以看到此错误
    * 检查目标版本号是否对应

## 使用Code Push会导致审核失败吗？
* apple store的确会拒绝使用热更新技术的App，比如使用Amap和JSPatch等更新原生代码的技术。但目前Code Push技术不在此列。
* https://github.com/Microsoft/code-push/issues/415 
* https://github.com/facebook/react-native/issues/13011
