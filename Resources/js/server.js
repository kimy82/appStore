var server = {
    _init: function(ip) {
        server.ip = ip;
        server.init = 0;
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
    }
};