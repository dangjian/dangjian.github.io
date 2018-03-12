---
layout: post
title: Normalize.css源代码赏析
author: dang
categories: [CSS]
tags: [CSS, reset]
fullview: false
date: 2013-11-12
---

Normalize.css是一个轻量级的CSS跨浏览器解决方案，包括移动浏览器。它提供了一套默认的样式，使得元素在大部分浏览器中具有相同的外观。Normalize.css基于最新的HTML5规范，相比较传统的css reset更具现代性。 

Normalize.css目前的版本是2.1.3，代码和注释总共406行。
<!-- more -->

## 1~1行：文件说明行

	/*! normalize.css v2.1.3 | MIT License | git.io/normalize */
	
## 2~54行：HTML5标签display样式统一，主要是兼容IE8/9的样式。

	/* ==========================================================================
	   HTML5 display definitions
	   ========================================================================== */
	
	/**
	 * Correct `block` display not defined in IE 8/9.
	 */
	
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	main,
	nav,
	section,
	summary {
	    display: block;
	}
	
	/**
	 * Correct `inline-block` display not defined in IE 8/9.
	 */
	
	audio,
	canvas,
	video {
	    display: inline-block;
	}
	
	/**
	 * Prevent modern browsers from displaying `audio` without controls.
	 * Remove excess height in iOS 5 devices.
	 */
	
	audio:not([controls]) {
	    display: none;
	    height: 0;
	}
	
	/**
	 * Address `[hidden]` styling not present in IE 8/9.
	 * Hide the `template` element in IE, Safari, and Firefox < 22.
	 */
	
	[hidden],
	template {
	    display: none;
	}

audio标签如果没用控制栏，则应该隐藏；hidden属性是在HTML5中新加入的属性，可能有些人觉得和规范一直倡导的样式分离有所背离，但HTML5设计的一条重要的原理就是实用性。这个属性会帮助屏幕阅读器更方便地识别。template标签用于HTML模板，现代Web开发中，HTML模板使用很多，这个标签是顺应实际需求。但模板又要求不能在界面上显示的，所以统一样式，兼容旧浏览器。

## 55~80行：html和body标签的reset

	/* ==========================================================================
	   Base
	   ========================================================================== */
	
	/**
	 * 1. Set default font family to sans-serif.
	 * 2. Prevent iOS text size adjust after orientation change, without disabling
	 *    user zoom.
	 */
	
	html {
	    font-family: sans-serif; /* 1 */
	    -ms-text-size-adjust: 100%; /* 2 */
	    -webkit-text-size-adjust: 100%; /* 2 */
	}
	
	/**
	 * Remove default margin.
	 */
	
	body {
	    margin: 0;
	}

在html标签上设置了text-size-adjust。这个规则并不是标准规范中定义的规则，所以应该加上浏览器前缀。 并且这个规则一般会在智能机上起作用。目前支持较好的是IE mobile和Safari mobile。设置此规则的目的是让文字在设备中更可读。body元素默认有margin样式，在一般情况下并不需要这个样式。

## 80~108行：a元素样式设置
	
	/* ==========================================================================
	   Links
	   ========================================================================== */
	
	/**
	 * Remove the gray background color from active links in IE 10.
	 */
	
	a {
	    background: transparent;
	}
	
	/**
	 * Address `outline` inconsistency between Chrome and other browsers.
	 */
	
	a:focus {
	    outline: thin dotted;
	}
	
	/**
	 * Improve readability when focused and also mouse hovered in all browsers.
	 */
	
	a:active,
	a:hover {
	    outline: 0;
	}
	
去掉了a元素的背景，统一了获得焦点时的外框，去掉了点击时或者鼠标进入时的外框。 个人不喜欢获得焦点时的外框。

