var Gimme=function(){var a=function(){var c,b,a,e,j,n;function u(b,a,c){return e[a](b,c)}function s(e,a){var b=[],d=a.length;do{var c=h(e,a[--d]||a);c&&b.push(c)}while(d);return b}function h(c,b){if(c===document||!b)return b;var a=b;while((a=a.parentNode)&&a!==c);return a===c&&b||null}function r(a,b){return h(a,document.getElementById(b))}function i(a,c){c=c||document;if(a.id)return o([r(c,a.id)],a);delete a.id;var b=c.getElementsByTagName(a.tag||"*");if((!a.classes||a.classes.length<1)&&(!a.attributes||a.attributes.length<1)&&(!a.pseudos||a.pseudos.length<1))return k(b);for(var f=[],g=b.length,e=0;e<g;e++)d(a,b[e])&&f.push(b[e]);return f}function d(d,c){if(!c)return false;for(var b=d.propNames,f=b.length,a=0;a<f;a++)if(!e[b[a]](c,d[b[a]]))return false;return true}function k(b){for(var c=[],d=b.length,a=0;a<d;a++)c[a]=b[a];return c}function o(b,f){for(var c=[],e=b.length,a=0;a<e;a++)b[a]&&b[a].nodeType===1&&d(f,b[a])&&c.push(b[a]);return c}var m=function(){return typeof Array.prototype.indexOf!=="undefined"?b:a;function b(a,b){return a.indexOf(b)}function a(b,c){for(var d=b.length,a=0;a<d;a++)if(b[a]===c)return a;return -1}}();function l(a,b){return m(a,b)!==-1}function p(e){c.inc();for(var f=c.name,d=[],g=e.length,b=0;b<g;b++){var a=e[b];if(a[f]!==c.t){a[f]=c.t;d.push(a)}}return d}var g=function(){return function(){var c=document.createElement("div");c.innerHTML='<a href="#test">test</a>';var d=c.firstChild;return d.getAttribute("href")==="#test"?a:b}();function a(b,a){return b.getAttribute(a)}function b(a,b){switch(b.toLowerCase()){case "class":return a.className||null;case "id":return a.id||null;case "href":case "src":if(typeof a.getAttribute!=="undefined")return a.getAttribute(b,2)}return a.attributes&&a.attributes[b]&&a.attributes[b].nodeValue||a.getAttribute(b)}}();function f(a){this.name=a;this.f=0;this.t=1;this.inc=function(){this.f=(this.t+=2)-1}}function t(a){this.parse=function(b){var e,c,g=a["preprocessInput"];b=g&&g(b)||b;a["reset"]();var d=0,f=b.length;while(d<f){e=b.charAt(d);c=c||a[e]||a["default"];if(c){advance=c(b.substring(d,f));if(!advance)throw'No valid match found for "'+c.name+'" rule';d+=advance}else throw'No suitable rule found to handle character "'+e+'"';c=null}return a["finish"]()}}function q(f,b){var r=b;b=b||document;a.inc();if(typeof f!=="string")return s(b||document,f);var c,g=[];try{g=k(b.querySelectorAll(f))}catch(p){for(var l=n.parse(f),j=l.length,h=0;h<j;h++){var d=l[h],q=d.length,e=q%2-1;c=e===0?i(d[e],b):[b||document];while(d[++e]){var o=d[e++],m=d[e];m.root=b;c=u(c,o,m)}g=j>1?g.concat(c):c}}return g}c=new f("__$gimme$_unique__");b=new f("__$gimme$_genSib__");a=new f("__$gimme$_nth__");e={id:function(a,b){return a.id===b},tag:function(b,a){return b.tagName===a||a==="*"},classes:function(c,b){var a=c.className;if(typeof a!=="string")a=g(c,"class");if(!a)return false;var e=" "+a+" ",d=b.length;while(d--)if(e.indexOf(" "+b[d]+" ")===-1)return false;return true},attributes:function(){var b={},a={parse:function(c){var a=c.match(/^\[([\w-_]+)?(\=|\^=|\$=|\*=|\|=|~=|!=)?(.*)\]$/);return b[c]={name:a&&a[1],delim:a&&a[2],val:a&&a[3].replace(/^['"]|["']$/g,"")}},"=":function(a,b){return a===b},"^=":function(a,b){return a.indexOf(b)===0},"$=":function(a,b){var c=a.lastIndexOf(b);return c!==-1&&c+b.length===a.length},"*=":function(a,b){return a.indexOf(b)!==-1},"|=":function(a,b){return a===b||a.indexOf(b+"-")===0},"~=":function(a,b){return a===b||l(a.split(" "),b)},"!=":function(a,b){return a!==b},unknown:function(){return false}};return function(h,d){var e=d.length;while(e--){var c=b[d[e]]||a.parse(d[e]),f=g(h,c.name);if(!f)return false;if(!c.delim)continue;if(!a[c.delim||"unknown"](f,c.val))return false}return true}}(),pseudos:function(){var d={},b={parse:function(c){var a=c.match(/([\w-_]+)\b(\((((-?\d*)n)?([+-]?\d+)?|.*)\))?/),b={name:a&&a[1],param:{wholeValue:a&&a[3],a:a&&a[5]||0,b:a&&a[6]||0}};if(b.param.wholeValue==="even"){b.param.a=2;b.param.b=0}else if(b.param.wholeValue==="odd"){b.param.a=2;b.param.b=1}return d[c]=b},"first-child":c("previous"),"last-child":c("next"),"only-child":function(a){return b["first-child"](a)&&b["last-child"](a)},"nth-child":function(i,b){var k=1e4,h=a.t*k,d=a.name,c=i.parentNode,j=0;if(c){if(c[d+":parent"]!==a.t){c[d+":parent"]=a.t;var j=0,m,e=c.children||c.childNodes,f=-1,l=e.length;while(++f<l)if(e[f].nodeType===1){j++;e[f][d]=h+j}}var g=i[d]-h-b.param.b;return !b.param.a&&b.param.b?g===0:b.param.a*g>=0&&g%(b.param.a||1)===0}return false},contains:function(a,b){return (a.textContent||a.innerText||a.innerHTML).indexOf(b.param.wholeValue)!==-1},not:function(){return false}};function c(b){var a=b+"Sibling";return function(c){var b=c[a];while(b&&b.nodeType!==1)b=b[a];return !b}}return function(f,a){var c=a.length;while(c--){var e=d[a[c]]||b.parse(a[c]);if(!b[e.name](f,e))return false}return true}}()," ":function(d,e){for(var a=[],f=d.length,b=0;b<f;b++){var c=i(e,d[b]);a=a.concat(c);if(e.id&&c.length===1)break}return p(a)},">":function(c,e){for(var a=[],d=c.length,b=0;b<d;b++)a=a.concat(o(c[b].childNodes,e));return a},"+":function(e,h){for(var c=[],g=e.length,b=0;b<g;b++){var f=e[b],a=f.nextSibling;while(a&&a.nodeType!==1)a=a.nextSibling;d(h,a)&&c.push(a)}return c},"~":function(g,j){b.inc();for(var e=b.name,f=[],i=g.length,c=0;c<i;c++){var h=g[c],a=h.nextSibling;while(a&&a[e]!==b.t){if(a.nodeType===1){a[e]=b.t;d(j,a)&&f.push(a)}a=a.nextSibling}}return f}};j=new function(){var d,b,a;function c(){this.propNames=[]}c.prototype.propNames=[];c.prototype.storePropertyValue=function(a,b){this[a]=b;if(!this.propNames[a]){this.propNames.push(a);this.propNames[a]=true}};c.prototype.storeArrayValue=function(a,b){if(!this[a])this[a]=[];this[a].push(b);if(!this.propNames[a]){this.propNames.push(a);this.propNames[a]=true}};var e={preprocessInput:function(a){return a.replace(/\s*([ >+~,])\s*/g,"$1")},reset:function(){d=[];b=[];a=new c},finish:function(){a&&a.propNames.length>0&&b.push(a);b.length>0&&d.push(b);return d},"default":function(e){var d="tag",c=e.match(/(\w+|\*)/);if(c){var b=c[0].toUpperCase();a.storePropertyValue(d,b);return b.length}return null},"#":function(d){var c="id",b=d.match(/#([_\-\w]+)/);if(b){var e=b[1];a.storePropertyValue(c,e);return b[0].length}return null},".":function(d){var c="classes",b=d.match(/\.([_\-\w\d]+)/);if(b){var e=b[1];a.storeArrayValue(c,e);return b[0].length}},"[":function(e){var d="attributes",c=e.match(/(\[.*"\]|.*?\])/);if(c){var b=c[0];a.storeArrayValue(d,b);return b.length}return null},":":function(e){var d="pseudos",c=e.match(/:[\w-_]+\b(\(.*\))?/);if(c){var b=c[0];a.storeArrayValue(d,b);return b.length}return null}," ":function(){b.push(a," ");a=new c;return 1},">":function(){a.propNames.length>0&&b.push(a);b.push(">");a=new c;return 1},"~":function(){b.push(a,"~");a=new c;return 1},"+":function(){b.push(a,"+");a=new c;return 1},",":function(){b.push(a);d.push(b);b=[];a=new c;return 1}};return e};n=new t(j);q.Utility={unique:p,index_of:m,contains:l,has_class:e.classes,get_attr:g};return q}();function b(a){Array.prototype.push.apply(this,a)}b.prototype={length:Array.prototype.length,entities:function(){return Array.prototype.slice.apply(this)},sort:function(a){Array.prototype.sort.call(this,a);return this},reverse:function(){Array.prototype.reverse.call(this);return this},push:function(){Array.prototype.push.apply(this,arguments);return this},pop:function(){Array.prototype.pop.call(this);return this},shift:function(){Array.prototype.shift.call(this);return this},unshift:function(){Array.prototype.unshift.apply(this,arguments);return this},slice:function(){return new b(Array.prototype.slice.apply(this,arguments))},splice:function(){return new b(Array.prototype.splice.apply(this,arguments))},concat:function(a){return new b(Array.prototype.concat.apply(this.entities(),a.entities&&a.entities()||arguments))}};function c(c,d){var e=!c&&[]||(d||typeof c==="string")&&a(c,d)||c instanceof Array&&c||[c];return new b(e)}c.Helper={index_of:a.Utility.index_of,contains:a.Utility.contains,unique:a.Utility.unique,has_class:a.Utility.has_class,get_attr:a.Utility.get_attr,get_guid:function(){var a=0;return function(b){if(b===window)return "win";else if(b===document)return "doc";else if(b.uniqueID)return b.uniqueID;var c="__$gimme$_guid__";if(typeof b[c]==="undefined")b[c]=c+a++;return b[c]}}()};c.Browser=function(){var a=navigator.userAgent.toLowerCase();return {is_ie:typeof ActiveXObject!=="undefined",is_opera:typeof window.opera!=="undefined",is_khtml:a.indexOf("khtml")!==-1,is_gecko:a.indexOf("khtml")===-1&&a.indexOf("gecko")!==-1,is_in_quirks_mode:document.compatMode==="BackCompat"}}();c.undefined={}._$gimme$_undefined;c.ext=b.prototype;c.query=a;return c}();(function(){var b=Gimme.Helper;Gimme.ext.element=function(a){return this[a||0]};Gimme.ext.parent=function(b){var a=this[b||0];return Gimme(a&&a.parentNode)};Gimme.ext.has=function(a,c){var b=this[c||0];return Gimme(a,b).length>0};Gimme.ext.add_class=function(c){var a=c.split(/\s+/);this.for_each(function(c){Gimme(a).for_each(function(a){if(!b.has_class(c,[a]))if(c.className==="")c.className=a;else c.className+=" "+a})});return this};Gimme.ext.remove_class=function(a){return this.swap_class(a,"$1")};Gimme.ext.swap_class=function(b,a){if(a!=="$1")a=" "+a+" ";var c=b.split(/\s+/);this.for_each(function(d){var b=d.className;Gimme(c).for_each(function(c){var d=new RegExp("(^| )"+c+"( |$)");b=b.replace(d,a)});d.className=b.replace(/^\s+|\s+$/g,"")});return this};Gimme.ext.has_class=function(c,d){var a=this[d||0];return a&&b.has_class(a,[c])||false};Gimme.ext.get_native_prop=function(b,c){var a=this[c||0];return a?a[b]:""};Gimme.ext.get_ancestor=function(b,d){var a=this[d||0],c=b;while(c-->0)if(a)a=a.parentNode;else break;return Gimme(a)};Gimme.ext.get_sibling=function(b,g){var f=this[g||0],a=f;if(b!==0){var d=b>0?"nextSibling":"previousSibling",e=Math.abs(b),c=0;while(c<e){a=a[d];if(!a)break;if(a.nodeType===1)c++}}return Gimme(a)};Gimme.ext.select=function(a){return Gimme(a,this[0])};Gimme.ext.set_html=function(a){this.for_each(function(b){b.innerHTML=a});return this};Gimme.ext.get_html=function(b){var a=this[b||0];return a&&a.innerHTML||""};Gimme.ext.set_val=function(a){this.for_each(function(b){if(typeof b.value!=="undefined")b.value=a});return this};Gimme.ext.get_val=function(b){var a=this[b||0];return a&&a.value||""};Gimme.ext.get_attr=function(c,d){var a=this[d||0];return a&&b.get_attr(a,c)||""};Gimme.ext.set_attr=function(a,b){this.for_each(function(c){c.setAttribute(a,b)});return this};Gimme.ext.filter=function(c){var b=Gimme(),a=this.length;while(a--)c(this[a])&&b.unshift(this[a]);return b};Gimme.ext.iterate=function(b){for(var d=this.length,a=0;a<d;a++){var c=Gimme(this[a]);b.call(c,a)}_callback=null;return this};Gimme.ext.get_style=function(c,d){var b=this[d||0];if(b)return c==="opacity"?k(b):a(b,c);return ""};Gimme.ext.set_style=function(a){this.for_each(function(c){var b;for(b in a)switch(b){case "opacity":l(c,a[b]);break;default:c.style[b]=a[b]}});return this};Gimme.ext.add_event=function(){return document.addEventListener?a:document.attachEvent?e:function(){};function a(a,c,b,d){if(!d&&Gimme.Events&&Gimme.Events.Pseudo&&Gimme.Events.Pseudo[a])Gimme.Events.Pseudo[a].add(this,c,b);else this.for_each(function(d){d.addEventListener(a,c,b)});return this}function e(a,f,e,j){function i(b,a){a.eventPhase=a.eventPhase||1;a.target=a.srcElement;a.currentTarget=b;switch(a.type){case "keyup":case "keydown":case "keypress":if(b.type!=="file")a.keyCode===186?(a.keyCode=59):a.keyCode===187?(a.keyCode=61):a.keyCode===189?(a.keyCode=109):null;a.which=a.keyCode;a.charCode=a.keyCode;break;case "mousedown":case "mouseup":case "click":case "dblclick":case "contextmenu":a.which=([1,1,3,a.button,2])[a.button];break;case "mouseover":a.relatedTarget=a.fromElement;break;case "mouseout":a.relatedTarget=a.toElement}a.preventDefault=function(){a.returnValue=false};a.stopPropagation=function(){a.cancelBubble=true};return a}function h(d,e,f){var a=c[d];if(!a)a=c[d]={};var b=a[e];if(!b)b=a[e]=[];b.push(f)}function g(k,j){var i=[],e=k;while(e&&e!==document){i.push(e);e=e.parentNode}var h;while(h=i.pop()){var d=b.get_guid(h);if(c[a][d])for(var l=c[a][d].length,f=0;f<l;f++)if(!j.cancelBubble){var g=c[a];g[d]&&g[d][f]&&g[d][f].call(h,j)}}}if(!j&&Gimme.Events&&Gimme.Events.Pseudo&&Gimme.Events.Pseudo[a])Gimme.Events.Pseudo[a].add(this,f,e);else this.for_each(function(k){var m=b.get_guid(k),n=b.get_guid(f)+(e||false).toString(),l="{"+m+" / "+a+" / "+n+"}";e&&h(a,m,f);var j=d[l];if(!j){j=function(b){b=i(k,b);c[a]&&b.eventPhase===1&&g(k,b);b.eventPhase=3;!e&&!b.cancelBubble&&f.call(k,b);b.eventPhase=b.target=b.currentTarget=b.relatedTarget;b.which=b.preventDefault=b.stopPropagation=b=null};d[l]=j;k.attachEvent("on"+a,j)}l=null;j=null});return this}}();Gimme.ext.remove_event=function(){return document.addEventListener?a:document.attachEvent?e:function(){};function a(a,c,b,d){if(!d&&Gimme.Events&&Gimme.Events.Pseudo&&Gimme.Events.Pseudo[a])Gimme.Events.Pseudo[a].remove(this,c,b);else this.for_each(function(d){d.removeEventListener(a,c,b)});return this}function e(a,f,e,h){function g(f,d,g){var b=c[f];if(b){var a=b[d];if(a){var e=Gimme(a).index_of(g);e!==-1&&Gimme(a).splice(e,1);if(a.length===0)delete b[d]}}}if(!h&&Gimme.Events&&Gimme.Events.Pseudo&&Gimme.Events.Pseudo[a])Gimme.Events.Pseudo[a].remove(this,f,e);else this.for_each(function(j){var i=b.get_guid(j),k=b.get_guid(f)+(e||false).toString(),h="{"+i+" / "+a+" / "+k+"}";e&&g(a,i,f);var c=d[h];if(c){j.detachEvent("on"+a,c);delete d[h]}h=null;c=null});return this}}();Gimme.ext.for_each=function(){return typeof Array.prototype.forEach!=="undefined"?b:a;function b(b,a){this.entities().forEach(b,a);return this}function a(e,c){for(var b=this.entities(),d=b.length,a=0;a<d;a++)e.call(c,b[a],a,b);return this}}();Gimme.ext.map=function(){return typeof Array.prototype.map!=="undefined"?b:a;function b(b,a){return Gimme(this.entities().map(b,a))}function a(d,c){var a=Gimme(),b=this.length;while(b--)a.unshift(d.call(c,this[b]));return a}}();Gimme.ext.unique=function(){return Gimme(b.unique(this.entities()))};Gimme.ext.contains=function(a){return b.contains(this.entities(),a)};Gimme.ext.index_of=function(a){return b.index_of(this.entities(),a)};Gimme.ext.get_absolute_pos=function(b){var a=this[b||0];return a&&j(a)||{x:0,y:0}};Gimme.ext.get_relative_pos=function(b){var a=this[b||0];return a&&e(a)||{x:0,y:0}};Gimme.ext.get_style_pos=function(c){var b=this[c||0];return {x:parseFloat(a(b,"left")),y:parseFloat(a(b,"top"))}};Gimme.ext.get_scroll_pos=function(c){var b=this[c||0],a={x:0,y:0};if(b===window){if(typeof window.pageYOffset!=="undefined"){a.x=window.pageXOffset;a.y=window.pageYOffset}else if(!Gimme.Browser.is_in_quirks_mode&&typeof document.documentElement.scrollTop!=="undefined"){a.x=document.documentElement.scrollLeft;a.y=document.documentElement.scrollTop}else if(typeof document.body.scrollTop!=="undefined"){a.x=document.body.scrollLeft;a.y=document.body.scrollTop}}else{a.x=b.scrollLeft;a.y=b.scrollTop}return a};var d={},c={};function e(b){var d=b.scrollTop&&b!==document.documentElement&&b!==document.body&&b.tagName!=="TEXTAREA"&&b.tagName!=="INPUT"?-1:0,c={x:b.scrollLeft*d,y:b.scrollTop*d};if(Gimme.Browser.is_ie&&a(b,"position")==="static"){var e=b.style.position;b.style.position="relative";c.x+=b.offsetLeft;c.y+=b.offsetTop;b.style.position=e}else{c.x+=b.offsetLeft;c.y+=b.offsetTop}return c}function j(b){var c={x:0,y:0};if(b.getBoundingClientRect){var j=b.getBoundingClientRect(),g=h(),f=Gimme(window).get_scroll_pos();c.x=j.left-g.x+f.x;c.y=j.top-g.y+f.y}else{var d;while(b!==null){d=e(b);c.x+=d.x;c.y+=d.y;b=b.offsetParent;if(b&&!i()){c.x+=parseFloat(a(b,"borderLeftWidth"))||0;c.y+=parseFloat(a(b,"borderTopWidth"))||0}}}return c}function a(c,b){var a="";if(c.currentStyle&&(b==="right"||b==="bottom"))a=f(b,"auto","auto",c)+"px";else{var e=document.defaultView&&document.defaultView.getComputedStyle&&document.defaultView.getComputedStyle(c,null)||c.currentStyle;if(e){var a=e[b]||"",g=a.match(/px$/);if(!g){var d=a.match(/(em|ex|%|in|cm|mm|pt|pc|small|medium|large|thin|thick|auto)$/);if(d)a=f(b,a,d[0],c)+"px"}}}return a}function f(c,f,k,b){if(!f)return 0;else if(k==="px")return parseFloat(f);else if(f==="auto")switch(c){case "top":case "left":return 0;case "bottom":case "right":var g={bottom:["top","offsetTop","height","offsetHeight"],right:["left","offsetLeft","width","offsetWidth"]},l=Gimme(b);if(l.get_style("position")==="relative"){var o=g[c][0];return -parseInt(l.get_style(o))}else{var e=b.parentNode;while(e!==document&&Gimme(e).get_style("position")==="static")e=e.parentNode;var i=g[c][2],h;if(e===document)h=Gimme.Screen.getViewportSize()[i];else h=parseInt(Gimme(e).get_style(i));var n=g[c][1],m=g[c][3];return h-b[n]-b[m]}case "height":return b.clientHeight||b.offsetHeight&&b.offsetHeight-parseFloat(a(b,"borderTopWidth"))-parseFloat(a(b,"borderBottomWidth"))||0;case "width":return b.clientWidth||b.offsetWidth&&b.offsetWidth-parseFloat(a(b,"borderLeftWidth"))-parseFloat(a(b,"borderRightWidth"))||0;default:return 0}else{switch(c){case "borderLeftWidth":case "borderRightWidth":case "borderTopWidth":case "borderBottomWidth":c=c.replace("Width","Style");var j=a(b,c);return j==="none"?0:parseFloat(j)}b=b||document.body;var d=document.createElement("div");d.style.visbility="hidden";d.style.position="absolute";d.style.lineHeight="0";if(k==="%"){b=b.parentNode;if(c==="height"||c==="top")d.style.height=f;else if(c==="width"||c==="left")d.style.width=f}else{d.style.borderStyle="solid";d.style.borderBottomWidth="0";d.style.borderTopWidth=f}try{b.appendChild(d)}catch(p){b=b.parentNode;b.appendChild(d)}b.offsetWidth;b.offsetHeight;var q=d.offsetHeight||d.offsetWidth;b.removeChild(d);return q}}var l=function(){function b(b,a){b.style.opacity=a}function c(c,a){a*=100;var b;try{b=c.filters.item("DXImageTransform.Microsoft.Alpha");if(a<100){b.Opacity=a;if(!b.enabled)b.enabled=true}else b.enabled=false}catch(d){if(a<100)c.style.filter=(c.currentStyle||c.runtimeStyle).filter+" progid:DXImageTransform.Microsoft.Alpha(opacity="+a+")"}}var a=document.createElement("div");return typeof a.style.opacity!=="undefined"&&b||typeof a.style.filter!=="undefined"&&c||function(){}}(),k=function(){function c(b){return parseFloat(b.style.opacity)||a(b,"opacity")}function d(b){var a=b.filters["DXIMageTransform.Microsoft.Alpha"];if(a)return a.Opacity/100;else return 1}var b=document.createElement("div");return typeof b.style.opacity!=="undefined"&&c||typeof b.style.filter!=="undefined"&&d||function(){}}();function i(){if(typeof arguments.callee.constantValue==="undefined"){var a=document.createElement("div");a.setAttribute("style","position:absolute;visibility:hidden;top:0;left:0;border:1px solid #000;");var b=document.createElement("div");a.appendChild(b);document.body.appendChild(a);arguments.callee.constantValue=b.offsetTop===1;document.body.removeChild(a);a=b=null}return arguments.callee.constantValue}function h(){if(typeof arguments.callee.constantValue==="undefined"){var a=document.body,d=a.style.position,c=a.style.margin;a.style.position="static";a.style.margin="0";var b=a.getBoundingClientRect();arguments.callee.constantValue={x:b.left,y:b.top};a.style.position=d;a.style.margin=c}return arguments.callee.constantValue}if(typeof g==="undefined")window.g=Gimme})();Gimme.Events=new function(){var c={},b=null,a=null;this.capture_mouse=function(c){Gimme.Events.release_mouse();b=c;if(typeof c.setCapture!=="undefined")c.setCapture();else{a=function(b){var d,e;if(Gimme.Browser.is_gecko){d=document.createEvent("MouseEvents");d.initMouseEvent(b.type,b.bubbles,b.cancelable,window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);e=Gimme.Screen.get_scroll_pos();d.__defineGetter__("pageX",function(){return this.clientX+e.x});d.__defineGetter__("pageY",function(){return this.clientY+e.y})}else d=b;document.removeEventListener(b.type,a,true);d.captureTarget=b.target;c.dispatchEvent(d);a!==null&&document.addEventListener(b.type,a,true);delete d.captureTarget;b.stopPropagation()};document.addEventListener("mouseover",a,true);document.addEventListener("mouseout",a,true);document.addEventListener("mousemove",a,true);document.addEventListener("mouseup",a,true);document.addEventListener("mousedown",a,true);document.addEventListener("click",a,true);document.addEventListener("dblclick",a,true)}return this};this.release_mouse=function(){if(b!==null){if(typeof b.releaseCapture!=="undefined")b.releaseCapture();else{document.removeEventListener("mouseover",a,true);document.removeEventListener("mouseout",a,true);document.removeEventListener("mousemove",a,true);document.removeEventListener("mouseup",a,true);document.removeEventListener("mousedown",a,true);document.removeEventListener("click",a,true);document.removeEventListener("dblclick",a,true)}b=a=null}return this};this.get_capture_target=function(a){return a.captureTarget||a.srcElement||a.target};this.Pseudo={mouseenter:{wire:function(f,c,a,b){var e=b?Gimme.ext.add_event:Gimme.ext.remove_event;e.call(f,"mouseover",d(c),a,true)},add:function(c,b,a){Gimme.Events.Pseudo.mouseenter.wire(c,b,a,true)},remove:function(c,b,a){Gimme.Events.Pseudo.mouseenter.wire(c,b,a,false)}},mouseleave:{wire:function(f,c,a,b){var e=b?Gimme.ext.add_event:Gimme.ext.remove_event;e.call(f,"mouseout",d(c),a,true)},add:function(c,b,a){Gimme.Events.Pseudo.mouseleave.wire(c,b,a,true)},remove:function(c,b,a){Gimme.Events.Pseudo.mouseleave.wire(c,b,a,false)}},mousewheel:{wire:function(h,b,d,e){var g=e?Gimme.ext.add_event:Gimme.ext.remove_event,a="mousewheel",c=b;if(Gimme.Browser.is_gecko){a="DOMMouseScroll";c=f(b)}g.call(h,a,c,d,true)},add:function(c,b,a){Gimme.Events.Pseudo.mousewheel.wire(c,b,a,true)},remove:function(c,b,a){Gimme.Events.Pseudo.mousewheel.wire(c,b,a,false)}}};function e(c,a,b){if(c===a)return false;var d=0;while(a&&a!=c){d++;a=a.parentNode}b=b||d;return a===c&&b===d}function d(b){var d=Gimme.Helper.get_guid(b),a=c[d];if(!a)a=c[d]=function(c){var a=c.relatedTarget;if(!a||this===a||e(this,a))return;b.call(this,c)};return a}function f(b){var d=Gimme.Helper.get_guid(b),a=c[d];if(!a)a=c[d]=function(a){a.wheelDelta=-40*a.detail;b.call(this,a);a.wheelDelta=null};return a}};Gimme.Ajax=new function(){this.request_json=function(b,a){doAsyncRequest(b,a,true)};this.request_ahah=function(b,a){doAsyncRequest(b,a,false)};function createXHR(){if(typeof XMLHttpRequest!=="undefined")return new XMLHttpRequest;else if(typeof ActiveXObject!=="undefined")try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){throw new Error("Error invoking XMLHTTP")}else throw new Error("XMLHttp is not supported")}function doAsyncRequest(_uri,_callback,_isJSON){var xhr=createXHR();xhr.onreadystatechange=function(){if(xhr.readyState===4){if(xhr.status===200){var data=xhr.responseText;if(_isJSON)data=eval("("+xhr.responseText+")");_callback.call(xhr,data)}xhr=null;callback=null}};xhr.open("GET",_uri,true);xhr.send("")}};Gimme.Util=new function(){this.set_timeout=function(){return a(arguments,false)};this.set_interval=function(){return a(arguments,true)};function a(a,c){var e=a[0],b=a[1];function d(){e.apply(this,Array.prototype.slice.call(a,2));if(!c)e=null}if(c===true)return window.setInterval(d,b);else return window.setTimeout(d,b)}};Gimme.Screen=new function(){this.get_viewport_size=function(){var a={width:0,height:0};if(typeof window.innerWidth!=="undefined")a={width:window.innerWidth,height:window.innerHeight};else if(typeof document.documentElement!=="undefined"&&typeof document.documentElement.clientWidth!=="undefined"&&document.documentElement.clientWidth!==0)a={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight};else a={width:document.getElementsByTagName("body")[0].clientWidth,height:document.getElementsByTagName("body")[0].clientHeight};return a};this.get_mouse_pos=function(a){a=a||window.event;var b={x:0,y:0};if(typeof a.pageX!=="undefined"&&typeof a.x!=="undefined"){b.x=a.pageX;b.y=a.pageY}else{var c=this.get_scroll_pos();b.x=a.clientX+c.x;b.y=a.clientY+c.y}return b};this.get_scroll_pos=function(){return Gimme(window).get_scroll_pos()}};Gimme.Effects={Animation:function(b){var a=b.elements||[],f=b.duration||1,c=b.from||{},d=b.to||{},e={};(function(){var f,b,i,g={},h={},j={};for(b in c){g[b]=[];h[b]=[];j[b]=[];f=a.length;while(f--){i=a[f];g[b][f]=typeof c[b]==="function"?c[b](i,b):c[b];h[b][f]=typeof d[b]==="function"?d[b](i,b):d[b];j[b][f]=h[b][f]-g[b][f]}}c=g;d=h;e=j})();var g=b.animate,h=b.easing||function(a){return a};this.startTime=b.startTime||0;this.duration=f;this.add_element=function(b){a.push(b)};this.remove_element=function(c){var b=a.length;while(b--)if(a[b]===c){a.splice(b,1);break}};this.tick=i;function i(i){_ease=h(i);var d=a.length;while(d--){var b,f={};for(b in e)f[b]=c[b][d]+e[b][d]*_ease;g(a[d],f,i)}}},Storyboard:function(f){var m,h,a=0,b=1,e=false,c=f.animations,g=f.duration||0,j=f.completed,k=f.aborted;function d(){if(!e){e=true;h=(new Date).getTime();m=setInterval(v,1)}}this.begin=x;function x(){a=0;b=1;d()}this.abort=w;function w(){i();k&&k(a)}this.pause=i;function i(){clearInterval(m);e=false}this.resume=u;function u(){d()}this.forward=s;function s(){b=1;d()}this.backward=r;function r(){b=-1;d()}this.reverse=t;function t(){b*=-1;d()}this.seek=y;function y(b){a=b;l()}this.is_running=q;function q(){return e}this.get_direction=o;function o(){return b}this.get_animations=n;function n(){return c}this.get_duration=p;function p(){return g}function v(){var c=(new Date).getTime();a+=(c-h)/g*b;h=c;a=a<0?0:a>1?1:a;l();if(b===-1&&a===0||b===1&&a===1){i();j&&j(a)}}function l(){var e=c.length;while(e--){var d=(g*a-c[e].startTime)/c[e].duration;d=b===-1&&d<0?0:b===1&&d>1?1:d;d>=0&&d<=1&&c[e].tick(d)}}},Easing:{Back:new function(){function c(a,d,b,c){d=.5;b=0;c=.5;return Math.pow(1-a,b)*c*Math.sin(2*Math.PI*a*d)*-1+a}this.ease_in=c;function b(){}this.ease_out=b;function a(){}this.ease_in_out=a},Bounce:new function(){function c(c,a,b){a=a||1.5;b=b||4;return Math.abs(Math.pow(c,a)*Math.cos(Math.PI*c*b))}this.ease_in=c;function b(c,a,b){return 1-Gimme.Effects.Easing.Bounce.easeIn(1-c,a,b)}this.ease_out=b;function a(a,d,e){var f=1,c=0,b=Gimme.Effects.Easing.Bounce.easeIn;if(a>.5){b=Gimme.Effects.Easing.Bounce.easeOut;a-=.5;c=f/2}return b(a,d,e)-c}this.ease_in_out=a},Elastic:new function(){function c(){}this.ease_in=c;function b(c,b,a){b=b||3.5;a=a||5;return 1-Math.pow(1-c,b)*Math.cos(2*Math.PI*c*a)}this.ease_out=b;function a(){}this.ease_in_out=a},Exponential:new function(){function b(b,a){return Math.pow(b,a)}this.ease_in=b;function a(b,a){return Math.pow(b,1/a)}this.ease_out=a;function c(c,d){return c<=.5?b(c*2,d)*.5:a((c-.5)*2,d)*.5+.5}this.ease_in_out=c}},Enums:{Directions:{vertically:1,horizontally:2,both:3},Speeds:{quickly:500,slowly:1e3}},Animations:{fade:function(a,e,c,d,b){this.set_style({zoom:1});if(a===null)a=function(a,b){return Number(Gimme(a).get_style(b))};var f=Gimme.Effects.Animations.createStoryboard(this,{opacity:a},{opacity:e},function(b,a){Gimme(b).set_style({opacity:a.opacity})},c,d,b,null);f.begin();return this},bounce:function(a,g,c,e,b){function d(a){return Gimme(a).get_style_pos().y}if(a===null)a=d;var f=Gimme.Effects.Animations.createStoryboard(this,{top:a},{top:g},function(b,a){b.style.top=Math.ceil(a.top)+"px"},c,e,b,Gimme.Effects.Easing.Bounce.easeOut);f.begin();return this},slide:function(a,c,e,g,d,f){function b(b,a){a=a==="left"?"x":"y";var c=b.__pos;if(!c)c=b.__pos=Gimme(b).get_style_pos();if(a==="y")b.__pos=Gimme.undefined;return c[a]}if(a===null)a={x:b,y:b};var h=Gimme.Effects.Animations.createStoryboard(this,{left:a.x,top:a.y},{left:c.x,top:c.y},function(b,a){b.style.top=Math.round(a.top)+"px";b.style.left=Math.round(a.left)+"px"},e,g,d,f||function(a){return Gimme.Effects.Easing.Exponential.ease_in_out(a,4)});h.begin();return this},scrollTo:function(b,d,a,c){scrollPos=Gimme.Screen.get_scroll_pos();elemPos=Gimme(this[0]).get_absolute_pos();var e=Gimme.Effects.Animations.createStoryboard([window],{scrollX:scrollPos.x,scrollY:scrollPos.y},{scrollX:elemPos.x,scrollY:elemPos.y},function(b,a){b.scrollTo(Math.round(a.scrollX),Math.round(a.scrollY))},b,d,a,c||function(a){return Gimme.Effects.Easing.Exponential.easeOut(a,4)});e.begin();return this},veil:function(b,i,k,h,j){var a=Gimme.Effects.Enums.Directions;b=Math.floor(b)||a[b]||a.vertically;var e="_$gimme$_veil";function g(a,b){var c=parseInt(Gimme(a).get_style(b),10);a[e]=a[e]||{};return a[e][b]=c}var d={},c={};if((b&a.vertically)===a.vertically){c.height=c.paddingTop=c.paddingBottom=g;d.height=d.paddingTop=d.paddingBottom=0}if((b&a.horizontally)===a.horizontally){c.width=c.paddingLeft=c.paddingRight=g;d.width=d.paddingLeft=d.paddingRight=0}var f=Gimme.Effects.Animations.createStoryboard(this.filter(function(a){var b=a.style.display||Gimme(a).get_style("display");return b!=="none"}),c,d,function(e,d){var c=e.style;if((b&a.vertically)===a.vertically){c.height=d.height+"px";c.paddingTop=d.paddingTop+"px";c.paddingBottom=d.paddingBottom+"px"}if((b&a.horizontally)===a.horizontally){c.width=d.width+"px";c.paddingRight=d.paddingRight+"px";c.paddingLeft=d.paddingLeft+"px"}},i,k,h,j||function(a){return Gimme.Effects.Easing.Exponential.ease_in_out(a,4)});f.get_animations().push(new Gimme.Effects.Animation({startTime:0,elements:this,animate:function(a){a.style.overflow="hidden"}}),new Gimme.Effects.Animation({startTime:f.get_duration(),elements:this,animate:function(a){a.style.display="none"}}));f.begin();return this},unveil:function(b,h,j,g,i){var a=Gimme.Effects.Enums.Directions;b=Math.floor(b)||a[b]||a.vertically;function f(a,c){var b=a["_$gimme$_veil"];if(!b)b=b||function(){var b=a.cloneNode(true);b.setAttribute("style","position:absolute;top:0;left:0;visibility:hidden;margin:0;padding:0;border:0;height:;width:;");b.style.display="block";a.parentNode.appendChild(b);b=Gimme(b);var d=parseInt(Gimme(a).get_style("height"),10)||parseInt(b.get_style("height"),10),e=parseInt(Gimme(a).get_style("width"),10)||parseInt(b.get_style("width"),10);b[0].style.padding=a.style.padding;var c={height:d,width:e,paddingTop:parseInt(b.get_style("paddingTop"),10),paddingBottom:parseInt(b.get_style("paddingBottom"),10),paddingRight:parseInt(b.get_style("paddingRight"),10),paddingLeft:parseInt(b.get_style("paddingLeft"),10)};a.parentNode.removeChild(b[0]);a.style.overflow="hidden";return c}();return b[c]}var a=Gimme.Effects.Enums.Directions;b=Math.floor(b)||a[b]||a.vertically;var d={},c={};if((b&a.vertically)===a.vertically){c.height=c.paddingTop=c.paddingBottom=0;d.height=d.paddingTop=d.paddingBottom=f}if((b&a.horizontally)===a.horizontally){c.width=c.paddingLeft=c.paddingRight=0;d.width=d.paddingLeft=d.paddingRight=f}var e=Gimme.Effects.Animations.createStoryboard(this.filter(function(b){var a=b.style.display||Gimme(b).get_style("display");return a==="none"||a===null}),c,d,function(d,c){if((b&a.vertically)===a.vertically){d.style.height=c.height+"px";d.style.paddingTop=c.paddingTop+"px";d.style.paddingBottom=c.paddingBottom+"px"}if((b&a.horizontally)===a.horizontally){d.style.width=c.width+"px";d.style.paddingRight=c.paddingRight+"px";d.style.paddingLeft=c.paddingLeft+"px"}},h,j,g,i||function(a){return Gimme.Effects.Easing.Exponential.ease_in_out(a,4)});e.get_animations().push(new Gimme.Effects.Animation({startTime:0,elements:this,animate:function(a){a.style.overflow="hidden";a.style.display="block"}}),new Gimme.Effects.Animation({startTime:e.get_duration(),elements:this,animate:function(a){a.style.overflow=""}}));e.begin();return this},animate:function(props,duration,guid,callback,easing){var from={units:{}},to={};for(var key in props){from[key]=getFrom;to[key]=getTo}var sb=Gimme.Effects.Animations.createStoryboard(this,from,to,function(d,c){var e=Gimme(d);for(var a in c){if(a==="units")continue;var b={};b[a]=c[a]+from.units[a];e.set_style(b)}},duration,guid,callback,easing);sb.begin();function getFrom(c,a){var b=Gimme(c).get_style(a);from.units[a]=(b+"").match(/[^\d]+$/)||"";return parseFloat(b)}function getTo(elem,key){var f=from[key](elem,key),v=eval("f"+props[key]);return v}},createStoryboard:function(g,h,i,e,a,b,d,f){a=Math.floor(a)||Gimme.Effects.Enums.Speeds[a]||Gimme.Effects.Enums.Speeds.quickly;var c=new Gimme.Effects.Storyboard({duration:a,completed:function(){d&&d.call(this);Gimme.Effects.RunningAnimations.remove(b);c=null},aborted:function(){Gimme.Effects.RunningAnimations.remove(b);c=null},animations:[new Gimme.Effects.Animation({from:h,to:i,duration:a,animate:e,easing:f,elements:g})]});b&&Gimme.Effects.RunningAnimations.add(b,c);return c}},RunningAnimations:function(){var a={};return {add:function(b,c){a[b]=c},remove:function(b){delete a[b]},"get":function(b){return a[b]||new Gimme.Effects.Storyboard({animations:[]})}}}()};Gimme.ext.fade_to=Gimme.Effects.Animations.fade;Gimme.ext.fade_in=function(b,d,a,c){return Gimme.Effects.Animations.fade.call(this,0,1,b,d,a,c)};Gimme.ext.fade_out=function(b,d,a,c){return Gimme.Effects.Animations.fade.call(this,1,0,b,d,a,c)};Gimme.ext.bounce=Gimme.Effects.Animations.bounce;Gimme.ext.slide=Gimme.Effects.Animations.slide;Gimme.ext.scroll_to=Gimme.Effects.Animations.scrollTo;Gimme.ext.veil=Gimme.Effects.Animations.veil;Gimme.ext.unveil=Gimme.Effects.Animations.unveil;Gimme.ext.animate=Gimme.Effects.Animations.animate;Gimme.ver="Gimme v2.6.0 (Digory) :: 6/9/2011, 15:56:12"