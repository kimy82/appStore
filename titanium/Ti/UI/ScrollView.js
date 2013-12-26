define(["Ti/_/declare","Ti/_/UI/KineticScrollView","Ti/_/style","Ti/_/lang","Ti/UI"],function(t,e,i,n,r){var o=n.isDef,a=.001;return t("Ti.UI.ScrollView",e,{constructor:function(){var t;this._initKineticScrollView(t=r.createView({width:r.SIZE,height:r.SIZE,_minWidth:"100%",_minHeight:"100%",left:0,top:0}),"both","both",1)},_handleMouseWheel:function(){this._isScrollBarActive&&this.fireEvent("scroll",{x:-this._currentTranslationX,y:-this._currentTranslationY,dragging:!1,decelerating:!1})},_handleDragStart:function(){this.fireEvent("dragStart")},_handleDrag:function(){this.fireEvent("scroll",{x:-this._currentTranslationX,y:-this._currentTranslationY,dragging:!0,decelerating:!1})},_handleDragEnd:function(t,e,i){if(o(e)){var n=this,s=Math.sqrt(e*e+i*i),u=s*s/(1.724*a),l=s/a,c=Math.atan(Math.abs(i/e)),d=u*Math.cos(c)*(0>e?-1:1),h=u*Math.sin(c)*(0>i?-1:1),f=Math.min(0,Math.max(n._minTranslationX,n._currentTranslationX+d)),_=Math.min(0,Math.max(n._minTranslationY,n._currentTranslationY+h));n.fireEvent("dragEnd",{decelerate:!0}),n._animateToPosition(f,_,l,r.ANIMATION_CURVE_EASE_OUT,function(){n._setTranslation(f,_),n._endScrollBars(),n.fireEvent("scrollEnd")})}},scrollTo:function(t,e){this._setTranslation(null!==t?-t:this._currentTranslationX,null!==e?-e:this._currentTranslationX)},_defaultWidth:r.FILL,_defaultHeight:r.FILL,_getContentOffset:function(){return this.contentOffset},_preLayout:function(){var t=this._contentContainer.layout===this.layout;return this._contentContainer.layout=this.layout,t},add:function(t){this._contentContainer._add(t),this._publish(t)},remove:function(t){this._contentContainer.remove(t),this._unpublish(t)},properties:{contentHeight:{get:function(){return this._contentContainer.height},set:function(t){return this._contentContainer.height=t,t}},contentOffset:{get:function(){return{x:-this._currentTranslationX,y:-this._currentTranslationY}},set:function(t){return this._setTranslation(o(t.x)?-t.x:this._currentTranslationX,o(t.y)?-t.y:this._currentTranslationY),t}},contentWidth:{get:function(){return this._contentContainer.width},set:function(t){return this._contentContainer.width=t,t}},disableBounce:!1,horizontalBounce:{set:function(t){return this._horizontalElastic=t},value:!0},layout:{set:function(t){return this._contentContainer.layout=t},value:"composite"},showHorizontalScrollIndicator:{set:function(t,e){return t!==e&&(t?this._createHorizontalScrollBar():this._destroyHorizontalScrollBar()),t},value:!0},showVerticalScrollIndicator:{set:function(t,e){return t!==e&&(t?this._createVerticalScrollBar():this._destroyVerticalScrollBar()),t},value:!0},verticalBounce:{set:function(t){return this._verticalElastic=t},value:!0}}})});