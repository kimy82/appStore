define(["Ti/_","Ti/_/declare","Ti/_/Evented","Ti/_/lang"],function(t,e,n,i){return e("Ti.UI.EmailDialog",n,{open:function(){var e,n,r=this.toRecipients||[],o="mailto:"+r.join(","),a={subject:"subject",ccRecipients:"cc",bccRecipients:"bcc",messageBody:"body"},s={};for(e in a)(n=this[e])&&(require.is(n,"Array")&&(n=n.join(",")),s[a[e]]=n);this.html||s.body&&(s.body=t.escapeHtmlEntities(s.body)),s=i.urlEncode(s),location.href=o+(s?"?"+s:""),this.fireEvent("complete",{result:this.SENT,success:!0})},isSupported:function(){return!0},constants:{CANCELLED:0,FAILED:3,SAVED:1,SENT:2},properties:{bccRecipients:void 0,ccRecipients:void 0,html:!1,messageBody:void 0,subject:void 0,toRecipients:void 0}})});