## 109~222行：布局元素的样式重置
	
	/* ==========================================================================
	   Typography
	   ========================================================================== */
	
	/**
	 * Address variable `h1` font-size and margin within `section` and `article`
	 * contexts in Firefox 4+, Safari 5, and Chrome.
	 */
	
	h1 {
	    font-size: 2em;
	    margin: 0.67em 0;
	}
	
	/**
	 * Address styling not present in IE 8/9, Safari 5, and Chrome.
	 */
	
	abbr[title] {
	    border-bottom: 1px dotted;
	}
	
	/**
	 * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.
	 */
	
	b,
	strong {
	    font-weight: bold;
	}
	
	/**
	 * Address styling not present in Safari 5 and Chrome.
	 */
	
	dfn {
	    font-style: italic;
	}
	
	/**
	 * Address differences between Firefox and other browsers.
	 */
	
	hr {
	    -moz-box-sizing: content-box;
	    box-sizing: content-box;
	    height: 0;
	}
	
	/**
	 * Address styling not present in IE 8/9.
	 */
	
	mark {
	    background: #ff0;
	    color: #000;
	}
	
	/**
	 * Correct font family set oddly in Safari 5 and Chrome.
	 */
	
	code,
	kbd,
	pre,
	samp {
	    font-family: monospace, serif;
	    font-size: 1em;
	}
	
	/**
	 * Improve readability of pre-formatted text in all browsers.
	 */
	
	pre {
	    white-space: pre-wrap;
	}
	
	/**
	 * Set consistent quote types.
	 */
	
	q {
	    quotes: "\201C" "\201D" "\2018" "\2019";
	}
	
	/**
	 * Address inconsistent and variable font size in all browsers.
	 */
	
	small {
	    font-size: 80%;
	}
	
	/**
	 * Prevent `sub` and `sup` affecting `line-height` in all browsers.
	 */
	
	sub,
	sup {
	    font-size: 75%;
	    line-height: 0;
	    position: relative;
	    vertical-align: baseline;
	}
	
	sup {
	    top: -0.5em;
	}
	
	sub {
	    bottom: -0.25em;
	}
	
重置了h1标签，没有重置其它标题标签，不明白。abbr标签的语义是表示缩小，在标签的title属性中会添加此缩写的完整版本。此标签在FF中默认有下边框（1px dotted），在Safari和Chrome中则无此样式，此处统一设置了下边框。在FF中，hr元素的默认样式很多，和其它浏览器主要的差异是设置了height为2px，box-sizeing为border-box，样式中正是重置了这两个影响布局的样式。mark标签是HTML5中的标签，IE8/9不支持，所以需要重置样式。pre标签的默认white-space样式为pre。white-space样式用于设置如何处理元素内的空白，默认值为normal，表示空格被浏览器忽略，如果要禁止文字自动换行，则设置值为nowrap；pre表示空白被浏览器保留，而pre-wrap表示空白被保留但正常换行。pre-line表示空白合并但保留换行。样式重置为pre-wrap应该更合理，当元素的宽度不够显示时文字折行。

## 223~255行：设置内嵌元素样式
	
	/* ==========================================================================
	   Embedded content
	   ========================================================================== */
	
	/**
	 * Remove border when inside `a` element in IE 8/9.
	 */
	
	img {
	    border: 0;
	}
	
	/**
	 * Correct overflow displayed oddly in IE 9.
	 */
	
	svg:not(:root) {
	    overflow: hidden;
	}
	/* ==========================================================================
	   Figures
	   ========================================================================== */
	
	/**
	 * Address margin not present in IE 8/9 and Safari 5.
	 */
	
	figure {
	    margin: 0;
	}
	
主要重置在IE浏览器中的样式。在旧版IE浏览器中，图片默认会出现一个蓝色的外框。
 
