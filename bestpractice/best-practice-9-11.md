---
layout: page
title: 《Web前端开发最佳实践》第九章 引用11
fullview: false
---

<p>《Web前端开发最佳实践》第九章 引用11：JavaScript Micro-Templating</p>
<p>来源：<a title="http://ejohn.org/blog/javascript-micro-templating/" href="http://ejohn.org/blog/javascript-micro-templating/">http://ejohn.org/blog/javascript-micro-templating/</a></p>
<div class="postentry">
<p>I’ve had a little utility that I’ve been kicking around for some time now that I’ve found to be quite useful in my JavaScript application-building endeavors. It’s a super-simple templating function that is fast, caches quickly, and is easy to use. I have a couple tricks that I use to make it real fun to mess with.</p>
<p>Here’s the source code to the templating function (a more-refined version of this code will be in my upcoming book <a href="http://jsninja.com/">Secrets of the JavaScript Ninja</a>):</p>
<div id="ig-sh-1" class="syntax_hilite">
<div class="code"><ol class="javascript" style="font-family: monospace;">
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">// Simple JavaScript Templating</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">// John Resig - http://ejohn.org/ - MIT Licensed</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">(function(){</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">  var cache = {};</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;"> </div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">  this.tmpl = function tmpl(str, data){</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">    // Figure out if we're getting a template, or if we need to</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">    // load the template - and be sure to cache the result.</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">    var fn = !/\W/.test(str) ?</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">      cache[str] = cache[str] ||</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">        tmpl(document.getElementById(str).innerHTML) :</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">     </div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">      // Generate a reusable function that will serve as a template</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">      // generator (and which will be cached).</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">      new Function("obj",</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">        "var p=[],print=function(){p.push.apply(p,arguments);};" +</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">       </div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">        // Introduce the data as local variables using with(){}</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">        "with(obj){p.push('" +</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">       </div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">        // Convert the template into pure JavaScript</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">        str</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">          .replace(/[\r\t\n]/g, " ")</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">          .split("&lt;%").join("\t")</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">          .replace(/((^|%&gt;)[^\t]*)'/g, "$1\r")</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">          .replace(/\t=(.*?)%&gt;/g, "',$1,'")</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">          .split("\t").join("');")</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">          .split("%&gt;").join("p.push('")</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">          .split("\r").join("\\'")</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">      + "');}return p.join('');");</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">   </div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">    // Provide some basic currying to the user</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">    return data ? fn( data ) : fn;</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">  };</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">})();</div>
</li>
</ol></div>
</div>
<p>You would use it against templates written like this (it doesn’t have to be in this particular manner – but it’s a style that I enjoy):</p>
<div id="ig-sh-2" class="syntax_hilite">
<div class="code"><ol class="html4strict" style="font-family: monospace;">
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;"><span style="color: #009900;">&lt;<span style="font-weight: bold; color: #000000;">script</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"text/html"</span> <span style="color: #000066;">id</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"item_tmpl"</span>&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">  <span style="color: #009900;">&lt;<span style="font-weight: bold; color: #000000;">div</span> <span style="color: #000066;">id</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"&lt;%=id%&gt;</span></span>" class="<span style="color: #009900;">&lt;%<span style="color: #66cc66;">=</span><span style="color: #66cc66;">(</span>i % <span style="color: #cc66cc;">2</span> <span style="color: #66cc66;">==</span> <span style="color: #cc66cc;">1</span> ? <span style="color: #ff0000;">" even"</span> : <span style="color: #ff0000;">""</span><span style="color: #66cc66;">)</span>%&gt;</span>"&gt;</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">    <span style="color: #009900;">&lt;<span style="font-weight: bold; color: #000000;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"grid_1 alpha right"</span>&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">      <span style="color: #009900;">&lt;<span style="font-weight: bold; color: #000000;">img</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"righted"</span> <span style="color: #000066;">src</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"&lt;%=profile_image_url%&gt;</span></span>"/&gt;</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">    <span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="font-weight: bold; color: #000000;">div</span>&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">    <span style="color: #009900;">&lt;<span style="font-weight: bold; color: #000000;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"grid_6 omega contents"</span>&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">      <span style="color: #009900;">&lt;<span style="font-weight: bold; color: #000000;">p</span>&gt;&lt;<span style="font-weight: bold; color: #000000;">b</span>&gt;&lt;<span style="font-weight: bold; color: #000000;">a</span> <span style="color: #000066;">href</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"/&lt;%=from_user%&gt;</span></span>"&gt;<span style="color: #009900;">&lt;%<span style="color: #66cc66;">=</span>from_user%&gt;&lt;<span style="color: #66cc66;">/</span><span style="font-weight: bold; color: #000000;">a</span>&gt;</span>:<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="font-weight: bold; color: #000000;">b</span>&gt;</span> <span style="color: #009900;">&lt;%<span style="color: #66cc66;">=</span>text%&gt;&lt;<span style="color: #66cc66;">/</span><span style="font-weight: bold; color: #000000;">p</span>&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">    <span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="font-weight: bold; color: #000000;">div</span>&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">  <span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="font-weight: bold; color: #000000;">div</span>&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;"><span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="font-weight: bold; color: #000000;">script</span>&gt;</span></div>
</li>
</ol></div>
</div>
<p>You can also inline script:</p>
<div id="ig-sh-3" class="syntax_hilite">
<div class="code"><ol class="html4strict" style="font-family: monospace;">
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;"><span style="color: #009900;">&lt;<span style="font-weight: bold; color: #000000;">script</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"text/html"</span> <span style="color: #000066;">id</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"user_tmpl"</span>&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">  <span style="color: #009900;">&lt;% <span style="color: #000066;">for</span> <span style="color: #66cc66;">(</span> var i <span style="color: #66cc66;">=</span> <span style="color: #cc66cc;">0</span>; i &lt; users.length; i++ <span style="color: #66cc66;">)</span> <span style="color: #66cc66;">{</span> %&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">    <span style="color: #009900;">&lt;<span style="font-weight: bold; color: #000000;">li</span>&gt;&lt;<span style="font-weight: bold; color: #000000;">a</span> <span style="color: #000066;">href</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"&lt;%=users[i].url%&gt;</span></span>"&gt;<span style="color: #009900;">&lt;%<span style="color: #66cc66;">=</span>users<span style="color: #66cc66;">[</span>i<span style="color: #66cc66;">]</span>.name%&gt;&lt;<span style="color: #66cc66;">/</span><span style="font-weight: bold; color: #000000;">a</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="font-weight: bold; color: #000000;">li</span>&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">  <span style="color: #009900;">&lt;% <span style="color: #66cc66;">}</span> %&gt;</span></div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;"><span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="font-weight: bold; color: #000000;">script</span>&gt;</span></div>
</li>
</ol></div>
</div>
<p>Quick tip: Embedding scripts in your page that have a unknown content-type (such is the case here – the browser doesn’t know how to execute a text/html script) are simply ignored by the browser – and by search engines and screenreaders. It’s a perfect cloaking device for sneaking templates into your page. I like to use this technique for quick-and-dirty cases where I just need a little template or two on the page and want something light and fast.</p>
<p>and you would use it from script like so:</p>
<div id="ig-sh-4" class="syntax_hilite">
<div class="code"><ol class="javascript" style="font-family: monospace;">
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">var results = document.getElementById("results");</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">results.innerHTML = tmpl("item_tmpl", dataObject);</div>
</li>
</ol></div>
</div>
<p>You could pre-compile the results for later use. If you call the templating function with only an ID (or a template code) then it’ll return a pre-compiled function that you can execute later:</p>
<div id="ig-sh-5" class="syntax_hilite">
<div class="code"><ol class="javascript" style="font-family: monospace;">
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">var show_user = tmpl("item_tmpl"), html = "";</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">for ( var i = 0; i &lt; users.length; i++ ) {</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">  html += show_user( users[i] );</div>
</li>
<li style="vertical-align: top; font-weight: normal;">
<div style="vertical-align: top; background: none transparent scroll repeat 0% 0%; font: 1em/1.2em monospace; margin: 0px; padding: 0px;">}</div>
</li>
</ol></div>
</div>
<p>The biggest falling-down of the method, at this point, is the parsing/conversion code – it could probably use a little love. It does use one technique that I enjoy, though: If you’re searching and replacing through a string with a static search and a static replace it’s faster to perform the action with <code>.split("match").join("replace")</code> – which seems counter-intuitive but it manages to work that way in most modern browsers. (There are changes going in place to grossly improve the performance of <code>.replace(/match/g, "replace")</code> in the next version of Firefox – so the previous statement won’t be the case for long.)</p>
<p>Feel free to have fun with it – I’d be very curious to see what mutations occur with the script. Since it’s so simple it seems like there’s a lot that can still be done with it.</p>
</div>