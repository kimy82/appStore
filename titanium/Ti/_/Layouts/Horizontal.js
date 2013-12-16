define(["Ti/_/Layouts/Base","Ti/_/declare","Ti/API","Ti/UI","Ti/_/lang"],function(t,e,i,n,r){var o=r.isDef,a=Math.round,s=Math.floor,u=Math.ceil;return e("Ti._.Layouts.Horizontal",t,{_doLayout:function(t,e,r,o,c){var l,h,d,_,f,p,g,m,T,v,b,E,I,y,w,x,N,S,A,C,L={width:0,height:0},O=t._children,R=0,D="px",P=0,k=0,U=[[]],M=[],W=[],B=0,F=O.length,H=this._measureNode;for(R=0;F>R;R++)l=t._children[R],l._alive&&l.domNode?(l._measuredRunningWidth=k,l._markedForLayout&&((l._preLayout&&l._preLayout(e,r,o,c)||l._needsMeasuring)&&H(l,l,l._layoutCoefficients,this),d=l._layoutCoefficients,_=d.width,f=d.height,p=d.sandboxWidth,T=d.left,b=_.x1*e+_.x2*(e-k)+_.x3,E=0===f.x2?f.x1*r+f.x3:0/0,isNaN(b)||isNaN(f.x1)?(v=l._getContentSize?l._getContentSize(b,E):l._layout._doLayout(l,isNaN(b)?e:b-l._borderLeftWidth-l._borderRightWidth,isNaN(E)?r:E-l._borderTopWidth-l._borderBottomWidth,isNaN(b),isNaN(E)),isNaN(b)&&(b=v.width+l._borderLeftWidth+l._borderRightWidth),isNaN(f.x1)&&(E=v.height+l._borderTopWidth+l._borderBottomWidth),l._childrenLaidOut=!0,0===f.x2||isNaN(f.x2)||(i.warn("Child of width SIZE and height FILL detected in a horizontal layout. Performance degradation may occur."),l._childrenLaidOut=!1)):l._childrenLaidOut=!1,l._measuredWidth=b,l._measuredHeight=E,y=l._measuredSandboxWidth=p.x1*e+p.x2+b,w=T.x1*e+T.x2+k,!o&&s(y+k)>u(e)&&(U.push([]),w-=k,k=0),l._measuredLeft=w,U[U.length-1].push(l),k+=y),k>L.width&&(L.width=k)):this.handleInvalidState(l,t);for(F=U.length,R=0;F>R;R++){for(N=U[R],S=0,A=N.length,h=0;A>h;h++)l=N[h],l._markedForLayout&&(d=l._layoutCoefficients,m=d.top,f=d.height,g=d.sandboxHeight,E=l._measuredHeight,isNaN(E)&&(l._measuredHeight=E=f.x1*r+f.x2*(r-P)+f.x3),l._childrenLaidOut||(b=l._measuredWidth,l._childrenLaidOut=!0,l._layout._doLayout(l,isNaN(b)?e:b-l._borderLeftWidth-l._borderRightWidth,isNaN(E)?r:E-l._borderTopWidth-l._borderBottomWidth,isNaN(b),isNaN(E))),0!==m.x2?(W.push(l),x=P):l._measuredTop=x=m.x1*r+m.x3*E+m.x4+P,l._measuredSandboxHeight=I=g.x1*r+g.x2+E+x-P,I>S&&(S=I));M.push(S),P+=S}for(P=0,F=U.length,R=0;F>R;R++){for(N=U[R],S=M[R],A=N.length,h=0;A>h;h++)l=N[h],l._measuredRunningHeight=P,l._measuredRowHeight=S,~W.indexOf(l)&&l._markedForLayout&&(E=l._measuredHeight,m=l._layoutCoefficients.top,l._measuredTop=m.x1*r+m.x2*S+m.x3*E+m.x4+P);P+=S}if(L.height=P,!c)switch(this._defaultVerticalAlignment){case"end":B=r-P;case"center":B/=2}for(F=O.length,R=0;F>R;R++)l=O[R],l._markedForLayout&&(n._elementLayoutCount++,l=O[R],C=l.domNode.style,C.zIndex=l.zIndex,C.left=a(l._measuredLeft)+D,C.top=a(l._measuredTop)+D,C.width=a(l._measuredWidth-l._borderLeftWidth-l._borderRightWidth)+D,C.height=a(l._measuredHeight-l._borderTopWidth-l._borderBottomWidth)+D,l._markedForLayout=!1,l.fireEvent("postlayout"));return this._computedSize=L},_getWidth:function(t,e){return!o(e)&&(e=t._defaultWidth),e===n.INHERIT?t._parent._parent?t._parent._parent._layout._getWidth(t._parent,t._parent.width)===n.SIZE?n.SIZE:n.FILL:n.FILL:e},_getHeight:function(t,e){return!o(e)&&(e=t._defaultHeight),e===n.INHERIT?t._parent._parent?t._parent._parent._layout._getHeight(t._parent,t._height)===n.SIZE?n.SIZE:n.FILL:n.FILL:e},_isDependentOnParent:function(t){var e=t._layoutCoefficients;return!isNaN(e.width.x1)&&0!==e.width.x1||!isNaN(e.width.x2)&&0!==e.width.x2||!isNaN(e.height.x1)&&0!==e.height.x1||!isNaN(e.height.x2)&&0!==e.height.x2||0!==e.sandboxWidth.x1||0!==e.sandboxHeight.x1||0!==e.left.x1||0!==e.top.x1},_doAnimationLayout:function(t,e){var i=t._parent._measuredWidth,n=t._parent._measuredHeight,r=t._measuredHeight,o=t._measuredRunningWidth,a=t._measuredRunningHeight,s=t._measuredRowHeight;return{width:e.width.x1*i+e.width.x2*(i-o)+e.width.x3,height:e.height.x1*n+e.height.x2*(n-a)+e.height.x3,left:e.left.x1*i+e.left.x2+o,top:e.top.x1*n+e.top.x2*s+e.top.x3*r+e.top.x4+a}},_measureNode:function(t,e,i,r){t._needsMeasuring=!1;var o,a,s,u,c=r.getValueType,l=r.computeValue,h=r._getWidth(t,e.width),d=c(h),_=l(h,d),f=r._getHeight(t,e.height),p=c(f),g=l(f,p),m=e.left,T=c(m),v=l(m,T),b=e.right,E=c(b),I=l(b,E),y=e.top,w=c(y),x=l(y,w),N=e.bottom,S=c(N),A=l(N,S),C=i.width,L=i.height,O=i.sandboxWidth,R=i.sandboxHeight,D=i.left,P=i.top;if(o=a=s=0,d===n.SIZE?o=a=s=0/0:d===n.FILL?(a=1,"%"===T&&(o=-v),"#"===T&&(s=-v),"%"===E&&(o=-I),"#"===E&&(s=-I)):"%"===d?o=_:"#"===d&&(s=_),C.x1=o,C.x2=a,C.x3=s,o=a=0,"%"===T&&(o=v),"#"===T&&(a=v),"%"===E&&(o+=I),"#"===E&&(a+=I),O.x1=o,O.x2=a,o=a=s=0,p===n.SIZE?o=a=s=0/0:p===n.FILL?(a=1,"%"===w&&(o=-x),"#"===w&&(s=-x)):"%"===p?o=g:"#"===p&&(s=g),L.x1=o,L.x2=a,L.x3=s,R.x1="%"===S?A:0,R.x2="#"===S?A:0,D.x1="%"===T?v:0,D.x2="#"===T?v:0,o=a=s=u=0,"%"===w)o=x;else if("#"===w)u=x;else if("%"===S)o=1-A,s=-1;else if("#"===S)o=1,s=-1,u=-A;else switch(r._defaultRowAlignment){case"center":a=.5,s=-.5;break;case"end":a=1,s=-1}P.x1=o,P.x2=a,P.x3=s,P.x4=u},_defaultHorizontalAlignment:"start",_defaultVerticalAlignment:"start",_defaultRowAlignment:"center"})});