## 255~394：设置form相关元素的样式
	
	/* ==========================================================================
	   Forms
	   ========================================================================== */
	
	/**
	 * Define consistent border, margin, and padding.
	 */
	
	fieldset {
	    border: 1px solid #c0c0c0;
	    margin: 0 2px;
	    padding: 0.35em 0.625em 0.75em;
	}
	
	/**
	 * 1. Correct `color` not being inherited in IE 8/9.
	 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
	 */
	
	legend {
	    border: 0; /* 1 */
	    padding: 0; /* 2 */
	}
	
	/**
	 * 1. Correct font family not being inherited in all browsers.
	 * 2. Correct font size not being inherited in all browsers.
	 * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.
	 */
	
	button,
	input,
	select,
	textarea {
	    font-family: inherit; /* 1 */
	    font-size: 100%; /* 2 */
	    margin: 0; /* 3 */
	}
	
	/**
	 * Address Firefox 4+ setting `line-height` on `input` using `!important` in
	 * the UA stylesheet.
	 */
	
	button,
	input {
	    line-height: normal;
	}
	
	/**
	 * Address inconsistent `text-transform` inheritance for `button` and `select`.
	 * All other form control elements do not inherit `text-transform` values.
	 * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.
	 * Correct `select` style inheritance in Firefox 4+ and Opera.
	 */
	
	button,
	select {
	    text-transform: none;
	}
	
	/**
	 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
	 *    and `video` controls.
	 * 2. Correct inability to style clickable `input` types in iOS.
	 * 3. Improve usability and consistency of cursor style between image-type
	 *    `input` and others.
	 */
	
	button,
	html input[type="button"], /* 1 */
	input[type="reset"],
	input[type="submit"] {
	    -webkit-appearance: button; /* 2 */
	    cursor: pointer; /* 3 */
	}
	
	/**
	 * Re-set default cursor for disabled elements.
	 */
	
	button[disabled],
	html input[disabled] {
	    cursor: default;
	}
	
	/**
	 * 1. Address box sizing set to `content-box` in IE 8/9/10.
	 * 2. Remove excess padding in IE 8/9/10.
	 */
	
	input[type="checkbox"],
	input[type="radio"] {
	    box-sizing: border-box; /* 1 */
	    padding: 0; /* 2 */
	}
	
	/**
	 * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.
	 * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome
	 *    (include `-moz` to future-proof).
	 */
	
	input[type="search"] {
	    -webkit-appearance: textfield; /* 1 */
	    -moz-box-sizing: content-box;
	    -webkit-box-sizing: content-box; /* 2 */
	    box-sizing: content-box;
	}
	
	/**
	 * Remove inner padding and search cancel button in Safari 5 and Chrome
	 * on OS X.
	 */
	
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-decoration {
	    -webkit-appearance: none;
	}
	
	/**
	 * Remove inner padding and border in Firefox 4+.
	 */
	
	button::-moz-focus-inner,
	input::-moz-focus-inner {
	    border: 0;
	    padding: 0;
	}
	
	/**
	 * 1. Remove default vertical scrollbar in IE 8/9.
	 * 2. Improve readability and alignment in all browsers.
	 */
	
	textarea {
	    overflow: auto; /* 1 */
	    vertical-align: top; /* 2 */
	}
	
fieldset元素的默认样式在各浏览器中的差异较大，尤其是IE浏览器和其它浏览器，统一意思很有必要。大部分浏览器会把form里面的输入框（textarea，text，button， select）的字体设置为用户的系统字体或者是浏览器本身的字体，并不会继承自父元素。所以需要重置输入框的默认样式。可点击的按钮，设置鼠标样式为pointer，提高了可用性。统一search类型输入框的默认样式，让search类型输入框和普通输入框样式一样。 

## 395~407行：设置table元素样式
	
	/* ==========================================================================
	   Tables
	   ========================================================================== */
	
	/**
	 * Remove most spacing between table cells.
	 */
	
	table {
	    border-collapse: collapse;
	    border-spacing: 0;
	}
	
说实话，table的默认样式很难看，大部分浏览器设置table的border-collapse为separate，border-spacing为2，一般项目中都会重置此样式。这四百多行的代码，除了注释之外，每个css规则都定义的非常漂亮，结合了技术发展的潮流，并充分解决了主流浏览器的兼容问题。整个代码短小精干，比起之前的css reset方案，这个方案更适合目前的web开发趋势。

但我个人也不推荐直接拿来使用，而是应该基于此CSS reset方案，构建适合自己项目的CSS reset方案。比如去掉某些项目中并不会用到的规则，修改某些和项目实际设计不同的样式，添加一些此方案中没有包含的样式规则，比如添加H2~H6的规则。