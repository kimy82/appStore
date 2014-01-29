function Controller() {
    function testclick() {
        alert("er");
    }
    function testclick(e) {
        alert("Clicked '" + e.source.id + "'");
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
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#dbdbdb",
        separatorStyle: "NONE",
        height: Ti.UI.SIZE,
        top: 0,
        left: "10dp",
        right: "10dp",
        widht: Ti.UI.SIZE,
        separatorColor: "#FFFFFFF",
        showVerticalScrollIndicator: false,
        objName: "table",
        zIndex: 40,
        id: "mainList"
    });
    $.__views.index.add($.__views.mainList);
    $.__views.footer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "40dp",
        backgroundColor: "#dbdbdb",
        bottom: 0,
        layout: "horizontal",
        id: "footer"
    });
    $.__views.index.add($.__views.footer);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: "24.5%",
        id: "__alloyId3"
    });
    $.__views.footer.add($.__views.__alloyId3);
    $.__views.icone = Ti.UI.createImageView({
        width: "30dp",
        image: "/home.png",
        id: "icone"
    });
    $.__views.__alloyId3.add($.__views.icone);
    testclick ? $.__views.icone.addEventListener("click", testclick) : __defers["$.__views.icone!click!testclick"] = true;
    $.__views.__alloyId4 = Ti.UI.createView({
        width: "24.5%",
        id: "__alloyId4"
    });
    $.__views.footer.add($.__views.__alloyId4);
    $.__views.icone1 = Ti.UI.createImageView({
        width: "30dp",
        image: "/user.png",
        id: "icone1"
    });
    $.__views.__alloyId4.add($.__views.icone1);
    testclick ? $.__views.icone1.addEventListener("click", testclick) : __defers["$.__views.icone1!click!testclick"] = true;
    $.__views.__alloyId5 = Ti.UI.createView({
        width: "24.5%",
        id: "__alloyId5"
    });
    $.__views.footer.add($.__views.__alloyId5);
    $.__views.icone2 = Ti.UI.createImageView({
        width: "30dp",
        image: "/upload.png",
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
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#333333",
        left: 0,
        id: "menu"
    });
    $.__views.index.add($.__views.menu);
    try {
        $.__views.menu.addEventListener("click", indexWindow.showhidemenu);
    } catch (e) {
        __defers["$.__views.menu!click!indexWindow.showhidemenu"] = true;
    }
    $.__views.userLabel = Ti.UI.createLabel({
        id: "userLabel"
    });
    $.__views.menu.add($.__views.userLabel);
    try {
        $.__views.userLabel.addEventListener("click", indexWindow.changeUserData);
    } catch (e) {
        __defers["$.__views.userLabel!click!indexWindow.changeUserData"] = true;
    }
    $.__views.viewbuttons = Ti.UI.createView({
        top: "30",
        id: "viewbuttons"
    });
    $.__views.menu.add($.__views.viewbuttons);
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
    $.__views.mainTop = Ti.UI.createView({
        height: "90dp",
        width: Ti.UI.FILL,
        left: 0,
        top: 0,
        zIndex: 30,
        id: "mainTop"
    });
    $.__views.index.add($.__views.mainTop);
    $.__views.options = Ti.UI.createView({
        right: 0,
        left: 0,
        height: "90dp",
        layout: "horitzontal",
        bubbleParent: false,
        zIndex: 10,
        width: Ti.UI.FILL,
        id: "options"
    });
    $.__views.mainTop.add($.__views.options);
    $.__views.__alloyId6 = Ti.UI.createView({
        top: 0,
        right: 0,
        left: 0,
        height: 90,
        backgroundColor: "white",
        id: "__alloyId6"
    });
    $.__views.options.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "One",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.header = Ti.UI.createView({
        backgroundColor: "#dbdbdb",
        width: Ti.UI.FILL,
        height: "30dp",
        top: 0,
        right: 0,
        left: 0,
        layout: "horitzontal",
        zIndex: 11,
        id: "header"
    });
    $.__views.mainTop.add($.__views.header);
    $.__views.int_header = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "30dp",
        id: "int_header"
    });
    $.__views.header.add($.__views.int_header);
    $.__views.categories = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: "15dp",
            fontFamily: "RobotoCondensed-Bold"
        },
        text: "Totes les categories",
        id: "categories"
    });
    $.__views.int_header.add($.__views.categories);
    $.__views.mainContainer = Ti.UI.createView({
        id: "mainContainer"
    });
    $.__views.index.add($.__views.mainContainer);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#dbdbdb",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.mainContainer.add($.__views.main);
    $.__views.listRowFirst = Ti.UI.createTableViewRow({
        height: "92dp",
        selectionStyle: "NONE",
        className: "row",
        showVerticalScrollIndicator: false,
        objName: "row",
        id: "listRowFirst"
    });
    var __alloyId8 = [];
    __alloyId8.push($.__views.listRowFirst);
    $.__views.rowContainerFirst = Ti.UI.createView({
        height: "80dp",
        width: Ti.UI.FILL,
        top: "10dp",
        layout: "horizontal",
        id: "rowContainerFirst"
    });
    $.__views.listRowFirst.add($.__views.rowContainerFirst);
    $.__views.todosFirst = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: 0,
        id: "todosFirst"
    });
    $.__views.rowContainerFirst.add($.__views.todosFirst);
    $.__views.grayLine = Ti.UI.createView({
        height: "1dp",
        width: Ti.UI.FILL,
        layout: "horizontal",
        backgroundColor: "#bcbcbc",
        top: "106dp",
        id: "grayLine"
    });
    $.__views.listRowFirst.add($.__views.grayLine);
    $.__views.listRowTwo = Ti.UI.createTableViewRow({
        height: "40dp",
        selectionStyle: "NONE",
        className: "listRow",
        id: "listRowTwo"
    });
    __alloyId8.push($.__views.listRowTwo);
    $.__views.rowContainerTwo = Ti.UI.createView({
        height: "40dp",
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        layout: "horizontal",
        id: "rowContainerTwo"
    });
    $.__views.listRowTwo.add($.__views.rowContainerTwo);
    $.__views.todos = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: 0,
        backgroundColor: "#ffffff",
        HighlightedColor: "#333333",
        id: "todos"
    });
    $.__views.rowContainerTwo.add($.__views.todos);
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#dbdbdb",
        separatorStyle: "NONE",
        height: Ti.UI.SIZE,
        top: 0,
        left: "10dp",
        right: "10dp",
        widht: Ti.UI.SIZE,
        separatorColor: "#FFFFFFF",
        showVerticalScrollIndicator: false,
        objName: "table",
        zIndex: 40,
        data: __alloyId8,
        id: "mainList"
    });
    $.__views.main.add($.__views.mainList);
    $.__views.footer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "40dp",
        backgroundColor: "#dbdbdb",
        bottom: 0,
        layout: "horizontal",
        id: "footer"
    });
    $.__views.mainContainer.add($.__views.footer);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: "24.5%",
        id: "__alloyId9"
    });
    $.__views.footer.add($.__views.__alloyId9);
    $.__views.icone = Ti.UI.createImageView({
        width: "30dp",
        image: "/home.png",
        id: "icone"
    });
    $.__views.__alloyId9.add($.__views.icone);
    try {
        $.__views.icone.addEventListener("click", indexWindow.showhidemenu);
    } catch (e) {
        __defers["$.__views.icone!click!indexWindow.showhidemenu"] = true;
    }
    $.__views.sep = Ti.UI.createImageView({
        width: 1,
        image: "/sep.png",
        height: Ti.UI.FILL,
        id: "sep"
    });
    $.__views.footer.add($.__views.sep);
    $.__views.__alloyId10 = Ti.UI.createView({
        width: "24.5%",
        id: "__alloyId10"
    });
    $.__views.footer.add($.__views.__alloyId10);
    $.__views.icone1 = Ti.UI.createImageView({
        width: "30dp",
        image: "/user.png",
        id: "icone1"
    });
    $.__views.__alloyId10.add($.__views.icone1);
    testclick ? $.__views.icone1.addEventListener("click", testclick) : __defers["$.__views.icone1!click!testclick"] = true;
    $.__views.sep = Ti.UI.createImageView({
        width: 1,
        image: "/sep.png",
        height: Ti.UI.FILL,
        id: "sep"
    });
    $.__views.footer.add($.__views.sep);
    $.__views.__alloyId11 = Ti.UI.createView({
        width: "24.5%",
        id: "__alloyId11"
    });
    $.__views.footer.add($.__views.__alloyId11);
    $.__views.icone2 = Ti.UI.createImageView({
        width: "30dp",
        image: "/upload.png",
        id: "icone2"
    });
    $.__views.__alloyId11.add($.__views.icone2);
    testclick ? $.__views.icone2.addEventListener("click", testclick) : __defers["$.__views.icone2!click!testclick"] = true;
    $.__views.sep = Ti.UI.createImageView({
        width: 1,
        image: "/sep.png",
        height: Ti.UI.FILL,
        id: "sep"
    });
    $.__views.footer.add($.__views.sep);
    $.__views.__alloyId12 = Ti.UI.createView({
        width: "24.5%",
        id: "__alloyId12"
    });
    $.__views.footer.add($.__views.__alloyId12);
    $.__views.icone3 = Ti.UI.createImageView({
        width: "30dp",
        image: "/chat.png",
        id: "icone3"
    });
    $.__views.__alloyId12.add($.__views.icone3);
    testclick ? $.__views.icone3.addEventListener("click", testclick) : __defers["$.__views.icone3!click!testclick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.include("/js/md5.js");
    Ti.include("/js/principal.js");
    Ti.include("/js/facebook.js");
    Ti.include("/js/server.js");
    server._init("192.168.1.69:8080/AppStore");
    var headerHeight, optionsHeight, isVisible = (arguments[0] || {}, false);
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
            indexWindow.initSearch = 0;
            indexWindow.searching = false;
            indexWindow.init = 0;
            indexWindow._emptyTableAddLoading();
            indexWindow.getAnuncis();
        },
        searchAnuncis: function() {
            loading = true;
            indexWindow.initSearch = 0;
            indexWindow.searching = true;
            indexWindow._emptyTableAddLoading();
            indexWindow.getSearchAnuncis();
        },
        _emptyTableAddLoading: function() {
            var rows = [];
            rows.push(rowLoading);
            $.mainList.setData(rows);
            indexWindow.numAnuncis = 1;
        },
        _removeLoading: function() {
            if (0 == indexWindow.numAnuncis) {
                $.mainList.deleteRow(0);
                indexWindow.numAnuncis = 0;
            } else {
                $.mainList.deleteRow(indexWindow.numAnuncis - 1);
                indexWindow.numAnuncis--;
            }
        },
        _removeLastRow: function() {
            if (0 != indexWindow.numAnuncis) {
                $.mainList.deleteRow(indexWindow.numAnuncis - 1);
                indexWindow.numAnuncis--;
            }
        },
        _setLastRow: function() {
            var row = Ti.UI.createTableViewRow({
                id: "listRowTwo",
                height: "40dp",
                selectionStyle: "NONE",
                className: "listRow"
            });
            var viewRow = Ti.UI.createView({
                id: "rowContainerTwo",
                height: "40dp",
                width: Ti.UI.FILL,
                backgroundColor: "#fff",
                layout: "horizontal"
            });
            var viewTodos = Ti.UI.createView({
                id: "todos",
                width: Ti.UI.FILL,
                backgroundColor: "#ffffff",
                HighlightedColor: "#333333",
                left: 0
            });
            viewRow.add(viewTodos);
            row.add(viewRow);
            $.mainList.appendRow(row);
            indexWindow.numAnuncis++;
        },
        _setFirstRow: function() {
            if (0 == indexWindow.numAnuncis) {
                var row = Ti.UI.createTableViewRow({
                    id: "listRowFirst",
                    height: "92dp",
                    selectionStyle: "NONE",
                    showVerticalScrollIndicator: false,
                    className: "row",
                    objName: "row"
                });
                var viewRow = Ti.UI.createView({
                    id: "rowContainerFirst",
                    height: "80dp",
                    width: Ti.UI.FILL,
                    top: "10dp",
                    backgroundColor: "#fff",
                    layout: "horizontal"
                });
                var viewTodos = Ti.UI.createView({
                    id: "todosFirst",
                    width: Ti.UI.FILL,
                    left: 0
                });
                viewRow.add(viewTodos);
                row.add(viewRow);
                $.mainList.appendRow(row);
                indexWindow.numAnuncis++;
            }
        },
        createScrollView: function(json) {
            var intImage = 0, intImages = json.length;
            loading && indexWindow._removeLoading();
            indexWindow._removeLastRow();
            for (intImage = 0; intImages > intImage; intImage += 1) {
                var row = Ti.UI.createTableViewRow({
                    height: "107dp",
                    selectionStyle: "NONE",
                    className: "listRow",
                    showVerticalScrollIndicator: false,
                    className: "row",
                    objName: "row"
                });
                var viewRow = Ti.UI.createView({
                    height: "97dp",
                    width: Ti.UI.FILL,
                    top: "10dp",
                    layout: "horizontal"
                });
                var viewTodos = Ti.UI.createView({
                    width: Ti.UI.FILL,
                    left: 0,
                    backgroundColor: "#ffffff",
                    HighlightedColor: "#333333"
                });
                var viewFoto = Ti.UI.createView({
                    width: "97dp",
                    left: "0dp"
                });
                viewFoto.backgroundColor = "NEW" == json[intImage].estat ? "#4cd964" : "NORMAL" == json[intImage].estat ? "#CCCCCC" : "red";
                var viewtotm = Ti.UI.createView({
                    width: Ti.UI.FILL,
                    left: "97dp"
                });
                var viewCon = Ti.UI.createView({
                    left: 0,
                    width: "99%"
                });
                var viewNews = Ti.UI.createView({
                    width: "1%",
                    right: 0,
                    backgroundColor: "#4cd964"
                });
                var grayLine = Ti.UI.createView({
                    height: "1dp",
                    width: Ti.UI.FILL,
                    layout: "horizontal",
                    backgroundColor: "#bcbcbc",
                    top: "106dp"
                });
                var img = Ti.UI.createImageView({
                    id: "profilePic",
                    image: json[intImage].name,
                    width: Ti.UI.FILL,
                    height: Ti.UI.FILL
                });
                var labeltitol = Ti.UI.createLabel({
                    id: "profileName",
                    text: json[intImage].titol,
                    top: 5,
                    left: 10,
                    color: "#333333",
                    font: {
                        fontSize: "16dp",
                        fontFamily: "RobotoCondensed-Bold"
                    }
                });
                var labeldescripcio = Ti.UI.createLabel({
                    top: 33,
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
                    bottom: 5,
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
                    right: 10,
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
                viewRow.add(viewTodos);
                row.add(viewRow);
                row.add(grayLine);
                indexWindow.numAnuncis++;
                $.mainList.appendRow(row);
            }
            indexWindow._setLastRow();
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
            logoutFacebook();
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
        },
        showhidemenu: function() {
            if (menuOpen) {
                moveTo = "0";
                menuOpen = false;
                show();
            } else {
                moveTo = "250dp";
                menuOpen = true;
                hide();
            }
            $.mainContainer.width = Ti.Platform.displayCaps.platformWidth;
            $.mainContainer.animate({
                left: moveTo,
                duration: 100
            });
        },
        showMenuUp: function() {
            isVisible = true;
            $.mainContainer.height = Ti.UI.FILL;
            $.options.animate({
                top: headerHeight,
                duration: 100
            });
            return;
        },
        hideMenuUp: function() {
            isVisible = false;
            $.options.animate({
                top: -optionsHeight,
                duration: 100,
                zIndex: 0
            }, function() {
                $.mainContainer.height = Ti.UI.FILL;
            });
            return;
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
    indexWindow._init("192.168.1.69:8080/AppStore");
    $.viewbuttons.add(buttonRegistre);
    $.viewbuttons.add(button);
    utilsDB.addAnunciButton();
    $.viewrefreshscrollview.hide();
    var loading = false;
    var labelLoading = indexWindow.initLabelLoading();
    var imgLoading = indexWindow.initImageLoading();
    var rowLoading = Ti.UI.createTableViewRow({
        id: "listRow",
        "class": "listRow",
        height: "107dp",
        selectionStyle: "NONE"
    });
    rowLoading.add(labelLoading);
    rowLoading.add(imgLoading);
    indexWindow.getAnuncis();
    var isAndroid = true;
    var menuOpen = false;
    optionsHeight = $.options.children.length * $.options.children[0].height;
    headerHeight = $.header.height;
    $.options.applyProperties({
        top: headerHeight
    });
    $.mainList.addEventListener("scroll", function(evt) {
        if (isAndroid && evt.totalItemCount < evt.firstVisibleItem + evt.visibleItemCount + 3 && !loading || !isAndroid && evt.contentOffset.y + evt.size.height + 100 > evt.contentSize.height && !loading) {
            loading = true;
            $.mainList.appendRow(rowLoading);
            indexWindow.numAnuncis++;
            true == indexWindow.searching ? indexWindow.getSearchAnuncis() : indexWindow.getAnuncis();
        }
        isAndroid && evt.firstVisibleItem > 3 || !isAndroid && evt.contentOffset.y > 200 ? indexWindow.hideMenuUp() : indexWindow.showMenuUp();
    });
    __defers["$.__views.icone!click!testclick"] && $.__views.icone.addEventListener("click", testclick);
    __defers["$.__views.icone1!click!testclick"] && $.__views.icone1.addEventListener("click", testclick);
    __defers["$.__views.icone2!click!testclick"] && $.__views.icone2.addEventListener("click", testclick);
    __defers["$.__views.refreshscrollview!click!indexWindow.refreshAnuncis"] && $.__views.refreshscrollview.addEventListener("click", indexWindow.refreshAnuncis);
    __defers["$.__views.menu!click!indexWindow.showhidemenu"] && $.__views.menu.addEventListener("click", indexWindow.showhidemenu);
    __defers["$.__views.userLabel!click!indexWindow.changeUserData"] && $.__views.userLabel.addEventListener("click", indexWindow.changeUserData);
    __defers["$.__views.search!click!indexWindow.searchAnuncis"] && $.__views.search.addEventListener("click", indexWindow.searchAnuncis);
    __defers["$.__views.icone!click!indexWindow.showhidemenu"] && $.__views.icone.addEventListener("click", indexWindow.showhidemenu);
    __defers["$.__views.icone1!click!testclick"] && $.__views.icone1.addEventListener("click", testclick);
    __defers["$.__views.icone2!click!testclick"] && $.__views.icone2.addEventListener("click", testclick);
    __defers["$.__views.icone3!click!testclick"] && $.__views.icone3.addEventListener("click", testclick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;