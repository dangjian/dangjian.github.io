---
layout: page
title: 《Web前端开发最佳实践》第六章 引用4
fullview: false
---

{% raw %} 
<p>《Web前端开发最佳实践》第六章 引用4：NO CSS RESET</p>
<p>来源：<a title="http://snook.ca/archives/html_and_css/no_css_reset" href="http://snook.ca/archives/html_and_css/no_css_reset">http://snook.ca/archives/html_and_css/no_css_reset</a></p>
<p>When asked recently about using a CSS reset stylesheet, I readily admitted that I don't use them. I don't use them for my blog or for any project that I work on. Admitting such can raise an eyebrow or two. Reset stylesheets are definitely becoming commonplace — as you'd expect with companies like Yahoo and industry leaders like Eric Meyer actively using them.</p>
<p>So, why haven't I jumped on board?</p>
<p>What is a CSS Reset?<br />In case you've never heard of such a thing, a CSS Reset is designed to set a number of element styles to a specific baseline that creates consistency across various browsers.</p>
<p>In the beginning</p>
<p>When the idea of a reset style was first introduced, it was very basic. It reset the margin and padding for all elements. The problem with that was it caused havoc with elements that didn't want their margins or padding reset (namely, form elements).</p>
<p>* { margin:0; padding:0; }<br />From there, people worked on adding to and fine-tuning the reset stylesheet to be more flexible and to reset more styles. The Meyer reset is probably the finest culmination of this effort.</p>
<p>Eric Meyer's Reset</p>
<p>Eric Meyer's reset took the concept of resetting margin and padding and took it to a whole new level, stripping styles from a number of elements, forcing you to think about what you wanted and add them back in. List items would no longer have bullets, headings would no longer be bolded, and most elements would be stripped of their margin and padding, along with some other changes.</p>
<p>Working with Nothing<br />The problem I've had with these resets is that I then find myself declaring much more than I ever needed to just to get browsers back to rendering things the way I want. As it turns out, I'm perfectly happy with how a number of elements render by default. I like lists to have bullets and strong elements to have bolded text.</p>
<p>And I'm okay if the various browsers show things slightly differently.</p>
<p>I'm okay if one browser displays an H1 a few pixels larger or smaller than other browsers. If one browser defaults to circle bullets and another to squares, that's usually not a problem. If it is, then I create a style that addresses that specific issue. I don't reset it back to zero and then set it again to what I really want.</p>
<p>One of the principles I took away from the Web Standards community was the concept that pixel perfect precision across the various rendering engines was impractical and a remnant of the table-based layouts of yesteryear. With CSS and progressive enhancement, it was okay that things might look a little different from one browser to the next because of variations in what they supported.</p>
<p>Building up<br />With that said, the idea of developing a base CSS file that defines some common styles that I often want from project to project — like turning off margin and padding for form elements — is a good idea.</p>
<p>We're seeing various CSS frameworks crop up such as Blueprint, YUI and 960.gs. Each breaking the system down only to build it back up again. Each starts with a reset, then adds on typography and a grid system.</p>
<p>Each of those still seem like more than I need, even though none are that large in size. Blueprint is the heaviest at around 13KB uncompressed but also includes lots of extras like styles for error messages and a print stylesheet.</p>
<p>Less is more<br />One of these days I'll put together my own base CSS or maybe I won't. To date, I haven't felt myself being overly repetitive in the styles that I set; and I haven't thought to myself, "oh, the hours I'd save myself if only I had a reset stylesheet."</p>
<p>So, while I have nothing against CSS reset stylesheets, I simply don't use them personally and I think that's okay.</p>
{% endraw %}