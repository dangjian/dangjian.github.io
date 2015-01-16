---
layout: post
title: 有关JavaScript闭包的讨论及如何更清晰地理解闭包
author: dang
categories: [front-end]
tags: [javascript,prototype]
fullview: false
---
##引言

今天开始在公司内部讨论JavaScript闭包的概念，本来预计20分钟结束这个话题的讨论，可是最后竟然花了一个多小时，可见这个概念的确是用三言两语说不清楚的。讨论过程中也举了大量的例子，本意是为了解释闭包的概念。但这些例子貌似反而把一些同学带的更晕了，有个例子差点把我自己都绕进去了。下面我把讨论过程中的一些重点做一个整体的说明，理一理思路，把复杂问题简单化。

##闭包的定义

在JavaScript中，闭包这个概念是较难以理解的一个概念。很多人在不同的场合都试图解释这个概念，也会举大量的例子来说明，但大部分的解释都是从现象上去解释闭包的概念，并没用抓住闭包的本质。下面我从闭包的定义出发，从本质上解释一下这个概念。

闭包这个概念很简单，这个概念是脱离JavaScript语言本身的，是个计算机学科里面的概念，维基百科上的定义是这样的：

在计算机科学中，闭包（Closure）是词法闭包（Lexical Closure）的简称，是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。

定义中的自由变量指的是不在这个函数内部定义的变量，属于外部变量。
回到JavaScript中，看看在JavaScript中的闭包应该是什么样子的。依照定义，要形成一个闭包，首先要有一个函数，其次这个函数要引用外部作用域的变量。那么这个函数以及其引用的外部变量所在的作用域（即闭包定义中所说的相关引用环境）共同构成了闭包。这个函数及引用环境会一直保持其状态。这个外部作用域可以是全局作用域，也可以是局部作用域。所以，JavaScript里面的闭包和作用域的概念是息息相关的。如下是两个闭包的典型例子：
例子1：

```
var g = 0;
function closure1(){
    g++;
}
closure1(); 
```
函数closure1引用了全局变量g，所以构成了闭包
例子2：

```
function foo(x) {
    var tmp = 3;
     function bar(y) {
        alert(x + y + (++tmp));
    }
    bar(10);
}
foo(2);
```

函数bar引用了外部函数foo的变量x和tmp，所以构成了闭包。

##闭包的理解

构成闭包的方式很好理解，不好理解的是闭包内状态的保持。下面使用一个稍微复杂的闭包例子来说明闭包内变量是如何在整个运行期保持其状态的。例子代码如下：

```
function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var item = 'item' + list[i];
        result.push( function() {alert(item + ' ' + list[i])} );
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    // Using j only to help prevent confusion -- could use i.
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}
testList(); 
```

我们分析一下这个代码段：
`buildList`函数内部定义了一个匿名函数，而匿名函数里面访问了外部函数的变量item、list和i。所以构成了一个闭包。
调用函数`testList`时，首先执行了这行代码：

```
var fnlist = buildList([1,2,3]);
```

此行代码调用了buildList函数，根据传输的数组[1,2,3]，返回了一个包含有三个函数的数组fnlist。这三个函数是不同的，即fnlist[0] !== fnlist[1]，但是这三个函数指向了相同的函数代码（因为JavaScript是脚本语言，定义的这三个函数时并不会把函数代码复制三份，而是指向同一个代码执行入口）。即都指向了这段代码
```
alert(item + ' ' + list[i])
```
再来看看经过`buildList([1,2,3])`的执行后，闭包内变量的状态变化情况：
闭包内的变量主要有这些：result、i、list和item。经过函数的执行：result = [function, function, function]、i=3、list=[1,2,3](传入的参数数组)、item=‘item3’。
以上就是testList函数中第一行代码执行后发生的变化。接下来执行后续代码：

```
 for (var j = 0; j < fnlist.length; j++) {
    fnlist[j]();
}
```

这段代码是分别执行fnlist数组中的3个函数，因为这三个函数都指向相同的函数入口：

```
alert(item + ' ' + list[i])
```

所以都是执行这行代码。
这行代码中用到了item、list和i这三个外部作用域的变量。我们在上面分析中得到，此时i`tem=‘item3’、list=[1,2,3]、i=3`，那么计算这个表达式：

```
item + ' ' + list[i]
```

返回的结果是‘item3 undefined’。计算了三次，返回相同的结果，所以整个代码执行会alert弹出三次‘item3 undefined’字符串。

理解过程很简单，没有复杂的概念，只要结合作用域的概念和闭包中变量状态保持这一特性，就很容易能分析出具体的执行过程和结果。

##闭包定义的误区

按照我们上面的分析，以下这些有关闭包的说法是不够准确的。
1，闭包是在一个函数内部定义了一个函数
这个说法不够严谨，只有内部函数引用了外部的变量时才构成闭包。
2，闭包是在一个函数里面返回一个内部函数
这个说法是完全错误的，返回内部函数只是为了利用闭包，或者验证闭包。

##闭包的使用场景

基于以上的解释并结合实际的使用场景，我们看看在JavaScript中，都有那些场合利用了闭包：

### 1. 返回函数内部的函数，隐藏了局部变量的同时，又可以让外部可以有限度地操作局部变量


例子1：
 
```
function foo(x) {
    var tmp = 3;
    return function (y) {
        alert(x + y + (++tmp));
    }
}
var bar = foo(2); 
```
例子2：
```
var bar;
function foo(x) {
    var tmp = 3;
    bar = function (y) {
        alert(x + y + (++tmp));
    }
}
foo(2); 
``` 
例子3：
```
var obj =（function(){
     var i=0,a=[];
     return {
          Update: function(){i++},
          List: a
     }
})();
```
###2. 函数内部使用setInterval和setTimeout函数
```
function foo(x){
    setInterval(function(){alert(x++);} , 5000);
};
function foo(x){
    setTimeout(function(){alert(x++);} , 5000);
};  
```
一个错误利用闭包的例子

再回到导致把我绕进去的那个例子，其实这个例子也是一个闭包：

```
var obj =(function(){
     var i=0;
     return {
          Update: function(){i++;},
          I: i
     }
})(); 
```
调用obj.Update后，obj.I的值并没用变化，还保持着初始值0。因为obj.I和函数内部变量i并不是引用关系。i在内部是原始数字类型，并不是复合类型。所以函数内部给匿名对象上的I属性赋值后，这个属性值就再也不会和内部变量i有任何的关系。

修改一下代码，把i这个变量变成一个复合对象：
```
var obj =(function(){
     var i=[];
     return {
          Update: function(a){i.push(a);},
          I: i
     }
})();
obj.Update(1);  
```
调用Update函数后，闭包内部的i数组变成了[1]，所以obj.I也变成了[1]。这个使用的误区虽然发生在闭包的使用上，但和闭包本身没有任何关联，只是和原始类型和复合类型数据赋值相关。