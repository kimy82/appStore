define(["Ti/_","Ti/_/declare","Ti/_/has","Ti/_/lang","Ti/_/Evented","Ti/Filesystem","Ti/Network","Ti/Blob","Ti/_/event","Ti/App"],function(e,t,n,i,r,o,a,s,u,l){var c=require.is,d=require.on;return t("Ti.Network.HTTPClient",r,{constructor:function(){var e=this._xhr=new XMLHttpRequest;this._handles=[d(e,"error",this,"_onError"),e.upload&&d(e.upload,"error",this,"_onError"),d(e,"progress",this,function(e){e.progress=e.lengthComputable?e.loaded/e.total:!1,c(this.ondatastream,"Function")&&this.ondatastream.call(this,e)}),e.upload&&d(e.upload,"progress",this,function(e){e.progress=e.lengthComputable?e.loaded/e.total:!1,c(this.onsendstream,"Function")&&this.onsendstream.call(this,e)})],e.onreadystatechange=i.hitch(this,function(){var t,i=this.constants,r=this.onload;switch(e.readyState){case 0:i.readyState=this.UNSENT;break;case 1:i.readyState=this.OPENED;break;case 2:i.readyState=this.LOADING;break;case 3:i.readyState=this.HEADERS_RECEIVED;break;case 4:clearTimeout(this._timeoutTimer),this._completed=1,i.readyState=this.DONE,this._aborted||((t=this.file)&&(t=o.getFile(t),t.writable&&t.write(e.responseText)),i.responseText=e.responseText,i.responseData=new s({data:e.responseText,length:e.responseText.length,mimeType:e.getResponseHeader("Content-Type")||"text/plain"}),i.responseXML=e.responseXML,n("ti-instrumentation")&&instrumentation.stopTest(this._requestInstrumentationTest,this.location),e.status>=400&&(r=this._onError),c(r,"Function")&&r.call(this))}this._fireStateChange()})},destroy:function(){this._xhr&&(this._xhr.abort(),this._xhr=null),u.off(this._handles),r.destroy.apply(this,arguments)},_onError:function(e){this.abort(),c(e,"Object")||(e={message:e}),e.source=this,e.type="error",e.error||(e.error=e.message||this._xhr.status),parseInt(e.error)||(e.error="Can't reach host"),c(this.onerror,"Function")&&this.onerror.call(this,e)},abort:function(){clearTimeout(this._timeoutTimer),this._aborted=1,this.connected&&this._xhr.abort(),this.constants.readyState=this.UNSENT,this._fireStateChange()},_fireStateChange:function(){c(this.onreadystatechange,"Function")&&this.onreadystatechange.call(this)},getResponseHeader:function(e){return this._xhr.readyState>1?this._xhr.getResponseHeader(e):null},open:function(t,n,i){var r=Ti.Network.httpURLFormatter,o=this.constants,a=this.withCredentials,s=e.getAbsolutePath(r?r(n):n),u=s.match(/^((?:.+\:)?\/\/)?(?:.+@)?(.*)$/);u&&this.username&&this.password&&(s=(u[1]||"")+(this.domain?this.domain+"\\":"")+this.username+":"+this.password+"@"+u[2]),this.abort(),this._xhr.open(o.connectionType=t,o.location=s,a||void 0===i?!0:!!i),a&&(this._xhr.withCredentials=a)},send:function(e){try{var t=0|this.timeout;this._aborted=this._completed=0,n("ti-instrumentation")&&(this._requestInstrumentationTest=instrumentation.startTest("HTTP Request")),e=c(e,"Object")?i.urlEncode(e):e,this._contentTypeSet||e&&this._xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),this._xhr.setRequestHeader("X-Titanium-Id",l.guid),this._xhr.send(e),clearTimeout(this._timeoutTimer),t&&(this._timeoutTimer=setTimeout(i.hitch(this,function(){this.connected&&(this.abort(),!this._completed&&this._onError("Request timed out"))}),t))}catch(r){}},setRequestHeader:function(e,t){"Content-Type"===e&&(this._contentTypeSet=1),this._xhr.setRequestHeader(e,t)},properties:{ondatastream:void 0,onerror:void 0,onload:void 0,onreadystatechange:void 0,onsendstream:void 0,timeout:void 0,username:null,password:null,domain:null,withCredentials:!1},constants:{DONE:4,HEADERS_RECEIVED:2,LOADING:3,OPENED:1,UNSENT:1,connected:function(){return this.readyState>=this.OPENED},connectionType:void 0,location:void 0,readyState:this.UNSENT,responseData:void 0,responseText:void 0,responseXML:void 0,status:function(){return this._xhr.status},statusText:function(){return this._xhr.statusText}}})});