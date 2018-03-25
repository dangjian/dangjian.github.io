---
layout: page
title: 《Web前端开发最佳实践》第十二章 引用11
fullview: false
---

{% raw %} 
<p>《Web前端开发最佳实践》第十二章 引用11：Convert a Menu to a Dropdown for Small Screens</p>
<p>来源：<a title="http://css-tricks.com/convert-menu-to-dropdown/" href="http://css-tricks.com/convert-menu-to-dropdown/">http://css-tricks.com/convert-menu-to-dropdown/</a></p>
<div class="google-ad">
<div id="bsap_1279518" class="bsap_1279518 bsap"> </div>
<div class="bsap_1279518 bsap">The <a href="http://www.fivesimplesteps.com/">Five Simple Steps</a> website has a responsive design with a neat feature. When the browser window is narrow, the menu in the upper right converts from a regular row of links into a dropdown menu.</div>
</div>
<p><img class="alignnone size-full wp-image-13304" title="fivesimplesteps" src="http://cdn.css-tricks.com/wp-content/uploads/2011/07/fivesimplesteps.jpg" alt="" width="570" height="418" /></p>
<p>When you're on a small screen (iPhone shown here) and click the dropdown, you get an interface to select an option where each option is nice and big and easy to choose.</p>
<p><img class="alignnone size-full wp-image-13305" title="iphoneselect" src="http://cdn.css-tricks.com/wp-content/uploads/2011/07/iphoneselect.png" alt="" width="400" height="600" /></p>
<p>That sure makes it easier to pick a place to go than a tiny link. Yeah, it's two taps instead of one, but that's arguable since you'd probably have to zoom in to tap the right link otherwise.</p>
<h3>The HTML</h3>
<p>The HTML for these two menus is different. As far as I know, you can't style <code>&lt;select&gt;</code> and <code>&lt;option&gt;</code> elements to look and behave like <code>&lt;a&gt;</code>s or vice versa. So we need both. You could just put both in the markup. That's what Five Simple Steps does:</p>
<pre class="HTML"><code>&lt;nav&gt; &lt;ul&gt; &lt;li&gt;&lt;a href="/" class="active"&gt;Home&lt;/a&gt;&lt;/li&gt; &lt;li&gt;&lt;a href="/collections/all"&gt;Books&lt;/a&gt;&lt;/li&gt; &lt;li&gt;&lt;a href="/blogs/five-simple-steps-blog"&gt;Blog&lt;/a&gt;&lt;/li&gt; &lt;li&gt;&lt;a href="/pages/about-us"&gt;About Us&lt;/a&gt;&lt;/li&gt; &lt;li&gt;&lt;a href="/pages/support"&gt;Support&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt; &lt;select&gt; &lt;option value="" selected="selected"&gt;Select&lt;/option&gt; &lt;option value="/"&gt;Home&lt;/option&gt; &lt;option value="/collections/all"&gt;Books&lt;/option&gt; &lt;option value="/blogs/five-simple-steps-blog"&gt;Blog&lt;/option&gt; &lt;option value="/pages/about-us"&gt;About Us&lt;/option&gt; &lt;option value="/pages/support"&gt;Support&lt;/option&gt; &lt;/select&gt; &lt;/nav&gt;</code></pre>
<p>Let's go with that for now.</p>
<h3>The CSS</h3>
<p>By default we'll hide the select menu with <code>display: none;</code>. This is actually good for accessibility, as it will hide the redundant menu from screen readers.</p>
<pre><code>nav select { display: none; }</code></pre>
<p>Then using media queries, we'll do the switcheroo at some specific width. You can determine that on your own (<a href="http://css-tricks.com/snippets/css/media-queries-for-standard-devices/">here's some standard breakpoints</a>).</p>
<pre><code>@media (max-width: 960px) { nav ul { display: none; } nav select { display: inline-block; } }</code></pre>
<h3>But now you gotta maintain two menus?</h3>
<p>Well yeah, that's one concern. Maybe your menus are created dynamically and you can't control the output easily. Maybe you and hand crafting menus but want to make sure you don't accidentally get your menus out of sync. One way we can fight this is to dynamically create the dropdown menu from the original.</p>
<p>Using jQuery, we can do that with just a few lines of code:</p>
<pre><code>// Create the dropdown base $("&lt;select /&gt;").appendTo("nav"); // Create default option "Go to..." $("&lt;option /&gt;", { "selected": "selected", "value" : "", "text" : "Go to..." }).appendTo("nav select"); // Populate dropdown with menu items $("nav a").each(function() { var el = $(this); $("&lt;option /&gt;", { "value" : el.attr("href"), "text" : el.text() }).appendTo("nav select"); });</code></pre>
<p>Then to make the dropdown menu actually work...</p>
<pre><code>$("nav select").change(function() { window.location = $(this).find("option:selected").val(); });</code></pre>
<h3>But aren't dropdown menus kinda obtrusive?</h3>
<p>Kinda. Most small screens these days are mobile and most mobile devices are JavaScript friendly, so not a huge concern. But, if you want to ensure this works with or without JavaScript <a href="http://css-tricks.com/4064-unobtrusive-page-changer/">I have an article about that</a>.</p>
<h3>Demo &amp; Download</h3>
<p><a class="button" href="http://css-tricks.com/examples/ConvertMenuToDropdown/">View Demo</a>   <a class="button" href="http://css-tricks.com/examples/ConvertMenuToDropdown.zip">Download Files</a></p>
<h3>Video</h3>
<p>Quick video example in case you are reading this from somewhere you can't adjust the browser size and play with it to see what the heck we're talking about here.</p>
<div class="fluid-width-video-wrapper" style="padding-top: 62.32%;"><iframe src="http://www.youtube.com/embed/lq47ihlTj6I?rel=0&amp;hd=1" frameborder="0"></iframe></div>
<p> </p>
<h3>Variations</h3>
<ul>
<li><a href="http://css-tricks.com/examples/ConvertMenuToDropdown/optgroup.php">A variation of the same concept</a>, where there is nested menus and it makes optgroups in the select based on the parent/child relationships.</li>
<li><a href="http://jsfiddle.net/bloqhead/Kq43X/">Submenu's with a dash</a> by Daryn St. Pierre</li>
</ul>
{% endraw %}