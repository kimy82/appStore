(function(){var t,e=this,i=e.Backbone,s=Array.prototype.slice,n=Array.prototype.splice;t="undefined"!=typeof exports?exports:e.Backbone={},t.VERSION="0.9.2";var r=e._;r||"undefined"==typeof require||(r=require("alloy/underscore"));var a=e.jQuery||e.Zepto||e.ender;t.setDomLibrary=function(t){a=t},t.noConflict=function(){return e.Backbone=i,this},t.emulateHTTP=!1,t.emulateJSON=!1;var o=/\s+/,h=t.Events={on:function(t,e,i){var s,n,r,a,h;if(!e)return this;for(t=t.split(o),s=this._callbacks||(this._callbacks={});n=t.shift();)h=s[n],r=h?h.tail:{},r.next=a={},r.context=i,r.callback=e,s[n]={tail:a,next:h?h.next:r};return this},off:function(t,e,i){var s,n,a,h,c,u;if(n=this._callbacks){if(!(t||e||i))return delete this._callbacks,this;for(t=t?t.split(o):r.keys(n);s=t.shift();)if(a=n[s],delete n[s],a&&(e||i))for(h=a.tail;(a=a.next)!==h;)c=a.callback,u=a.context,(e&&c!==e||i&&u!==i)&&this.on(s,c,u);return this}},trigger:function(t){var e,i,n,r,a,h,c;if(!(n=this._callbacks))return this;for(h=n.all,t=t.split(o),c=s.call(arguments,1);e=t.shift();){if(i=n[e])for(r=i.tail;(i=i.next)!==r;)i.callback.apply(i.context||this,c);if(i=h)for(r=i.tail,a=[e].concat(c);(i=i.next)!==r;)i.callback.apply(i.context||this,a)}return this}};h.bind=h.on,h.unbind=h.off;var c=t.Model=function(t,e){var i;t||(t={}),e&&e.parse&&(t=this.parse(t)),(i=A(this,"defaults"))&&(t=r.extend({},i,t)),e&&e.collection&&(this.collection=e.collection),this.attributes={},this._escapedAttributes={},this.cid=r.uniqueId("c"),this.changed={},this._silent={},this._pending={},this.set(t,{silent:!0}),this.changed={},this._silent={},this._pending={},this._previousAttributes=r.clone(this.attributes),this.initialize.apply(this,arguments)};r.extend(c.prototype,h,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return r.clone(this.attributes)},get:function(t){return this.attributes[t]},escape:function(t){var e;if(e=this._escapedAttributes[t])return e;var i=this.get(t);return this._escapedAttributes[t]=r.escape(null==i?"":""+i)},has:function(t){return null!=this.get(t)},set:function(t,e,i){var s,n,a;if(r.isObject(t)||null==t?(s=t,i=e):(s={},s[t]=e),i||(i={}),!s)return this;if(s instanceof c&&(s=s.attributes),i.unset)for(n in s)s[n]=void 0;if(!this._validate(s,i))return!1;this.idAttribute in s&&(this.id=s[this.idAttribute]);var o=i.changes={},h=this.attributes,u=this._escapedAttributes,l=this._previousAttributes||{};for(n in s)a=s[n],(!r.isEqual(h[n],a)||i.unset&&r.has(h,n))&&(delete u[n],(i.silent?this._silent:o)[n]=!0),i.unset?delete h[n]:h[n]=a,r.isEqual(l[n],a)&&r.has(h,n)==r.has(l,n)?(delete this.changed[n],delete this._pending[n]):(this.changed[n]=a,i.silent||(this._pending[n]=!0));return i.silent||this.change(i),this},unset:function(t,e){return(e||(e={})).unset=!0,this.set(t,null,e)},clear:function(t){return(t||(t={})).unset=!0,this.set(r.clone(this.attributes),t)},fetch:function(e){e=e?r.clone(e):{};var i=this,s=e.success;return e.success=function(t,n,r){return i.set(i.parse(t,r),e)?(s&&s(i,t),void 0):!1},e.error=t.wrapError(e.error,i,e),(this.sync||t.sync).call(this,"read",this,e)},save:function(e,i,s){var n,a;if(r.isObject(e)||null==e?(n=e,s=i):(n={},n[e]=i),s=s?r.clone(s):{},s.wait){if(!this._validate(n,s))return!1;a=r.clone(this.attributes)}var o=r.extend({},s,{silent:!0});if(n&&!this.set(n,s.wait?o:s))return!1;var h=this,c=s.success;s.success=function(t,e,i){var a=h.parse(t,i);return s.wait&&(delete s.wait,a=r.extend(n||{},a)),h.set(a,s)?(c?c(h,t):h.trigger("sync",h,t,s),void 0):!1},s.error=t.wrapError(s.error,h,s);var u=this.isNew()?"create":"update",l=(this.sync||t.sync).call(this,u,this,s);return s.wait&&this.set(a,o),l},destroy:function(e){e=e?r.clone(e):{};var i=this,s=e.success,n=function(){i.trigger("destroy",i,i.collection,e)};if(this.isNew())return n(),!1;e.success=function(t){e.wait&&n(),s?s(i,t):i.trigger("sync",i,t,e)},e.error=t.wrapError(e.error,i,e);var a=(this.sync||t.sync).call(this,"delete",this,e);return e.wait||n(),a},url:function(){var t=A(this,"urlRoot")||A(this.collection,"url")||C();return this.isNew()?t:t+("/"==t.charAt(t.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(t){t||(t={});var e=this._changing;this._changing=!0;for(var i in this._silent)this._pending[i]=!0;var s=r.extend({},t.changes,this._silent);this._silent={};for(var i in s)this.trigger("change:"+i,this,this.get(i),t);if(e)return this;for(;!r.isEmpty(this._pending);){this._pending={},this.trigger("change",this,t);for(var i in this.changed)this._pending[i]||this._silent[i]||delete this.changed[i];this._previousAttributes=r.clone(this.attributes)}return this._changing=!1,this},hasChanged:function(t){return arguments.length?r.has(this.changed,t):!r.isEmpty(this.changed)},changedAttributes:function(t){if(!t)return this.hasChanged()?r.clone(this.changed):!1;var e,i=!1,s=this._previousAttributes;for(var n in t)r.isEqual(s[n],e=t[n])||((i||(i={}))[n]=e);return i},previous:function(t){return arguments.length&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return r.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(t,e){if(e.silent||!this.validate)return!0;t=r.extend({},this.attributes,t);var i=this.validate(t,e);return i?(e&&e.error?e.error(this,i,e):this.trigger("error",this,i,e),!1):!0}});var u=t.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,{silent:!0,parse:e.parse})};r.extend(u.prototype,h,{model:c,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},add:function(t,e){var i,s,a,o,h,c,u={},l={},d=[];for(e||(e={}),t=r.isArray(t)?t.slice():[t],i=0,a=t.length;a>i;i++){if(!(o=t[i]=this._prepareModel(t[i],e)))throw Error("Can't add an invalid model to a collection");h=o.cid,c=o.id,u[h]||this._byCid[h]||null!=c&&(l[c]||this._byId[c])?d.push(i):u[h]=l[c]=o}for(i=d.length;i--;)t.splice(d[i],1);for(i=0,a=t.length;a>i;i++)(o=t[i]).on("all",this._onModelEvent,this),this._byCid[o.cid]=o,null!=o.id&&(this._byId[o.id]=o);if(this.length+=a,s=null!=e.at?e.at:this.models.length,n.apply(this.models,[s,0].concat(t)),this.comparator&&this.sort({silent:!0}),e.silent)return this;for(i=0,a=this.models.length;a>i;i++)u[(o=this.models[i]).cid]&&(e.index=i,o.trigger("add",o,this,e));return this},remove:function(t,e){var i,s,n,a;for(e||(e={}),t=r.isArray(t)?t.slice():[t],i=0,s=t.length;s>i;i++)a=this.getByCid(t[i])||this.get(t[i]),a&&(delete this._byId[a.id],delete this._byCid[a.cid],n=this.indexOf(a),this.models.splice(n,1),this.length--,e.silent||(e.index=n,a.trigger("remove",a,this,e)),this._removeReference(a));return this},push:function(t,e){return t=this._prepareModel(t,e),this.add(t,e),t},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return t=this._prepareModel(t,e),this.add(t,r.extend({at:0},e)),t},shift:function(t){var e=this.at(0);return this.remove(e,t),e},get:function(t){return null==t?void 0:this._byId[null!=t.id?t.id:t]},getByCid:function(t){return t&&this._byCid[t.cid||t]},at:function(t){return this.models[t]},where:function(t){return r.isEmpty(t)?[]:this.filter(function(e){for(var i in t)if(t[i]!==e.get(i))return!1;return!0})},sort:function(t){if(t||(t={}),!this.comparator)throw Error("Cannot sort a set without a comparator");var e=r.bind(this.comparator,this);return 1==this.comparator.length?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("reset",this,t),this},pluck:function(t){return r.map(this.models,function(e){return e.get(t)})},reset:function(t,e){t||(t=[]),e||(e={});for(var i=0,s=this.models.length;s>i;i++)this._removeReference(this.models[i]);return this._reset(),this.add(t,r.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),this},fetch:function(e){e=e?r.clone(e):{},void 0===e.parse&&(e.parse=!0);var i=this,s=e.success;return e.success=function(t,n,r){i[e.add?"add":"reset"](i.parse(t,r),e),s&&s(i,t)},e.error=t.wrapError(e.error,i,e),(this.sync||t.sync).call(this,"read",this,e)},create:function(t,e){var i=this;if(e=e?r.clone(e):{},t=this._prepareModel(t,e),!t)return!1;e.wait||i.add(t,e);var s=e.success;return e.success=function(n,r){e.wait&&i.add(n,e),s?s(n,r):n.trigger("sync",t,r,e)},t.save(null,e),t},parse:function(t){return t},chain:function(){return r(this.models).chain()},_reset:function(){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(t,e){if(e||(e={}),t instanceof c)t.collection||(t.collection=this);else{var i=t;e.collection=this,t=new this.model(i,e),t._validate(t.attributes,e)||(t=!1)}return t},_removeReference:function(t){this==t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,s){("add"!=t&&"remove"!=t||i==this)&&("destroy"==t&&this.remove(e,s),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],this._byId[e.id]=e),this.trigger.apply(this,arguments))}});var l=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];r.each(l,function(t){u.prototype[t]=function(){return r[t].apply(r,[this.models].concat(r.toArray(arguments)))}});var d=t.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},f=/:\w+/g,p=/\*\w+/g,g=/[-[\]{}()+?.,\\^$|#\s]/g;r.extend(d.prototype,h,{initialize:function(){},route:function(e,i,s){return t.history||(t.history=new v),r.isRegExp(e)||(e=this._routeToRegExp(e)),s||(s=this[i]),t.history.route(e,r.bind(function(n){var r=this._extractParameters(e,n);s&&s.apply(this,r),this.trigger.apply(this,["route:"+i].concat(r)),t.history.trigger("route",this,i,r)},this)),this},navigate:function(e,i){t.history.navigate(e,i)},_bindRoutes:function(){if(this.routes){var t=[];for(var e in this.routes)t.unshift([e,this.routes[e]]);for(var i=0,s=t.length;s>i;i++)this.route(t[i][0],t[i][1],this[t[i][1]])}},_routeToRegExp:function(t){return t=t.replace(g,"\\$&").replace(f,"([^/]+)").replace(p,"(.*?)"),RegExp("^"+t+"$")},_extractParameters:function(t,e){return t.exec(e).slice(1)}});var v=t.History=function(){this.handlers=[],r.bindAll(this,"checkUrl")},m=/^[#\/]/,_=/msie [\w.]+/;v.started=!1,r.extend(v.prototype,h,{interval:50,getHash:function(t){var e=t?t.location:window.location,i=e.href.match(/#(.*)$/);return i?i[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||e){t=window.location.pathname;var i=window.location.search;i&&(t+=i)}else t=this.getHash();return t.indexOf(this.options.root)||(t=t.substr(this.options.root.length)),t.replace(m,"")},start:function(t){if(v.started)throw Error("Backbone.history has already been started");v.started=!0,this.options=r.extend({},{root:"/"},this.options,t),this._wantsHashChange=!1!==this.options.hashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var e=this.getFragment(),i=document.documentMode,s=_.exec(navigator.userAgent.toLowerCase())&&(!i||7>=i);s&&(this.iframe=a('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(e)),this._hasPushState?a(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!s?a(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=e;var n=window.location,o=n.pathname==this.options.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!o?(this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&o&&n.hash&&(this.fragment=this.getHash().replace(m,""),window.history.replaceState({},document.title,n.protocol+"//"+n.host+this.options.root+this.fragment)),this.options.silent?void 0:this.loadUrl())},stop:function(){a(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),v.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t==this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t==this.fragment?!1:(this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(this.getHash()),void 0)},loadUrl:function(t){var e=this.fragment=this.getFragment(t),i=r.any(this.handlers,function(t){return t.route.test(e)?(t.callback(e),!0):void 0});return i},navigate:function(t,e){if(!v.started)return!1;e&&!0!==e||(e={trigger:e});var i=(t||"").replace(m,"");this.fragment!=i&&(this._hasPushState?(0!=i.indexOf(this.options.root)&&(i=this.options.root+i),this.fragment=i,window.history[e.replace?"replaceState":"pushState"]({},document.title,i)):this._wantsHashChange?(this.fragment=i,this._updateHash(window.location,i,e.replace),this.iframe&&i!=this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,i,e.replace))):window.location.assign(this.options.root+t),e.trigger&&this.loadUrl(t))},_updateHash:function(t,e,i){i?t.replace((""+t).replace(/(javascript:|#).*$/,"")+"#"+e):t.hash=e}});var y=t.View=function(t){this.cid=r.uniqueId("view"),this._configure(t||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},b=/^(\S+)\s*(.*)$/,w=["model","collection","el","id","attributes","className","tagName"];r.extend(y.prototype,h,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(t,e,i){var s=document.createElement(t);return e&&a(s).attr(e),i&&a(s).html(i),s},setElement:function(t,e){return this.$el&&this.undelegateEvents(),this.$el=t instanceof a?t:a(t),this.el=this.$el[0],!1!==e&&this.delegateEvents(),this},delegateEvents:function(t){if(t||(t=A(this,"events"))){this.undelegateEvents();for(var e in t){var i=t[e];if(r.isFunction(i)||(i=this[t[e]]),!i)throw Error('Method "'+t[e]+'" does not exist');var s=e.match(b),n=s[1],a=s[2];i=r.bind(i,this),n+=".delegateEvents"+this.cid,""===a?this.$el.bind(n,i):this.$el.delegate(a,n,i)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(t){this.options&&(t=r.extend({},this.options,t));for(var e=0,i=w.length;i>e;e++){var s=w[e];t[s]&&(this[s]=t[s])}this.options=t},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var t=A(this,"attributes")||{};this.id&&(t.id=this.id),this.className&&(t["class"]=this.className),this.setElement(this.make(this.tagName,t),!1)}}});var x=function(t,e){var i=S(this,t,e);return i.extend=this.extend,i};c.extend=u.extend=d.extend=y.extend=x;var E={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};t.sync=function(e,i,s){var n=E[e];s||(s={});var o={type:n,dataType:"json"};return s.url||(o.url=A(i,"url")||C()),s.data||!i||"create"!=e&&"update"!=e||(o.contentType="application/json",o.data=JSON.stringify(i.toJSON())),t.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{}),!t.emulateHTTP||"PUT"!==n&&"DELETE"!==n||(t.emulateJSON&&(o.data._method=n),o.type="POST",o.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",n)}),"GET"===o.type||t.emulateJSON||(o.processData=!1),a.ajax(r.extend(o,s))},t.wrapError=function(t,e,i){return function(s,n){n=s===e?n:s,t?t(e,n,i):e.trigger("error",e,n,i)}};var k=function(){},S=function(t,e,i){var s;return s=e&&e.hasOwnProperty("constructor")?e.constructor:function(){t.apply(this,arguments)},r.extend(s,t),k.prototype=t.prototype,s.prototype=new k,e&&r.extend(s.prototype,e),i&&r.extend(s,i),s.prototype.constructor=s,s.__super__=t.prototype,s},A=function(t,e){return t&&t[e]?r.isFunction(t[e])?t[e]():t[e]:null},C=function(){throw Error('A "url" property or function must be specified')}}).call(this);