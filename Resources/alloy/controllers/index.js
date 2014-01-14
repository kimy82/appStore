function Controller() {
    function testclick() {
        alert("er");
    }
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
        navBarHidden: true,
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.userLabel = Ti.UI.createLabel({
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
    $.__views.distance = Ti.UI.createTextField({
        id: "distance"
    });
    $.__views.viewbuttons.add($.__views.distance);
    $.__views.search = Ti.UI.createButton({
        id: "search",
        title: "busca"
    });
    $.__views.viewbuttons.add($.__views.search);
    try {
        $.__views.search.addEventListener("click", indexWindow.searchAnuncis);
    } catch (e) {
        __defers["$.__views.search!click!indexWindow.searchAnuncis"] = true;
    }
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "white",
        separatorStyle: "NONE",
        height: "60%",
        top: "25%",
        bottom: "15%",
        width: Ti.UI.FILL,
        id: "mainList"
    });
    $.__views.index.add($.__views.mainList);
    $.__views.footer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "15%",
        bottom: 0,
        backgroundColor: "#4cd964",
        layout: "horizontal",
        id: "footer"
    });
    $.__views.index.add($.__views.footer);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId3"
    });
    $.__views.footer.add($.__views.__alloyId3);
    $.__views.icone = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        image: "/icone.png",
        id: "icone"
    });
    $.__views.__alloyId3.add($.__views.icone);
    testclick ? $.__views.icone.addEventListener("click", testclick) : __defers["$.__views.icone!click!testclick"] = true;
    $.__views.__alloyId4 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId4"
    });
    $.__views.footer.add($.__views.__alloyId4);
    $.__views.icone1 = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        image: "/icone.png",
        id: "icone1"
    });
    $.__views.__alloyId4.add($.__views.icone1);
    testclick ? $.__views.icone1.addEventListener("click", testclick) : __defers["$.__views.icone1!click!testclick"] = true;
    $.__views.__alloyId5 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId5"
    });
    $.__views.footer.add($.__views.__alloyId5);
    $.__views.icone2 = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        image: "/icone.png",
        id: "icone2"
    });
    $.__views.__alloyId5.add($.__views.icone2);
    testclick ? $.__views.icone2.addEventListener("click", testclick) : __defers["$.__views.icone2!click!testclick"] = true;
    $.__views.viewrefreshscrollview = Ti.UI.createView({
        height: "10",
        layout: "horizontal",
        top: "0",
        id: "viewrefreshscrollview"
    });
    $.__views.index.add($.__views.viewrefreshscrollview);
    $.__views.refreshscrollview = Ti.UI.createButton({
        id: "refreshscrollview"
    });
    $.__views.viewrefreshscrollview.add($.__views.refreshscrollview);
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
    server._init("192.168.1.72:8080/AppStore");
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
    var indexWindow = {
        _init: function(ip) {
            indexWindow.ip = ip;
            indexWindow.init = 0;
            indexWindow.initSearch = 0;
            indexWindow.numAnuncis = 0;
            indexWindow.searching = false;
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
                parent: $,
                map: mapview
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
            loading = true;
            var rows = [];
            rows.push(rowLoading);
            $.mainList.setData(rows);
            indexWindow.initSearch = 0;
            indexWindow.searching = false;
            indexWindow.init = 0;
            indexWindow.numAnuncis = 1;
            indexWindow.getAnuncis();
        },
        searchAnuncis: function() {
            loading = true;
            indexWindow.initSearch = 0;
            indexWindow.numAnuncis = 0;
            indexWindow.searching = true;
            var rows = [];
            rows.push(rowLoading);
            $.mainList.setData(rows);
            indexWindow.numAnuncis++;
            indexWindow.getSearchAnuncis();
        },
        createScrollView: function(json) {
            var intImage = 0, intImages = json.length;
            if (loading) if (0 == indexWindow.numAnuncis) $.mainList.deleteRow(0); else {
                $.mainList.deleteRow(indexWindow.numAnuncis - 1);
                indexWindow.numAnuncis--;
            }
            for (intImage = 0; intImages > intImage; intImage += 1) {
                var row = Ti.UI.createTableViewRow({
                    id: "listRow",
                    height: "107dp",
                    selectionStyle: "NONE"
                });
                var viewRow = Ti.UI.createView({
                    id: "rowContainer",
                    height: "107dp",
                    width: Ti.UI.FILL,
                    backgroundColor: "#fff",
                    layout: "horizontal"
                });
                var viewTodos = Ti.UI.createView({
                    id: "todos",
                    width: Ti.UI.FILL,
                    left: 0
                });
                var viewFoto = Ti.UI.createView({
                    id: "foto",
                    width: "107dp",
                    left: 0
                });
                viewFoto.backgroundColor = "NEW" == json[intImage].estat ? "#4cd964" : "NORMAL" == json[intImage].estat ? "#CCCCCC" : "red";
                var viewtotm = Ti.UI.createView({
                    id: "totm",
                    width: Ti.UI.FILL,
                    left: "107dp"
                });
                var viewCon = Ti.UI.createView({
                    id: "con",
                    left: 0,
                    width: "99%"
                });
                var viewNews = Ti.UI.createView({
                    id: "news",
                    width: "1%",
                    right: 0,
                    backgroundColor: "#4cd964"
                });
                var viewGreyLine = Ti.UI.createView({
                    id: "grayLine"
                });
                var img = Ti.UI.createImageView({
                    id: "profilePic",
                    image: json[intImage].name,
                    width: Ti.UI.FILL,
                    width: "107dp"
                });
                var labeltitol = Ti.UI.createLabel({
                    id: "profileName",
                    text: json[intImage].titol,
                    top: 5,
                    left: 10,
                    color: "#333333",
                    font: {
                        fontSize: "26dp",
                        fontFamily: "RobotoCondensed-Bold"
                    }
                });
                var labeldescripcio = Ti.UI.createLabel({
                    id: "timeAgo",
                    text: json[intImage].descripcio,
                    top: 28,
                    left: 10,
                    color: "#8e8e93",
                    font: {
                        fontSize: "14dp",
                        fontFamily: "Roboto-Light"
                    }
                });
                var labelSit = Ti.UI.createLabel({
                    id: "situacion",
                    text: "distancia: " + parseFloat(json[intImage].distance).toFixed(2),
                    bottom: 30,
                    left: 10,
                    color: "#8e8e93",
                    font: {
                        fontSize: "14dp",
                        fontFamily: "Roboto-Light"
                    }
                });
                var labelPreu = Ti.UI.createLabel({
                    id: "price",
                    text: json[intImage].preu + " €",
                    bottom: 5,
                    left: 10,
                    color: "#007aff",
                    font: {
                        fontSize: "15dp",
                        fontFamily: "RobotoCondensed-Bold"
                    }
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
                row.add(viewRow);
                indexWindow.numAnuncis++;
                $.mainList.appendRow(row);
            }
            setTimeout(function() {
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
        },
        getSearchAnuncis: function() {
            var longitude = "";
            var latitude = "";
            Titanium.Geolocation.getCurrentPosition(function(e) {
                latitude = e.coords.latitude;
                longitude = e.coords.longitude;
            });
            indexWindow.searching = true;
            var url = "http://" + indexWindow.ip + "/rest/service/userService/searchAnuncis?init=" + indexWindow.initSearch + "&distance=" + $.distance.value + "&lat=" + latitude + "&lon=" + longitude;
            var client = Ti.Network.createHTTPClient({
                onload: function() {
                    Titanium.API.info(this.responseText);
                    var data = this.responseText;
                    var jdata = JSON.parse(data);
                    indexWindow.initSearch = indexWindow.initSearch + jdata.length;
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
        getMapView: function() {
            return Titanium.Map.createView({
                mapType: Titanium.Map.STANDARD_TYPE,
                animate: true,
                region: {
                    latitude: 39.30109620906199,
                    longitude: -76.60234451293945,
                    latitudeDelta: .1,
                    longitudeDelta: .1
                },
                regionFit: true,
                userLocation: true,
                visible: true
            });
        },
        geolocationInit: function() {
            Titanium.Geolocation.getCurrentPosition(function(e) {
                var region = {
                    latitude: e.coords.latitude,
                    longitude: e.coords.longitude,
                    animate: true,
                    latitudeDelta: .001,
                    longitudeDelta: .001
                };
                mapview.setLocation(region);
                var anotation = Titanium.Map.createAnnotation({
                    latitude: e.coords.latitude,
                    longitude: e.coords.longitude,
                    title: "Situacio de l'anunci",
                    subtitle: "centre",
                    pincolor: Titanium.Map.ANNOTATION_PURPLE,
                    animate: true,
                    myid: 1
                });
                var anotation2 = Titanium.Map.createAnnotation({
                    latitude: e.coords.latitude,
                    longitude: e.coords.longitude,
                    title: "you are here",
                    subtitle: "centre",
                    pincolor: Titanium.Map.ANNOTATION_GREEN,
                    animate: true,
                    myid: 2
                });
                var anotations = Array();
                anotations.push(anotation);
                anotations.push(anotation2);
                mapview.addAnnotations(anotations);
                geo.setGeoPoint(e.coords.latitude, e.coords.longitude);
                mapview.addEventListener("regionChanged", function(e) {
                    var newAnotation = Titanium.Map.createAnnotation({
                        latitude: e.latitude,
                        longitude: e.longitude,
                        title: "you aqsqsqsqre here",
                        subtitle: "centre",
                        pincolor: Titanium.Map.ANNOTATION_PURPLE,
                        animate: true,
                        myid: 1
                    });
                    mapview.removeAllAnnotations();
                    mapview.addAnnotation(newAnotation);
                    mapview.addAnnotation(anotation2);
                    geo.setGeoPoint(e.latitude, e.longitude);
                });
            });
        }
    };
    Titanium.Geolocation.purpose = "Recieve ggggUser Location";
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.Android.distanceFilter = 10;
    var mapview = indexWindow.getMapView();
    Titanium.Geolocation.addEventListener("location", function() {
        indexWindow.geolocationInit();
    });
    utilsDB._init($, mapview);
    indexWindow._init("192.168.1.72:8080/AppStore");
    $.viewbuttons.add(buttonRegistre);
    $.viewbuttons.add(button);
    utilsDB.addAnunciButton();
    $.viewrefreshscrollview.hide();
    var loading = false;
    var labelLoading = indexWindow.initLabelLoading();
    var imgLoading = indexWindow.initImageLoading();
    var rowLoading = Ti.UI.createTableViewRow({
        id: "listRow",
        "class": "listRow"
    });
    rowLoading.add(labelLoading);
    rowLoading.add(imgLoading);
    indexWindow.getAnuncis();
    var isAndroid = true;
    $.mainList.addEventListener("scroll", function(evt) {
        if (isAndroid && evt.totalItemCount < evt.firstVisibleItem + evt.visibleItemCount + 3 && !loading || !isAndroid && evt.contentOffset.y + evt.size.height + 100 > evt.contentSize.height && !loading) {
            loading = true;
            $.mainList.appendRow(rowLoading);
            indexWindow.numAnuncis++;
            true == indexWindow.searching ? indexWindow.getSearchAnuncis() : indexWindow.getAnuncis();
        }
    });
    __defers["$.__views.userLabel!click!indexWindow.changeUserData"] && $.__views.userLabel.addEventListener("click", indexWindow.changeUserData);
    __defers["$.__views.search!click!indexWindow.searchAnuncis"] && $.__views.search.addEventListener("click", indexWindow.searchAnuncis);
    __defers["$.__views.icone!click!testclick"] && $.__views.icone.addEventListener("click", testclick);
    __defers["$.__views.icone1!click!testclick"] && $.__views.icone1.addEventListener("click", testclick);
    __defers["$.__views.icone2!click!testclick"] && $.__views.icone2.addEventListener("click", testclick);
    __defers["$.__views.refreshscrollview!click!indexWindow.refreshAnuncis"] && $.__views.refreshscrollview.addEventListener("click", indexWindow.refreshAnuncis);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;