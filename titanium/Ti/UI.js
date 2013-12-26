define(["Ti/_","Ti/_/Evented","Ti/_/has","Ti/_/lang","Ti/_/ready","Ti/_/style","Ti/_/dom","Ti/_/event","Ti/_/has","Ti/_/Gestures/DoubleTap","Ti/_/Gestures/Dragging","Ti/_/Gestures/LongPress","Ti/_/Gestures/Pinch","Ti/_/Gestures/SingleTap","Ti/_/Gestures/Swipe","Ti/_/Gestures/TouchCancel","Ti/_/Gestures/TouchEnd","Ti/_/Gestures/TouchMove","Ti/_/Gestures/TouchStart","Ti/_/Gestures/TwoFingerTap"],function(t,e,i,n,r,o,a,s,i,u,l,c,h,d,_,f,p,g,T,m){var v,E,I,b=window,w=document,y=w.body,A=require.on,S=require.is,N="2DMatrix,ActivityIndicator,AlertDialog,Animation,Button,EmailDialog,ImageView,Label,OptionDialog,Picker,PickerColumn,PickerRow,ProgressBar,ScrollableView,ScrollView,Slider,Switch,Tab,TabGroup,TableView,TableViewRow,TableViewSection,TextArea,TextField,View,WebView,Window",C={},L=o.set,O=navigator.userAgent.toLowerCase().match(/(iphone|android)/),x=O&&"iphone"===O[0],R={},D=function(){Ti.UI._recalculateLayout(),v=0},U=D,P=a.unitize,k=[T,p,g,f,l,d,u,c,h,_,m];return A(y,"touchmove",function(t){t.preventDefault()}),N.split(",").forEach(function(t){C["create"+t]=function(e){return new(require("Ti/UI/"+t))(e)}}),!navigator.standalone&&O&&(U=function(){if(!v){v=1;var t,e=0|require("Ti/Gesture").isPortrait,i=R[e];i||(x?(i=b.innerHeight+60,b.screen.availHeight-i>50&&(i+=50)):i=b.outerHeight/(b.devicePixelRatio||0),R[e]=i),L(y,"height",i+"px"),x?(b.scrollTo(0,0),D()):t=setInterval(function(){b.scrollTo(0,-1),b.innerHeight+1>=i&&(clearTimeout(t),D())},50)}},r(U),A(b,"orientationchange",U),A(b,"touchstart",U)),r(10,function(){setTimeout(function(){function t(t,e){var i,n,r,a=0,s=k.length,u=[],l=e._elements;if(l&&l.length){for(o||require.mix(e,{touches:"mouseup"===e.type?[]:[e],targetTouches:[],changedTouches:[e]});s>a;a++)if(r=k[a]["process"+t]){n=r(e,l);for(i in n)u[i]||(u[i]=[]),u[i]=u[i].concat(n[i])}Ti.UI._fireGestureEvents(u,l)}}var e=Ti.UI._container=Ti.UI.createView({left:0,top:0}),n=e.domNode,r=e._layoutCoefficients,o=i("touch"),a=0;r.width.x1=1,r.height.x1=1,e._measuredTop=0,e._measuredLeft=0,n.id="TiUIContainer",L(n,"overflow","hidden"),y.appendChild(n),(E=w.getElementById("splash"))&&e.addEventListener("postlayout",function(){setTimeout(function(){L(E,{position:"absolute",width:P(e._measuredWidth),height:P(e._measuredHeight),left:0,top:0,right:"",bottom:""})},10)}),U(),A(n,o?"touchstart":"mousedown",function(e){var i=[A(b,o?"touchmove":"mousemove",function(e){(o||a)&&t("TouchMoveEvent",e)}),A(b,o?"touchend":"mouseup",function(e){a=0,t("TouchEndEvent",e),s.off(i)}),o&&A(b,"touchcancel",function(e){t("TouchCancelEvent",e),s.off(i)})];a=1,t("TouchStartEvent",e)})},1)}),A(b,"resize",function(){Ti.UI._recalculateLayout()}),n.setObject("Ti.UI",e,C,{_addWindow:function(t,e){return this._container.add(t.modal?t._modalParentContainer:t),e&&this._setWindow(t),E&&a.destroy(E),t},_setWindow:function(t){this.constants.currentWindow=t},_removeWindow:function(t){return this._container.remove(t.modal?t._modalParentContainer:t),t},_fireGestureEvents:function(t,e){for(var i,n,r,o,a,s=0,u=k.length,l=0;e[l]&&!e[l]._isPublished;)l++;e[l]||(l=0);for(s in t)for(i=0,u=t[s].length;u>i;i++)a=t[s][i],S(a.x,"Number")&&S(a.y,"Number")?(o=this._container.convertPointToView({x:a.x,y:a.y},e[l]),n=o?o.x:a.x,r=o?o.y:a.y):n=r=void 0,a.x=n,a.y=r,a.bubbles=!0,a.cancelBubble=!1,e[0].fireEvent(s,a)},_layoutSemaphore:0,_nodesToLayout:[],_startLayout:function(){this._layoutSemaphore++},_finishLayout:function(){0===--this._layoutSemaphore&&this._triggerLayout(!0)},_elementLayoutCount:0,_triggerLayout:function(t,e){function n(){r._elementLayoutCount=0;var t,e,n,o,a,s,u,l,c,h,d=r._nodesToLayout,_=[],f=!1,p=r._container,g=d.length;for(i("ti-instrumentation")&&(r._layoutInstrumentationTest=instrumentation.startTest("Layout")),c=0;g>c;c++)if(t=d[c],t._isAttachedToActiveWin()){for(u=[t];u.length>0;){e=u.pop(),e._markedForLayout=!0,a=e._children;for(h in a)s=a[h],("composite"!==e.layout||s._needsMeasuring||e._layout._isDependentOnParent(s))&&u.push(s)}if(t===p)f=!0;else for(n=t;;){if(n._markedForLayout=!0,o=n,n=n._parent,l=!1,!n||n===p){f=!0;break}for(n._hasSizeDimensions()||n._needsMeasuring||(!n._markedForLayout&&!~_.indexOf(n)&&_.push(n),l=!0),u=[n];u.length>0;){e=u.pop(),a=e._children;for(h in a)s=a[h],s!==o&&("composite"!==e.layout||s._needsMeasuring||e._layout._isDependentOnParent(s))&&(s._markedForLayout=!0,u.push(s))}if(l)break}}if(f){var T=p.properties.__values__,m=p._measuredWidth=T.width=b.innerWidth,v=p._measuredHeight=T.height=b.innerHeight;p._measuredSandboxWidth=m,p._measuredSandboxHeight=v,p.fireEvent("postlayout"),L(p.domNode,{width:m+"px",height:v+"px"}),p._layout._doLayout(p,m,v,!1,!1)}for(c=0;_.length>c;c++)e=_[c],e._layout._doLayout(e,e._measuredWidth-e._borderLeftWidth-e._borderRightWidth,e._measuredHeight-e._borderTopWidth-e._borderBottomWidth,e._parent._layout._getWidth(e,e.width)===Ti.UI.SIZE,e._parent._layout._getHeight(e,e.height)===Ti.UI.SIZE);i("ti-instrumentation")&&instrumentation.stopTest(r._layoutInstrumentationTest,r._elementLayoutCount+" out of approximately "+document.getElementById("TiUIContainer").getElementsByTagName("*").length+" elements laid out."),r._layoutInProgress=!1,r._layoutTimer=null,r._nodesToLayout=[],r.fireEvent("postlayout")}var r=this;~r._nodesToLayout.indexOf(t)||(r._nodesToLayout.push(t),e?(clearTimeout(r._layoutTimer),r._layoutInProgress=!0,n()):1===r._nodesToLayout.length&&(r._layoutInProgress=!0,r._layoutTimer=setTimeout(n,10)))},_recalculateLayout:function(){I||(I=require("Ti/Gesture")),I._updateOrientation();var t=this._container;t&&(t.width=b.innerWidth,t.height=b.innerHeight)},properties:{backgroundColor:{set:function(t){return this._container.backgroundColor=t}},backgroundImage:{set:function(t){return L(y,"backgroundImage",t?o.url(t):"")}},currentTab:void 0},convertUnits:function(e,i){var n=a.computeSize(e,0,!1);switch(i){case Ti.UI.UNIT_MM:n*=10;case Ti.UI.UNIT_CM:return n/(10*.0393700787*t.dpi);case Ti.UI.UNIT_IN:return n/t.dpi;case Ti.UI.UNIT_DIP:return 96*n/t.dpi;case Ti.UI.UNIT_PX:return n;default:return 0}},constants:{currentWindow:void 0,UNKNOWN:0,FACE_DOWN:1,FACE_UP:2,PORTRAIT:3,UPSIDE_PORTRAIT:4,LANDSCAPE_LEFT:5,LANDSCAPE_RIGHT:6,INPUT_BORDERSTYLE_NONE:0,INPUT_BORDERSTYLE_LINE:1,INPUT_BORDERSTYLE_BEZEL:2,INPUT_BORDERSTYLE_ROUNDED:3,KEYBOARD_DEFAULT:2,KEYBOARD_EMAIL:3,KEYBOARD_NUMBER_PAD:6,KEYBOARD_PHONE_PAD:7,KEYBOARD_URL:8,NOTIFICATION_DURATION_LONG:1,NOTIFICATION_DURATION_SHORT:2,PICKER_TYPE_DATE:2,PICKER_TYPE_DATE_AND_TIME:3,PICKER_TYPE_PLAIN:4,PICKER_TYPE_TIME:5,RETURNKEY_DEFAULT:0,RETURNKEY_DONE:1,RETURNKEY_EMERGENCY_CALL:2,RETURNKEY_GO:3,RETURNKEY_GOOGLE:4,RETURNKEY_JOIN:5,RETURNKEY_NEXT:6,RETURNKEY_ROUTE:7,RETURNKEY_SEARCH:8,RETURNKEY_SEND:9,RETURNKEY_YAHOO:10,TEXT_ALIGNMENT_CENTER:"center",TEXT_ALIGNMENT_RIGHT:"right",TEXT_ALIGNMENT_LEFT:"left",TEXT_AUTOCAPITALIZATION_ALL:3,TEXT_AUTOCAPITALIZATION_NONE:0,TEXT_AUTOCAPITALIZATION_SENTENCES:2,TEXT_AUTOCAPITALIZATION_WORDS:1,TEXT_VERTICAL_ALIGNMENT_BOTTOM:"bottom",TEXT_VERTICAL_ALIGNMENT_CENTER:"center",TEXT_VERTICAL_ALIGNMENT_TOP:"top",ANIMATION_CURVE_EASE_IN:1,ANIMATION_CURVE_EASE_IN_OUT:0,ANIMATION_CURVE_EASE_OUT:2,ANIMATION_CURVE_LINEAR:3,SIZE:"auto",FILL:"fill",INHERIT:"inherit",UNIT_PX:"px",UNIT_MM:"mm",UNIT_CM:"cm",UNIT_IN:"in",UNIT_DIP:"dp",_LAYOUT_COMPOSITE:"composite",_LAYOUT_VERTICAL:"vertical",_LAYOUT_HORIZONTAL:"horizontal",_LAYOUT_CONSTRAINING_VERTICAL:"constrainingVertical",_LAYOUT_CONSTRAINING_HORIZONTAL:"constrainingHorizontal"}})});