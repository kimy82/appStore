Ti.include("/js/md5.js");
Ti.include("/js/principal.js");
Ti.include("/js/facebook.js");
Ti.include("/js/server.js"); 
server._init("192.168.1.70:8080/AppStore");

//Butoon de registre
var buttonRegistre = Titanium.UI.createButton({
   title: 'Registra \'t',
   top: 10,
   width: Ti.UI.SIZE,
   height: 50,
   id: 'buttonRegistre'
});

buttonRegistre.addEventListener('click',function(e)
{
   indexWindow.openCreateAccount();
});
//////////////////

//Butoon de logout
var buttonLogout = Titanium.UI.createButton({
   title: 'Log out',
   top: 10,
   right:10,
   width: Ti.UI.SIZE,
   height: 50,
   id: 'buttonRegistre'
});

buttonLogout.addEventListener('click',function(e)
{
   indexWindow.logOut();
});
//////////////////

principal._init($,buttonRegistre,button,buttonLogout);

Ti.include("/js/dataBase.js");
Ti.include("/js/network.js");



var indexWindow ={
	_init: function(ip){
		indexWindow.ip=ip;
		indexWindow.init=0;
		indexWindow.initSearch=0;
		indexWindow.searching=false;
		indexWindow._controlNetwork();
	},
	init: 0,
	_controlNetwork: function(){		
		//Si hi ha internet carreguem la pantall i si no carreguem una pantalla d'avis'
		if(isNetwork()){
			$.index.open();	
		}else{
			var win = Alloy.createController('noInternet').getView();
			win.open();	
		}		
	},
	openCreateAccount: function(){
			
	        var win=Alloy.createController('createAccount', {parent: $, map: mapview}).getView();
			win.open();
	},	
	getAnuncis: function(){
							var url = "http://"+indexWindow.ip+"/rest/service/userService/getAnuncis?init="+indexWindow.init;
							var client = Ti.Network.createHTTPClient({
								// function called when the response data is available
								onload : function(e) {
									Titanium.API.info(this.responseText);					
									var data = this.responseText;
									var jdata = JSON.parse(data);
									
										indexWindow.init= indexWindow.init+20;										
										indexWindow.createScrollView(jdata);																			
								},
								// function called when an error occurs, including a timeout
								onerror : function(e) {
									Ti.UI.createAlertDialog({
										message : 'Error en el registre',
										ok : 'KO',
										title : 'El registre no s\'ha pogut finalitzar'
									}).show();
								},
								timeout : 10000 // in milliseconds
							});
							// Prepare the connection.
							client.open("GET", url);
							// Send the request.
							client.send();
	},
	refreshAnuncis:function(){
		$.mainList.removeAllChildren();
		indexWindow.init=0;
		indexWindow.getAnuncis();
	},
	searchAnuncis:function(){
		$.mainList.removeAllChildren();
		indexWindow.initSearch=0;
		indexWindow.searching=true;
		indexWindow.getSearchAnuncis();
	},
	createScrollView: function(json){
						var row = Ti.UI.createTableViewRow({
							id:'listRow',
							class:'listRow',
						});
						//
						var viewRow = Ti.UI.createView({
						  		id:'rowContainer',
						  		class:'rowContainer',
						});
						
						var viewTodos = Ti.UI.createView({
						  		id:'todos',
						  		class:'todos',
						});
						
						var viewFoto = Ti.UI.createView({
						  		id:'foto',
						  		class:'foto',
						});
						
						var viewtotm = Ti.UI.createView({
						  		id:'totm',
						  		class:'totm',
						});
						
						var viewCon = Ti.UI.createView({
						  		id:'con',
						  		class:'con',
						});
						
						var viewNews = Ti.UI.createView({
						  		id:'news',
						  		class:'news',
						});
						
						var viewGreyLine = Ti.UI.createView({
						  		id:'grayLine',
						  		class:'grayLine',
						});
						
						
						
						
						var intImage = 0, intImages = json.length, img;
						for (intImage = 0; intImage < intImages; intImage = intImage + 1) {
						    img = Ti.UI.createImageView({
						       id:'profilePic',
						       class:'profilePic',
						       image: json[intImage].path,
						    });
						    var image="";
						    if(json[intImage].estat =="NEW"){
						    	
						    }
						    var labeltitol = Ti.UI.createLabel({
						    	id:'profileName',
						    	class:'profileName',
						    	text:json[intImage].titol,
						    });		
						    var labeldescripcio = Ti.UI.createLabel({
						    	id:'timeAgo',
						    	class:'timeAgo',
						    	text:json[intImage].descripcio,
						    });	
						    var labelSit = Ti.UI.createLabel({
						    	id:'situacion',
						    	class:'situacion',
						    	text:json[intImage].titol,
						    });	
						    var labelPreu = Ti.UI.createLabel({
						    	id:'price',
						    	class:'price',
						    	text:json[intImage].preu,
						    });					    		
						   										
						    viewCon.add(labeltitol);
						    viewCon.add(labeldescripcio);
						    viewCon.add(labelSit);
						    viewCon.add(labelPreu);

							viewFoto.add(img);
						    
						    viewtotm.add(viewCon);
						    viewtotm.add(viewNews);
						    
						    viewTodos.add(viewFoto);						    
						    viewTodos.add(viewtotm);
						    viewTodos.add(viewGreyLine);
						    
						    viewRow.add(viewTodos);
						    $.mainList.add(viewRow);						 
						}						
						setTimeout(function(){
							 $.mainList.remove(labelLoading);
							 $.mainList.remove(imgLoading);				
							 loading=false;	
						},1000);									
	},
	createScrollViewSearch: function(json){
						
						var intImage = 0, intImages = json.length, img;
						for (intImage = 0; intImage < intImages; intImage = intImage + 1) {
						    img = Ti.UI.createImageView({
						        height: 96,
								image: json[intImage].name,
						        left: 8,
						        top: 8,
						        width: 96
						    });
						    var image="";
						    if(json[intImage].estat =="NEW"){
						    	
						    }
						    var label = Ti.UI.createLabel({
						    	text:json[intImage].titol+" "+json[intImage].estat+" Distance:"+parseFloat(json[intImage].distance).toFixed(2),
						    });						    												
						    $.view.add(label);
						    $.view.add(img);						 
						}						
						setTimeout(function(){
							$.view.remove(labelLoading);
							$.view.remove(imgLoading);				
							loading=false;	
						},1000);									
	},
	initLabelLoading: function(){
		return Ti.UI.createLabel({
						    	text:"LOADING..................................",
						  		});
	},
	initImageLoading: function(){
		
		return Ti.UI.createImageView({
						        height: 96,
								image: "/images/loading.gif",
						        left: 8,
						        top: 8,
						        width: 500
						    });
	},
	changeUserData: function(){
		var win=Alloy.createController('changeUserData').getView();
		win.open();		
	},
	logOut: function(){
		
		controlDB.deleteUser();
		var activity = Titanium.Android.currentActivity;
		activity.finish();
	},
	getSearchAnuncis: function(){
							
							var longitude = "";
							var latitude = "";
							Titanium.Geolocation.getCurrentPosition(function(e){
											
														            latitude = e.coords.latitude;
														            longitude = e.coords.longitude;
																													    
							});
							
							indexWindow.searching=true;
										
							var url = "http://"+indexWindow.ip+"/rest/service/userService/searchAnuncis?init="+indexWindow.initSearch+"&distance="+$.distance.value+"&lat="+latitude+"&lon="+longitude;
							var client = Ti.Network.createHTTPClient({
								// function called when the response data is available
								onload : function(e) {
									Titanium.API.info(this.responseText);					
									var data = this.responseText;
									var jdata = JSON.parse(data);
									
										indexWindow.initSearch= indexWindow.initSearch+jdata.length;										
										indexWindow.createScrollViewSearch(jdata);																			
								},
								// function called when an error occurs, including a timeout
								onerror : function(e) {
									Ti.UI.createAlertDialog({
										message : 'Error en el registre',
										ok : 'KO',
										title : 'El registre no s\'ha pogut finalitzar'
									}).show();
								},
								timeout : 10000 // in milliseconds
							});
							// Prepare the connection.
							client.open("GET", url);
							// Send the request.
							client.send();
	},
	getMapView: function(){
		return Titanium.Map.createView({
										    mapType: Titanium.Map.STANDARD_TYPE,
										    animate:true,
										    region: {latitude:39.30109620906199, longitude:-76.60234451293945, latitudeDelta:0.1, longitudeDelta:0.1},
										    regionFit:true,
										    userLocation:true,
										    visible: true,    
										});
	},
	geolocationInit: function(){
					//Get the current position and set it to the mapview
		Titanium.Geolocation.getCurrentPosition(function(e){

														        var region={
														            latitude: e.coords.latitude,
														            longitude: e.coords.longitude,
														            animate:true,
														            latitudeDelta:0.001,
														            longitudeDelta:0.001
															        };
        														mapview.setLocation(region);
        
														        var anotation = Titanium.Map.createAnnotation({
															                latitude : e.coords.latitude,
															                longitude : e.coords.longitude,
															                title : 'Situacio de l\'anunci',
															                subtitle : 'centre',
															                pincolor : Titanium.Map.ANNOTATION_PURPLE,
															                animate : true,
															                myid : 1
															            });
															    var anotation2 = Titanium.Map.createAnnotation({
															                latitude : e.coords.latitude,
															                longitude : e.coords.longitude,
															                title : 'you are here',
															                subtitle : 'centre',
															                pincolor : Titanium.Map.ANNOTATION_GREEN,
															                animate : true,
															                myid : 2
															            });
															 	var anotations = Array();
															 	anotations.push(anotation); 
															 	anotations.push(anotation2); 
            													mapview.addAnnotations(anotations);
            												
           														geo.setGeoPoint(e.coords.latitude,e.coords.longitude);
																mapview.addEventListener('regionChanged', function(e) {
																	
																		
																		var newAnotation = Titanium.Map.createAnnotation({
																									                 latitude : e.latitude,
																									                 longitude : e.longitude,
																									                 title : 'you aqsqsqsqre here',
																									                 subtitle : 'centre',
																									                 pincolor : Titanium.Map.ANNOTATION_PURPLE,
																									                 animate : true,
																									                 myid : 1
																									             });
																		mapview.removeAllAnnotations();				
																		
																		mapview.addAnnotation(newAnotation);
																		mapview.addAnnotation(anotation2);	
																										            
																		geo.setGeoPoint(e.latitude,e.longitude);													            				
																		
																					
																});
							});
		
	},		
};

