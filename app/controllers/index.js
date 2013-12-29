Ti.include("/js/md5.js");
Ti.include("/js/principal.js");
Ti.include("/js/facebook.js");
Ti.include("/js/server.js"); 
server._init("192.168.1.74:8080/AppStore");

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

principal._init($,buttonRegistre,button);

Ti.include("/js/dataBase.js");
Ti.include("/js/network.js");

//Accions amb la base de dates
utilsDB._init($);


var indexWindow ={
	_init: function(ip){
		indexWindow.ip=ip;
		indexWindow.init=0;
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
			
	        var win=Alloy.createController('createAccount', {parent: $}).getView();
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
		$.view.removeAllChildren();
		indexWindow.init=0;
		indexWindow.getAnuncis();
	},
	createScrollView: function(json){
						
						var intImage = 0, intImages = json.length, img;
						for (intImage = 0; intImage < intImages; intImage = intImage + 1) {
						    img = Ti.UI.createImageView({
						        height: 96,
								image: json[intImage].path,
						        left: 8,
						        top: 8,
						        width: 96
						    });
						    var label = Ti.UI.createLabel({
						    	text:json[intImage].titol,
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
};

//Inicialitzem el server i el controlador de la pantalla
indexWindow._init("192.168.1.74:8080/AppStore");

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
    	indexWindow.getAnuncis();
    }    
});
