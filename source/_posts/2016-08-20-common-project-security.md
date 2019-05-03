---
layout: post
title: 基于Azure的项目通用安全策略
author: dang
categories: [Web]
tags: [security, azure]
fullview: false
date: 2016-08-20
---

## 背景
这是一份用于交付的项目安全报告范例，项目使用了Azure云服务或者国内的阿里云华为云服务。

<!-- more -->
## Azure云版本

1. Redirect All HTTP Traffic to HTTPS
2. Identity and Access Management for APIs
    - HTTP Bearer authentication strategy
    - HTTP Basic and Digest authentication strategy
3. Security policy for Web App
    - Remove X-Powered-By Header
    - Protection Against XSS
    - Encode For HTML Body
    - HTTP Headers
        - Strict-Transport-Security enforces secure (HTTP over SSL/TLS) connections to the server
        - X-Frame-Options provides clickjacking protection
        - X-XSS-Protection enables the cross-site scripting (XSS) filter built into most recent web browsers
        - X-Content-Type-Options prevents browsers from MIME-sniffing a response away from the declared content-type
4. DB
    - Disable remote connection.
    - Backup DB for every 8 hours.
    - Sensitive Data (password, tokens, etc.) Encryption
5. logs
    - logs for all API requests.
    - logs for user actions.
    - logs for excetptions.
    
6. Limit Unsuccessful Login Attempts
    - Limit users to 10 unsuccessful login attempts within a 24 hour period. After the 10th consecutive unsuccessful login attempt, lock the account and send an email informing the user that their account has been locked due to too many failed attempts to login. 

7. Use Session Lock
    - Use session lock with pattern-hiding displays to prevent access/viewing of data after a period of inactivity (1 hour).

8. Azure Security policy
    * Compute And Apps
        * Virtual machines endpoint protection
        * Disk encryption 
        * Vulnerability Assessment
        * Adaptive Application Controls
        * Azure Active Directory authentication in Service Fabric
        * Automation account variable encryption rules
        * Diagnostic logs 
        * CORS restrictions for Web App
        * Disable remote debugging 
    * Network
        * Network security groups 
        * Web application firewall 
        * Use of DDoS protection for virtual network
        * Permissive access to App Services 
    * Data
        * Storage Encryption 
        * Enable Soft Delete
        * Disable Unrestricted Network Access 
        * Secure transfer to Storage Account 
        * Secure connections to Redis Cache 
        * Diagnostic logs 
    * Identity 
        * Maximum number of owners 
        * Remove deprecated accounts
        * Diagnostic logs in Key Vault

## 国内版本
1. 物理和环境安全： 服务器主机采用了阿里或者华为虚拟主机，这些服务提供商有完善的机房供电，防自然灾害等措施。可以保证服务器的物理环境安全。
2. 网络和通信安全： 数据库和Web服务部署在不同的主机上，数据库所在主机添加更严格的访问控制，保证只有同域内的Web服务才可以通过固定端口连接，外部无法直接连接到数据库； Web服务只开放固定接口对外提供服务，拒绝所有其他端口访问；使用虚机主机服务商提供的网络攻击防范服务，如云防火墙，这些服务会防范基本的网络威胁，在发生攻击时详细记录攻击类型，时间等信息，并能及时告警；数据在网路传输过程中采用SSL加密，防止数据中途被窃取，维护数据的完整性，确保数据在传输过程中不被改变。
3. 设备和计算安全：服务器使用阿里云或者华为云主机，这些虚拟主机提供了DDoS防护，木马查杀，防暴力破解等服务；服务器和系统维护有专人或者团队管理，有一整套的服务器管理制度和操作规程，能对安全问题可以及时发现和修补；根据虚拟主机服务商提供的服务，不同的维护人员设置有不同的账号和权限；全程记录每个运维人员在服务器上的操作过程，做到可以随时进行设备操作行为的审计。
4. 应用和数据安全： 系统身份鉴别采用了成熟的oAuth认证机制，登录密码要求强密码；系统针对不同账户角色设置了最小可操作权限，它们之间形成相互制约的关系； 应用本身采用了Helmet插件，Helmet插件是一个保护Node.JS应用的安全项目，提供了诸如XSS攻击防范，防止点击劫持，隐藏配置，防止JS和CSS恶意注入等常规安全防护； 数据库应用异地实时备份功能，利用通信网络将重要数据实时备份至备份场地；对重要的用户行为和重要安全事件有日志记录，并有专门的机制审查日志；本项目运行进程通过pm2管理，pm2提供了完善的日志记录和查看服务。
