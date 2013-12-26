var args = arguments[0] || {};
var parent = args.parent;


var anunci = {
	_init: function(ip){
		anunci.id='null';
		anunci.ipserver=ip;
	},
	save: function(){			
		server.saveAnunci($.titol.value, $.descripcio.value,$.preu.value,anunci.id );													
	},
	addFotoFromGalery: function(){				
					
					Titanium.Media.openPhotoGallery({
					 
					    success:function(event)
					    {
					        Ti.API.info("success! event: " + JSON.stringify(event));
					        var image = event.media;
					 
					        var xhr = Titanium.Network.createHTTPClient();
					 
					        xhr.onerror = function(e)
					        {
					            Ti.API.info('IN ERROR ' + e.error);
					        };
					        xhr.onload = function()
					        {

					            Ti.API.info('IN ONLOAD......................... '+this.responseText+'......'+ this.status + ' readyState ' + this.readyState);
					            var data = this.responseText;
                				var jdata = JSON.parse(data);
                				if ("ok" == jdata.ok) {
                					anunci.id = jdata.id;
                				}
					            
					        };
					        xhr.onsendstream = function(e)
					        {
					         
					        };
					        xhr.setTimeout(10000);
					        var user =_executionsDB.getUser();
					        // open the client
					        xhr.open('POST','http://'+anunci.ipserver+'/rest/service/userService/uploadFoto?idAnunci='+anunci.id+'&idUser='+user.id);
					 		
					        // send the data
					        
					        xhr.setRequestHeader("contentType", "multipart/form-data");					       
					        xhr.send({file:image});
					        var imageView = Ti.UI.createImageView({
												width:100,
												height:100,
												image:event.media
											});

					        Ti.API.info('IN ONLOAD.....................................SENDED ');
					        $.fotosView.add(imageView);
					 
					    },
					    cancel:function()
					    {
					 
					    },
					    error:function(error)
					    {
					    },
					    allowImageEditing:true					 					 
					});
	},
	addFotoFromCamera: function(){
				Titanium.Media.showCamera({
									success:function(event) {
										// called when media returned from the camera
										Ti.API.debug('Our type was: '+event.mediaType);
										if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
											var imageView = Ti.UI.createImageView({
												width:100,
												height:100,
												image:event.media
											});
											
											Ti.API.info("success! event: " + JSON.stringify(event));
									        var image = event.media;
									 
									        var xhr = Titanium.Network.createHTTPClient();
									 
									        xhr.onerror = function(e)
									        {
									            Ti.API.info('IN ERROR ' + e.error);
									        };
									        xhr.onload = function()
									        {
									            Ti.API.info('IN ONLOAD......................... '+this.responseText+'......'+ this.status + ' readyState ' + this.readyState);
									            var data = this.responseText;
				                				var jdata = JSON.parse(data);
				                				//alert(jdata);
				                				if ("ok" == jdata.ok) {
				                					//alert(jdata.id);	
				                					anunci.id = jdata.id;
				                				}
									        };
									        xhr.onsendstream = function(e)
									        {
									            
									        };
									        // open the client
									        xhr.setTimeout(10000);
									        var user =_executionsDB.getUser();
									       // alert(anunci.id);
									        xhr.open('POST','http://'+anunci.ipserver+'/rest/service/userService/uploadFoto?idAnunci='+anunci.id+'&idUser='+user.id);
									   		xhr.setRequestHeader("contentType", "multipart/form-data");
									        // send the data
									        user =_executionsDB.getUser();
									        xhr.send({file:image});
									        
									        $.fotosView.add(imageView);
										} else {
											alert("got the wrong type back ="+event.mediaType);
										}
									},
									cancel:function() {
										// called when user cancels taking a picture
									},
									error:function(error) {
										// called when there's an error
										var a = Titanium.UI.createAlertDialog({title:'Camera'});
										if (error.code == Titanium.Media.NO_CAMERA) {
											a.setMessage('Please run this test on device');
										} else {
											a.setMessage('Unexpected error: ' + error.code);
										}
										a.show();
									},
									saveToPhotoGallery:true,
									allowEditing:true,
									mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
								});
	}
};


//Scroll view for fotos
var scrollFotosAnunci = Ti.UI.createScrollView({
    contentHeight: 100,
    contentWidth: Ti.UI.SIZE,
    height: 120,
    showHorizontalScrollIndicator: true,
    showVerticalScrollIndicator: false,    
    width: Ti.UI.FILL
});
scrollFotosAnunci.addEventListener('scroll', function (e) {
    var tolerance = 50;
    Ti.API.info('near bottom', (view.getRect().height - e.y) <= (scroll.getRect().height + tolerance));
});





$.fotosView.add(scrollFotosAnunci);
//fi scroll view

    



anunci._init('192.168.1.74:8080');
$.addAnunci.backgroundColor="#CCCCCC";
$.saveAnunci.setTitle('guarda');
$.addFotoFromGaleria.setTitle('add Galeria');
$.addFotoFromCamera.setTitle('add Camera');
$.addAnunci.open();