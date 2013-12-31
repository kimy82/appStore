function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.userLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        top: 5,
        right: 15,
        id: "userLabel"
    });
    $.__views.index.add($.__views.userLabel);
    try {
        $.__views.userLabel.addEventListener("click", indexWindow.changeUserData);
    } catch (e) {
        __defers["$.__views.userLabel!click!indexWindow.changeUserData"] = true;
    }
    $.__views.viewbuttons = Ti.UI.createView({
        height: "300",
        layout: "horizontal",
        top: "0",
        id: "viewbuttons"
    });
    $.__views.index.add($.__views.viewbuttons);
    $.__views.viewAnuncis = Ti.UI.createScrollView({
        height: "700",
        width: Ti.UI.FILL,
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "false",
        contentHeight: "auto",
        contentWidth: "auto",
        top: "300",
        id: "viewAnuncis"
    });
    $.__views.index.add($.__views.viewAnuncis);
    $.__views.view = Ti.UI.createView({
        id: "view",
        backgroundColor: "#336699",
        borderRadius: "10",
        top: "10",
        layout: "vertical",
        height: "auto",
        width: "1000"
    });
    $.__views.viewAnuncis.add($.__views.view);
    $.__views.refreshscrollview = Ti.UI.createButton({
        title: "Foobar",
        top: 0,
        width: Ti.UI.SIZE,
        id: "refreshscrollview"
    });
    $.__views.index.add($.__views.refreshscrollview);
    try {
        $.__views.refreshscrollview.addEventListener("click", indexWindow.refreshAnuncis);
    } catch (e) {
        __defers["$.__views.refreshscrollview!click!indexWindow.refreshAnuncis"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.include("/js/md5.js");
    Ti.include("/js/principal.js");
    Ti.include("/js/facebook.js");
    Ti.include("/js/server.js");
    server._init("192.168.1.74:8080/AppStore");
    var buttonRegistre = Titanium.UI.createButton({
        title: "Registra 't",
        top: 10,
        width: Ti.UI.SIZE,
        height: 50,
        id: "buttonRegistre"
    });
    buttonRegistre.addEventListener("click", function() {
        indexWindow.openCreateAccount();
    });
    var buttonLogout = Titanium.UI.createButton({
        title: "Log out",
        top: 10,
        right: 10,
        width: Ti.UI.SIZE,
        height: 50,
        id: "buttonRegistre"
    });
    buttonLogout.addEventListener("click", function() {
        indexWindow.logOut();
    });
    principal._init($, buttonRegistre, button, buttonLogout);
    Ti.include("/js/dataBase.js");
    Ti.include("/js/network.js");
    utilsDB._init($);
    var indexWindow = {
        _init: function(ip) {
            indexWindow.ip = ip;
            indexWindow.init = 0;
            indexWindow._controlNetwork();
        },
        init: 0,
        _controlNetwork: function() {
            if (isNetwork()) $.index.open(); else {
                var win = Alloy.createController("noInternet").getView();
                win.open();
            }
        },
        openCreateAccount: function() {
            var win = Alloy.createController("createAccount", {
                parent: $
            }).getView();
            win.open();
        },
        getAnuncis: function() {
            var url = "http://" + indexWindow.ip + "/rest/service/userService/getAnuncis?init=" + indexWindow.init;
            var client = Ti.Network.createHTTPClient({
                onload: function() {
                    Titanium.API.info(this.responseText);
                    var data = this.responseText;
                    var jdata = JSON.parse(data);
                    indexWindow.init = indexWindow.init + 20;
                    indexWindow.createScrollView(jdata);
                },
                onerror: function() {
                    Ti.UI.createAlertDialog({
                        message: "Error en el registre",
                        ok: "KO",
                        title: "El registre no s'ha pogut finalitzar"
                    }).show();
                },
                timeout: 1e4
            });
            client.open("GET", url);
            client.send();
        },
        refreshAnuncis: function() {
            $.view.removeAllChildren();
            indexWindow.init = 0;
            indexWindow.getAnuncis();
        },
        createScrollView: function(json) {
            var img, intImage = 0, intImages = json.length;
            for (intImage = 0; intImages > intImage; intImage += 1) {
                img = Ti.UI.createImageView({
                    height: 96,
                    image: json[intImage].path,
                    left: 8,
                    top: 8,
                    width: 96
                });
                var label = Ti.UI.createLabel({
                    text: json[intImage].titol
                });
                $.view.add(label);
                $.view.add(img);
            }
            setTimeout(function() {
                $.view.remove(labelLoading);
                $.view.remove(imgLoading);
                loading = false;
            }, 1e3);
        },
        initLabelLoading: function() {
            return Ti.UI.createLabel({
                text: "LOADING.................................."
            });
        },
        initImageLoading: function() {
            return Ti.UI.createImageView({
                height: 96,
                image: "/images/loading.gif",
                left: 8,
                top: 8,
                width: 500
            });
        },
        changeUserData: function() {
            var win = Alloy.createController("changeUserData").getView();
            win.open();
        },
        logOut: function() {
            controlDB.deleteUser();
            var activity = Titanium.Android.currentActivity;
            activity.finish();
        }
    };
    indexWindow._init("192.168.1.74:8080/AppStore");
    indexWindow.getAnuncis();
    $.viewbuttons.add(buttonRegistre);
    $.viewbuttons.add(button);
    utilsDB.addAnunciButton();
    $.refreshscrollview.hide();
    var loading = false;
    var labelLoading = indexWindow.initLabelLoading();
    var imgLoading = indexWindow.initImageLoading();
    $.viewAnuncis.addEventListener("scroll", function(e) {
        if (e.y >= $.view.getRect().height - 700 && false == loading) {
            loading = true;
            $.view.add(labelLoading);
            $.view.add(imgLoading);
            indexWindow.getAnuncis();
        }
    });
    __defers["$.__views.userLabel!click!indexWindow.changeUserData"] && $.__views.userLabel.addEventListener("click", indexWindow.changeUserData);
    __defers["$.__views.refreshscrollview!click!indexWindow.refreshAnuncis"] && $.__views.refreshscrollview.addEventListener("click", indexWindow.refreshAnuncis);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;