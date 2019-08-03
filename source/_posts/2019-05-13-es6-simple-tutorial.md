---
layout: post
title: 公司内部技术分享：ES6基础学习简明教程
author: dang
categories: [Web]
tags: [ES6, 教程]
fullview: false
date: 2019-05-13
---

## ES6学习要点总结
* ECMAScript 和 JavaScript的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。
* ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017、ES2018 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。
<!-- more -->

### let 和 const
* let声明的变量是可变的，const声明的变量是不可变的。
* 所声明的变量，只在命令所在的代码块内有效。
* 不存在变量提升
* 不允许重复声明

### 解构赋值
* 按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
```
let [a, b, c] = [1, 2, 3];
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
const [a, b, c, d, e] = 'hello';

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

function add([x, y]){
  return x + y;
}

add([1, 2]); // 3
```
* 默认值
```
let [x, y = 'b'] = ['a']; 
var {x, y = 5} = {x: 1};
x // 1
y // 5

function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

```

### 对象的简洁表示法
* 直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
```
const foo = 'bar';
const baz = { foo };
baz // {foo: "bar"}

const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
};
```

### 箭头函数
```
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};
```
箭头函数有几个使用注意点。
* 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
* 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。


### rest 参数 和 扩展运算符
* ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数
```
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```

* 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
```
console.log(1, ...[2, 3, 4], 5)
```

```
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```

```
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

### 属性名表达式
* ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。
```
let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
```

### Promise
* Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
* Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject
```
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

* Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数。前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。
```
getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
});
```
```
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function funcA(comments) {
  console.log("resolved: ", comments);
}, function funcB(err){
  console.log("rejected: ", err);
});
```
* Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。
```
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```
* finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
```
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```
* Promise.all, Promise.race, 
```
const p = Promise.all([p1, p2, p3]);
```
```
const p = Promise.race([p1, p2, p3]);
```

* Promise.resolve(), Promise.reject()

* 如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
* Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。

### async
* async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
* await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
* async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

```
async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});
```

```
async function f() {
  return 'hello world';
}

f().then(v => console.log(v))
// "hello world"
```

### Class
* ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
```
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```
* constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
* 类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。
```
class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined
```
```
class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }

  // ...
}

class Obj {
  constructor() {
    this.getThis = () => this;
  }
}

const myObj = new Obj();
myObj.getThis() === myObj // true
```

* 私有方法和私有属性。私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。
    * 方法前面的下划线
    * 还有一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
    * 私有属性的提案。方法是在属性名之前，使用#表示。

* Class 继承
    * Class 可以通过extends关键字实现继承。
    * 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    
### Module
* ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
```
import { stat, exists, readFile } from 'fs';
```
```
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

export function multiply(x, y) {
  return x * y;
};
```

* 注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。
```
foo();

import { foo } from 'my_module';
```

* export default命令，为模块指定默认输出。
```
// export-default.js
export default function () {
  console.log('foo');
}

// import-default.js
import customName from './export-default';
customName(); // 'foo'
```

* export 与 import 的复合写法
```
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
```

* ES6 模块与 CommonJS 模块的差异
    * CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
    * CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

### 参考资料
本文中所有内容和示例代码来自阮一峰的ES6教程，内容针对实际的使用作了进一步简化，基本涵盖了ES6常用的特性。