define(["Ti/_/Evented","Ti/_/lang","Ti/UI","Ti/_/ready"],function(e,t,n,i){function r(){var e=!!(window.innerWidth&&window.innerWidth>window.innerHeight);return d.constants.__values__.orientation=e?n.LANDSCAPE_LEFT:n.PORTRAIT,d.constants.__values__.landscape=e,d.constants.__values__.portrait=!e,d.orientation}function o(e){var t=null,i=Math.abs(e.beta||0|e.y),r=Math.abs(e.gamma||0|e.x);5>i&&r>170&&(t=n.FACE_DOWN),5>i&&5>r&&(t=n.FACE_UP),i>50&&0>i&&u!=t&&(t=n.UPSIDE_PORTRAIT),null!==t&&u!==t&&d.fireEvent("orientationchange",{orientation:u=t,source:e.source})}var a=window,s=require.on,u=null,l=Date.now(),c={},d=t.setObject("Ti.Gesture",e,{_updateOrientation:function(){r(),u!==d.orientation&&d.fireEvent("orientationchange",{orientation:u=d.orientation})},isLandscape:function(){return d.landscape},isPortrait:function(){return d.portrait},constants:{portrait:!1,landscape:!1,orientation:n.UNKNOWN}});return i(function(){r()}),s(a,"MozOrientation",o),s(a,"deviceorientation",o),s(a,"devicemotion",function(e){var t,n,i,r,o=e.acceleration||e.accelerationIncludingGravity,a=o&&{x:o.x,y:o.y,z:o.z,source:e.source};a&&(void 0!==c.x&&(t=Math.abs(c.x-a.x)>10,n=Math.abs(c.y-a.y)>10,i=Math.abs(c.z-a.z)>10,(t&&(n||i)||n&&i)&&(r=Date.now(),(a.timestamp=r-l)>300&&(l=r,d.fireEvent("shake",a)))),c=a)}),d});