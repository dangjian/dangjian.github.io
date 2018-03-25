---
layout: page
title: 《Web前端开发最佳实践》第九章 引用24
fullview: false
---

{% raw %} 
<p>《Web前端开发最佳实践》第九章 引用24：How to Make AJAX Requests With Raw Javascript</p>
<p>来源：<a title="http://code.tutsplus.com/articles/how-to-make-ajax-requests-with-raw-javascript--net-4855" href="http://code.tutsplus.com/articles/how-to-make-ajax-requests-with-raw-javascript--net-4855">http://code.tutsplus.com/articles/how-to-make-ajax-requests-with-raw-javascript--net-4855</a></p>
<div class="post-body__content">
<p>Javascript frameworks have turned simple AJAX functions into one-liners. This is quite incredible, considering the fact that it would require more than twenty to accomplish the same thing with raw Javascript. Nevertheless, it's important to learn what's "under the hood".</p>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/324_ajax/firebug.png" alt="Get Request" data-original-url="http://nettuts.s3.amazonaws.com/324_ajax/firebug.png" /></div>
<h3 class="nolinks">Final Script</h3>
<p>This is a relatively simple script that will allow you to asynchronously request pages by using a "load(URL, CALLBACK)" function.</p>
<div>
<div id="highlighter_931703" class="syntaxhighlighter  javascript">
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
<div class="line number19 index18 alt2">19</div>
<div class="line number20 index19 alt1">20</div>
<div class="line number21 index20 alt2">21</div>
<div class="line number22 index21 alt1">22</div>
<div class="line number23 index22 alt2">23</div>
<div class="line number24 index23 alt1">24</div>
<div class="line number25 index24 alt2">25</div>
<div class="line number26 index25 alt1">26</div>
<div class="line number27 index26 alt2">27</div>
<div class="line number28 index27 alt1">28</div>
<div class="line number29 index28 alt2">29</div>
<div class="line number30 index29 alt1">30</div>
<div class="line number31 index30 alt2">31</div>
<div class="line number32 index31 alt1">32</div>
<div class="line number33 index32 alt2">33</div>
<div class="line number34 index33 alt1">34</div>
<div class="line number35 index34 alt2">35</div>
<div class="line number36 index35 alt1">36</div>
<div class="line number37 index36 alt2">37</div>
<div class="line number38 index37 alt1">38</div>
<div class="line number39 index38 alt2">39</div>
<div class="line number40 index39 alt1">40</div>
<div class="line number41 index40 alt2">41</div>
<div class="line number42 index41 alt1">42</div>
<div class="line number43 index42 alt2">43</div>
<div class="line number44 index43 alt1">44</div>
<div class="line number45 index44 alt2">45</div>
<div class="line number46 index45 alt1">46</div>
<div class="line number47 index46 alt2">47</div>
<div class="line number48 index47 alt1">48</div>
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="javascript comments">// Our simplified "load" function accepts a URL and CALLBACK parameter.</code></div>
<div class="line number2 index1 alt1"><code class="javascript plain">load(</code><code class="javascript string">'test.txt'</code><code class="javascript plain">, </code><code class="javascript keyword">function</code><code class="javascript plain">(xhr) {</code></div>
<div class="line number3 index2 alt2"><code class="javascript spaces">    </code><code class="javascript plain">document.getElementById(</code><code class="javascript string">'container'</code><code class="javascript plain">).innerHTML = xhr.responseText;</code></div>
<div class="line number4 index3 alt1"><code class="javascript plain">});</code></div>
<div class="line number5 index4 alt2"> </div>
<div class="line number6 index5 alt1"><code class="javascript keyword">function</code> <code class="javascript plain">load(url, callback) {</code></div>
<div class="line number7 index6 alt2"><code class="javascript spaces">        </code><code class="javascript keyword">var</code> <code class="javascript plain">xhr;</code></div>
<div class="line number8 index7 alt1"><code class="javascript spaces">        </code> </div>
<div class="line number9 index8 alt2"><code class="javascript spaces">        </code><code class="javascript keyword">if</code><code class="javascript plain">(</code><code class="javascript keyword">typeof</code> <code class="javascript plain">XMLHttpRequest !== </code><code class="javascript string">'undefined'</code><code class="javascript plain">) xhr = </code><code class="javascript keyword">new</code> <code class="javascript plain">XMLHttpRequest();</code></div>
<div class="line number10 index9 alt1"><code class="javascript spaces">        </code><code class="javascript keyword">else</code> <code class="javascript plain">{</code></div>
<div class="line number11 index10 alt2"><code class="javascript spaces">            </code><code class="javascript keyword">var</code> <code class="javascript plain">versions = [</code><code class="javascript string">"MSXML2.XmlHttp.5.0"</code><code class="javascript plain">, </code></div>
<div class="line number12 index11 alt1"><code class="javascript spaces">                            </code><code class="javascript string">"MSXML2.XmlHttp.4.0"</code><code class="javascript plain">,</code></div>
<div class="line number13 index12 alt2"><code class="javascript spaces">                            </code><code class="javascript string">"MSXML2.XmlHttp.3.0"</code><code class="javascript plain">, </code></div>
<div class="line number14 index13 alt1"><code class="javascript spaces">                            </code><code class="javascript string">"MSXML2.XmlHttp.2.0"</code><code class="javascript plain">,</code></div>
<div class="line number15 index14 alt2"><code class="javascript spaces">                            </code><code class="javascript string">"Microsoft.XmlHttp"</code><code class="javascript plain">]</code></div>
<div class="line number16 index15 alt1"> </div>
<div class="line number17 index16 alt2"><code class="javascript spaces">             </code><code class="javascript keyword">for</code><code class="javascript plain">(</code><code class="javascript keyword">var</code> <code class="javascript plain">i = 0, len = versions.length; i &lt; len; i++) {</code></div>
<div class="line number18 index17 alt1"><code class="javascript spaces">                </code><code class="javascript keyword">try</code> <code class="javascript plain">{</code></div>
<div class="line number19 index18 alt2"><code class="javascript spaces">                    </code><code class="javascript plain">xhr = </code><code class="javascript keyword">new</code> <code class="javascript plain">ActiveXObject(versions[i]);</code></div>
<div class="line number20 index19 alt1"><code class="javascript spaces">                    </code><code class="javascript keyword">break</code><code class="javascript plain">;</code></div>
<div class="line number21 index20 alt2"><code class="javascript spaces">                </code><code class="javascript plain">}</code></div>
<div class="line number22 index21 alt1"><code class="javascript spaces">                </code><code class="javascript keyword">catch</code><code class="javascript plain">(e){}</code></div>
<div class="line number23 index22 alt2"><code class="javascript spaces">             </code><code class="javascript plain">} </code><code class="javascript comments">// end for</code></div>
<div class="line number24 index23 alt1"><code class="javascript spaces">        </code><code class="javascript plain">}</code></div>
<div class="line number25 index24 alt2"><code class="javascript spaces">        </code> </div>
<div class="line number26 index25 alt1"><code class="javascript spaces">        </code><code class="javascript plain">xhr.onreadystatechange = ensureReadiness;</code></div>
<div class="line number27 index26 alt2"><code class="javascript spaces">        </code> </div>
<div class="line number28 index27 alt1"><code class="javascript spaces">        </code><code class="javascript keyword">function</code> <code class="javascript plain">ensureReadiness() {</code></div>
<div class="line number29 index28 alt2"><code class="javascript spaces">            </code><code class="javascript keyword">if</code><code class="javascript plain">(xhr.readyState &lt; 4) {</code></div>
<div class="line number30 index29 alt1"><code class="javascript spaces">                </code><code class="javascript keyword">return</code><code class="javascript plain">;</code></div>
<div class="line number31 index30 alt2"><code class="javascript spaces">            </code><code class="javascript plain">}</code></div>
<div class="line number32 index31 alt1"><code class="javascript spaces">            </code> </div>
<div class="line number33 index32 alt2"><code class="javascript spaces">            </code><code class="javascript keyword">if</code><code class="javascript plain">(xhr.status !== 200) {</code></div>
<div class="line number34 index33 alt1"><code class="javascript spaces">                </code><code class="javascript keyword">return</code><code class="javascript plain">;</code></div>
<div class="line number35 index34 alt2"><code class="javascript spaces">            </code><code class="javascript plain">}</code></div>
<div class="line number36 index35 alt1"> </div>
<div class="line number37 index36 alt2"><code class="javascript spaces">            </code><code class="javascript comments">// all is well  </code></div>
<div class="line number38 index37 alt1"><code class="javascript spaces">            </code><code class="javascript keyword">if</code><code class="javascript plain">(xhr.readyState === 4) {</code></div>
<div class="line number39 index38 alt2"><code class="javascript spaces">                </code><code class="javascript plain">callback(xhr);</code></div>
<div class="line number40 index39 alt1"><code class="javascript spaces">            </code><code class="javascript plain">}           </code></div>
<div class="line number41 index40 alt2"><code class="javascript spaces">        </code><code class="javascript plain">}</code></div>
<div class="line number42 index41 alt1"><code class="javascript spaces">        </code> </div>
<div class="line number43 index42 alt2"><code class="javascript spaces">        </code><code class="javascript plain">xhr.open(</code><code class="javascript string">'GET'</code><code class="javascript plain">, url, </code><code class="javascript keyword">true</code><code class="javascript plain">);</code></div>
<div class="line number44 index43 alt1"><code class="javascript spaces">        </code><code class="javascript plain">xhr.send(</code><code class="javascript string">''</code><code class="javascript plain">);</code></div>
<div class="line number45 index44 alt2"><code class="javascript spaces">    </code><code class="javascript plain">}</code></div>
<div class="line number46 index45 alt1"> </div>
<div class="line number47 index46 alt2"><code class="javascript comments">// or with jQuery...</code></div>
<div class="line number48 index47 alt1"><code class="javascript plain">$(</code><code class="javascript string">'#container'</code><code class="javascript plain">).load(</code><code class="javascript string">'test.txt'</code><code class="javascript plain">);</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="tutorial_image"><img src="https://cdn.tutsplus.com/net/uploads/legacy/324_ajax/objectProperties.png" alt="Object Properties" data-original-url="http://nettuts.s3.amazonaws.com/324_ajax/objectProperties.png" /></div>
<h3 class="nolinks">A Few Notes To Consider While Watching</h3>
<p><strong>onreadystatechange</strong> will fire five times as your specified page is requested.</p>
<ul>
<li><strong>0: </strong>uninitialized</li>
<li><strong>1: </strong>loading</li>
<li><strong>2: </strong>loaded</li>
<li><strong>3: </strong>interactive</li>
<li><strong>4: </strong>complete</li>
</ul>
<p>A value of "4" is what we're searching for. Once it's been reached, we know that we're free to perform an action with the returned data.</p>
<h4 class="nolinks">XMLHttpRequest and ActiveXObject</h4>
<p>Modern browsers utilize the "XMLHttpRequest" object to make asynchronous requests. That means, if you'd like to ignore IE6, you're free to remove the ActiveXObject check - this section.</p>
<div>
<div id="highlighter_170956" class="syntaxhighlighter  javascript">
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
<div class="line number1 index0 alt2"><code class="javascript keyword">if</code><code class="javascript plain">(</code><code class="javascript keyword">typeof</code> <code class="javascript plain">XMLHttpRequest !== </code><code class="javascript string">'undefined'</code><code class="javascript plain">) xhr = </code><code class="javascript keyword">new</code> <code class="javascript plain">XMLHttpRequest();</code></div>
<div class="line number2 index1 alt1"><code class="javascript keyword">else</code> <code class="javascript plain">{</code></div>
<div class="line number3 index2 alt2"><code class="javascript spaces">    </code><code class="javascript keyword">var</code> <code class="javascript plain">versions = [</code><code class="javascript string">"Microsoft.XmlHttp"</code><code class="javascript plain">, </code></div>
<div class="line number4 index3 alt1"><code class="javascript spaces">                    </code><code class="javascript string">"MSXML2.XmlHttp"</code><code class="javascript plain">,</code></div>
<div class="line number5 index4 alt2"><code class="javascript spaces">                    </code><code class="javascript string">"MSXML2.XmlHttp.3.0"</code><code class="javascript plain">, </code></div>
<div class="line number6 index5 alt1"><code class="javascript spaces">                    </code><code class="javascript string">"MSXML2.XmlHttp.4.0"</code><code class="javascript plain">,</code></div>
<div class="line number7 index6 alt2"><code class="javascript spaces">                    </code><code class="javascript string">"MSXML2.XmlHttp.5.0"</code><code class="javascript plain">];</code></div>
<div class="line number8 index7 alt1"><code class="javascript spaces">     </code> </div>
<div class="line number9 index8 alt2"><code class="javascript spaces">     </code><code class="javascript keyword">for</code><code class="javascript plain">(</code><code class="javascript keyword">var</code> <code class="javascript plain">i = 0, len = versions.length; i &lt; len; i++) {</code></div>
<div class="line number10 index9 alt1"><code class="javascript spaces">        </code><code class="javascript keyword">try</code> <code class="javascript plain">{</code></div>
<div class="line number11 index10 alt2"><code class="javascript spaces">            </code><code class="javascript plain">xhr = </code><code class="javascript keyword">new</code> <code class="javascript plain">ActiveXObject(versions[i]);</code></div>
<div class="line number12 index11 alt1"><code class="javascript spaces">            </code><code class="javascript keyword">break</code><code class="javascript plain">;</code></div>
<div class="line number13 index12 alt2"><code class="javascript spaces">        </code><code class="javascript plain">}</code></div>
<div class="line number14 index13 alt1"><code class="javascript spaces">        </code><code class="javascript keyword">catch</code><code class="javascript plain">(e){}</code></div>
<div class="line number15 index14 alt2"><code class="javascript spaces">     </code><code class="javascript plain">} </code><code class="javascript comments">// end for</code></div>
<div class="line number16 index15 alt1"><code class="javascript plain">}</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>Instead, you could just write "var xhr = new XMLHttpRequest();". Be cautious with this method. Once abstracted to its own "load" function, it's easy to keep the IE check as it is.</p>
<h4 class="nolinks">Get Out of the Global Space</h4>
<p>If making multiple requests, you might consider moving your code into its own object. Then, rather than directly calling the "load" function, you use "myObject.load();". A basic guideline to accomplishing this would be:</p>
<div>
<div id="highlighter_923415" class="syntaxhighlighter  javascript">
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
</td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="javascript keyword">var</code> <code class="javascript plain">ajax = {</code></div>
<div class="line number2 index1 alt1"><code class="javascript spaces">   </code><code class="javascript plain">load : </code><code class="javascript keyword">function</code><code class="javascript plain">() {</code></div>
<div class="line number3 index2 alt2"><code class="javascript comments">// paste here</code></div>
<div class="line number4 index3 alt1"><code class="javascript spaces">   </code><code class="javascript plain">},</code></div>
<div class="line number5 index4 alt2"> </div>
<div class="line number6 index5 alt1"><code class="javascript spaces">   </code><code class="javascript plain">otherMethod : someFunction() {</code></div>
<div class="line number7 index6 alt2"><code class="javascript comments">// paste here</code></div>
<div class="line number8 index7 alt1"><code class="javascript spaces">   </code><code class="javascript plain">}</code></div>
<div class="line number9 index8 alt2"><code class="javascript plain">}</code></div>
<div class="line number10 index9 alt1"> </div>
<div class="line number11 index10 alt2"><code class="javascript plain">ajax.load();</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<h3 class="nolinks">Conclusion</h3>
<p>I've no doubt that some of you will leave a comment stating something along the lines of, "Why would I ever do this when it can be done with just one line of jQuery?" The answer is because you need to learn what's under the hood of your car, so to speak. Frameworks like Mootools and jQuery have made Javascript unbelievably accessible to designers. If you fall into this category, I strongly recommend that you pick up a raw Javascript book as well. There's nothing wrong, in my opinion, with learning both simultaneously. Just be sure that you do learn both!</p>
<p><strong><br />It's similar to working with WordPress if you don't know PHP. Sure, it's possible - but would you really want to?<br /></strong></p>
<p>Hopefully, this should get you up and running! I'd love to hear your thoughts! Have a great weekend. See you on Monday, or on <a href="http://www.twitter.com/NETTUTS">Twitter!</a></p>
<ul class="webroundup">
<li>Subscribe to the <a title="NETTUTS RSS Feed" href="http://feeds.feedburner.com/nettuts">NETTUTS RSS Feed</a> for more daily web development tuts and articles.</li>
</ul>
<p>
<script type="text/javascript">// <![CDATA[
digg_url = "post permalink (not digg url)";
// ]]></script>
<br />
<script type="text/javascript" src="http://digg.com/tools/diggthis.js"></script>
</p>
</div>
{% endraw %}