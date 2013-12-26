define(["Ti/_/css","Ti/_/declare","Ti/_/dom","Ti/_/event","Ti/_/has","Ti/_/lang","Ti/_/style","Ti/_/Evented","Ti/UI","Ti/UI/Animation"],function(t,e,i,n,r,o,a,s,u,c){var l=window,h=i.unitize,d=i.computeSize,_=require.on,f=a.set,g=require.is,p=o.isDef,m={post:"_doBackground"},T=function(t,e){return(null===t||!g(t,"String")&&!g(t,"Number"))&&(t=void 0),t!==e&&!this._batchUpdateInProgress&&this._triggerLayout(),t},v={set:T},b="px",E=r("touch");return e("Ti._.UI.Element",s,{domType:null,domNode:null,_alive:1,constructor:function(){var e=this,r=0;e.domNode=e._setFocusNode(i.create(e.domType||"div",{className:"TiUIElement "+t.clean(e.declaredClass),"data-widget-id":e.widgetId})),e._children=[],_(e,"touchstart",e,"_doBackground"),_(e,"touchend",e,"_doBackground"),_(e.domNode,E?"touchstart":"mousedown",function(t){var i=[_(l,E?"touchmove":"mousemove",function(t){(E||r)&&(t._elements||(t._elements=[])).push(e)}),_(l,E?"touchend":"mouseup",function(t){r=0,(t._elements||(t._elements=[])).push(e),n.off(i)}),E&&_(l,"touchcancel",function(t){(t._elements||(t._elements=[])).push(e),n.off(i)})];r=1,(t._elements||(t._elements=[])).push(e)});var o=e.constants.__values__;e._layoutCoefficients={width:{x1:0,x2:0,x3:0},minWidth:{x1:0,x2:0,x3:0},sandboxWidth:{x1:0,x2:0,x3:0},height:{x1:0,x2:0,x3:0},minHeight:{x1:0,x2:0,x3:0},sandboxHeight:{x1:0,x2:0,x3:0},left:{x1:0,x2:0,x3:0},top:{x1:0,x2:0,x3:0,x4:0}},o.size={x:0,y:0,width:0,height:0},o.rect={x:0,y:0,width:0,height:0}},fireEvent:function(t,e){e=e||{};var i,n=e.bubbles;s.fireEvent.call(this,t,e),n&&!e.cancelBubble&&this.bubbleParent&&this._parent&&(p(e.x)&&(i=this.convertPointToView({x:e.x,y:e.y},this._parent),e.x=i?i.x:e.x,e.y=i?i.y:e.y),this._parent.fireEvent(t,e))},_setParent:function(t){this._parent=t},_add:function(t,e){t._hidden=e,t._setParent(this),this._children.push(t),this.containerNode.appendChild(t.domNode),t._triggerLayout()},_insertAt:function(t,e,i){var n=this._children;e>n.length||0>e||(e===n.length?this._add(t,i):(t._parent=this,this.containerNode.insertBefore(t.domNode,n[e].domNode),n.splice(e,0,t),this._triggerLayout()))},_remove:function(t){var e=this._children,n=e.indexOf(t);-1!==n&&(e.splice(n,1),t._setParent(),i.detach(t.domNode),this._triggerLayout())},_removeAllChildren:function(){for(var t=this._children;t.length;)this.remove(t[0]);this._triggerLayout()},destroy:function(){if(this._alive){for(var t=this._children;t.length;)t.splice(0,1)[0].destroy();this._parent&&this._parent._remove(this),this.domNode&&(i.destroy(this.domNode),this.domNode=null)}s.destroy.apply(this,arguments)},_isAttachedToActiveWin:function(){for(var t=!1,e=this;e;){if(e===u._container){t=!0;break}e=e._parent}return t},_needsMeasuring:!0,_triggerLayout:function(t){this._needsMeasuring=!0,this._isAttachedToActiveWin()&&(!this._batchUpdateInProgress||t)&&u._triggerLayout(this,t)},_hasSizeDimensions:function(){return this._hasSizeWidth()||this._hasSizeHeight()},_hasSizeHeight:function(){return isNaN(this._layoutCoefficients.height.x1)},_hasSizeWidth:function(){return isNaN(this._layoutCoefficients.width.x1)},startLayout:function(){this._batchUpdateInProgress=!0},finishLayout:function(){this._batchUpdateInProgress=!1,u._triggerLayout(this,!0)},updateLayout:function(t){this.startLayout();for(var e=0,i=t.length;i>e;e++)this[e]=t[e];this.finishLayout()},convertPointToView:function(t,e){function i(t,e,i){for(var n=e.x,r=e.y,o=i?1:-1;t;)n+=o*t.domNode.offsetLeft,r+=o*t.domNode.offsetTop,t=t._parent;return{x:n,y:r}}if(!this._isAttachedToActiveWin()||!e._isAttachedToActiveWin())return null;if(!t||!g(t.x,"Number")||!g(t.y,"Number"))throw Error("Invalid point");if(!e.domNode)throw Error("Invalid destination view");return i(e,i(this,t,!0),!1)},_getContentOffset:function(){return{x:0,y:0}},_computeGradient:function(){var t=this.backgroundGradient;colors=t.colors,type=t.type,cssVal=type+"-gradient(";var e=d(t.startPoint.x,this._measuredWidth),i=d(t.startPoint.y,this._measuredHeight),n=d("50%",this._measuredWidth),r=d("50%",this._measuredHeight),o=colors.length;if("linear"===type){var a,s,u=d(t.endPoint.x,this._measuredWidth),c=d(t.endPoint.y,this._measuredHeight);if(.01>Math.abs(e-u))c>i?(a=i,s=c,cssVal+="270deg"):(a=c,s=i,cssVal+="90deg");else if(.01>Math.abs(i-c))u>e?(a=e,s=u,cssVal+="0deg"):(a=u,s=e,cssVal+="180deg");else{var l=!1;if(e>u){l=!0;var h=e;e=u,u=h,h=i,i=c,c=h}var _=Math.atan2(c-i,u-e);if(tanAngle=Math.tan(_),cosAngle=Math.cos(_),originLineIntersection=r-n*tanAngle,userDistance=(i-e*tanAngle-originLineIntersection)*cosAngle,userXOffset=userDistance*Math.sin(_),userYOffset=userDistance*cosAngle,e+=userXOffset,i-=userYOffset,u+=userXOffset,c-=userYOffset,shiftedAngle=Math.PI/2-_,_>0){var p=originLineIntersection*Math.sin(shiftedAngle),m=-p*Math.cos(shiftedAngle),T=p*Math.sin(shiftedAngle);a=Math.sqrt(Math.pow(e-m,2)+Math.pow(i-T,2)),s=Math.sqrt(Math.pow(u-m,2)+Math.pow(c-T,2))}else{var p=(this._measuredHeight-originLineIntersection)*Math.sin(shiftedAngle),m=-p*Math.cos(shiftedAngle),T=this._measuredHeight-p*Math.sin(shiftedAngle);a=Math.sqrt(Math.pow(e-m,2)+Math.pow(i-T,2)),s=Math.sqrt(Math.pow(u-m,2)+Math.pow(c-T,2))}_=l?_+Math.PI:_,cssVal+=Math.round(360*(2*Math.PI-_)/(2*Math.PI))+"deg"}for(var v=0;o>v;v++){var E=colors[v];g(E,"String")&&(E={color:E}),g(E.offset,"Number")||(E.offset=v/(o-1)),cssVal+=","+E.color+" "+Math.round(d(100*E.offset+"%",s-a)+a)+b}}else if("radial"===type){var I=Math.min(this._measuredWidth,this._measuredHeight),y=d(t.startRadius,I),w=d(t.endRadius,I),x=[],l=!1;if(y>w){var h=y;y=w,w=h,l=!0;for(var v=0;(o-2)/2>=v;v++){var N=o-v-1;x[v]=colors[N],x[N]=colors[v]}if(1===o%2){var S=Math.floor(o/2);x[S]=colors[S]}}else for(var v=0;o>v;v++)x[v]=colors[v];cssVal+=e+b+" "+i+b;for(var v=0;o>v;v++){var E=x[v];g(E,"String")&&(E={color:E});var A;A=g(E.offset,"Number")?l?1===o%2&&v===Math.floor(o/2)?E.offset:1-E.offset:E.offset:v/(o-1),cssVal+=","+E.color+" "+Math.round(d(100*A+"%",w-y)+y)+b}}require.config.vendorPrefixes.css.forEach(function(t){f(this.domNode,"backgroundImage",t+cssVal+")")},this)},_defaultBackgroundColor:void 0,_defaultBackgroundImage:void 0,_defaultBackgroundDisabledColor:void 0,_defaultBackgroundDisabledImage:void 0,_defaultBackgroundFocusedColor:void 0,_defaultBackgroundFocusedImage:void 0,_defaultBackgroundSelectedColor:void 0,_defaultBackgroundSelectedImage:void 0,_borderLeftWidth:0,_borderRightWidth:0,_borderTopWidth:0,_borderBottomWidth:0,_getBorderFromCSS:function(){setTimeout(o.hitch(this,function(){var t=l.getComputedStyle(this.domNode),e=parseInt(t["border-left-width"]),i=parseInt(t["border-right-width"]),n=parseInt(t["border-top-width"]),r=parseInt(t["border-bottom-width"]);isNaN(e)||isNaN(i)||isNaN(n)||isNaN(r)||(this.borderWidth=e===i&&e===n&&e===r?e:[e,i,n,r])}),1)},_doBackground:function(t){if(!this.backgroundGradient){t=t||{};var e,i=(t.type||"").match(/mouse(over|out)/),n=this.backgroundImage||this._defaultBackgroundImage||"none",r=this.backgroundColor||this._defaultBackgroundColor,o=this.backgroundRepeat,s=this.domNode.style;this._touching&&(r=this.backgroundSelectedColor||this._defaultBackgroundSelectedColor||r,n=this.backgroundSelectedImage||this._defaultBackgroundSelectedImage||n),i&&(this._over="over"===i[1]),!this._touching&&this.focusable&&this._over&&(r=this.backgroundFocusedColor||this._defaultBackgroundFocusedColor||r,n=this.backgroundFocusedImage||this._defaultBackgroundFocusedImage||n),this.enabled||(r=this.backgroundDisabledColor||this._defaultBackgroundDisabledColor||r,n=this.backgroundDisabledImage||this._defaultBackgroundDisabledImage||n),r=r||(n&&"none"!==n?"transparent":""),s.backgroundColor.toLowerCase()!==r.toLowerCase()&&(s.backgroundColor=r),n=a.url(n),s.backgroundImage.replace(/'|"/g,"").toLowerCase()!==n.toLowerCase()&&(s.backgroundImage=n),n&&(e=o?"repeat":"no-repeat",s.backgroundRepeat!==e&&(s.backgroundRepeat=e),e=o?"auto":"100% 100%",s.backgroundSize.replace(/(100%) 100%/,"$1")!==e&&(s.backgroundSize=e))}},_setFocusNode:function(t){var e=this._focus=this._focus||{};return e.node!==t&&(e.node&&(n.off(e.evts),n.off(e.evtsMore)),e.node=t,e.evts=[_(t,"focus",this,"_doBackground"),_(t,"blur",this,"_doBackground")]),t},show:function(){this.visible=!0},hide:function(){this.visible=!1},animate:function(t,e){return this._isAttachedToActiveWin()&&c._play(this,t&&"Ti.UI.Animation"===t.declaredClass?t:new c(t)).then(e)},_setTouchEnabled:function(t){var e,i=this._children,n=0,r=i.length;for(f(this.domNode,"pointerEvents",t?"auto":"none");r>n;n++)e=i[n],e._setTouchEnabled(t&&e.touchEnabled)},_measuredLeft:0,_measuredTop:0,_measuredWidth:0,_measuredHeight:0,_measuredSandboxWidth:0,_measuredSandboxHeight:0,constants:{size:{get:function(){return{x:0,y:0,width:this._measuredWidth,height:this._measuredHeight}}},rect:{get:function(){return{x:this._measuredLeft,y:this._measuredTop,width:this._measuredWidth,height:this._measuredHeight}}},parent:function(){return this._parent}},properties:{backgroundColor:m,backgroundDisabledColor:m,backgroundDisabledImage:m,backgroundFocusedColor:m,backgroundFocusedImage:m,backgroundGradient:{set:function(t){if(g(t.type,"String")&&g(t.colors,"Array")&&!(2>t.colors.length)){var e=t.type,i=t.startPoint,n=t.endPoint;if("linear"===e)i&&"x"in i&&"y"in i||(t.startPoint={x:"0%",y:"50%"}),n&&"x"in n&&"y"in n||(t.endPoint={x:"100%",y:"50%"});else{if("radial"!==e)return;i&&"x"in i&&"y"in i||(t.startPoint={x:"50%",y:"50%"})}return t}},post:function(){this.backgroundGradient&&this._computeGradient()}},backgroundImage:m,backgroundRepeat:m,backgroundSelectedColor:m,backgroundSelectedImage:m,borderColor:{set:function(t){return f(this.domNode,"borderColor",t),t}},borderRadius:{set:function(t){return f(this.domNode,"borderRadius",h(t)),t},value:0},borderWidth:{set:function(t,e){if(g(t,"Array")){if(4!==t.length)return e;f(this.domNode,{borderLeftWidth:(this._borderLeftWidth=t[0])+b,borderRightWidth:(this._borderRightWidth=t[1])+b,borderTopWidth:(this._borderTopWidth=t[2])+b,borderBottomWidth:(this._borderBottomWidth=t[3])+b}),this._borderSet=!0}else{if(isNaN(t))return e;f(this.domNode,"borderWidth",t+b),this._borderLeftWidth=this._borderRightWidth=this._borderTopWidth=this._borderBottomWidth=t,this._borderSet=!0}return t},post:T,value:0},bottom:v,bubbleParent:!0,center:v,color:{set:function(t){return f(this.domNode,"color",t)}},enabled:{post:"_doBackground",set:function(t){return this._focus.node.disabled=!t,t},value:!0},focusable:{value:!1,set:function(t){return i.attr[t?"set":"remove"](this._focus.node,"tabindex",0),t}},_minHeight:v,_maxHeight:v,height:v,left:v,opacity:{set:function(t){return f(this.domNode,"opacity",t)}},visible:{set:function(t,e){return t=!!t,t!==e&&(!t&&(this._lastDisplay=a.get(this.domNode,"display")),f(this.domNode,"display",t?this._lastDisplay||"":"none"),t&&void 0!==e&&this._triggerLayout()),t}},right:v,touchEnabled:{set:function(t){return this._setTouchEnabled(t),t},value:!0},top:v,transform:{set:function(t){return f(this.domNode,"transform",t&&t.toCSS()),this._curTransform=t}},_minWidth:v,_maxWidth:v,width:v,zIndex:v}})});