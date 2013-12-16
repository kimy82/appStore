Ti.include("/js/md5.js");
Ti.include("/js/principal.js");
principal._init($);
Ti.include("/js/facebook.js");
Ti.include("/js/server.js");

//Button del facebook
$.index.add(button);


Ti.include("/js/dataBase.js");
$.createAccount.setTitle('Registra\'t');
Ti.include("/js/network.js");
if(isNetwork()){
	$.index.open();	
}else{
	var win = Alloy.createController('noInternet').getView();
	win.open();	
}
var indexWindow ={
	openCreateAccount: function(){
			
	        var win=Alloy.createController('createAccount', {parent: $}).getView();
			win.open();
	},	
};


