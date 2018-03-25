---
layout: page
title: 《Web前端开发最佳实践》第六章 引用3
fullview: false
---
<p>《Web前端开发最佳实践》第六章 引用3：Undoing html.css and using debug scaffolding</p>
<p>来源：<a title="http://tantek.com/log/2004/09.html#d06t2354" href="http://tantek.com/log/2004/09.html#d06t2354">http://tantek.com/log/2004/09.html#d06t2354</a></p>
<p>One thing that I have found myself doing nearly every time I code a new CSS design, at least a non-trivial one, is undoing the layout and typographical damage that browser default style rules do to semantic markup.</p>
<h6>undohtml.css</h6>
<p>I've decided to document my thinking outloud this time, in a whole separate style sheet: <a href="http://tantek.com/log/2004/undohtml.css">undohtml.css</a>. More comments than code, the style sheet is much bigger than it needs to be. It's also licensed under a <a href="http://creativecommons.org/">Creative Commons</a> <a href="http://creativecommons.org/licenses/by/2.0">by 2.0 license</a> for maximum reuse. <a href="http://tantek.com/log/2004/undohtml.css">View undohtml.css</a>for more details. It will likely grow when I add more semantic markup that needs its default browser varnish stripped.</p>
<h6>.debug scaffolding</h6>
<p>The other technique I'm using during the restyling of my blog is a set of separate "scaffolding" style rules that illustrate various elements' boundaries for easier visual debugging. For now I've included these rules in the main style sheet (<a href="http://tantek.com/log/2004/mccgrid.css">mccgrid.css</a>) since I plan to delete them eventually, though perhaps it would make more sense to put them into a "debug.css" file which could be included with an <code>@import</code>that could eventually be commented out.</p>
<p>Each of the scaffolding rules depends on having an ancestor (or body) element of class "debug", e.g.:</p>
<pre><code> .debug li { border:1px dotted #999 } .debug ul, .debug ol { border:1px solid #666 } </code></pre>
<p>There are much more complex debug style sheets that folks have come up with that do all sorts of things like display the element names etc. The point here is put up some <em>minimal</em> scaffolding to see where things are going (across <em>several</em>browsers), and catch and fix any layout problems sooner rather than later. This is definitely a case of less is more. If scaffolding begins to overwhelm the rest of the styling, then it becomes more of an obstacle than an aide.</p>
<p>Also, I've used the <code>border</code> property in this example, and the <code>background</code> property in other places. The <code>outline</code> property would be ideal in many cases, but is supported by very few browsers (e.g. IE5/Mac supports the <code>outline</code> properties on block display elements, and <code>outline:none</code>everywhere — useful for turning off browser default focus outlining). The point here is that minimal scaffolding should work across the most recent versions of several browsers, including IE (Mac and Windows).</p>
<p>In addition, the above scaffolding rules use shades of gray. Sometimes bright colors like <strong>red</strong>, <strong>orange</strong>, <strong>yellow</strong>, <strong>lime</strong>, <strong>aqua</strong>, or <strong>fuchsia</strong>are more helpful when debugging a small number of elements, where you have the luxury of assigning a specific border or background color to each element in question.</p>
<p>The scaffolding style rules are triggered by a "debug" class name in an ancestor (or body) element's class attribute, e.g.:</p>
<pre><code> &lt;body class="debug log"&gt; </code></pre>
<p>that will display scaffolding on everything inside body.</p>
<p>If instead you wanted to constrain the scaffolding to one particularly problematic area, you would remove "debug" from that body class attribute, and place the "debug" class name on the common ancestor of the elements in that problematic area, for example, the topmost navigation list:</p>
<pre><code> &lt;li class="debug"&gt; &lt;ul class="nav"&gt; ... </code></pre>
<p>Once (you think) you're finished debugging, simply remove "debug" from any/all class attributes and take a look. If anything else still needs debugging, then reinsert the "debug" class name appropriately, and iterate until things work the way you expect them to</p>
