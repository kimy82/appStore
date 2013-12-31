var server = {
	_init: function(ip){
		server.ip=ip;
		server.init=0;
	},
	insertUser : function(userName,password,lat,lon) {
		var url = "http://"+server.ip+"/rest/service/userService/insert?user=" + userName+ "&pass=" + md5(password)+"&lat="+lat+"&lon="+lon;
		var client = Ti.Network.createHTTPClient({
			// function called when the response data is available
			onload : function(e) {
				Titanium.API.info(this.responseText);

				var data = this.responseText;
				var jdata = JSON.parse(data);
				if (jdata.ok == 'ok') {		
					//Guarda user a la BD del device			
					controlDB.saveUser(jdata.id,userName, md5(password));
					utilsDB.addAnunciButton();
					Ti.UI.createAlertDialog({
						message : 'Registra\'t',
						ok : 'Okay',
						title : 'La teva compte s\'ha creat'
					}).show();

				}
			},
			// function called when an error occurs, including a timeout
			onerror : function(e) {
				Ti.API.debug(e.error);
				Ti.UI.createAlertDialog({
					message : 'Error en el registre',
					ok : 'KO',
					title : 'El registre no s\'ha pogut finalitzar'
				}).show();
			},
			timeout : 5000 // in milliseconds
		});
		// Prepare the connection.
		client.open("GET", url);
		// Send the request.
		client.send();
	},	
};