//Params per la geolocalitzacio
Titanium.Geolocation.purpose = "Recieve ggggUser Location";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
// Set Distance filter. This dictates how often an event fires based on the distance the device moves. This value is in meters.
Titanium.Geolocation.Android.distanceFilter = 10;
//set the mapview with the current location
var mapview = indexWindow.getMapView();

Titanium.Geolocation.addEventListener('location',function(){			
			
				indexWindow.geolocationInit();	
						
		});

//Accions amb la base de dates
utilsDB._init($,mapview);

//Inicialitzem el server i el controlador de la pantalla
indexWindow._init("192.168.1.70:8080/AppStore");

//carreguem anunicis a l'scroll view
indexWindow.getAnuncis();

//Afegim buton de registre
$.viewbuttons.add(buttonRegistre);

//Button del facebook
$.viewbuttons.add(button);

//Si l'usuari esta logat posem boton per penjar anuncis i treiem els de registre
utilsDB.addAnunciButton();

//Boto hidden que s'utilitza per refrescar el llistat d'anuncis
$.refreshscrollview.hide();


//codi per el control de l'scroll quan arribem al final carrega més anuncis
//inidica si esta carrregant imatges
var loading=false;

var labelLoading = indexWindow.initLabelLoading();

var imgLoading = indexWindow.initImageLoading();

//Afegim listener a l'scroll per al final cargar mes anuncis
$.viewAnuncis.addEventListener('scroll', function (e) {
    
    if(e.y>=$.view.getRect().height-700 && loading==false){
    	
    	loading = true;    										
		$.view.add(labelLoading);				
		$.view.add(imgLoading);		
		if(indexWindow.searching==true){
				indexWindow.getSearchAnuncis();
		}else{
				indexWindow.getAnuncis();		
		}	
				
    	
    }    
});
