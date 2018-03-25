---
layout: page
title: 《Web前端开发最佳实践》第六章 引用9
fullview: false
---

{% raw %} 
<p>《Web前端开发最佳实践》第六章 引用9：9 Most Common IE Bugs and How to Fix Them</p>
<p>来源：<a title="http://code.tutsplus.com/tutorials/9-most-common-ie-bugs-and-how-to-fix-them--net-7764" href="http://code.tutsplus.com/tutorials/9-most-common-ie-bugs-and-how-to-fix-them--net-7764">http://code.tutsplus.com/tutorials/9-most-common-ie-bugs-and-how-to-fix-them--net-7764</a></p>
<div class="post-body__body">
<div class="post-body__content">
<p>Internet Explorer - the bane of most web developers' existence. Up to 60% of your development can be wasted just trying to squash out IE specific bugs which isn't really a productive use of your time. In this tutorial, you are going to learn about the most common IE bugs and rendering disparities and how to easily squash them or deal with them. Interested? Let's get started.</p>
<p> </p>
</div>
</div>
<p> </p>
<hr />
<h2 class="nolinks"><span>1.</span> Centering a Layout</h2>
<p>Centering an element is probably something every web developer has to do while creating a layout. The easiest and most versatile way to center an element is to just add <em>margin: auto;</em> to the relevant element. The above method will take care of centering the element irrespective of the resolution and/or browser width. IE 6 in quirks mode however decides to handle this in the most unfortunate way possible: by not handling it at all.</p>
<p>Consider the Following Code:</p>
<div>
<div id="highlighter_823806" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">01</div>
<div class="line number2 index1 alt1">02</div>
<div class="line number3 index2 alt2">03</div>
<div class="line number4 index3 alt1">04</div>
<div class="line number5 index4 alt2">05</div>
<div class="line number6 index5 alt1">06</div>
<div class="line number7 index6 alt2">07</div>
<div class="line number8 index7 alt1">08</div>
<div class="line number9 index8 alt2">09</div>
<div class="line number10 index9 alt1">10</div>
<div class="line number11 index10 alt2">11</div>
<div class="line number12 index11 alt1">12</div>
<div class="line number13 index12 alt2">13</div>
<div class="line number14 index13 alt1">14</div>
<div class="line number15 index14 alt2">15</div>
<div class="line number16 index15 alt1">16</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#container{</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#000</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#777</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">400px</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">160px</code><code class="css plain">;</code></div>
<div class="line number6 index5 alt1"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code> <code class="css value">0</code> <code class="css value">0</code> <code class="css value">30px</code><code class="css plain">;</code></div>
<div class="line number7 index6 alt2"><code class="css plain">}</code></div>
<div class="line number8 index7 alt1"> </div>
<div class="line number9 index8 alt2"><code class="css plain">#element{</code></div>
<div class="line number10 index9 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number11 index10 alt2"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#36F</code><code class="css plain">;</code></div>
<div class="line number12 index11 alt1"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">300px</code><code class="css plain">;</code></div>
<div class="line number13 index12 alt2"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">100px</code><code class="css plain">;</code></div>
<div class="line number14 index13 alt1"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code> <code class="css value">auto</code><code class="css plain">;</code></div>
<div class="line number15 index14 alt2"><code class="css spaces">    </code> </div>
<div class="line number16 index15 alt1"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>The output you'd expect:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/1-1.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/1-1.png" /></div>
<p>But what IE actually gives you:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/1-2.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/1-2.png" /></div>
<p>This is mainly due to IE6 in quirks mode and below not recognizing the <em>auto</em> value we set to the <em>margin</em> property. Fortunately, this is easily fixed.</p>
<h3 class="nolinks">The Fix</h3>
<p>The easiest and most reliable way to center content for IE6 and below is to apply <em>text-align: center</em> to the parent element and then apply <em>text-align: left</em> to the element to be centered to make sure the text within it is aligned properly.</p>
<div>
<div id="highlighter_386472" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">01</div>
<div class="line number2 index1 alt1">02</div>
<div class="line number3 index2 alt2">03</div>
<div class="line number4 index3 alt1">04</div>
<div class="line number5 index4 alt2">05</div>
<div class="line number6 index5 alt1">06</div>
<div class="line number7 index6 alt2">07</div>
<div class="line number8 index7 alt1">08</div>
<div class="line number9 index8 alt2">09</div>
<div class="line number10 index9 alt1">10</div>
<div class="line number11 index10 alt2">11</div>
<div class="line number12 index11 alt1">12</div>
<div class="line number13 index12 alt2">13</div>
<div class="line number14 index13 alt1">14</div>
<div class="line number15 index14 alt2">15</div>
<div class="line number16 index15 alt1">16</div>
<div class="line number17 index16 alt2">17</div>
<div class="line number18 index17 alt1">18</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#container{</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#000</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#777</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">400px</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">160px</code><code class="css plain">;</code></div>
<div class="line number6 index5 alt1"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code> <code class="css value">0</code> <code class="css value">0</code> <code class="css value">30px</code><code class="css plain">;</code></div>
<div class="line number7 index6 alt2"><code class="css spaces">    </code><code class="css keyword">text-align</code><code class="css plain">: </code><code class="css value">center</code><code class="css plain">;</code></div>
<div class="line number8 index7 alt1"><code class="css plain">}</code></div>
<div class="line number9 index8 alt2"> </div>
<div class="line number10 index9 alt1"><code class="css plain">#element{</code></div>
<div class="line number11 index10 alt2"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number12 index11 alt1"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#36F</code><code class="css plain">;</code></div>
<div class="line number13 index12 alt2"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">300px</code><code class="css plain">;</code></div>
<div class="line number14 index13 alt1"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">100px</code><code class="css plain">;</code></div>
<div class="line number15 index14 alt2"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code> <code class="css value">0</code><code class="css plain">;</code></div>
<div class="line number16 index15 alt1"><code class="css spaces">        </code><code class="css keyword">text-align</code><code class="css plain">: </code><code class="css value">left</code><code class="css plain">;</code></div>
<div class="line number17 index16 alt2"><code class="css spaces">    </code> </div>
<div class="line number18 index17 alt1"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<hr />
<h2 class="nolinks"><span>2.</span> Staircase Effect</h2>
<p>Almost every web developer uses lists to create his navigation. Usually, you create the container element, create some links inside and then float the anchors in the direction he wants and calls it a day. Usually. IE though decides to make it a lot more complicated. Peruse through the following code:</p>
<div>
<div id="highlighter_1411" class="syntaxhighlighter  html">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="html plain">&lt;</code><code class="html keyword">ul</code><code class="html plain">&gt;</code></div>
<div class="line number2 index1 alt1"><code class="html spaces">    </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt;&lt;</code><code class="html keyword">a</code> <code class="html color1">href</code><code class="html plain">=</code><code class="html string">"#"</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">a</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code></div>
<div class="line number3 index2 alt2"><code class="html spaces">    </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt;&lt;</code><code class="html keyword">a</code> <code class="html color1">href</code><code class="html plain">=</code><code class="html string">"#"</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">a</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code></div>
<div class="line number4 index3 alt1"><code class="html spaces">    </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt;&lt;</code><code class="html keyword">a</code> <code class="html color1">href</code><code class="html plain">=</code><code class="html string">"#"</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">a</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code></div>
<div class="line number5 index4 alt2"><code class="html plain">&lt;/</code><code class="html keyword">ul</code><code class="html plain">&gt;</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div>
<div id="highlighter_759562" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">01</div>
<div class="line number2 index1 alt1">02</div>
<div class="line number3 index2 alt2">03</div>
<div class="line number4 index3 alt1">04</div>
<div class="line number5 index4 alt2">05</div>
<div class="line number6 index5 alt1">06</div>
<div class="line number7 index6 alt2">07</div>
<div class="line number8 index7 alt1">08</div>
<div class="line number9 index8 alt2">09</div>
<div class="line number10 index9 alt1">10</div>
<div class="line number11 index10 alt2">11</div>
<div class="line number12 index11 alt1">12</div>
<div class="line number13 index12 alt2">13</div>
<div class="line number14 index13 alt1">14</div>
<div class="line number15 index14 alt2">15</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">ul {</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">list-style</code><code class="css plain">: </code><code class="css value">none</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css plain">}</code></div>
<div class="line number4 index3 alt1"> </div>
<div class="line number5 index4 alt2"><code class="css plain">ul li a {</code></div>
<div class="line number6 index5 alt1"><code class="css spaces">    </code><code class="css keyword">display</code><code class="css plain">: </code><code class="css value">block</code><code class="css plain">;</code></div>
<div class="line number7 index6 alt2"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">130px</code><code class="css plain">;</code></div>
<div class="line number8 index7 alt1"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">30px</code><code class="css plain">;</code></div>
<div class="line number9 index8 alt2"><code class="css spaces">    </code><code class="css keyword">text-align</code><code class="css plain">: </code><code class="css value">center</code><code class="css plain">;</code></div>
<div class="line number10 index9 alt1"><code class="css spaces">    </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">#fff</code><code class="css plain">;</code></div>
<div class="line number11 index10 alt2"><code class="css spaces">    </code><code class="css keyword">float</code><code class="css plain">: </code><code class="css value">left</code><code class="css plain">;</code></div>
<div class="line number12 index11 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number13 index12 alt2"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#36F</code><code class="css plain">;</code></div>
<div class="line number14 index13 alt1"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code> <code class="css value">5px</code><code class="css plain">;</code></div>
<div class="line number15 index14 alt2"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>A standard compliant browser renders it like so:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/2-1.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/2-1.png" /></div>
<p>And the IE screen shot:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/2-2.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/2-2.png" /></div>
<p>Not a particularly pleasing navigation if you ask me. Fortunately, there are 2 fixes you can try.</p>
<h3 class="nolinks">Fix #1</h3>
<p>The easiest way to combat this is to float the li elements themselves instead of the anchor elements. Just add this and you should be done.</p>
<div>
<div id="highlighter_294123" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">ul li {</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">float</code><code class="css plain">: </code><code class="css value">left</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<h3 class="nolinks">Fix #2</h3>
<p>The second way is to apply <em>display: inline</em> to the enclosing li element. In addition to fixing this bug, it also fixes the double margin bug mentioned below. Purists may not like placing block elements inside inline elements though.</p>
<div>
<div id="highlighter_541539" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">ul li {</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">display</code><code class="css plain">: </code><code class="css value">inline</code></div>
<div class="line number3 index2 alt2"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<hr />
<h2 class="nolinks"><span>3.</span> Double Margin on Floated Elements</h2>
<p>This bug is probably among the first ones a web developer starting out will run into and is specific to Internet Explorer 6 and below. Triggering it is as simple as floating an element and then applying a margin in the direction it has been floated. And voila! The margin will be doubled in the rendered output. Not really something you'd look forward to while creating a pixel perfect layout.</p>
<p>Consider this code:</p>
<div>
<div id="highlighter_540537" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
<div class="line number6 index5 alt1">6</div>
<div class="line number7 index6 alt2">7</div>
<div class="line number8 index7 alt1">8</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#element{</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">300px</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">100px</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css spaces">    </code><code class="css keyword">float</code><code class="css plain">: </code><code class="css value">left</code><code class="css plain">;</code></div>
<div class="line number6 index5 alt1"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code> <code class="css value">0</code> <code class="css value">0</code> <code class="css value">30px</code><code class="css plain">;</code></div>
<div class="line number7 index6 alt2"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#36F</code><code class="css plain">;</code></div>
<div class="line number8 index7 alt1"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>On standards compliant browsers, this is how it looks:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/3-1.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/3-1.png" /></div>
<p>But here is how IE 6 decides to render it:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/3-2.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/3-2.png" /></div>
<h3 class="nolinks">The Fix</h3>
<p>The fix for this specific bug is to apply <em>display: inline</em> to the floated element and everything works as it is supposed to. Our previous code now changes to:</p>
<div>
<div id="highlighter_207150" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
<div class="line number6 index5 alt1">6</div>
<div class="line number7 index6 alt2">7</div>
<div class="line number8 index7 alt1">8</div>
<div class="line number9 index8 alt2">9</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#element{</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">300px</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">100px</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css spaces">    </code><code class="css keyword">float</code><code class="css plain">: </code><code class="css value">left</code><code class="css plain">;</code></div>
<div class="line number6 index5 alt1"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code> <code class="css value">0</code> <code class="css value">0</code> <code class="css value">30px</code><code class="css plain">;</code></div>
<div class="line number7 index6 alt2"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#36F</code><code class="css plain">;</code></div>
<div class="line number8 index7 alt1"><code class="css spaces">    </code><code class="css keyword">display</code><code class="css plain">: </code><code class="css value">inline</code><code class="css plain">;</code></div>
<div class="line number9 index8 alt2"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<hr />
<h2 class="nolinks"><span>4.</span> Inability to Have Elements with Small Heights</h2>
<p>As part of creating a layout, you may need to create elements with very small heights as custom borders for elements. Usually, you'll just have to add <em>height: XXpx</em> to the style's declarations and you should be done. Or so you thought. Check the page in IE and you'll probably do a double take.</p>
<p>As an example, look at the following code:</p>
<div>
<div id="highlighter_184510" class="syntaxhighlighter  html">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
<div class="line number6 index5 alt1">6</div>
<div class="line number7 index6 alt2">7</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="html plain">#element{</code></div>
<div class="line number2 index1 alt1"><code class="html spaces">    </code><code class="html plain">background: #95CFEF;</code></div>
<div class="line number3 index2 alt2"><code class="html spaces">    </code><code class="html plain">border: solid 1px #36F;</code></div>
<div class="line number4 index3 alt1"><code class="html spaces">    </code><code class="html plain">width: 300px;</code></div>
<div class="line number5 index4 alt2"><code class="html spaces">    </code><code class="html plain">height: 2px;    </code></div>
<div class="line number6 index5 alt1"><code class="html spaces">    </code><code class="html plain">margin: 30px 0;</code></div>
<div class="line number7 index6 alt2"><code class="html plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>And the output is just as expected: A 2 px element with a 1 px border.</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/4-1.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/4-1.png" /></div>
<p>And in IE:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/4-2.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/4-2.png" /></div>
<h3 class="nolinks">Fix #1</h3>
<p>The cause of this bug is pretty simple: IE simply refuses to size an element smaller than the set font size. Simply setting the font size to 0 lets you have an element as small and short as you like.</p>
<div>
<div id="highlighter_595787" class="syntaxhighlighter  html">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
<div class="line number6 index5 alt1">6</div>
<div class="line number7 index6 alt2">7</div>
<div class="line number8 index7 alt1">8</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="html plain">#element{</code></div>
<div class="line number2 index1 alt1"><code class="html spaces">    </code><code class="html plain">background: #95CFEF;</code></div>
<div class="line number3 index2 alt2"><code class="html spaces">    </code><code class="html plain">border: solid 1px #36F;</code></div>
<div class="line number4 index3 alt1"><code class="html spaces">    </code><code class="html plain">width: 300px;</code></div>
<div class="line number5 index4 alt2"><code class="html spaces">    </code><code class="html plain">height: 2px;    </code></div>
<div class="line number6 index5 alt1"><code class="html spaces">    </code><code class="html plain">margin: 30px 0;</code></div>
<div class="line number7 index6 alt2"><code class="html spaces">        </code><code class="html plain">font-size: 0;</code></div>
<div class="line number8 index7 alt1"><code class="html plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<h3 class="nolinks">Fix #2</h3>
<p>The next best way to deal with this bug is to apply <em>overflow: hidden</em> to the element so it collapses to the intended height.</p>
<div>
<div id="highlighter_728761" class="syntaxhighlighter  html">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
<div class="line number6 index5 alt1">6</div>
<div class="line number7 index6 alt2">7</div>
<div class="line number8 index7 alt1">8</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="html plain">#element{</code></div>
<div class="line number2 index1 alt1"><code class="html spaces">    </code><code class="html plain">background: #95CFEF;</code></div>
<div class="line number3 index2 alt2"><code class="html spaces">    </code><code class="html plain">border: solid 1px #36F;</code></div>
<div class="line number4 index3 alt1"><code class="html spaces">    </code><code class="html plain">width: 300px;</code></div>
<div class="line number5 index4 alt2"><code class="html spaces">    </code><code class="html plain">height: 2px;    </code></div>
<div class="line number6 index5 alt1"><code class="html spaces">    </code><code class="html plain">margin: 30px 0;</code></div>
<div class="line number7 index6 alt2"><code class="html spaces">        </code><code class="html plain">overflow: hidden</code></div>
<div class="line number8 index7 alt1"><code class="html plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<hr />
<h2 class="nolinks"><span>5.</span> Auto Overflow and Relatively Positioned Items</h2>
<p>This bug rears its ugly head when in a layout you set the parent container's <em>overflow</em> property to <em>auto</em> and place a relatively positioned item inside it. The relatively positioned item violates its parent element's boundaries and overflows outside. Let me demonstrate. Look the following code:</p>
<div>
<div id="highlighter_793308" class="syntaxhighlighter  html">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="html plain">&lt;</code><code class="html keyword">div</code> <code class="html color1">id</code><code class="html plain">=</code><code class="html string">"element"</code><code class="html plain">&gt;&lt;</code><code class="html keyword">div</code> <code class="html color1">id</code><code class="html plain">=</code><code class="html string">"anotherelement"</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">div</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">div</code><code class="html plain">&gt;</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div>
<div id="highlighter_255289" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">01</div>
<div class="line number2 index1 alt1">02</div>
<div class="line number3 index2 alt2">03</div>
<div class="line number4 index3 alt1">04</div>
<div class="line number5 index4 alt2">05</div>
<div class="line number6 index5 alt1">06</div>
<div class="line number7 index6 alt2">07</div>
<div class="line number8 index7 alt1">08</div>
<div class="line number9 index8 alt2">09</div>
<div class="line number10 index9 alt1">10</div>
<div class="line number11 index10 alt2">11</div>
<div class="line number12 index11 alt1">12</div>
<div class="line number13 index12 alt2">13</div>
<div class="line number14 index13 alt1">14</div>
<div class="line number15 index14 alt2">15</div>
<div class="line number16 index15 alt1">16</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#element{</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#36F</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">300px</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">150px</code><code class="css plain">;  </code></div>
<div class="line number6 index5 alt1"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code> <code class="css value">0</code><code class="css plain">;</code></div>
<div class="line number7 index6 alt2"><code class="css spaces">    </code><code class="css keyword">overflow</code><code class="css plain">: </code><code class="css value">auto</code><code class="css plain">;</code></div>
<div class="line number8 index7 alt1"><code class="css plain">}</code></div>
<div class="line number9 index8 alt2"> </div>
<div class="line number10 index9 alt1"><code class="css plain">#anotherelement{</code></div>
<div class="line number11 index10 alt2"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#555</code><code class="css plain">;</code></div>
<div class="line number12 index11 alt1"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">150px</code><code class="css plain">;</code></div>
<div class="line number13 index12 alt2"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">175px</code><code class="css plain">;  </code></div>
<div class="line number14 index13 alt1"><code class="css spaces">    </code><code class="css keyword">position</code><code class="css plain">: </code><code class="css value">relative</code><code class="css plain">;</code></div>
<div class="line number15 index14 alt2"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code><code class="css plain">;</code></div>
<div class="line number16 index15 alt1"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>And the expected output:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/5-1.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/5-1.png" /></div>
<p>And IE's output:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/5-2.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/5-2.png" /></div>
<h3 class="nolinks">The Fix</h3>
<p>The easiest way to fix this annoying bug is to just position the parent element relatively too.</p>
<div>
<div id="highlighter_944258" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
<div class="line number6 index5 alt1">6</div>
<div class="line number7 index6 alt2">7</div>
<div class="line number8 index7 alt1">8</div>
<div class="line number9 index8 alt2">9</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#element{</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#36F</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">300px</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">150px</code><code class="css plain">;  </code></div>
<div class="line number6 index5 alt1"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code> <code class="css value">0</code><code class="css plain">;</code></div>
<div class="line number7 index6 alt2"><code class="css spaces">    </code><code class="css keyword">overflow</code><code class="css plain">: </code><code class="css value">auto</code><code class="css plain">;</code></div>
<div class="line number8 index7 alt1"><code class="css spaces">        </code><code class="css keyword">position</code><code class="css plain">: </code><code class="css value">relative</code><code class="css plain">;</code></div>
<div class="line number9 index8 alt2"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<hr />
<h2 class="nolinks"><span>6.</span> Fixing the Broken Box Model</h2>
<p>Internet Explorer's misinterpretation of the box model is perhaps its unforgivable mistake. IE 6 in semi-standards compliant mode sidesteps this but this issue can still be triggered by quirks mode.</p>
<p>Two div elements. One with the fix applied and one without. The difference in the width and height is the sum of the paddings applied on each side.</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/6.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/6.png" /></div>
<h3 class="nolinks">The Fix</h3>
<p>I am sure the quandary with the box model needs neither explanation nor demonstration so I'll just give you the fix.</p>
<p>The trick is to set the width normally for all standards compliant browsers, target IE5/6 alone and then feed it the corrected width. This is how you'd usually go on about:</p>
<div>
<div id="highlighter_248815" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#element{</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">400px</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">        </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">150px</code><code class="css plain">;  </code></div>
<div class="line number4 index3 alt1"><code class="css spaces">    </code><code class="css keyword">padding</code><code class="css plain">: </code><code class="css value">50px</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>This now changes to:</p>
<div>
<div id="highlighter_765022" class="syntaxhighlighter  html">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
<div class="line number6 index5 alt1">6</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="html plain">#element {</code></div>
<div class="line number2 index1 alt1"><code class="html spaces">    </code><code class="html plain">width: 400px;</code></div>
<div class="line number3 index2 alt2"><code class="html spaces">    </code><code class="html plain">height: 150px;  </code></div>
<div class="line number4 index3 alt1"><code class="html spaces">   </code><code class="html plain">\height: 250px; </code></div>
<div class="line number5 index4 alt2"><code class="html spaces">   </code><code class="html plain">\width: 500px</code></div>
<div class="line number6 index5 alt1"><code class="html plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>Essentially, you add the padding to the original width and feed it to IE 6. The fix targets IE 6 in quirks mode alone so you need not worry about IE 6 in normal mode messing things up.</p>
<hr />
<h2 class="nolinks"><span>7.</span> Setting a Minimum Width and Height</h2>
<p>Setting an minimum height to an element is absolutely imperative when trying to convert a beautiful design into a pixel perfect design. Unfortunately, IE completely ignores the <em>min-height</em> property instead taking the height declared as the minimum height.</p>
<h3 class="nolinks">Fix #1</h3>
<p>The fix is a hack created by <a href="http://www.dustindiaz.com/min-height-fast-hack/">Dustin Diaz</a>. It utilizes the <em>!important</em> declaration to make it work. The snippet looks like so:</p>
<div>
<div id="highlighter_182052" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#element {</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">  </code><code class="css keyword">min-height</code><code class="css plain">:</code><code class="css value">150px</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">  </code><code class="css keyword">height</code><code class="css plain">:</code><code class="css value">auto</code> <code class="css color3">!important</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">  </code><code class="css keyword">height</code><code class="css plain">:</code><code class="css value">150px</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<h3 class="nolinks">Fix #2</h3>
<p>The second way is to take advantage of the fact that IE can't parse child selectors.</p>
<div>
<div id="highlighter_581872" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
<div class="line number6 index5 alt1">6</div>
<div class="line number7 index6 alt2">7</div>
<div class="line number8 index7 alt1">8</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#element {</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">min-height</code><code class="css plain">: </code><code class="css value">150px</code><code class="css plain">; </code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">150px</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css plain">}</code></div>
<div class="line number5 index4 alt2"><code class="css spaces">   </code> </div>
<div class="line number6 index5 alt1"><code class="css plain">html&gt;body #element { </code></div>
<div class="line number7 index6 alt2"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">auto</code><code class="css plain">;</code></div>
<div class="line number8 index7 alt1"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<hr />
<h2 class="nolinks"><span>8.</span> Floated Layout Misbehaving</h2>
<p>One of the important concepts of building table-less layouts using CSS is floating elements. In most cases, IE6 handles this with aplomb but in certain cases it fumbles. When faced with unbreakable content or elements whose width exceeds its parent's width, it causes havoc with the layouts. Let me show you.</p>
<p>Consider this piece of code:</p>
<div>
<div id="highlighter_440721" class="syntaxhighlighter  html">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="html plain">&lt;</code><code class="html keyword">div</code> <code class="html color1">id</code><code class="html plain">=</code><code class="html string">"container"</code><code class="html plain">&gt;</code></div>
<div class="line number2 index1 alt1"><code class="html spaces">    </code><code class="html plain">&lt;</code><code class="html keyword">div</code> <code class="html color1">id</code><code class="html plain">=</code><code class="html string">"element"</code><code class="html plain">&gt;<a href="http://net.tutsplus.com/">http://net.tutsplus.com/</a>&lt;/</code><code class="html keyword">div</code><code class="html plain">&gt;</code></div>
<div class="line number3 index2 alt2"><code class="html spaces">    </code><code class="html plain">&lt;</code><code class="html keyword">div</code> <code class="html color1">id</code><code class="html plain">=</code><code class="html string">"anotherelement"</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">div</code><code class="html plain">&gt;</code></div>
<div class="line number4 index3 alt1"><code class="html plain">&lt;/</code><code class="html keyword">div</code><code class="html plain">&gt;</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div>
<div id="highlighter_431576" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">01</div>
<div class="line number2 index1 alt1">02</div>
<div class="line number3 index2 alt2">03</div>
<div class="line number4 index3 alt1">04</div>
<div class="line number5 index4 alt2">05</div>
<div class="line number6 index5 alt1">06</div>
<div class="line number7 index6 alt2">07</div>
<div class="line number8 index7 alt1">08</div>
<div class="line number9 index8 alt2">09</div>
<div class="line number10 index9 alt1">10</div>
<div class="line number11 index10 alt2">11</div>
<div class="line number12 index11 alt1">12</div>
<div class="line number13 index12 alt2">13</div>
<div class="line number14 index13 alt1">14</div>
<div class="line number15 index14 alt2">15</div>
<div class="line number16 index15 alt1">16</div>
<div class="line number17 index16 alt2">17</div>
<div class="line number18 index17 alt1">18</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#element, #anotherelement{</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#36F</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">100px</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css spaces">    </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value">150px</code><code class="css plain">;  </code></div>
<div class="line number6 index5 alt1"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code><code class="css plain">;</code></div>
<div class="line number7 index6 alt2"><code class="css spaces">    </code><code class="css keyword">padding</code><code class="css plain">: </code><code class="css value">10px</code><code class="css plain">;</code></div>
<div class="line number8 index7 alt1"><code class="css spaces">    </code><code class="css keyword">float</code><code class="css plain">: </code><code class="css value">left</code><code class="css plain">;</code></div>
<div class="line number9 index8 alt2"><code class="css plain">}</code></div>
<div class="line number10 index9 alt1"> </div>
<div class="line number11 index10 alt2"><code class="css plain">#container{</code></div>
<div class="line number12 index11 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#C2DFEF</code><code class="css plain">;</code></div>
<div class="line number13 index12 alt2"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#36F</code><code class="css plain">;</code></div>
<div class="line number14 index13 alt1"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">365px</code><code class="css plain">;   </code></div>
<div class="line number15 index14 alt2"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code><code class="css plain">;</code></div>
<div class="line number16 index15 alt1"><code class="css spaces">    </code><code class="css keyword">padding</code><code class="css plain">: </code><code class="css value">5px</code><code class="css plain">;</code></div>
<div class="line number17 index16 alt2"><code class="css spaces">    </code><code class="css keyword">overflow</code><code class="css plain">: </code><code class="css value">auto</code><code class="css plain">;</code></div>
<div class="line number18 index17 alt1"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>The expected output as viewed on a standards compliant browser:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/8-1.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/8-1.png" /></div>
<p>In IE:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/8-2.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/8-2.png" /></div>
<p>As you can see, the first div expands itself to fit the content which ultimately breaks the layout.</p>
<h3 class="nolinks">The Fix</h3>
<p>There is no elegant fix for this bug. The only way to save the layout is to apply <em>overflow: hidden</em> to the element but at the cost of clipping the unbreakable content. The layout will be saved but the extra content won't.</p>
<div>
<div id="highlighter_97904" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
<div class="line number6 index5 alt1">6</div>
<div class="line number7 index6 alt2">7</div>
<div class="line number8 index7 alt1">8</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">#element{</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#C2DFEF</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">solid</code> <code class="css value">1px</code> <code class="css value">#36F</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">    </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">365px</code><code class="css plain">;   </code></div>
<div class="line number5 index4 alt2"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">30px</code><code class="css plain">;</code></div>
<div class="line number6 index5 alt1"><code class="css spaces">    </code><code class="css keyword">padding</code><code class="css plain">: </code><code class="css value">5px</code><code class="css plain">;</code></div>
<div class="line number7 index6 alt2"><code class="css spaces">    </code><code class="css keyword">overflow</code><code class="css plain">: </code><code class="css value">hidden</code><code class="css plain">;</code></div>
<div class="line number8 index7 alt1"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<hr />
<h2 class="nolinks"><span>9.</span> Space Between List Items</h2>
<p>IE 6 adds vertical spacing even none is specified in specific cases. Let's look at the code first.</p>
<div>
<div id="highlighter_54172" class="syntaxhighlighter  html">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="html plain">&lt;</code><code class="html keyword">ul</code><code class="html plain">&gt;</code></div>
<div class="line number2 index1 alt1"><code class="html spaces"> </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt;&lt;</code><code class="html keyword">a</code> <code class="html color1">href</code><code class="html plain">=</code><code class="html string">"#"</code><code class="html plain">&gt;Link 1&lt;/</code><code class="html keyword">a</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code></div>
<div class="line number3 index2 alt2"><code class="html spaces"> </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt;&lt;</code><code class="html keyword">a</code> <code class="html color1">href</code><code class="html plain">=</code><code class="html string">"#"</code><code class="html plain">&gt;Link 2&lt;/</code><code class="html keyword">a</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code></div>
<div class="line number4 index3 alt1"><code class="html spaces"> </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt;&lt;</code><code class="html keyword">a</code> <code class="html color1">href</code><code class="html plain">=</code><code class="html string">"#"</code><code class="html plain">&gt;Link 3&lt;/</code><code class="html keyword">a</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code></div>
<div class="line number5 index4 alt2"><code class="html plain">&lt;/</code><code class="html keyword">ul</code><code class="html plain">&gt;</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div>
<div id="highlighter_851980" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">01</div>
<div class="line number2 index1 alt1">02</div>
<div class="line number3 index2 alt2">03</div>
<div class="line number4 index3 alt1">04</div>
<div class="line number5 index4 alt2">05</div>
<div class="line number6 index5 alt1">06</div>
<div class="line number7 index6 alt2">07</div>
<div class="line number8 index7 alt1">08</div>
<div class="line number9 index8 alt2">09</div>
<div class="line number10 index9 alt1">10</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">ul {</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">margin</code><code class="css plain">:</code><code class="css value">0</code><code class="css plain">; </code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">padding</code><code class="css plain">:</code><code class="css value">0</code><code class="css plain">; </code></div>
<div class="line number4 index3 alt1"><code class="css spaces">    </code><code class="css keyword">list-style</code><code class="css plain">:</code><code class="css value">none</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css plain">}</code></div>
<div class="line number6 index5 alt1"> </div>
<div class="line number7 index6 alt2"><code class="css plain">li a {</code></div>
<div class="line number8 index7 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number9 index8 alt2"><code class="css spaces">    </code><code class="css keyword">display</code><code class="css plain">: </code><code class="css value">block</code><code class="css plain">;</code></div>
<div class="line number10 index9 alt1"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>What it should look like:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/9-1.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/9-1.png" /></div>
<p>What IE gives us:</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/494_ie/images/9-2.png" alt="Tutorial Image" border="0" data-original-url="http://nettuts.s3.amazonaws.com/494_ie/images/9-2.png" /></div>
<p>Fortunately, there are a plethora of fixes you could try.</p>
<h3 class="nolinks">Fix #1</h3>
<p>The easiest way out is to just define a width for the anchor tags and voila! everything renders as it should. Declaring a width triggers the element's IE specific <em>hasLayout</em> property. You could instead define a height if you want to.</p>
<div>
<div id="highlighter_144907" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">li a {</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">display</code><code class="css plain">: </code><code class="css value">block</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">        </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">200px</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<h3 class="nolinks">Fix #2</h3>
<p>The next method is to just float the anchor left and then clearing it.</p>
<div>
<div id="highlighter_948865" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
<div class="line number4 index3 alt1">4</div>
<div class="line number5 index4 alt2">5</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">li a {</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#95CFEF</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css spaces">    </code><code class="css keyword">float</code><code class="css plain">: </code><code class="css value">left</code><code class="css plain">;</code></div>
<div class="line number4 index3 alt1"><code class="css spaces">        </code><code class="css keyword">clear</code><code class="css plain">: </code><code class="css value">left</code><code class="css plain">;</code></div>
<div class="line number5 index4 alt2"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="post__inarticle-ad-template" style="margin-top: 30px;">
<div class="ad view">
<div class="ad__wrapper">
<div id="div-gpt-1392179526912-0" class="ad__content" style="height: 250px; width: 300px;">
<div id="google_ads_iframe_/11757429/hub_development_inarticle_0__container__" style="border-width: 0pt;"><iframe src="javascript:&quot;&lt;html&gt;&lt;body style='background:transparent'&gt;&lt;/body&gt;&lt;/html&gt;&quot;" style="vertical-align: bottom; border-width: 0px;" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe></div>
<iframe src="javascript:&quot;&lt;html&gt;&lt;body style='background:transparent'&gt;&lt;/body&gt;&lt;/html&gt;&quot;" style="vertical-align: bottom; display: none; visibility: hidden; border-width: 0px;" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe></div>
<div class="ad__label">Advertisement</div>
</div>
</div>
</div>
<h3 class="nolinks">Fix #3</h3>
<p>The third method is to add <em>display: inline</em> to the enclosing <em>li</em> element. This also fixes the double margin bug as noted above.</p>
<div>
<div id="highlighter_422843" class="syntaxhighlighter  css">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter">
<div class="line number1 index0 alt2">1</div>
<div class="line number2 index1 alt1">2</div>
<div class="line number3 index2 alt2">3</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="css plain">li {</code></div>
<div class="line number2 index1 alt1"><code class="css spaces">    </code><code class="css keyword">display</code><code class="css plain">: </code><code class="css value">inline</code><code class="css plain">;</code></div>
<div class="line number3 index2 alt2"><code class="css plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<hr />
<h2 class="nolinks">Conclusion</h2>
<p>And there you have it: the nine most common IE rendering bugs, and how to squash them. Hopefully this has saved you some blood, sweat and tears while debugging your next creation. I'll be watching the comments section frequently; so chime in here if you are having difficulties implementing the fixes noted here.</p>
<p> </p>
{% endraw %}