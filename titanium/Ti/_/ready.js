define(function(){function t(t){if(!(a||t&&"readystatechange"==t.type&&!o[n.readyState])){for(;s.length;)s.shift()();a=1}}function e(){o[n.readyState]?t():setTimeout(e,30)}function i(t,e,i){var n,r,o;if(require.is(t,"Number")||(i=e,e=t,t=1e3),n=i?function(){i.call(e)}:e,a)n();else{for(n.priority=t,r=0,o=s.length;o>r&&t>=s[r].priority;r++);s.splice(r,0,n)}}var n=document,r=require.on,o={loaded:1,complete:1},a=!!o[n.readyState],s=[];return a||(s.concat([r(n,"DOMContentLoaded",t),r(window,"load",t)]),"onreadystatechange"in n?s.push(require.on(n,"readystatechange",t)):e()),i.load=function(t,e,n){i(n)},i});