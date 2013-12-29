function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addAnunci";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addAnunci = Ti.UI.createWindow({
        id: "addAnunci"
    });
    $.__views.addAnunci && $.addTopLevelView($.__views.addAnunci);
    $.__views.closeCreateAnunci = Ti.UI.createButton({
        id: "closeCreateAnunci",
        top: "10",
        title: "X",
        width: Ti.UI.SIZE
    });
    $.__views.addAnunci.add($.__views.closeCreateAnunci);
    try {
        $.__views.closeCreateAnunci.addEventListener("click", anunci.close);
    } catch (e) {
        __defers["$.__views.closeCreateAnunci!click!anunci.close"] = true;
    }
    $.__views.titol = Ti.UI.createTextField({
        id: "titol",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.addAnunci.add($.__views.titol);
    $.__views.descripcio = Ti.UI.createTextField({
        id: "descripcio",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "70",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.addAnunci.add($.__views.descripcio);
    $.__views.preu = Ti.UI.createTextField({
        id: "preu",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "140",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.addAnunci.add($.__views.preu);
    $.__views.saveAnunci = Ti.UI.createButton({
        id: "saveAnunci",
        top: "190",
        left: "50",
        width: Ti.UI.SIZE
    });
    $.__views.addAnunci.add($.__views.saveAnunci);
    try {
        $.__views.saveAnunci.addEventListener("click", anunci.save);
    } catch (e) {
        __defers["$.__views.saveAnunci!click!anunci.save"] = true;
    }
    $.__views.addFotoFromGaleria = Ti.UI.createButton({
        id: "addFotoFromGaleria",
        left: "150",
        top: "190",
        layout: "100",
        width: Ti.UI.SIZE
    });
    $.__views.addAnunci.add($.__views.addFotoFromGaleria);
    try {
        $.__views.addFotoFromGaleria.addEventListener("click", anunci.addFotoFromGalery);
    } catch (e) {
        __defers["$.__views.addFotoFromGaleria!click!anunci.addFotoFromGalery"] = true;
    }
    $.__views.addFotoFromCamera = Ti.UI.createButton({
        id: "addFotoFromCamera",
        left: "270",
        top: "190",
        layout: "100",
        width: Ti.UI.SIZE
    });
    $.__views.addAnunci.add($.__views.addFotoFromCamera);
    try {
        $.__views.addFotoFromCamera.addEventListener("click", anunci.addFotoFromCamera);
    } catch (e) {
        __defers["$.__views.addFotoFromCamera!click!anunci.addFotoFromCamera"] = true;
    }
    $.__views.fotosView = Ti.UI.createView({
        id: "fotosView",
        top: "300",
        height: "150",
        width: Ti.UI.SIZE,
        backgroundColor: "#CCCCCC",
        layout: "horizontal"
    });
    $.__views.addAnunci.add($.__views.fotosView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var parent = args.parent;
    var anunci = {
        _init: function(ip) {
            anunci.id = "null";
            anunci.ipserver = ip;
        },
        save: function() {
            var url = "http://" + server.ip + "/rest/service/userService/saveAnunci?titol=" + $.titol.value + "&descripcio=" + $.descripcio.value + "&preu=" + $.preu.value + "&idAnunci=" + anunci.id;
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
        close: function() {
            anunci.id = "null";
            parent.refreshscrollview.fireEvent("click");
            $.addAnunci.close();
        },
        addFotoFromGalery: function() {
            Titanium.Media.openPhotoGallery({
                success: function(event) {
                    Ti.API.info("success! event: " + JSON.stringify(event));
                    var image = event.media;
                    var xhr = Titanium.Network.createHTTPClient();
                    xhr.onerror = function(e) {
                        Ti.API.info("IN ERROR " + e.error);
                    };
                    xhr.onload = function() {
                        Ti.API.info("IN ONLOAD......................... " + this.responseText + "......" + this.status + " readyState " + this.readyState);
                        var data = this.responseText;
                        var jdata = JSON.parse(data);
                        "ok" == jdata.ok && (anunci.id = jdata.id);
                    };
                    xhr.onsendstream = function() {};
                    xhr.setTimeout(1e4);
                    var user = _executionsDB.getUser();
                    xhr.open("POST", "http://" + anunci.ipserver + "/rest/service/userService/uploadFoto?idAnunci=" + anunci.id + "&idUser=" + user.id);
                    xhr.setRequestHeader("contentType", "multipart/form-data");
                    xhr.send({
                        file: image
                    });
                    var imageView = Ti.UI.createImageView({
                        width: 100,
                        height: 100,
                        image: event.media
                    });
                    Ti.API.info("IN ONLOAD.....................................SENDED ");
                    $.fotosView.add(imageView);
                },
                cancel: function() {},
                error: function() {},
                allowImageEditing: true
            });
        },
        addFotoFromCamera: function() {
            Titanium.Media.showCamera({
                success: function(event) {
                    Ti.API.debug("Our type was: " + event.mediaType);
                    if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                        var imageView = Ti.UI.createImageView({
                            width: 100,
                            height: 100,
                            image: event.media
                        });
                        Ti.API.info("success! event: " + JSON.stringify(event));
                        var image = event.media;
                        var xhr = Titanium.Network.createHTTPClient();
                        xhr.onerror = function(e) {
                            Ti.API.info("IN ERROR " + e.error);
                        };
                        xhr.onload = function() {
                            Ti.API.info("IN ONLOAD......................... " + this.responseText + "......" + this.status + " readyState " + this.readyState);
                            var data = this.responseText;
                            var jdata = JSON.parse(data);
                            "ok" == jdata.ok && (anunci.id = jdata.id);
                        };
                        xhr.onsendstream = function() {};
                        xhr.setTimeout(1e4);
                        var user = _executionsDB.getUser();
                        xhr.open("POST", "http://" + anunci.ipserver + "/rest/service/userService/uploadFoto?idAnunci=" + anunci.id + "&idUser=" + user.id);
                        xhr.setRequestHeader("contentType", "multipart/form-data");
                        user = _executionsDB.getUser();
                        xhr.send({
                            file: image
                        });
                        $.fotosView.add(imageView);
                    } else alert("got the wrong type back =" + event.mediaType);
                },
                cancel: function() {},
                error: function(error) {
                    var a = Titanium.UI.createAlertDialog({
                        title: "Camera"
                    });
                    error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
                    a.show();
                },
                saveToPhotoGallery: true,
                allowEditing: true,
                mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
            });
        }
    };
    var scrollFotosAnunci = Ti.UI.createScrollView({
        contentHeight: 100,
        contentWidth: Ti.UI.SIZE,
        height: 120,
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: false,
        width: Ti.UI.FILL
    });
    scrollFotosAnunci.addEventListener("scroll", function(e) {
        var tolerance = 50;
        Ti.API.info("near bottom", view.getRect().height - e.y <= scroll.getRect().height + tolerance);
    });
    $.fotosView.add(scrollFotosAnunci);
    anunci._init("192.168.1.74:8080/AppStore");
    $.addAnunci.backgroundColor = "#CCCCCC";
    $.saveAnunci.setTitle("guarda");
    $.addFotoFromGaleria.setTitle("add Galeria");
    $.addFotoFromCamera.setTitle("add Camera");
    $.addAnunci.open();
    __defers["$.__views.closeCreateAnunci!click!anunci.close"] && $.__views.closeCreateAnunci.addEventListener("click", anunci.close);
    __defers["$.__views.saveAnunci!click!anunci.save"] && $.__views.saveAnunci.addEventListener("click", anunci.save);
    __defers["$.__views.addFotoFromGaleria!click!anunci.addFotoFromGalery"] && $.__views.addFotoFromGaleria.addEventListener("click", anunci.addFotoFromGalery);
    __defers["$.__views.addFotoFromCamera!click!anunci.addFotoFromCamera"] && $.__views.addFotoFromCamera.addEventListener("click", anunci.addFotoFromCamera);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;