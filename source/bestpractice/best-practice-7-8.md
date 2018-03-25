---
layout: page
title: 《Web前端开发最佳实践》第七章 引用8
fullview: false
---

{% raw %} 
<p>《Web前端开发最佳实践》第七章 引用8：don’t use @import</p>
<p>来源：<a title="http://blog.vlad1.com/2009/06/22/to-sprite-or-not-to-sprite" href="http://blog.vlad1.com/2009/06/22/to-sprite-or-not-to-sprite">http://blog.vlad1.com/2009/06/22/to-sprite-or-not-to-sprite</a></p>
<div id="post-291" class="post-291 post type-post status-publish format-standard hentry category-browsers category-hpws category-internet-explorer tag-import tag-browsers tag-css tag-ie tag-link tag-performance">
<p>In Chapter 5 of <em><a href="http://www.amazon.com/dp/0596529309?tag=stevsoud-20&amp;camp=14573&amp;creative=327641&amp;linkCode=as1&amp;creativeASIN=0596529309&amp;adid=1S1KP4EV129EN37422C0&amp;">High Performance Web Sites</a></em>, I briefly mention that @import has a negative impact on web page performance. I dug into this deeper for my talk at <a href="http://www.web2expo.com/webexsf2009/public/schedule/detail/5889">Web 2.0 Expo</a>, creating several test pages and HTTP waterfall charts, all shown below. The bottomline is: use LINK instead of @import if you want stylesheets to download in parallel resulting in a faster page.</p>
<h4>LINK vs. @import</h4>
<p>There are two ways to include a stylesheet in your web page. You can use the LINK tag:</p>
<pre style="padding-left: 30px;">&lt;link rel='stylesheet' href='a.css'&gt;</pre>
<p>Or you can use the @import rule:</p>
<pre style="padding-left: 30px;">&lt;style&gt;
@import url('a.css');
&lt;/style&gt;</pre>
<p>I prefer using LINK for simplicity—you have to remember to put @import at the top of the style block or else it won’t work. It turns out that avoiding @import is better for performance, too.</p>
<h4>@import @import</h4>
<p>I’m going to walk through the different ways LINK and @import can be used. In these examples, there are two stylesheets: a.css and b.css. Each stylesheet is configured to take two seconds to download to make it easier to see the performance impact. The first example uses @import to pull in these two stylesheets. In this example, called <a href="http://stevesouders.com/tests/atimport/import-import.php">@import @import</a>, the HTML document contains the following style block:</p>
<pre style="padding-left: 30px;">&lt;style&gt;
@import url('a.css');
@import url('b.css');
&lt;/style&gt;</pre>
<p>If you always use @import in this way, there are no performance problems, although we’ll see below it could result in JavaScript errors due to race conditions. The two stylesheets are downloaded in parallel, as shown in Figure 1. (The first tiny request is the HTML document.) The problems arise when @import is embedded in other stylesheets or is used in combination with LINK.</p>
<div style="padding-left: 30px;">
<div class="wp-caption alignnone" style="width: 241px;"><img title="@import @import" src="http://stevesouders.com/tests/atimport/import-import.gif" alt="Figure 1" width="231" height="40" />
<p class="wp-caption-text">Figure 1. always using @import is okay</p>
</div>
</div>
<h4>LINK @import</h4>
<p>The <a href="http://stevesouders.com/tests/atimport/link-import.php">LINK @import</a> example uses LINK for a.css, and @import for b.css:</p>
<pre style="padding-left: 30px;">&lt;link rel='stylesheet' type='text/css' href='a.css'&gt;
&lt;style&gt;
@import url('b.css');
&lt;/style&gt;</pre>
<p>In IE (tested on 6, 7, and 8), this causes the stylesheets to be downloaded sequentially, as shown in Figure 2. Downloading resources in parallel is key to a faster page. As shown here, this behavior in IE causes the page to take a longer time to finish.</p>
<div style="padding-left: 30px;">
<div class="wp-caption alignnone" style="width: 453px;"><img title="link @import" src="http://stevesouders.com/tests/atimport/link-import.gif" alt="Figure 2. link mixed with @import breaks parallel downloads in IE" width="443" height="40" />
<p class="wp-caption-text">Figure 2. link mixed with @import breaks parallel downloads in IE</p>
</div>
</div>
<h4>LINK with @import</h4>
<p>In the <a href="http://stevesouders.com/tests/atimport/link-with-import.php">LINK with @import</a> example, a.css is inserted using LINK, and a.css has an @import rule to pull in b.css:</p>
<div style="padding-left: 30px;">in the HTML document:</div>
<pre style="padding-left: 30px; margin-top: 0px;">&lt;link rel='stylesheet' type='text/css' href='a.css'&gt;</pre>
<div style="padding-left: 30px;">in a.css:</div>
<pre style="padding-left: 30px; margin-top: 0px;">@import url('b.css');</pre>
<p>This pattern also prevents the stylesheets from loading in parallel, but this time it happens on all browsers. When we stop and think about it, we shouldn’t be too surprised. The browser has to download a.css and parse it. At that point, the browser sees the @import rule and starts to fetch b.css.</p>
<div style="padding-left: 30px;">
<div class="wp-caption alignnone" style="width: 453px;"><img title="link with @import" src="http://stevesouders.com/tests/atimport/link-with-import.gif" alt="using @import from within a LINKed stylesheet breaks parallel downloads in all browsers" width="443" height="40" />
<p class="wp-caption-text">Figure 3. using @import from within a LINKed stylesheet breaks parallel downloads in all browsers</p>
</div>
</div>
<h4>LINK blocks @import</h4>
<p>A slight variation on the previous example with surprising results in IE: LINK is used for a.css and for a new stylesheet called proxy.css. proxy.css is configured to return immediately; it contains an @import rule for b.css.</p>
<div style="padding-left: 30px;">in the HTML document:</div>
<pre style="padding-left: 30px; margin-top: 0px;">&lt;link rel='stylesheet' type='text/css' href='a.css'&gt;
&lt;link rel='stylesheet' type='text/css' href='proxy.css'&gt;</pre>
<div style="padding-left: 30px;">in proxy.css:</div>
<pre style="padding-left: 30px; margin-top: 0px;">@import url('b.css');</pre>
<p>The results of this example in IE, <a href="http://stevesouders.com/tests/atimport/link-blocks-import.php">LINK blocks @import</a>, are shown in Figure 4. The first request is the HTML document. The second request is a.css (two seconds). The third (tiny) request is proxy.css. The fourth request is b.css (two seconds). Surprisingly, IE won’t start downloading b.css until a.css finishes. In all other browsers, this blocking issue doesn’t occur, resulting in a faster page as shown in Figure 5.</p>
<div style="margin-left: 30px;">
<div class="wp-caption alignnone" style="width: 451px;"><img title="link blocks @import" src="http://stevesouders.com/tests/atimport/link-blocks-import.gif" alt="Figure 4. LINK blocks @import embedded in other stylesheets in IE" width="441" height="54" />
<p class="wp-caption-text">Figure 4. LINK blocks @import embedded in other stylesheets in IE</p>
</div>
<div class="wp-caption alignnone" style="width: 269px;"><img title="link block @import not IE" src="http://stevesouders.com/tests/atimport/link-blocks-import-not-ie.gif" alt="Figure 5. LINK doesnt block @import embedded stylesheets in browsers other than IE" width="259" height="54" />
<p class="wp-caption-text">Figure 5. LINK doesn't block @import embedded stylesheets in browsers other than IE</p>
</div>
</div>
<h4>many @imports</h4>
<p>The <a href="http://stevesouders.com/tests/atimport/many-imports.php">many @imports</a> example shows that using @import in IE causes resources to be downloaded in a different order than specified. This example has six stylesheets (each takes two seconds to download) followed by a script (a four second download).</p>
<pre style="padding-left: 30px;">&lt;style&gt;
@import url('a.css');
@import url('b.css');
@import url('c.css');
@import url('d.css');
@import url('e.css');
@import url('f.css');
&lt;/style&gt;
&lt;script src='one.js' type='text/javascript'&gt;&lt;/script&gt;</pre>
<p>Looking at Figure 6, the longest bar is the four second script. Even though it was listed last, it gets downloaded first in IE. If the script contains code that depends on the styles applied from the stylesheets (a la getElementsByClassName, etc.), then unexpected results may occur because the script is loaded before the stylesheets, despite the developer listing it last.</p>
<div style="margin-left: 30px;">
<div class="wp-caption alignnone" style="width: 452px;"><img title="many @imports" src="http://stevesouders.com/tests/atimport/many-imports.gif" alt="Figure 6. @import causes resources to be downloaded out-of-order in IE" width="442" height="110" />
<p class="wp-caption-text">Figure 6. @import causes resources to be downloaded out-of-order in IE</p>
</div>
</div>
<h4>LINK LINK</h4>
<p>It’s simpler and safer to use LINK to pull in stylesheets:</p>
<pre style="padding-left: 30px;">&lt;link rel='stylesheet' type='text/css' href='a.css'&gt;
&lt;link rel='stylesheet' type='text/css' href='b.css'&gt;</pre>
<p>Using LINK ensures that stylesheets will be downloaded in parallel across all browsers. The <a href="http://stevesouders.com/tests/atimport/link-link.php">LINK LINK</a> example demonstrates this, as shown in Figure 7. Using LINK also guarantees resources are downloaded in the order specified by the developer.</p>
<div style="padding-left: 30px;">
<div class="wp-caption alignnone" style="width: 241px;"><img title="link link" src="http://stevesouders.com/tests/atimport/import-import.gif" alt="Figure 7. using link ensures parallel downloads across all browsers" width="231" height="40" />
<p class="wp-caption-text">Figure 7. using link ensures parallel downloads across all browsers</p>
</div>
</div>
<p>These issues need to be addressed in IE. It’s especially bad that resources can end up getting downloaded in a different order. All browsers should implement a small lookahead when downloading stylesheets to extract any @import rules and start those downloads immediately. Until browsers make these changes, I recommend avoiding @import and instead using LINK for inserting stylesheets.</p>
<p><span style="font-size: 1.1em; text-decoration: underline; margin-top: 10px;"><strong>Update: April 10, 2009 1:07 PM</strong></span></p>
<p>Based on questions from the comments, I added two more tests: <a href="http://stevesouders.com/tests/atimport/link-with-imports.php">LINK with @imports</a> and <a href="http://stevesouders.com/tests/atimport/many-links.php">Many LINKs</a>. Each of these insert four stylesheets into the HTML document. <a href="http://stevesouders.com/tests/atimport/link-with-imports.php">LINK with @imports</a> uses LINK to load proxy.css; proxy.css then uses @import to load the four stylesheets. <a href="http://stevesouders.com/tests/atimport/many-links.php">Many LINKs</a> has four LINK tags in the HTML document to pull in the four stylesheets (my recommended approach). The HTTP waterfall charts are shown in Figure 8 and Figure 9.</p>
<div style="padding-left: 30px;">
<div class="wp-caption alignnone" style="width: 515px;"><img title="link with @imports" src="http://stevesouders.com/tests/atimport/link-with-imports.gif" alt="Figure 8. LINK with @imports" width="505" height="96" />
<p class="wp-caption-text">Figure 8. LINK with @imports</p>
</div>
<div class="wp-caption alignnone" style="width: 616px;"><img title="many links" src="http://stevesouders.com/tests/atimport/many-links.gif" alt="Figure 9. Many LINKs" width="606" height="82" />
<p class="wp-caption-text">Figure 9. Many LINKs</p>
</div>
</div>
<p>Looking at <a href="http://stevesouders.com/tests/atimport/link-with-imports.php">LINK with @imports</a>, the first problem is that the four stylesheets don’t start downloading until after proxy.css returns. This happens in all browsers. On the other hand, <a href="http://stevesouders.com/tests/atimport/many-links.php">Many LINKs</a> starts downloading the stylesheets immediately.</p>
<p>The second problem is that IE changes the download order. I added a 10 second script (the really long bar) at the very bottom of the page. In all other browsers, the @import stylesheets (from proxy.css) get downloaded first, and the script is last, exactly the order specified. In IE, however, the script gets inserted before the @import stylesheets, as shown by <a href="http://stevesouders.com/tests/atimport/link-with-imports.php">LINK with @imports</a> in Figure 8. This causes the stylesheets to take longer to download since the long script is using up one of only two connections available in IE 6&amp;7. Since IE won’t render anything in the page until all stylesheets are downloaded, using @import in this way causes the page to be blank for 12 seconds. Using LINK instead of @import preserves the load order, as shown by <a href="http://stevesouders.com/tests/atimport/many-links.php">Many LINKs</a> in Figure 9. Thus, the page renders in 4 seconds.</p>
<p>The load times of these resources are exaggerated to make it easy to see what’s happening. But for people with slow connections, especially those in some of the world’s emerging markets, these response times may not be that far from reality. The takeaways are:</p>
<ul>
<li>Using @import within a stylesheet adds one more roundtrip to the overall download time of the page.</li>
<li>Using @import in IE causes the download order to be altered. This may cause stylesheets to take longer to download, which hinders progress rendering making the page feel slower.</li>
</ul>
</div>
{% endraw %}