var args = arguments[0] || {};
var parent = args.parent;

var geoPoint = {
	latitude: "",
	longitude: "",
};

var createAccount = {
	validateEmail: function(email){
	    var re = /\S+@\S+\.\S+/;
    	return re.test(email);
	},
	insertUser : function() {	
		if(!createAccount.validateEmail($.email.value)){
			createAccount.showMessage("L' email no és correcte","KO","email");
		}else{
			if($.repeatpassword.value == $.password.value){
				server.insertUser( $.userName.value, $.password.value, geoPoint.latitude,geoPoint.longitude);
				principal.setUser($.userName.value);
				parent.viewbuttons.remove(button);		
				$.createAccount.close();	
			}else{
				createAccount.showMessage("Els passwords no són iguals","KO","password");
			}	
		}		
		
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
	setGeoPoint: function(lat,lon){
		geoPoint.latitude= lat;
		geoPoint.longitude = lon;
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
															                title : 'You are here',
															                subtitle : 'centre',
															                pincolor : Titanium.Map.ANNOTATION_PURPLE,
															                animate : true,
															                myid : 1
															            });
            													mapview.addAnnotation(anotation);
           														createAccount.setGeoPoint(e.coords.latitude,e.coords.longitude);
																mapview.addEventListener('regionChanged', function(e) {
																	
																		
																		var newAnotation = Titanium.Map.createAnnotation({
																									                 latitude : e.latitude,
																									                 longitude : e.longitude,
																									                 title : 'you are here',
																									                 subtitle : 'centre',
																									                 pincolor : Titanium.Map.ANNOTATION_PURPLE,
																									                 animate : true,
																									                 myid : 1
																									             });
																		mapview.removeAllAnnotations();				
																		
																		mapview.addAnnotation(newAnotation);	
																										            
																		createAccount.setGeoPoint(e.latitude,e.longitude);													            				
																		
																					
																});
							});
		
	},
	showMessage: function(message,ok,title){
		Ti.UI.createAlertDialog({
			message : message,
			ok : ok,
			title : title
		}).show();
		
	},
	close : function(){
		$.createAccount.close();
	},
	
};

//Params per la geolocalitzacio
Titanium.Geolocation.purpose = "Recieve User Location";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
// Set Distance filter. This dictates how often an event fires based on the distance the device moves. This value is in meters.
Titanium.Geolocation.distanceFilter = 10;
//set the mapview with the current location
var mapview = createAccount.getMapView();

$.mapView.add(mapview);
 
Titanium.Geolocation.addEventListener('location',function(){
	createAccount.geolocationInit();
});


$.createAccount.backgroundColor="#CCCCCC";

$.createAccount.open();
$.mybut.setTitle('Save');
