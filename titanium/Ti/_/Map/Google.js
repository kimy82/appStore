define(["Ti/_/declare","Ti/_/dom","Ti/_/event","Ti/_/lang","Ti/App/Properties","Ti/Geolocation","Ti/Map","Ti/UI/View","Ti/Utils"],function(t,e,i,n,r,o,a,s,u){function l(t){var e=c.MapTypeId;switch(t){case a.HYBRID_TYPE:return e.HYBRID;case a.SATELLITE_TYPE:return e.SATELLITE;case a.TERRAIN_TYPE:return e.TERRAIN}return e.ROADMAP}var c,h,d,_,f=n.isDef,p=require.mix,g=require.on,m=s.prototype.fireEvent,T={latitude:39.828175,longitude:-98.5795,latitudeDelta:30.137412,longitudeDelta:63.235658},v={0:"red",1:"green",2:"purple"},b=Ti.deferStart(),E=t("Ti.Map.View",s,{constructor:function(){this.properties.__values__.annotations=[],this._annotationMap={},this._routes=[],this.fireEvent("loading")},postscript:function(){var t=this,e=t.region||T,i=t._gmap=new c.Map(t.domNode,{disableDefaultUI:!0,zoom:2,zoomControl:!0,center:new c.LatLng(e.latitude,e.longitude),mapTypeId:l(t.mapType)});g(t,"postlayout",function(){h.trigger(i,"resize"),t._updateMap(e,1),setTimeout(function(){t._updateMap(e,1),t._updateUserLocation(t.userLocation),t.annotations.forEach(t._createMarker,t),t._annotationEvents=[],t._boundsEvt=h.addListener(i,"bounds_changed",n.hitch(t,"_fitRegion"))},1)})},destroy:function(){i.off(this._annotationEvents),h.removeListener(this._boundsEvt),h.clearInstanceListeners(this._gmap),this.removeAllAnnotations(),this._gmap=null,s.prototype.destroy.apply(this,arguments)},addAnnotation:function(t){t&&("Ti.Map.Annotation"===t.declaredClass||(t=new Annotation(t)),~this.annotations.indexOf(t)||this._createMarker(t),t.title&&(this._annotationMap[t.title]=t))},addAnnotations:function(t){t&&t.forEach(this.addAnnotation,this)},addRoute:function(t){t&&(t.points||[]).length&&(t.pline=new c.Polyline({map:this._gmap,path:t.points.map(function(t){return new c.LatLng(t.latitude,t.longitude)}),strokeColor:t.color||"#000",strokeWeight:t.width||1}),this._routes.push(t))},deselectAnnotation:function(t){require.is(t,"String")&&(t=this._annotationMap[t]),t&&d&&d.widgetId===t.widgetId&&this._hide(t)},removeAllAnnotations:function(){for(d&&d.close();this.annotations.length;)this.removeAnnotation(this.annotations[0])},removeAnnotation:function(t){if(require.is(t,"String")&&(t=this._annotationMap[t]),t){var e=this.properties.__values__.annotations,i=e.indexOf(t);d&&this._hide(t),h.removeListener(t.evt),t.marker.setMap(null),delete t.marker,t.destroy(),~i&&e.splice(i,1)}},removeAnnotations:function(t){t.forEach(function(t){this.removeAnnotation(t)},this)},removeRoute:function(t){if(t&&t.name)for(var e=this._routes,i=0;e.length>i;i++)e[i].name===t.name&&(t.pline.setMap(null),delete t.pline,e.splice(i--,1))},selectAnnotation:function(t){require.is(t,"String")&&(t=this._annotationMap[t]),t&&this._show(t)},setLocation:function(t){t&&(this.region=t),f(t.animate)&&(this.animated=t.animate),f(t.animated)&&(this.animated=t.animated),f(t.regionFit)&&(this.regionFit=t.regionFit),this._updateMap(t)},zoom:function(t){var e=this._gmap;e.setZoom(e.getZoom()+t)},_show:function(t,n){function r(){a||(a=1)&&s._dispatchEvents(t,n)}if(t&&(!d||d.widgetId!==t.widgetId)){var o,a,s=this,u=t.widgetId,l="TiMapAnnotation",_=e.create("div",{className:l}),f=_,p={annotation:f,leftButton:t.leftButton&&e.create("img",{className:l+"LeftButton",src:t.leftButton},_),rightButton:t.rightButton&&e.create("img",{className:l+"RightButton",src:t.rightButton},_),dummy:(_=e.create("div",{className:l+"Content"},_))&&0,title:e.create("h1",{innerHTML:t._getTitle()},_),subtitle:e.create("p",{innerHTML:t._getSubtitle()},_)};i.off(s._annotationEvents);for(o in p)(function(e,n){n&&s._annotationEvents.push(g(n,"click",function(n){i.stop(n),s._hide(t,e)}))})(o,p[o]);s._annotationEvents.push(g(t,"update",this,function(e){if(d.widgetId===u){var i,n=e.property,r=e.value,o=this._annotationMap;switch(n){case"title":case"subtitle":p[n].innerHTML=r,delete o[e.oldValue],r&&(o[r]=t);break;case"leftButton":case"rightButton":p[n].src=r;break;case"image":case"pincolor":i=s._getMarkerImage(t),t.marker.setIcon(i[0]),t.marker.setShadow(i[1]||null)}}})),d?(r(),d.setContent(f)):(d=new c.InfoWindow({content:f}),h.addListener(d,"domready",r),h.addListener(d,"closeclick",function(){s._hide(t,"annotation")})),d.open(s._gmap,t.marker),d.widgetId=t.widgetId}},_hide:function(t,e){e&&~e.indexOf("Button")||(d.close(),d.widgetId=0),this._dispatchEvents(t,e)},_dispatchEvents:function(t,e){var i=this.annotations.indexOf(t),n={annotation:t,clicksource:e=e||"pin",index:i,latitude:t.latitude,longitude:t.longitude,map:this,subtitle:t._getSubtitle(),title:t._getTitle()};m.call(this,"singletap",n),m.call(this,"click",n),t._onclick(this,i,e)},_getMarkerImage:function(t){var e,i,n=v[0|t.pincolor];return t.image&&("Ti.Blob"===t.image.declaredClass?(n=v[e=u.md5HexDigest(i=""+t.image)],n||(n=v[e]=[new c.MarkerImage(i)])):(n=v[t.image],n||(n=v[t.image]=[new c.MarkerImage(t.image)]))),n},_createMarker:function(t){var e=this._getMarkerImage(t);t.evt=h.addListener(t.marker=new c.Marker({map:this._gmap,icon:e[0],shadow:e[1],position:new c.LatLng(t.latitude,t.longitude),optimized:!1,title:t._getTitle(),animation:t.animate&&c.Animation.DROP}),"click",n.hitch(this,function(){this[d&&d.widgetId===t.widgetId?"_hide":"_show"](t)})),this.properties.__values__.annotations.push(t)},_fitRegion:function(){var t=this.constants,e=this._gmap,i=e.getCenter(),n=e.getBounds(),r=n.getNorthEast(),o=n.getSouthWest(),a=t.latitudeDelta=r.lat()-o.lat(),s=t.longitudeDelta=r.lng()-o.lng(),u={latitude:i.lat(),longitude:i.lng(),latitudeDelta:a,longitudeDelta:s};this.regionFit&&(this.properties.__values__.region=u),this._initialized||(this._initialized=1,this.fireEvent("complete")),this.fireEvent("regionchanged",u)},_updateMap:function(t,e){var i=this._gmap;if(i){var n=!e&&this.animated,r=t.latitudeDelta/2,o=t.longitudeDelta/2;i[n?"panTo":"setCenter"](new c.LatLng(t.latitude,t.longitude)),i[n?"panToBounds":"fitBounds"](new c.LatLngBounds(new c.LatLng(t.latitude-r,t.longitude-o),new c.LatLng(t.latitude+r,t.longitude+o)))}},_updateUserLocation:function(t){var e=this._gmap;e&&(t||this._locationInited)&&(this._locationInited=1,o[t?"addEventListener":"removeEventListener"]("location",n.hitch(this,function(t){var e,i=this._locationMarker,n=t.coords,r=t.code;n?(e=new c.LatLng(n.latitude,n.longitude),i?i.setPosition(e):this._locationMarker=new c.Marker({map:this._gmap,icon:_,position:e})):"code"in t&&Ti.API.warn("Geolocation error: "+(r===o.ERROR_DENIED?"permission denied":r===o.ERROR_TIMEOUT?"timeout":r===o.ERROR_LOCATION_UNKNOWN?"position unavailable":"unknown"))})),o.locationServicesEnabled?(!t||this._locationMarker)&&this._locationMarker.setVisible(t):(Ti.API.warn("Geolocation services unavailable"),this.properties.__values__.userLocation=!1))},fireEvent:function(t){/(click|singletap)/.test(t)||s.prototype.fireEvent.apply(this,arguments)},constants:{latitudeDelta:0,longitudeDelta:0},properties:{animated:!1,annotations:{set:function(t){return t=t.filter(function(t){return t&&"Ti.Map.Annotation"===t.declaredClass}),this._gmap&&(this.removeAllAnnotations(),t.forEach(this._createMarker,this)),t}},mapType:{set:function(t){return this._gmap&&this._gmap.setMapTypeId(l(t)),t}},region:{set:function(t,e){return p({},T,e,t)},post:function(t,e){t!==e&&this._updateMap(t)},value:null},regionFit:!0,userLocation:{post:function(t){this._updateUserLocation(t)},value:!1}}});return window.TiMapViewInit=function(){function t(t,e,r){return new c.MarkerImage(i+"marker_"+t+".png",new c.Size(e,34),new n(r,0),new n(10,34))}c=google.maps,h=c.event;var e,i="themes/"+require.config.ti.theme+"/Map/",n=c.Point;for(e in v)v[e]=[t(v[e],20,0),t(v[e],37,20)];_=new c.MarkerImage(i+"location.png",new c.Size(22,22),new n(0,0),new n(11,11)),b()},require(["//maps.googleapis.com/maps/api/js?key="+r.getString("ti.map.apikey","")+"&sensor=true&callback=TiMapViewInit"],0,b),E});