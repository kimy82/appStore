define(["Ti/_/Evented","Ti/_/lang"],function(t,e){return e.setObject("Ti.Yahoo",t,{yql:function(t,e){require(["http://query.yahooapis.com/v1/public/yql?format=json&callback=define&q="+encodeURIComponent(t).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/,"%28").replace(/\)/,"%29")],function(t){var t=t||{},i=t.query&&t.query.results;require.is(e,"Function")&&e({success:!!i,data:i,message:t.error&&t.error.description})})}})});