---
layout: page
title: 《Web前端开发最佳实践》第九章 引用17
fullview: false
---

{% raw %} 
<p>《Web前端开发最佳实践》第九章 引用17：Choosing a JavaScript MVC Framework</p>
<p>来源：<a title="http://www.funnyant.com/choosing-javascript-mvc-framework/" href="http://www.funnyant.com/choosing-javascript-mvc-framework/">http://www.funnyant.com/choosing-javascript-mvc-framework/</a></p>
<script type="text/javascript">// <![CDATA[
gapi.plusone.go();
// ]]></script>
<p>So you love the way single-page apps like Gmail and Trello feel, but aren’t sure where to start.  Maybe your JavaScript code has become disorganized enough that you are convinced to try one of the numerous  JavaScript MVC libraries/frameworks on your next project but aren’t sure which one to choose.  I’m writing  a book on single-page apps so I’ve pretty much “read the internet” on the topic.  I’ll attempt to provide some not so obvious insights to help you make your decision.</p>
<h2>Introduction</h2>
<p><img class="alignnone size-full wp-image-205" src="http://www.funnyant.com/wp-content/uploads/2013/09/javascript-mvc-frameworks-greyscale-2.jpg" alt="javascript-mvc-frameworks-greyscale-2" width="473" height="106" /></p>
<p>The frameworks discussed are the ones with the most traction at present:  AngularJS, Backbone, Ember, and Knockout.  Batman, CanJS, Meteor, and Spine are also mentioned but not covered in depth.</p>
<p>Each project is examined from several different perspectives including community, leadership, maturity, size, dependencies, interoperability, inspiration, philosophy, and features.</p>
<h2>Community</h2>
<p>A  good indicator of the health of any open source project is its community. The table below shows the number of GitHub watchers for each of the projects.</p>
<p><img class="alignnone size-full wp-image-25" src="http://www.funnyant.com/wp-content/uploads/2013/09/github-watchers-javascript-mvc-frameworks.png" alt="github-watchers-javascript-mvc-frameworks" /></p>
<p>You wouldn’t want to make your framework decision on this data alone but it certainly gives you a sense of which frameworks are:</p>
<h4>Most established</h4>
<ul>
<li>Backbone.js</li>
<li>AngularJS</li>
</ul>
<h4>Experiencing the most growth (in the last year)</h4>
<ul>
<li>AngularJS</li>
<li>Meteor</li>
<li>Ember</li>
<li>Knockout</li>
</ul>
<h4>Showing a small following but growing rapidly</h4>
<ul>
<li>CanJS</li>
</ul>
<h3>Growth</h3>
<p>In particular it is worth noting the incredible growth of AngularJS (379%) in the past 13 months and taking this into consideration when making your decision. The chart below compares the growth  of GitHub watchers (over that 13-month period) to provide an idea of how fast the community has been growing for each project.  Meteor (130%), Ember (104%), Knockout (76%), and Backbone (64%) also have had amazing growth considering their previously sizable communities.</p>
<p><a href="http://www.funnyant.com/wp-content/uploads/2013/09/github-watchers-growth-javascript-mvc-frameworks3.png"><img class="alignnone size-full wp-image-268" src="http://www.funnyant.com/wp-content/uploads/2013/09/github-watchers-growth-javascript-mvc-frameworks3.png" alt="github-watchers-growth-javascript-mvc-frameworks" width="584" height="351" /></a></p>
<h2>Leadership</h2>
<p>Understanding the people, their backgrounds, and the problems they were trying to solve when they created a framework helps you appreciate their design decisions and motivations. For example, David Heinemeier Hansson, creator of the popular Ruby on Rails web development framework, was working as a contract developer for 37signals design projects and had only 10 hours a week to work on the framework .  Ruby on Rails was actually extracted from some of his initial contract work with 37signals.  This background helps you understand that the framework had to be extremely productive for the developer which means a lot of conventions (decisions already made) and scaffolding (generated code).   Below, I’ll introduce you to the creators of the JavaScript MVC frameworks so you might develop a similar appreciation for their work.</p>
<h3>Backbone</h3>
<p><a href="http://www.funnyant.com/wp-content/uploads/2013/09/jeremy_ashkenas_headshot.png"><img class="alignleft  wp-image-43" src="http://www.funnyant.com/wp-content/uploads/2013/09/jeremy_ashkenas_headshot.png" alt="jeremy_ashkenas_headshot" width="234" height="234" /></a></p>
<h4 style="text-align: left;">Jeremy Ashkenas and DocumentCloud</h4>
<p style="text-align: left;">Jeremy Ashkenas is the creator of the CoffeeScript programming language, Backbone.js JavaScript framework, and Underscore.js a JavaScript utility library. According to Wikipedia, he is currently working in Interactive News at the NYTimes /DocumentCloud.</p>
<h3 style="text-align: left;"> </h3>
<h3> </h3>
<h3> </h3>
<h3> </h3>
<h3><span style="font-size: 12px; font-family: consolas, monaco, monospace; font-weight: normal; line-height: 18px;">Image Credit: </span><a style="font-size: 12px; font-family: consolas, monaco, monospace; font-weight: normal; line-height: 18px;" href=" http://2012.cusec.net/speakers/#jeremyashkenas">The Canadian University Software Engineering Conference</a></h3>
<h3>AngularJS</h3>
<p><a href="http://www.funnyant.com/wp-content/uploads/2013/09/angularjs-team.jpg"><img class="alignright size-medium wp-image-50" src="http://www.funnyant.com/wp-content/uploads/2013/09/angularjs-team-300x168.jpg" alt="angularjs-team" width="300" height="168" /></a></p>
<p>AngularJS was originally developed at Google in 2009 by Miško Hevery and Adam Abrons as the software behind an online JSON storage service.  Abrons left the project, but Hevery, who works at Google, continues to develop and maintain the library with fellow Google employees Igor Minár and Vojta Jína.</p>
<p>Image Credit: <a href=" http://www.devoxx.com/display/DV12/Re-imagining+the+browser+with+AngularJS">Devoxx 2012</a></p>
<h3> </h3>
<h3> </h3>
<h3>Knockout</h3>
<p><img class="alignleft size-full wp-image-81" src="http://www.funnyant.com/wp-content/uploads/2013/09/steve-sanderson.jpg" alt="steve-sanderson" width="200" height="216" /></p>
<p>Steve Sanderson is the original creator of Knockout.  Steve Sanderson is currently working as a developer for Microsoft in the team that brings you the ASP.NET technology stack, IIS, and other web things. Previously, he developed .NET software as a contractor/consultant for clients in Bristol and beyond, plus wrote some books for Apress, such as Pro ASP.NET MVC Framework.</p>
<p>Image credit: <a href="http://blog.stevensanderson.com/">Steve Sanderson’s Blog</a></p>
<h3> </h3>
<h3> </h3>
<h3> </h3>
<h3> </h3>
<h3>Ember</h3>
<p>The two most well-known and public members of the Ember core team are Yehuda Katz and Tom Dale.</p>
<p>Yehuda Katz is a member of the Ember.js, Ruby on Rails and jQuery Core teams; He spends his daytime hours at the startup he founded, Tilde Inc.. Yehuda is co-author of the  best-selling jQuery in Action and Rails 3 in Action books.</p>
<p>Tom Dale was previously on the SproutCore team. He’s a former Apple software engineer who gained expert front-end JavaScript skills while working on the MobileMe and iCloud applications.</p>
<p><a href="http://www.funnyant.com/wp-content/uploads/2013/09/yehuda-katz.jpg"><img class="size-full wp-image-69 alignnone" src="http://www.funnyant.com/wp-content/uploads/2013/09/yehuda-katz.jpg" alt="yehuda-katz" width="150" height="150" /></a> <a href="http://www.funnyant.com/wp-content/uploads/2013/09/tom-dale.jpg"><img class="size-full wp-image-68 alignnone" src="http://www.funnyant.com/wp-content/uploads/2013/09/tom-dale.jpg" alt="tom-dale" width="150" height="150" /></a></p>
<p>Image Credit: <a href="http://emberjs.com/team/">Ember Team</a></p>
<h3>Meteor</h3>
<p>The Meteor development group just raised $11.2 million so they can do this fulltime and they have a team of 12 developers with impressive resumes.  The team has ambitious goals that stretch beyond the scope of most Javascript MVC frameworks which focus on organizing client-side code and state. Meteor is a full-stack framework including architecture on the web server and the database.</p>
<h3>CanJS</h3>
<p><span style="color: #000000;">CanJS was created roughly 2 years ago by Justin Meyer and his team at Bitovi, a web application consulting company</span>.  CanJS was extracted from the companies original framework JavaScriptMVC which has existed for 6 years at the time of this writing.  Bitovi’s core business is building applications with the CanJS framework.</p>
<h2>Maturity</h2>
<p>Considering how mature each framework is helps you understand how big of a risk you are taking when using these newer technologies in your project.  New and unproven frameworks can have problems with documentation, scalability, stability (API changes), and support (finding developers to maintain the code who know the framework) that could cause an otherwise good decision to backfire.  Some things to consider include:  How many  real-world production apps are using these frameworks and how many users do these apps have?  How good is the documentation and how many examples/tutorials are available?  Are the examples up to date?  How stable is the API?  Do other developers know or are they getting to know this technology?</p>
<ul>
<li>Backbone (most mature)
<ul>
<li>apps in production for 3 years now including GroupOn, FourSquare, USAToday, DocumentCloud, etc…</li>
<li>good documentation</li>
<li>good examples but many now outdated</li>
<li>API very stable</li>
<li>lots of watchers on GitHub</li>
</ul>
</li>
<li>AngularJS (mature)
<ul>
<li>in production now at Google but does not have as long a track record as other projects</li>
<li>good documentation, getting better</li>
<li>lots of examples</li>
<li>lots of watchers on GitHub</li>
</ul>
</li>
<li>Knockout (mature)
<ul>
<li>in production for 2 years now</li>
<li>great documentation including jsfiddle like examples</li>
<li>API stable</li>
<li>lots of examples</li>
<li>lots of watchers on GitHub</li>
</ul>
</li>
<li>Ember.js
<ul>
<li>first production release 1.0 on August 30, 2013 after 2 years of development</li>
<li>documentation improving but</li>
<li>API had intentionally not been stable until 1.0 release</li>
<li>good number of examples some outdated due to API changes prior to 1.0</li>
<li>lots of watchers on GitHub</li>
</ul>
</li>
<li>Meteor
<ul>
<li>still early in development used mostly in example apps</li>
<li>documentation good but a work in progress</li>
<li>API still evolving</li>
<li>some examples</li>
<li>lots of watchers on GitHub</li>
</ul>
</li>
<li>CanJS
<ul>
<li>Roughly 2 years old but extracted from framework that is 6 years old</li>
<li>Applications in production for Walmart, Cars.com, Apple (store.apple.com), Sams Club mobile app, Wanderfly</li>
</ul>
</li>
</ul>
<h2>Size</h2>
<p>It’s important to understand how big  a download each of these frameworks is and what you are getting for that extra weight in your application.  The size affects performance but also gives you an indication of how ambitious a framework is and how long it might take you to learn this new technology as well as hint at how many ways its trying to help you build your application (i.e. how many features does it support and how robust are they).  The more ambitious and feature rich a framework is the harder it will typically be to integrate it with others particularly on the same page of an app.  Lighter frameworks are more like a library and a smaller commitment to include it in your project.</p>
<p><a href="http://www.funnyant.com/wp-content/uploads/2013/09/size-of-javascript-mvc-frameworks1.png"><img class="alignnone size-full wp-image-190" src="http://www.funnyant.com/wp-content/uploads/2013/09/size-of-javascript-mvc-frameworks1.png" alt="size-of-javascript-mvc-frameworks" width="711" height="347" /></a></p>
<p>Some of these projects such as Backbone and Spine pride themselves on how small they are and think of themselves more as a library than as a framework.  Often these smaller frameworks leave room for “choosing your own” library to use for features such as templates and routing.  We’ll explore this in more detail when we talk about the features of each.</p>
<p>Other projects, such as Ember and AngularJS are more ambitious and are comfortable being called a framework.  They often have more built-in features and depend less on external libraries.</p>
<p>Below is a list showing which projects considered more of a library versus a framework.</p>
<table>
<tbody>
<tr><th>Libraries</th><th>Frameworks</th></tr>
<tr class="alt-table-row">
<td>Backbone</td>
<td>Ember</td>
</tr>
<tr>
<td>Knockout</td>
<td>AngularJS</td>
</tr>
<tr class="alt-table-row">
<td>Spine</td>
<td>Batman</td>
</tr>
<tr>
<td>CanJS</td>
<td>Meteor</td>
</tr>
</tbody>
</table>
<h2> </h2>
<h2>Dependencies</h2>
<p>What other libraries are required to build a real-world application with these projects?  The chart below takes a look at what the average number of dependencies each library requires for the developer to be productive and looks at size including these dependencies.</p>
<h2> </h2>
<p>These numbers were gathered by downloading libraries from <a href="http://cdnjs.com/">cdnjs</a>. In practice, most projects will use jQuery with these frameworks to do DOM manipulation in a web application because they need animation and AJAX support as well.  In a mobile application it’s not uncommon for projects to use  Zepto.js which is a much lighter library for handling DOM manipulation but doesn’t support Internet Explorer which is not a common requirement for mobile applications.  AngularJS already has trimmed down version of jQuery jQLite included but jQuery can override it if used in your project. The AngularJS team encourages developers to not add the full jQuery library unless needed.   To help you make the right choice, the table above shows a mobile column which assumes Zepto.js and a web application column which shows jQuery.</p>
<p><img class="alignleft size-full wp-image-173" src="http://www.funnyant.com/wp-content/uploads/2013/09/size-of-javascript-mvc-frameworks-w-dependencies-web-app1.png" alt="size-of-javascript-mvc-frameworks-w-dependencies-web-app" width="365" height="536" /></p>
<p><img class="alignleft size-full wp-image-172" src="http://www.funnyant.com/wp-content/uploads/2013/09/size-of-javascript-mvc-frameworks-w-dependencies-mobile-app1.png" alt="size-of-javascript-mvc-frameworks-w-dependencies-mobile-app" width="360" height="514" /></p>
<div style="clear: both;"> </div>
<h2>Interoperability</h2>
<p>This section discusses whether each framework is designed to control the whole page or if it can be used as a small part of an existing page as you slowly work this new technology into an existing project.  The earlier library or framework discussion for the most part determines how interoperable each of these projects is…so the libraries tend to be more easy to integrate into existing projects while the frameworks do more for you but don’t play as well with others.</p>
<h4>AngularJS</h4>
<p>Works well with other libraries but developers are encouraged to see if they can do without jQuery and jQueryUI. In fact Angular has a subset of jQuery called jqLite.  The rationale for following this practice is ease of unit testing as many dependent libraries and plugins weren’t designed with unit testing in mind and are subsequently more difficult to mock away in unit tests.  In practice most developers end up using jQuery for something and including it.</p>
<h4>Backbone</h4>
<p>Because of its small footprint and un-opinionated architecture it’s easy to include with numerous popular client-side libraries and server side technologies.</p>
<h4>Ember.js</h4>
<p>Intended to control your whole page at run-time so not suited for use on only part of a page.</p>
<h4>Knockout.js</h4>
<p>Can be used as a small part of larger projects and doesn’t need to control the whole page.</p>
<h4>CanJS</h4>
<p>CanJS plays extremely well with third-party UI library controls including jQuery UI and DOJO allowing the controls to be properly disposed avoiding memory leaks that can plague single-page applications.</p>
<p> </p>
<h2>Inspiration</h2>
<p>A favorite question of journalists interviewing musicians is: “What artists did you listen to growing up or who inspired you?”  This often leads to insights or gives hints to their readers of what sound they can expect from that musician.    Most of the ideas in these frameworks are not new to software development but come from technologies the creators had worked on in the past and enjoyed.   This section summarizes what information I could find from interviews with the creators of these frameworks about their inspiration.</p>
<h4>AngularJS</h4>
<p>Declarative programming languages such as  HTML and the rich internet application technologies (RIAs) such as Flex from Adobe and Windows Presentation Foundation (WPF) and Silverlight from Microsoft were technologies the creators of AngularJS  were heavily influenced by in their work.   These declarative technologies  don’t have a “main” method and just express what needs to happen but don’t specify the implementation .  Two-way data-binding in views to model objects is a canonical example of this declarative programming style in action.    Also dependency injection and inversion-of-control (IOC) containers in particular Juice which is used heavily in server-side Java code by Google engineers is a stated inspiration for the creators as they value unit testing and need a framework that is designed to allow you to inject your dependencies so tests can be isolated from other application layers and run fast.</p>
<h4>Ember</h4>
<p>Tom Dale did a great job describing Ember’s influence on Quora:</p>
<blockquote>
<p>With Ember.js, we’ve spent a lot of time borrowing liberally from concepts introduced by native application frameworks like Cocoa. When we felt those concepts were more hindrance than help—or didn’t fit within the unique constraints of the web—we turned to other popular open source projects like Ruby on Rails and Backbone.js for inspiration.  Ember.js, therefore, is a synthesis of the powerful tools of our native forebears with the lightweight sensibilities of the modern web. –<a href="http://www.quora.com/Client-side-MVC/Is-Angular-js-or-Ember-js-the-better-choice-for-Javascript-frameworks">Tom Dale on Quora</a></p>
</blockquote>
<p>In addition, it’s important to understand that Ember.js is an evolution of the SproutCore JavaScript library and became Ember at the point when SproutCore stopped becoming more Cocoa like and was more heavily influenced by jQuery.</p>
<h4>Knockout</h4>
<p>This <a href="http://www.hanselman.com/blog/HanselminutesPodcast243KnockoutJavaScriptWithSteveSanderson.aspx">Hanselminutes podcast</a> has some great background on Steve Sanderson’s inspiration.  In summary, the  Model View View Model (MVVM) Design Pattern and  declarative technologies such as Microsoft’s WPF (Windows Presentation Foundation) and Silverlight were the biggest inspirations.  You may have noticed that the declarative two-way data-binding that is the best feature of Knockout is very similar to AngularJS because they had some of the same influences.</p>
<h4>CanJS</h4>
<p>According to Justin Meyer’s Rails was a big influence in particular with the naming and API.  The evolution of the framework particularly the recent features added in 2.0 have been influenced by other JavaScript MVC Frameworks.  More specifically, Angular’s two-way binding and directives (custom elements in CanJS).</p>
<h2>Philosophy</h2>
<p>Newspapers generally strive to be unbiased in their reporting of the news.  The one exception to this is the editorial section where opinions are encouraged and writers often take a strong position on an issue.   At times both types of writing are not strictly unbiased reporting or strong opinion but somewhere in the middle of this continuum.   Technology frameworks have a similar division tending to be more strongly opinionated or not as opinionated.  For example, Ruby on Rails values convention over configuration and makes lots of decisions on behalf of the developer such as file structure and data access. Consequently, it is considered to be pretty strongly opinionated.  Other server-side frameworks such as Sinatra are more light-weight and not opinionated about file structure and data access.  Consequently, they are viewed as not as opinionated.  Just as these server-side frameworks have philosophies the client-side JavaScript MVC frameworks  we’ve been discussing can be examined in the same light on this continuum of opinionated to not opinionated. Let’s look at each of the projects and discuss their philosophy.</p>
<h3><span style="font-size: 1em;">Backbone: unopinionated</span></h3>
<p>The most open-minded of frameworks, extremely unopinionated allowing developers to make their own decisions sometimes to the point where things are done differently enough to make the code less maintainable. The only exception to this stance is the way Backbone assumes a RESTful service on the server which I discuss later in the features section. This assumption can be worked around by overriding the sync method on the model.</p>
<h4>AngularJS:  opinionated</h4>
<p>Pretty opinionated  in particular their emphasis on testability and dependency injection.   Also, the idea that declarative programming such as HTML is awesome are pervasive in the framework.</p>
<h4>Ember: Extremely opinionated</h4>
<p>Strives for developers to only make decisions about what is different for their application and take care of the rest through convention and scaffolding. This philosophy is similar to the Ruby on Rails and jQuery and is best expressed by the emberjs.com website:</p>
<blockquote>
<p>Don’t waste time making trivial choices. Ember.js incorporates common idioms so you can focus on what makes your app special, not reinventing the wheel.</p>
</blockquote>
<p>Ember standardizes files and url structures but does allow you to override these things if needed.  Expect to get a lot more code generated for you and a lot more conventional ways of doing things such as file structure.  Consequently, you’ll need to make less mundane decisions because the framework has already chosen a reasonable default and you can get down to the business of building the unique parts of your application.</p>
<h4>Knockout : unopinionated</h4>
<p>Leaves routing and data storage to the developer’s choice. Doesn’t dictate file or URL structure.  Even allows declarative DOM-based templates to be replaced with string-based. templates</p>
<h2>Features</h2>
<p>Think of these various Javascript MVC Frameworks as a set of common features to help developers build single-page apps. The way each framework implements these features or chooses not to implement these features and instead makes plugable another library to complete the framework provides critical insight.</p>
<h3>So what are the main features of a Javascript MVC Framework?</h3>
<ul>
<li>Two-way Binding between HTML and a client-side JavaScript object model</li>
<li>View Templates</li>
<li>Data Storage (local or through a web server to a database)</li>
<li>URL Routing (keeping the back button working and search engines happy)</li>
</ul>
<p>In addition, some of the frameworks provide common language services such as generic pub/sub event model and support for object-oriented inheritance.</p>
<h3>Data Binding</h3>
<p>This is the most touted feature of these frameworks. You change the data in an HTML input and the JavaScript object bound to that input is immediately updated as well as any other user interface elements that are bound to that same property.  In many of the frameworks, it goes the other way as well, if you change the JavaScript object the html will automatically refresh.  Its two-way data binding on the web as you’ve always experienced in rich client application frameworks such as Flex, Windows Forms or Windows Presentation Foundation (WPF).  Below is a table showing which frameworks support data binding.</p>
<h3><a href="http://www.funnyant.com/wp-content/uploads/2013/09/javascript-mvc-data-binding4.png"><img class="alignnone size-full wp-image-502" src="http://www.funnyant.com/wp-content/uploads/2013/09/javascript-mvc-data-binding4.png" alt="javascript-mvc-data-binding" width="392" height="199" /></a></h3>
<p>Some people might argue Backbone and Spine have some support for data-binding but there is enough work left to the developer that I feel it’s safe to say its not a feature of these libraries.</p>
<h3>View Templates</h3>
<p>The  client-side Javascript model data needs to get interspersed with the HTML and these frameworks take one of two approaches to solving this problem.</p>
<p>String-based templates, of which the most popular is currently handlebars.js, take string or text templates and replace the dynamic parts with data from your models.  One of the frequently cited but debatable advantages to string-based templates is performance.  The cons seem to be difficulty debugging flow of control type logic.</p>
<p>DOM-based templates embrace the declarative nature of mark-up and create an html on steroids experience where html is annotated with additional attributes to describe the binding and events needed.   These libraries require substantially less code but do substantially more magic on the developer’s behalf.</p>
<p><a href="http://www.funnyant.com/wp-content/uploads/2013/09/javascript-mvc-view-templates1.png"><img class="alignnone size-full wp-image-503" src="http://www.funnyant.com/wp-content/uploads/2013/09/javascript-mvc-view-templates1.png" alt="javascript-mvc-view-templates" width="741" height="199" /></a></p>
<h3>Model (observable: change tracking)</h3>
<p>Some frameworks (Backbone, Spine) are more focused on the model and ask the developer to extend their JavaScript model classes from a base model type and access all properties via .get() and .set() methods so change tracking can happen and events can be triggered when the model changes.  KnockoutJS has the developer apply observable wrappers around your plain old JavaScript objects and then has you access properties via object.propertyName() syntax (notice the  parentheses).</p>
<p>Other libraries(AngularJS) do dirty checking on all bound DOM elements on the page since there are no standard get and set accessors. Which leads to the performance concern that these libraries will have problems on larger pages.   Not only do these libraries require less code to refresh the templates, they also don’t require you to use specific get or set accessors to change data so your models can just be plain old JavaScript objects.   This results in much higher developer productivity, particularly when first getting started with these frameworks.</p>
<p> </p>
<p> </p>
<h4><span style="font-size: 1em;">Data Storage</span></h4>
<p>These frameworks store data on the server by</p>
<ul>
<li>automatically synchronizing with RESTful services</li>
<li>asking the developer to implement do-it-yourself ajax calls to web services returning json</li>
<li>allowing either of the above approaches</li>
</ul>
<h5>REST</h5>
<p>Some of the frameworks by default assume you have an extremely clean RESTful JSON service  on the server and that you(at least by default) are pretty chatty with that service updating data asynchronously in the background while the user interface continues to respond to the user.   Internally, these frameworks use jQuery or Zepto to send the appropriate AJAX request to the server.  Just as the user interface’s HTML DOM elements listen for changes to the JavaScript object model for the application, the sync implementation gets notified of changes to properties on the model and sends updates to the RESTful service to keep the model in “sync” on the server.</p>
<h6>Connected or Disconnected</h6>
<p>Backbone by default sends the requests before the data is saved client-side so the server and client stay in sync more easily.  Spine, a very similar framework to Backbone, takes a different approach by saving records client-side before sending the request asynchronously to the server which provides a more responsive user interface and allows for disconnected scenarios frequently found in mobile applications.  If your project requires disconnected scenarios, be sure to understand how well the framework you’re using supports this feature.</p>
<h5>Do-it-yourself (DIY)</h5>
<p>These frameworks ask the developer to use $.ajax (jQuery) to make web services calls or add another complimentary open-source library to handle data storage needs.</p>
<h5>Data Store Specific</h5>
<p>More elaborate frameworks such as Meteor have a much more complete data storage story but mandate a MongoDB database on the server.  They do this in an effort to provide an incredibly scalable solution by default and support a JavaScript from top to bottom development experience.</p>
<p>See the table below for a summary of how each framework approaches data storage.</p>
<p><a href="http://www.funnyant.com/wp-content/uploads/2013/09/javascript-mvc-data-storage.png"><img class="size-full wp-image-62 alignnone" src="http://www.funnyant.com/wp-content/uploads/2013/09/javascript-mvc-data-storage.png" alt="javascript-mvc-data-storage" width="745" height="199" /></a></p>
<h4> </h4>
<h4><span style="font-size: 1em;">Routing</span></h4>
<p>Maps URL routes to JavaScript functions to allow for back button support in browsers.  One major downside of single-page applications is that because the page doesn’t refresh no entries get added to the browser’s history so the back button frequently doesn’t take the user back to the previous page state without the developer doing some extra work during those major transitions of state and implementing a state tracking mechanism through a hash appended to the URL or using the push state and pop state in modern browsers.   In summary, most projects either provide very basic rudimentary but useful functionality in this area.   Knockout simply allows you to plug in another third-party open source library.  An exception with routing seems to be Ember which at one point during their project took community feedback and went back to the drawing board to get this right before stabilizing on version 1.0.0.  CanJS also has a more elaborate router that does more than map functions to routes and can maintain more elaborate “states” in an application.</p>
<p><a href="http://www.funnyant.com/wp-content/uploads/2013/09/javascript-mvc-routing.png"><img class="size-full wp-image-63 alignnone" src="http://www.funnyant.com/wp-content/uploads/2013/09/javascript-mvc-routing.png" alt="javascript-mvc-routing" width="539" height="199" /></a></p>
<p><span style="font-size: 1.5em; line-height: 19px;">Apples to Apples</span></p>
<p>After looking at the projects by features it became clear to me that I wasn’t really comparing “apples to apples.”  A more fair comparison might be to compare full frameworks like AngularJS and EmberJS with MV* Stacks that include great but less broad libraries like Backbone and KnockoutJS.  To be more specific, the following comparisons would be more “apples to apples”:</p>
<ul>
<li>AngularJS</li>
<li>EmberJS</li>
<li>Backbone with Marionette</li>
<li>KnockoutJS with DurandalJS, and HistoryJS or SammyJS</li>
<li>CanJS</li>
</ul>
<p>I’ll definitely get deeper into this idea in future posts.</p>
<p><span style="font-size: 1.5em;">Tell Me More</span></p>
<p>There is a lot to consider when choosing a JavaScript MVC Framework for a project but hopefully I’ve given you a jump start to wrapping your head around these great new technologies.  Please leave comments below and share your experiences with these frameworks from their awesomeness to their sharp edges.</p>
{% endraw %}
