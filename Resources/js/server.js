var server = {
    _init: function(ip) {
        server.ip = ip;
    },
    insertUser: function(userName, password) {
        var url = "http://" + server.ip + "/rest/service/userService/insert?user=" + userName + "&pass=" + md5(password);
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Titanium.API.info(this.responseText);
                var data = this.responseText;
                var jdata = JSON.parse(data);
                if ("ok" == jdata.ok) {
                    controlDB.saveUser(jdata.id, userName, md5(password));
                    utilsDB.addAnunciButton();
                    Ti.UI.createAlertDialog({
                        message: "Registra't",
                        ok: "Okay",
                        title: "La teva compte s'ha creat"
                    }).show();
                }
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                Ti.UI.createAlertDialog({
                    message: "Error en el registre",
                    ok: "KO",
                    title: "El registre no s'ha pogut finalitzar"
                }).show();
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    },
    saveAnunci: function(titol, descripcio, preu, idAnunci) {
        var url = "http://" + server.ip + "/rest/service/userService/saveAnunci?titol=" + titol + "&descripcio=" + descripcio + "&preu=" + preu + "&idAnunci=" + idAnunci;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Titanium.API.info(this.responseText);
                var data = this.responseText;
                var jdata = JSON.parse(data);
                if ("ok" == jdata.ok) {
                    Ti.UI.createAlertDialog({
                        message: "Guardat",
                        ok: "Okay",
                        title: "L'anunci s'ha guardat"
                    }).show();
                    anunci.id = jdata.id;
                } else Ti.UI.createAlertDialog({
                    message: "Error en el registre",
                    ok: "KO",
                    title: "Anunci no s'ha pogut finalitzar"
                }).show();
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                Ti.UI.createAlertDialog({
                    message: "Error en el registre",
                    ok: "KO",
                    title: "El registre no s'ha pogut finalitzar"
                }).show();
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    },
    getAnuncisForINdex: function(init) {
        var url = "http://" + server.ip + "/rest/service/userService/getAnuncis?init=" + init;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Titanium.API.info(this.responseText);
                var data = this.responseText;
                var jdata = JSON.parse(data);
                if ("ok" == jdata.ok) {
                    Ti.UI.createAlertDialog({
                        message: "Guardat",
                        ok: "Okay",
                        title: "L'anunci s'ha guardat"
                    }).show();
                    anunci.id = jdata.id;
                } else Ti.UI.createAlertDialog({
                    message: "Error en el registre",
                    ok: "KO",
                    title: "Anunci no s'ha pogut finalitzar"
                }).show();
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                Ti.UI.createAlertDialog({
                    message: "Error en el registre",
                    ok: "KO",
                    title: "El registre no s'ha pogut finalitzar"
                }).show();
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
};