define(["Ti/_/declare","Ti/_/lang"],function(t,e){function i(t,e){n=Date.now(),r={x:t,y:e}}var n=null,r=null,o=250,a=25;return e.setObject("Ti._.Gestures.DoubleTap",{processTouchEndEvent:function(t){if(0===t.touches.length&&1===t.changedTouches.length){var e=t.changedTouches[0].clientX,s=t.changedTouches[0].clientY,u={doubletap:[],dblclick:[]},c=Date.now()-n;if(n){if(n=null,o>c&&a>Math.abs(r.x-e)&&a>Math.abs(r.y-s))return u.doubletap.push({x:e,y:s}),u.dblclick.push({x:e,y:s}),u;i(e,s)}else i(e,s)}},processTouchCancelEvent:function(){this._firstTapTime=null}})});