define(["Ti/_/has"],function(t){function e(t,e){return[].concat(Array.prototype.slice.call(t,e||0))}function i(t,i){var n=e(arguments,2),a=o(i,"String");return function(){var o=t||r,s=a?o[i]:i;return s&&s.apply(o,n.concat(e(arguments)))}}var n,r=this,o=require.is;return{hitch:n=function(t,e){if(arguments.length>2)return i.apply(r,arguments);if(e||(e=t,t=null),o(e,"String")){if(t=t||r,!t[e])throw['hitch: scope["',e,'"] is null (scope="',t,'")'].join("");return function(){return t[e].apply(t,arguments||[])}}return t?function(){return e.apply(t,arguments||[])}:e},isDef:function(t){return!o(t,"Undefined")},mixProps:function(e,i,r){var a,s,u,l={properties:1,constants:0};for(u in i)if(i.hasOwnProperty(u)&&!/^(constructor|__values__)$/.test(u))if(l.hasOwnProperty(u)){a=e[u]||(e[u]={}),a.__values__||(a.__values__={});for(s in i[u])(function(i,r,a,s,u,l,c){var h=o(u,"Object"),d=h&&o(u.get,"Function")&&u.get,_=h&&o(u.set,"Function")&&u.set,f=h&&o(u.post),g="Function"===f?u.post:"String"===f?n(r,u.post):0;h&&(d||_||g)?s[i]=u.value:o(u,"Function")?d=u:s[i]=u,Object.defineProperty(a,i,{get:function(){return d?d.call(r,s[i]):s[i]},set:function(t){var e=[t,s[i],i];e[0]=s[i]=_?_.apply(r,e):t,g&&g.apply(r,e)},configurable:!0,enumerable:!0}),Object.defineProperty(e,i,{get:function(){return a[i]},set:function(t){if(!c)throw Error('Property "'+i+'" is read only');a[i]=t},configurable:!0,enumerable:!0}),t("declare-property-methods")&&(c||i.toUpperCase()!==i)&&(r["get"+l]=function(){return a[i]},c&&(r["set"+l]=function(t){return a[i]=t}))})(s,e,a,a.__values__,i[u][s],s.substring(0,1).toUpperCase()+s.substring(1),l[u])}else r&&(e[u]=i[u]);return e},generateAccessors:function(t,e,i){function n(e){var i="get"+e.substring(0,1).toUpperCase()+e.substring(1);i in t.prototype||(t.prototype[i]=function(){return this[e]})}function r(e){var i="set"+e.substring(0,1).toUpperCase()+e.substring(1);i in t.prototype||(t.prototype[i]=function(t){return this[e]=t})}e&&e.split(",").forEach(n),i&&i.split(",").forEach(function(t){n(t),r(t)})},setObject:function(t){var e,i,n=t.split("."),r=n.pop(),a=window,s=0,u=n[s++];if(u)do a=u in a?a[u]:a[u]={};while(a&&(u=n[s++]));if(a&&r){i=r in a?a[r]:{};for(s=1;arguments.length>s;s++)o(e=arguments[s],"Object")?this.mixProps(i,e,1):i=e}return a[r]=i},toArray:e,urlEncode:function(t){var e,i,n,r,a=encodeURIComponent,s=[];for(e in t)if(t.hasOwnProperty(e))for(o(i=t[e],"Array")||(i=[i]),e=a(e)+"=",n=0,r=i.length;r>n;)s.push(e+a(i[n++]));return s.join("&")},val:function(t,e){return void 0===t?e:t}}});