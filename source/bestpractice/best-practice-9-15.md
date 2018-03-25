---
layout: page
title: 《Web前端开发最佳实践》第九章 引用15
fullview: false
---

{% raw %} 
<p>《Web前端开发最佳实践》第九章 引用15：JavaScript MVC</p>
<p>来源：<a title="http://alistapart.com/article/javascript-mvc" href="http://alistapart.com/article/javascript-mvc">http://alistapart.com/article/javascript-mvc</a></p>
<div class="main-content">
<p>Once a bit player, JavaScript increasingly takes center stage. Its footprint—the space it takes up on our servers and in our development schedules—continues to grow. So how can we make our JavaScript more reusable and easier to maintain? Perhaps MVC will offer some clues.</p>
<p>While MVC is a familiar term to those in back-end application development—using frameworks such as Struts, Ruby on Rails, and CakePHP—MVC’s origin in user interface development lends itself to structuring client-side applications. Let’s examine what MVC is, see how we can use it to rework an example project, and consider some existing MVC frameworks.</p>
<h2 id="section1">What is MVC?</h2>
<p>The acronym has been mentioned six times already, and if you haven’t heard it before, you’re probably champing at the bit to find out what it stands for. MVC stands for <a href="http://en.wikipedia.org/wiki/Model–view–controller">Model-View-Controller</a>. It’s a design pattern that breaks an application into three parts: the data (Model), the presentation of that data to the user (View), and the actions taken on any user interaction (Controller).</p>
<p>Back in 1978 at Xeroc PARC, Trygve Reenskau <a href="http://www.ifi.uio.no/~trygver/documents/9607OOUserInterface/960711-column.pdf">recalled the origin of the MVC concept (PDF)</a>:</p>
<blockquote>
<p>There are four roles in this user interaction paradigm. The human User has a mental model of the information he is currently working with. The object playing the Model role is the computer’s internal and invisible representation of this information. The computer presents different aspects of the information through objects playing the View role, several Views of the same model objects can be visible on the computer screen simultaneously. Objects playing the Controller role translate User commands into suitable messages for the View or Model objects as needed.</p>
</blockquote>
<p>In other words, a user does something. That “something” is passed to a Controller that <em>controls</em> what should happen next. Often, the Controller requests data from the Model and then gives it to the View, which presents it to the user. But what does this separation mean for a website or web application?</p>
<h3 id="section2">Foundations</h3>
<p>The static document is the foundation of a web page. Each page we’re served represents the state of information on the server at that moment. But, we don’t just get raw data, we get an HTML page that the browser renders in all its CSS-defined beauty.</p>
<p>Years ago, if we wanted to modify that data, the server had to present a page with <code>inputs</code> and <code>textareas</code> to make changes. We then pushed those changes back to the server and waited until it told us that everything was okay. Requesting an entirely new page each time we wanted to make changes quickly became tedious for users—even moreso when they made a mistake and had to re-enter their changes.</p>
<h3 id="section3">The knight in shining armor</h3>
<p>Since those early, dark days of the web, JavaScript—with Ajax emblazoned on its shield—has come to the rescue. It allows us to update page elements and send user requests back to the server. Most importantly, it allows our pages to reflect user requests without having to wait for the server.</p>
<p>Now, at this stage of JavaScript and Ajax development and adoption, we need to consider separating our code’s components—MVC-style. Such separation may not be necessary in every situation—in some cases, it may even make things needlessly verbose. As our applications get more complex and require JavaScript interactions across multiple parts of our sites, however, separating JavaScript into Model, View, and Controller parts can produce more modular, reusable code.</p>
<h2 id="section4">Structuring our code</h2>
<p>JavaScript is dumb. It doesn’t understand what the HTML document is trying to tell users, or what users really want to accomplish using a page. We, as developers, have to tell our JavaScript what user input means.</p>
<p>Consider the following example. If we need to validate form data, we can set up an event handler. On submission, the event handler’s function loops through a predetermined list of fields and determines how to present any errors it finds.</p>
<p>Tell me if this doesn’t look familiar:</p>
<pre id="snippet1"><code>function validateForm(){ var errorMessage = 'The following errors were found:<br />'; if (document.getElementById('email').value.length == 0) { errorMessage += 'You must supply an email address<br />'; } document.getElementById('message')[removed] = errorMessage; }</code></pre>
<p>This approach works, but it isn’t very flexible. What if we want to add fields or validate a different form on another page? We would have to duplicate most of this functionality for each new field we add.</p>
<h3 id="section5">Toward modularity</h3>
<p>The first step toward modularity and separation is to embed extra semantics into the form. Is the field in question a required field? Should it contain an e-mail address? If so, we might use something like this:</p>
<pre id="snippet2"><code>&lt;input type="text" class="required email"&gt;</code></pre>
<p>Our JavaScript will loop through all the form fields, pull the attributes out of the class, and act on them from there. (The class attribute serves a dual purpose here, because it can also be used as a hook for CSS. How convenient!)</p>
<p>The JavaScript reads the metadata—that is, the information that describes the data—and acts on the data based on those rules. But at this point, the data and metadata are still tightly intertwined with the structure and semantics of the markup. Additionally, this method is limited. Conditional logic is hard to embed within HTML constructs. For instance, we can’t say that a field is required only if another field is completed (well, we can, but it’s usually quite awkward).</p>
<pre id="snippet3"><code>&lt;input type="checkbox" name="other"&gt; Other &lt;textarea class="dependson-other"&gt;&lt;/textarea&gt;</code></pre>
<p>In the preceding example, the <code>dependson</code> prefix indicates that the <code>textarea</code> depends on the presence of another field—in this case, on <code>other</code>. To avoid this awkward approach, let’s look at defining this business logic in JavaScript.</p>
<h3 id="section6">Using JavaScript to describe things</h3>
<p>While we can embed some semantics and metadata into HTML, we ultimately need to get that information into our JavaScript layer. Describing data within JavaScript can be quite handy.</p>
<p>Here’s an example:</p>
<pre id="snippet4"><code>var fields = { 'other': { required:true }, 'additional: { 'required': { 'other':{checked:true}, 'total':{between:[1,5]} }, 'only-show-if': { 'other': {checked:true} } } };</code></pre>
<p>In this example, the <code>additional</code> field has several dependencies. Each of those dependencies can be described and can have various layers of information defined within them. In this case, the <code>additional</code> field requires two fields to meet conditions. And the <code>additional</code> field should only show if the user has checked the <code>other</code> checkbox.</p>
<p>At this point, JavaScript is being used to define the fields and business logic behind how validation should occur. At one level, we’ve isolated <em>some</em> of the data model into its own object, but the validation still expects the data to be available in a specific variable. It also expects a field on the page that shows a summary view of errors.</p>
<p>Although we’ve achieved a bit of separation, the validation process still has too many dependencies: Data validation and the presentation of validation errors is still tightly coupled. The validation function still ensures that the event gets captured and that the form doesn’t submit until everything has been entered correctly.</p>
<p>Let’s consider how we might structure the code using the MVC pattern, and then return to our validation example.</p>
<h2 id="section7">The Model</h2>
<p>Since the MVC pattern has three components, we should try to separate our application into at least three main objects.</p>
<p>Separating the Model into its own object will be easy—as we saw in the earlier validation example, this tends to happen quite naturally.</p>
<p>Let’s look at another example. If we had a calendar of events, the event data would be stored in its own object. Methods added to the object abstract the process of interacting directly with the data. These methods are often called CRUD tasks, for create, read, update, and delete.</p>
<pre id="snippet5"><code>var Events = { get: function (id) { return this.data[id]; }, del: function (id) { delete this.data[id]; AjaxRequest.send('/events/delete/' + id); }, data:{ '112': { 'name': 'Party time!', 'date': '2009-10-31' }, '113': { 'name': 'Pressies!', 'date': '2009-12-25' } } metadata: { 'name': { 'type':'text', 'maxlength':20 }, 'date': { 'type':'date', 'between':['2008-01-01','2009-01-01'] } } }</code></pre>
<p>We also need a way to describe the data, so we’ll add a property that describes the fields an item might have, including any constraints.</p>
<p>The CRUD tasks also save state changes to the server. In this example, the delete function removes the entry from its locally stored data and then sends a request to the server to instruct it to delete the item.</p>
<p>When storing data, use a key—it’s the most efficient way to retrieve the data from the object. This is normally the database’s primary key. (The last example uses a numeric <code>id</code>.) For an event calendar, storing values separately for each month may be more practical. It saves having to loop through all the events trying to find the ones that need to be rendered to the page. Of course, you should find the approach that works best for you.</p>
<h2 id="section8">The View</h2>
<p>In the MVC pattern, the View accepts data and determines how to display it. The View may use the existing HTML, it may request a new block of HTML from the server, or it may build new HTML using the DOM. It then combines the provided data with the View and displays it to the user. It’s important to note that the View doesn’t care how to get the data or where the data comes from. It takes the data it gets.</p>
<pre id="snippet6"><code>View.EventsDialog = function(CalendarEvent) { var html = '&lt;div&gt;&lt;h2&gt;{name}&lt;/h2&gt;' + '&lt;div class="date"&gt;{date}&lt;/div&gt;&lt;/div&gt;'; html = html.replace(/{[^}]*}/g, function(key){ return CalendarEvent[key.slice(1,-1)] || ''; }); var el = document.getElementById('eventshell'); el[removed] = html; }var Events.data = { '112': { 'name': 'Party time!', 'date': '2009-10-31' }, '113': { 'name': 'Pressies!', 'date': '2009-12-25' } }View.EventsDialog(Events.data['112']); // edits item 112</code></pre>
<p>Stepping through the preceding example, we have three parts: the EventsDialog function that expects a JSON object with name and date properties, the Events data property that stores calendar events, and the call that sends a specific event to the events dialog.</p>
<p>The Events Dialog View can then be extended to include additional methods that enable interaction. In the following example, the Events Dialog is given open and close methods. By doing this, we make the View self-aware and also provide points of contact that will allow a Controller to manage the View without needing to know the inner details of the object.</p>
<pre id="snippet7"><code>View.EventsDialog = function(CalendarEvent){ ... } View.EventsDialog.prototype.open = function(){ document.getElementById('eventshell').style.display = 'block'; } View.EventsDialog.prototype.close = function(){ document.getElementById('eventshell').style.display = 'none'; }var dialog = new View.EventsDialog(eventObject); dialog.open(); dialog.close(); </code>
</pre>
<h3 id="section9" class="mrgn-top">Generalizing Views</h3>
<p>Making Views aware of the data model and data retrieval method is an easy trap to fall into. Separating those functions, however, allows us to reuse the dialog for other things. In this example, if we separate the event data and the dialog, we can generalize the dialog to view or edit <em>any</em> data model, not just events.</p>
<pre id="snippet8"><code>View.Dialog = function(data) { var html = '&lt;h2&gt;' + data.name + '&lt;/h2&gt;'; delete data.name; for(var key in data) { html += '&lt;div&gt;' + data[key] + '&lt;/div&gt;'; } var el = document.getElementById('eventshell'); el[removed] = html; }</code></pre>
<p>We now have a generic way to view items for any object—not just events. On the next project that needs dialogs, we’ll drop this code in and be done.</p>
<p>Many JavaScript frameworks are designed with this data agnosticism already in place. YUI controls, jQuery UI widgets, ExtJS, and Dojo Dijit are built from the ground up with generalization in mind. As a result, it’s easy to augment applications with existing controls.</p>
<h3 id="section10">Handling View methods</h3>
<p>As a general rule, a View shouldn’t run its own methods. For example, a dialog shouldn’t open or close itself. Leave this to the Controller.</p>
<p>If a user clicks on a Save button within a dialog, that event is passed to a Controller action. The action can then decide what the View should do. Maybe it closes the dialog. Or maybe it tells the View to display an “in-progress” indicator while the data saves. Once the data is saved, the Ajax completion event fires off another controller action, which tells the View to hide the indicator and close the dialog.</p>
<p>However, there are situations in which Views should handle their own events or run their own methods. For example, a View could have an input range with a slider that allows the user to pick the value. The View handles the logic for that slider interaction and how it displays the resulting value. There’s no need to have a Controller micromanage that interaction.</p>
<h2 id="section11">The Controller</h2>
<p>Now, how do we get the data from the Model to the View? That’s where the Controller comes in. A Controller activates after an event occurs. That may be when the page loads or when a user initiates an action. An event handler is assigned to a controller method that will do the user’s bidding.</p>
<pre id="snippet9"><code>Controllers.EventsEdit = function(event) { /* event is the javascript event, not our calendar event */ // grab the event target id, which stores the id var id = event.target.id.replace(/[^d]/g, ''); var dialog = new View.Dialog( Events.get(id) ); dialog.open(); }</code></pre>
<p>This pattern really comes in handy when data is used in various contexts. For example, say we’re editing an event displayed on a calendar. We click the delete button, and now need to get rid of the dialog and the event on the calendar, and then delete the event from the server.</p>
<pre id="snippet10"><code>Controller.EventsDelete = function(event) { var id = event.target.id.replace(/[^d]/g, ''); View.Calendar.remove(id); Events.del(id); dialog.close(); }</code></pre>
<p>Controller actions become simpler and easier to understand. This is key to building a maintainable application.</p>
<h2 id="section12">Break it up</h2>
<p>Now we know how to break our code into its constituent parts, let’s revisit the validation example we started with. How can we design it to provide maximum flexibility using the MVC pattern?</p>
<h3 id="section13">Validating our Model</h3>
<p>The Model determines whether the data is correct or not using a method. It’s not concerned with how to present the summary view. It just needs to report which fields didn’t make the grade.</p>
<p>Previously, in the validation example, we had a simple variable called <code>fields</code> that stored some metadata about our data model. We can extend that object with a method that can understand and inspect the data given to it. In the following example, we have added a <code>validate</code> method to the object. It can loop through the data given to it and compare that data against the requirements defined within its internal metadata.</p>
<pre id="snippet11"><code>var MyModel = { validate: function(data) { var invalidFields = []; for (var i = 0; i &lt; data.length; i++) { if (this.metadata[data.key].required &amp;&amp; !data.value) { invalidFields[invalidFields.length] = { field: data.key, message: data.key + ' is required.' }; } } return invalidFields; }, metadata: { 'other': {required:true} } }</code></pre>
<p>To validate our data, we provide an array of key/value pairs. The key is the field name and the value is what the user entered into the field.</p>
<pre id="snippet12"><code>var data = [ {'other':false} ];var invalid = MyModel.validate(data);</code>
</pre>
<p>Our <code>invalid</code> variable now contains a list of any fields that didn’t validate. Now we’ll pass the data to the View to display the errors on the page.</p>
<h3 id="section14">Presenting the invalid fields</h3>
<p>In this case, we need to display an error message on the page. This display will be a View, and will expect data to be passed to it from the Controller. The View will use that data to construct the error message that is shown to the user. Because we’ve written it generically, this View can be used in many situations.</p>
<p>(Line wraps marked » <em>—Ed.</em>)</p>
<pre id="snippet13"><code>View.Message = function(messageData, type){ var el = document.getElementById('message'); el.className = type; var message = '&lt;h2&gt;We have something to bring to your » attention&lt;/h2&gt;' + '&lt;ul&gt;'; for (var i=0; i &lt; messageData.length; i++) { message += '&lt;li&gt;' + messageData&lt;i&gt; + '&lt;/li&gt;'; } message += '&lt;/ul&gt;'; el[removed] = message; } View.Message.prototype.show() { /* provide a slide-in animation */ }</code></pre>
<p>The <code>type</code> is attached to the DOM element as a CSS class, allowing us to style the message appropriately. Then, the function loops through the message data and inserts it into the page.</p>
<h3 id="section15">Hooking it all together with a Controller</h3>
<p>Our Model stores our data and can tell us whether the data validates. We have a View, the error message, that we use to display success or failure and pass in any text to be shown to the user. The last step is to validate the form when the user tries to submit it.</p>
<pre id="snippet14"><code>/* use the event binding of your friendly neighbourhood JavaScript library or whatever you like to use */ addEvent(document.getElementById('myform'), 'submit', » MyController.validateForm);</code></pre>
<p>With our event bound to our controller action,  we capture the data, validate it, and present any errors.</p>
<pre id="snippet15"><code>MyController.validateForm = function(event){ var data = []; data['other'] = document.getElementById('other').checked; var invalidFields = MyModel.validate(data); if (invalid.length) { event.preventDefault(); // generate the view and show the message var message = new View.Message(invalidFields, 'error'); message.show(); } }</code></pre>
<p>The data array contains the field values. The Model validates the data, and returns a list of invalid fields. If any fields are invalid, the form submission is cancelled and the message data is passed to the View. After that, the View displays the message on the page.</p>
<p>We’re done! We’re left with a reusable message View and Model validation methods.</p>
<h3 id="section16">Handling progressive enhancement</h3>
<p>In our validation example, the MVC structure works well with progressive enhancement. The JavaScript simply augments the page to help it do its thing. By separating our code, fewer components will need to understand what is happening on the page. This separation can actually make progressive enhancement easier, since there are fewer interventions in the HTML document.</p>
<p>With an MVC structure like this, we might want to load the page and then to do an Ajax request to pull in the initial data from the server to populate the initial view. However, this can create the illusion of a slow interface, since two requests need to be made before the user can interact with the page: the first request to load the page and the second request to load the data into the page.</p>
<p>Instead, render the page normally—with static data. This is your initial state. The data contained within the initial state is also stored as JavaScript at the bottom of the page. Once the page loads, the JavaScript layer of your application is already set to go.</p>
<p>Additional data can even be preloaded, if not initially seen. In a calendar example, the events for the current month are rendered in the HTML, but the JavaScript layer can be made aware of the current, previous, and next month’s data. The additional load time is minimal but the user can then move forward and back without having to request new data from the server.</p>
<h2 id="section17">Frameworks</h2>
<p>The JavaScript MVC frameworks that are popping up provide a more structured and powerful approach to MVC development than what I’ve detailed here. Having a deeper understanding of how this pattern can be applied to your work should help, whether you roll your own or use an existing framework.</p>
<p>A few MVC frameworks include:</p>
<ul>
<li><a href="http://javascriptmvc.com/">JavaScriptMVC</a></li>
<li><a href="http://www.sproutcore.com/">SproutCore</a></li>
<li><a href="http://code.google.com/p/trimpath/wiki/TrimJunction">TrimJunction</a></li>
</ul>
<p>Whether you need a formal framework in place or not depends on how complex the application is. If it’s a simple application, a framework’s overhead might not be worth it.</p>
<h1>Also in Issue № 290</h1>
<h2><a href="/article/the-case-for-content-strategy-motown-style">The Case for Content Strategy—Motown Style</a></h2>
<p>by Margot Bloomstein</p>
<p>Keep in mind that rolling your own MVC framework doesn’t have to be rigid. It can be as flexible as you want it to be.</p>
<h2 id="section18">Finally</h2>
<p>Like anything else in development, you’ll have to decide if the trade-off of this kind of separation is worth it. For small applications where you only have a few functions, this type of separation is surely overkill. The larger your application gets, though, the more it benefits from the separating code into Model, View, and Controller.</p>
</div>
{% endraw %}