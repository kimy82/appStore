define(["Ti/_/Layouts/Base","Ti/_/declare","Ti/UI","Ti/_/lang"],function(t,e,i,n){var r=n.isDef,o=Math.round;return e("Ti._.Layouts.ConstrainingHorizontal",t,{_doLayout:function(t,e,n,r,a){var s,u,c,l,h,d,_,f,p,g,m,T,v,b,E,I,y,w={width:0,height:0},x=t._children,N=0,S="px",A=[],C=0,L=0,O=x.length,R=this._measureNode;for(N=0;O>N;N++)s=t._children[N],s._alive&&s.domNode?s._markedForLayout&&((s._preLayout&&s._preLayout(e,n,r,a)||s._needsMeasuring)&&R(s,s,s._layoutCoefficients,this),u=s._layoutCoefficients,c=u.width,0===c.x2||isNaN(c.x2)?(l=u.height,h=u.sandboxWidth,d=u.sandboxHeight,m=l.x1*n+l.x2,g=c.x1*e+c.x2*(e-C)+c.x3,p=s._getContentSize?s._getContentSize(g,m):s._layout._doLayout(s,isNaN(g)?e:g-s._borderLeftWidth-s._borderRightWidth,isNaN(m)?n:m-s._borderTopWidth-s._borderBottomWidth,isNaN(g),isNaN(m)),isNaN(g)&&(g=p.width+s._borderLeftWidth+s._borderRightWidth),isNaN(m)&&(m=p.height+s._borderTopWidth+s._borderBottomWidth),v=s._measuredSandboxWidth=h.x1*e+h.x2+g,C+=v,s._measuredWidth=g,s._measuredHeight=m):L++):this.handleInvalidState(s,t);for(I=e-C,C=Math.floor(I/L),N=0;O>N;N++)s=t._children[N],s._markedForLayout&&(u=s._layoutCoefficients,c=u.width,0===c.x2||isNaN(c.x2)||(l=u.height,h=u.sandboxWidth,d=u.sandboxHeight,m=l.x1*n+l.x2,g=c.x1*e+c.x2*(O-1>N?C:I-C*(L-1))+c.x3,p=s._getContentSize?s._getContentSize(g,m):s._layout._doLayout(s,isNaN(g)?e:g-s._borderLeftWidth-s._borderRightWidth,isNaN(m)?n:m-s._borderTopWidth-s._borderBottomWidth,isNaN(g),isNaN(m)),isNaN(g)&&(g=p.width+s._borderLeftWidth+s._borderRightWidth),isNaN(m)&&(m=p.height+s._borderTopWidth+s._borderBottomWidth),s._measuredWidth=g,s._measuredHeight=m,v=s._measuredSandboxWidth=h.x1*e+h.x2+g));for(C=0,N=0;O>N;N++)s=t._children[N],s._measuredRunningWidth=C,s._markedForLayout?(u=s._layoutCoefficients,d=u.sandboxHeight,_=u.top,f=u.left,a&&0!==_.x1?A.push(s):(m=s._measuredHeight,E=s._measuredTop=_.x1*n+_.x2*m+_.x3,T=s._measuredSandboxHeight=d.x1*n+d.x2+m+(isNaN(E)?0:E),s._measuredSandboxHeight>w.height&&(w.height=s._measuredSandboxHeight)),b=s._measuredLeft=f.x1*e+f.x2+C):s._measuredSandboxHeight>w.height&&(w.height=s._measuredSandboxHeight),C+=s._measuredSandboxWidth;for(w.width=C,O=A.length,N=0;O>N;N++)s=A[N],d=s._layoutCoefficients.sandboxHeight,T=s._measuredSandboxHeight=d.x1*n+d.x2+s._measuredHeight,T>w.height&&(w.height=T);for(N=0;O>N;N++)s=A[N],_=s._layoutCoefficients.top,d=s._layoutCoefficients.sandboxHeight,m=s._measuredHeight,T=s._measuredSandboxHeight,T>w.height&&(w.height=T),E=s._measuredTop=_.x1*w.height+_.x2*m+_.x3,s._measuredSandboxHeight+=isNaN(E)?0:E;for(O=x.length,N=0;O>N;N++)s=x[N],s._markedForLayout&&(i._elementLayoutCount++,s=x[N],y=s.domNode.style,y.zIndex=s.zIndex,y.left=o(s._measuredLeft)+S,y.top=o(s._measuredTop)+S,y.width=o(s._measuredWidth-s._borderLeftWidth-s._borderRightWidth)+S,y.height=o(s._measuredHeight-s._borderTopWidth-s._borderBottomWidth)+S,s._markedForLayout=!1,s.fireEvent("postlayout"));return this._computedSize=w},_getWidth:function(t,e){return!r(e)&&(e=t._defaultWidth),e===i.INHERIT?t._parent._parent?t._parent._parent._layout._getWidth(t._parent,t._parent.width)===i.SIZE?i.SIZE:i.FILL:i.FILL:e},_getHeight:function(t,e){return!r(e)&&2>r(t.top)+r(t.center&&t.center.y)+r(t.bottom)&&(e=t._defaultHeight),e===i.INHERIT?t._parent._parent?t._parent._parent._layout._getHeight(t._parent,t._parent.height)===i.SIZE?i.SIZE:i.FILL:i.FILL:e},_isDependentOnParent:function(t){var e=t._layoutCoefficients;return!isNaN(e.width.x1)&&0!==e.width.x1||!isNaN(e.width.x2)&&0!==e.width.x2||!isNaN(e.height.x1)&&0!==e.height.x1||0!==e.sandboxWidth.x1||0!==e.sandboxHeight.x1||0!==e.left.x1||0!==e.top.x1},_doAnimationLayout:function(t,e){var i=t._parent._measuredWidth,n=t._parent._measuredHeight,r=t._measuredRunningWidth,o=e.height.x1*n+e.height.x2;return{width:e.width.x1*i+e.width.x2*(i-r)+e.width.x3,height:o,left:e.left.x1*i+e.left.x2+r,top:e.top.x1*n+e.top.x2*o+e.top.x3}},_measureNode:function(t,e,n,r){t._needsMeasuring=!1;var o,a,s,u=r.getValueType,c=r.computeValue,l=r._getWidth(t,e.width),h=u(l),d=c(l,h),_=r._getHeight(t,e.height),f=u(_),p=c(_,f),g=e.left,m=u(g),T=c(g,m),v=e.right,b=u(v),E=c(v,b),I=e.top,y=u(I),w=c(I,y),x=e.center&&e.center.y,N=u(x),S=c(x,N),A=e.bottom,C=u(A),L=c(A,C),O=n.width,R=n.height,D=n.sandboxWidth,P=n.sandboxHeight,U=n.left,k=n.top;if(o=a=0,f===i.SIZE?o=a=0/0:f===i.FILL?(o=1,"%"===y?o-=w:"#"===y?a=-w:"%"===C?o-=L:"#"===C&&(a=-L)):"%"===f?o=p:"#"===f?a=p:"%"===y?"%"===N?o=2*(S-w):"#"===N?(o=-2*w,a=2*S):"%"===C?o=1-w-L:"#"===C&&(o=1-w,a=-L):"#"===y?"%"===N?(o=2*S,a=-2*w):"#"===N?a=2*(S-w):"%"===C?(o=1-L,a=-w):"#"===C&&(o=1,a=-L-w):"%"===N?"%"===C?o=2*(L-S):"#"===C&&(o=-2*S,a=2*L):"#"===N&&("%"===C?(o=2*L,a=-2*S):"#"===C&&(a=2*(L-S))),R.x1=o,R.x2=a,P.x1="%"===C?L:0,P.x2="#"===C?L:0,o=a=s=0,h===i.SIZE?o=a=s=0/0:h===i.FILL?(a=1,"%"===m&&(o=-T),"#"===m&&(s=-T),"%"===b&&(o=-E),"#"===b&&(s=-E)):"%"===h?o=d:"#"===h&&(s=d),O.x1=o,O.x2=a,O.x3=s,o=a=0,"%"===m&&(o=T),"#"===m&&(a=T),"%"===b&&(o+=E),"#"===b&&(a+=E),D.x1=o,D.x2=a,o=a=s=0,"%"===y)o=w;else if("#"===y)s=w;else if("%"===N)o=S,a=-.5;else if("#"===N)a=-.5,s=S;else if("%"===C)o=1-L,a=-1;else if("#"===C)o=1,a=-1,s=-L;else switch(r._defaultVerticalAlignment){case"center":o=.5,a=-.5;break;case"end":o=1,a=-1}k.x1=o,k.x2=a,k.x3=s,U.x1="%"===m?T:0,U.x2="#"===m?T:0},_defaultHorizontalAlignment:"start",_defaultVerticalAlignment:"center"})});