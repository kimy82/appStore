var server = {
    _init: function(ip) {
        server.ip = ip;
        server.init = 0;
        server.userID = "";
    },
    setParent: function(parent) {
        server.parent = parent;
    },
    insertUser: function(userName, password, email, lat, lon) {
        var url = "";
        if ("facebook" == password) var url = "http://" + server.ip + "/rest/service/userService/insert?user=" + userName + "&pass=facebook&email=" + email + "&lat=" + lat + "&lon=" + lon; else var url = "http://" + server.ip + "/rest/service/userService/insert?user=" + userName + "&pass=" + md5(password) + "&email=" + email + "&lat=" + lat + "&lon=" + lon;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var data = this.responseText;
                var jdata = JSON.parse(data);
                if ("ok" == jdata.ok) {
                    server.userID = jdata.id;
                    controlDB.saveUser(jdata.id, userName, md5(password));
                    setTimeout(function() {
                        utilsDB.addAnunciButton();
                    }, 1e3);
                    server.parent.registerDevice();
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
            timeout: 6e4
        });
        client.open("GET", url);
        client.send();
    },
    sentNotification: function() {
        var url = "http://" + server.ip + "/rest/service/userService/sentNotification?userId=" + server.userID;
        var client = Ti.Network.createHTTPClient({
            onload: function() {},
            onerror: function(e) {
                Ti.API.debug(e.error);
                Ti.UI.createAlertDialog({
                    message: "Error en el registre",
                    ok: "KO",
                    title: "El registre no s'ha pogut finalitzar"
                }).show();
            },
            timeout: 9e4
        });
        client.open("GET", url);
        client.send();
    }
};