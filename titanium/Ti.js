define(["Ti/_","Ti/API","Ti/_/analytics","Ti/App","Ti/_/Evented","Ti/_/has","Ti/_/lang","Ti/_/ready","Ti/_/style","Ti/Buffer","Ti/Platform","Ti/UI","Ti/Locale","Ti/_/include"],function(_,API,analytics,App,Evented,has,lang,ready,style,Buffer,Platform,UI){function Empty(){}function escapeString(t){return('"'+t.replace(/(["\\])/g,"\\$1")+'"').replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")}function shutdown(){unloaded||(unloaded=1,App.fireEvent("close"),analytics.add("ti.end","ti.end"))}var global=window,req=require,cfg=req.config,deployType=App.deployType,ver=cfg.ti.version,is=req.is,on=req.on,loaded,unloaded,showingError,waiting=[],Ti=lang.setObject("Ti",Evented,{constants:{buildDate:cfg.ti.buildDate,buildHash:cfg.ti.buildHash,version:ver},properties:{userAgent:function(){return navigator.userAgent}},createBuffer:function(t){return new Buffer(t)},include:function(t){"array"==typeof t||(t=[].concat(Array.prototype.slice.call(arguments,0))),t.forEach(function(t){require("Ti/_/include!"+t)})},deferStart:function(){if(!loaded){var t=Math.round(1e12*Math.random());return waiting.push(t),function(){var e=waiting.indexOf(t);~e&&waiting.splice(e,1),loaded=1,waiting.length||(has("ti-instrumentation")&&instrumentation.stopTest(instrumentation.systemLoadTimeTest),require(cfg.main||["app.js"]))}}API.warn("app.js already loaded!")}}),loadAppjs=Ti.deferStart();if(!has("object-defineproperty")){var odp=Object.defineProperty;Object.defineProperty=function defineProperty(t,e,i){if(!t||!is(t,"Object")&&!is(t,"Function")&&!is(t,"Window"))throw new TypeError("Object.defineProperty called on non-object: "+t);if(i=i||{},!i||!is(i,"Object")&&!is(i,"Function"))throw new TypeError("Property description must be an object: "+i);if(odp)try{return odp.call(Object,t,e,i)}catch(n){}var r=Object.prototype,o=function(t,e){return t.hasOwnProperty(e)},a=o(r,"__defineGetter__"),s=t.__proto__;if(o(i,"value"))a&&(t.__lookupGetter__(e)||t.__lookupSetter__(e))?(t.__proto__=r,delete t[e],t[e]=i.value,t.__proto__=s):t[e]=i.value;else{if(!a)throw new TypeError("Getters and setters can not be defined on this javascript engine");o(i,"get")&&defineGetter(t,e,i.get),o(i,"set")?defineSetter(t,e,i.set):t[e]=null}}}if(has("function-bind")||(Function.prototype.bind=function bind(t){var e=this,i=Array.prototype.slice,n=i.call(arguments,1),r=function(){var o,a=n.concat(i.call(arguments));return this instanceof r?(o=e.apply(this,a),Object(o)===o?o:this):e.apply(t,a)};return e.prototype&&(Empty.prototype=e.prototype,r.prototype=new Empty,Empty.prototype=null),r}),!has("js-btoa")){var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",fromCharCode=String.fromCharCode;global.btoa=function(t){for(var e,i,n,r,o,a,s,u=[],l=0,c=t.length;c>l;)e=t.charCodeAt(l++),i=t.charCodeAt(l++),n=t.charCodeAt(l++),r=e>>2,o=(3&e)<<4|i>>4,a=(15&i)<<2|n>>6,s=63&n,isNaN(i)?a=s=64:isNaN(n)&&(s=64),u.push(tab.charAt(r)+tab.charAt(o)+tab.charAt(a)+tab.charAt(s));return u.join("")},global.atob=function(t){var e,i,n,r,o=[],a=0,s=t.length;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");s>a;)e=tab.indexOf(t.charAt(a++)),i=tab.indexOf(t.charAt(a++)),n=tab.indexOf(t.charAt(a++)),r=tab.indexOf(t.charAt(a++)),o.push(fromCharCode(e<<2|i>>4)),64!==n&&o.push(fromCharCode((15&i)<<4|n>>2)),64!==r&&o.push(fromCharCode((3&n)<<6|r));return o.join("")}}return has("json-stringify")||(JSON.parse=function(s){return eval("("+s+")")},JSON.stringify=function(t,e,i){function n(t,r,o){var a,s,u=typeof t,l=i?r+i:"",c=i?" ":"",d=i?"\n":"",h=[];if(e&&(t=e(o,t)),"number"===u)return isFinite(t)?t+"":"null";if(is(u,"Boolean"))return t+"";if(null===t)return"null";if(is(t,"String"))return escapeString(t);if("function"===u||"undefined"===u)return void 0;if(is(t.toJSON,"Function"))return n(t.toJSON(o),r,o);if(t instanceof Date)return'"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g,function(e,i,n){var r=t["getUTC"+i]()+(n?1:0);return 10>r?"0"+r:r});if(t.valueOf()!==t)return n(t.valueOf(),r,o);if(t instanceof Array){for(o=0,s=t.length;s>o;o++){var _=t[o];a=n(_,l,o),is(a,"String")||(a="null"),h.push(d+l+a)}return"["+h.join(",")+d+r+"]"}for(o in t){var f;if(is(o,"Number"))f='"'+o+'"';else{if(!is(o,"String"))continue;f=escapeString(o)}a=n(t[o],l,o),is(a,"String")&&h.push(d+l+f+":"+c+a)}return"{"+h.join(",")+d+r+"}"}return is(e,"String")&&(i=e,e=null),n(t,"","")}),Object.defineProperty(global,"Ti",{value:Ti,writable:!1}),Object.defineProperty(global,"Titanium",{value:Ti,writable:!1}),API.info("Appcelerator Titanium "+ver+" Mobile Web"),cfg.vendorPrefixes||(cfg.vendorPrefixes=["","Moz","Webkit","O","ms"]),Ti.parse=JSON.parse,Ti.stringify=JSON.stringify,on(global,"beforeunload",shutdown),on(global,"unload",shutdown),has("ti-show-errors")&&on(global,"error",function(t){function e(t,e,i,n){u.add(UI.createLabel({color:i,font:{fontSize:n,fontWeight:"bold"},height:e,left:10,right:10,textAlign:UI.TEXT_ALIGNMENT_CENTER,text:t}))}if(!showingError){showingError=1;var i,n,r=t.filename||"",o=r.match(/:\/\/.+(\/.*)/),a=o?o[1]:t.filename,s=t.lineno,u=UI.createWindow({backgroundColor:"#f00",top:"100%",height:"100%",layout:UI._LAYOUT_CONSTRAINING_VERTICAL});e("Application Error","15%","#0f0","24pt"),e((t.message||"Unknown error").trim()+(a&&"undefined"!==a?" at "+a:"")+(s?" (line "+s+")":""),"45%","#fff","16pt"),u.add(i=UI.createView({height:"12%"})),i.add(n=UI.createButton({title:"Dismiss"})),u.addEventListener("close",function(){u.destroy()}),n.addEventListener("singletap",function(){u.animate({duration:500,top:"100%"},function(){u.close(),showingError=0})}),e("Error messages will only be displayed during development. When your app is packaged for final distribution, no error screen will appear. Test your code!","28%","#000","10pt"),on.once(u,"postlayout",function(){setTimeout(function(){u.animate({duration:500,top:0},function(){u.top=0,u.height="100%"})},100)}),u.open()}}),ready(function(){style.set(document.body,{margin:0,padding:0}),App.analytics&&(null===localStorage.getItem("ti:enrolled")&&(analytics.add("ti.enroll","ti.enroll",{app_name:App.name,oscpu:1,mac_addr:null,deploytype:deployType,ostype:Platform.osname,osarch:null,app_id:App.id,platform:Platform.name,model:Platform.model}),localStorage.setItem("ti:enrolled",!0)),analytics.add("ti.start","ti.start",{tz:(new Date).getTimezoneOffset(),deploytype:deployType,os:Platform.osname,osver:Platform.ostype,version:cfg.ti.version,platform:Platform.name,model:Platform.model,un:null,app_version:App.version,nettype:null}),analytics.send()),setTimeout(loadAppjs,1)}),Ti});