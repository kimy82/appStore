Ti.include("/js/md5.js");
Ti.include("/js/principal.js");
Ti.include("/js/server.js");
server._init("www.alexmanydev.com/AppStore");

$.content_anim.setVisible(false);

//Butoon de registre
var buttonRegistre = Titanium.UI.createButton({
    title : 'Registra \'t',
    top : 10,
    width : Ti.UI.SIZE,
    height : 50,
    id : 'buttonRegistre'
});

buttonRegistre.addEventListener('click', function(e) {
    indexWindow.openCreateAccount();
});

//Butoon de logout
var buttonLogout = Titanium.UI.createButton({
    title : 'Log out',
    top : 10,
    right : 10,
    width : Ti.UI.SIZE,
    height : 50,
    id : 'buttonRegistre'
});

buttonLogout.addEventListener('click', function(e) {
    indexWindow.logOut();
});
//////////////////

principal._init($);

Ti.include("/js/dataBase.js");
Ti.include("/js/network.js");

var indexWindow = {
    _init : function(ip) {
        indexWindow.ip = ip;
        indexWindow.init = 0;
        indexWindow.initSearch = 0;
        indexWindow.numAnuncis = 0;
        indexWindow.searching = false;
        indexWindow._controlNetwork();
    },
    init : 0,
    _controlNetwork : function() {
        //Si hi ha internet carreguem la pantall i si no carreguem una pantalla d'avis'
        if (isNetwork()) {
            $.index.open();
        } else {
            var win = Alloy.createController('noInternet').getView();
            win.open();
        }
    },
    openCreateAccount : function() {

        var win = Alloy.createController('createAccount', {
            parent : $,
            map : mapview
        }).getView();
        win.open();
    },
    openGlobalRegistre : function() {

        var win = Alloy.createController('globalRegistre', {
            parent : $,
            indexWindow : indexWindow
        }).getView();
        win.open();
    },
    getAnuncis : function() {
 
         Titanium.Geolocation.getCurrentPosition(function(e) {

                latitude = e.coords.latitude;
                longitude = e.coords.longitude;
                var url = "http://" + indexWindow.ip + "/rest/service/userService/getAnuncis?init=" + indexWindow.init+"&lat="+latitude+"&lon="+longitude;
                var client = Ti.Network.createHTTPClient({
                    // function called when the response data is available
                    onload : function(e) {
                        Titanium.API.info(this.responseText);
                        var data = this.responseText;
                        var jdata = JSON.parse(data);
                        indexWindow.init = indexWindow.init + 40;
                        indexWindow.createScrollView(jdata);
                    },
                    // function called when an error occurs, including a timeout
                    onerror : function(e) {
                        Ti.UI.createAlertDialog({
                            message : 'Error recuperant Anuncis'+e,
                            ok : 'KO',
                            title : 'ERROR'
                        }).show();
                    },
                    timeout : 10000 // in milliseconds
                });
                // Prepare the connection.
                client.open("GET", url);
                // Send the request.
                client.send();
      
            });
        
    },
    refreshAnuncis : function() {
        loading = true;
        indexWindow.initSearch = 0;
        indexWindow.searching = false;
        indexWindow.init = 0;
        indexWindow._emptyTableAddLoading();
        indexWindow.getAnuncis();
    },
    searchAnuncis : function() {
        loading = true;
        indexWindow.initSearch = 0;
        indexWindow.searching = true;
        indexWindow._emptyTableAddLoading();
        indexWindow.getSearchAnuncis();
    },
    _emptyTableAddLoading : function() {
        var rows = [];
        rows.push(rowLoading);
        $.mainList.setData(rows);
        indexWindow.numAnuncis = 1;
        loading = true;
    },
    _removeLoading : function() {
        if (indexWindow.numAnuncis == 0) {
            $.mainList.deleteRow(0);
            indexWindow.numAnuncis = 0;
        } else {
            $.mainList.deleteRow(indexWindow.numAnuncis - 1);
            indexWindow.numAnuncis--;
        }
    },
    _removeLastRow : function() {
        if (indexWindow.numAnuncis != 0) {
            $.mainList.deleteRow(indexWindow.numAnuncis - 1);
            indexWindow.numAnuncis--;
        }
    },
    _setLastRow : function() {

        var row = Ti.UI.createTableViewRow({
            id : "listRowTwo",
            height : "60dp",
            selectionStyle : "NONE",
            className : "listRow",
        });

        var viewRow = Ti.UI.createView({
            id : "rowContainerTwo",
            height : "60dp",
            width : Ti.UI.FILL,
            backgroundColor : "#eaeaea",
            layout : "horizontal"
        });
        var viewTodos = Ti.UI.createView({
            id : "todos",
            width : Ti.UI.FILL,
            backgroundColor : "#eaeaea",
            HighlightedColor : '#333333',
            left : 0
        });
        viewRow.add(viewTodos);
        row.add(viewRow);
        $.mainList.appendRow(row);
        indexWindow.numAnuncis++;
    },
    _setFirstRow : function() {
        if (indexWindow.numAnuncis == 0) {
            var row = Ti.UI.createTableViewRow({
                id : "listRowFirst",
                height : "92dp",
                selectionStyle : "NONE",
                showVerticalScrollIndicator : false,
                className : "row",
                objName : 'row',
            });

            var viewRow = Ti.UI.createView({
                id : "rowContainerFirst",
                height : "80dp",
                width : Ti.UI.FILL,
                top : '10dp',
                backgroundColor : '#fff',
                layout : 'horizontal'
            });
            var viewTodos = Ti.UI.createView({
                id : "todosFirst",
                width : Ti.UI.FILL,
                left : 0,
            });
            viewRow.add(viewTodos);
            row.add(viewRow);
            $.mainList.appendRow(row);
            indexWindow.numAnuncis++;
        }
    },
    createScrollView : function(json) {

        var intImage = 0, intImages = json.length;

        if (loading) {
            indexWindow._removeLoading();
        }

        indexWindow._removeLastRow();

        //indexWindow._setFirstRow();

        for ( intImage = 0; intImage < intImages; intImage = intImage + 1) {
            //Crea elements i els hi donem estil
            var row = Ti.UI.createTableViewRow({
                height : "107dp",
                selectionStyle : "NONE",
                className : "listRow",
                showVerticalScrollIndicator : false,
                className : 'row',
                objName : 'row',
            });
            var viewRow = Ti.UI.createView({
                height : "97dp",
                width : Ti.UI.FILL,
                top : '10dp',
                layout : "horizontal",
            });
            var viewTodos = Ti.UI.createView({
                width : Ti.UI.FILL,
                left : 0,
                backgroundColor : "#ffffff",
                HighlightedColor : '#333333',
            });
            var viewFoto = Ti.UI.createView({
                width : "97dp",
                left : '0dp',
            });

            //Canviem color de la dreta segons si es nou normal o vell
            if (json[intImage].estat == "NEW") {

                viewFoto.backgroundColor = "#4cd964";

            } else if (json[intImage].estat == "NORMAL") {

                viewFoto.backgroundColor = "#CCCCCC";

            } else {

                viewFoto.backgroundColor = "red";

            }
            var viewtotm = Ti.UI.createView({
                width : Ti.UI.FILL,
                left : "97dp",
            });
            var viewCon = Ti.UI.createView({
                left : 0,
                width : "99%",
            });
            var viewNews = Ti.UI.createView({
                width : "1%",
                right : 0,
                backgroundColor : "#4cd964",
            });

            var grayLine = Ti.UI.createView({
                height : "1dp",
                width : Ti.UI.FILL,
                layout : "horizontal",
                backgroundColor : '#bcbcbc',
                top : '106dp',
            });

            var img = Ti.UI.createImageView({
                id : "profilePic",
                image : json[intImage].name,
                width : Ti.UI.FILL,
                height : Ti.UI.FILL,
            });
            var labeltitol = Ti.UI.createLabel({
                id : "profileName",
                text : json[intImage].titol,
                top : 5,
                left : 10,
                color : "#333333",
                font : {
                    fontSize : "16dp",
                    fontFamily : "RobotoCondensed-Bold"
                }
            });
            var labeldescripcio = Ti.UI.createLabel({
                top : 33,
                text: principal.retallaString(json[intImage].descripcio),
                left : 10,
                color : "#8e8e93",
                font : {
                    fontSize : "14dp",
                    fontFamily : "Roboto-Light",
                },
            });
            var labelSit = Ti.UI.createLabel({
                id : "situacion",
                text : "Situacio: " + json[intImage].city + " (" + parseFloat(json[intImage].distance).toFixed(2) + "Km)",
                bottom : 5,
                left : 10,
                color : "#8e8e93",
                font : {
                    fontSize : "14dp",
                    fontFamily : "Roboto-Light"
                }
            });
            var labelPreu = Ti.UI.createLabel({
                id : "price",
                text : json[intImage].preu + " €",
                bottom : 5,
                right : 10,
                color : "#007aff",
                font : {
                    fontSize : "15dp",
                    fontFamily : "RobotoCondensed-Bold"
                }
            });

            //estructurem els elements
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
        }, 1000);
    },
    initLabelLoading : function() {
        return Ti.UI.createLabel({
            text : "LOADING..................................",
        });
    },
    initImageLoading : function() {

        return Ti.UI.createImageView({
            height : 96,
            image : "/images/loading.gif",
            left : 8,
            top : 8,
            width : 500
        });
    },
    changeUserData : function() {
        var win = Alloy.createController('changeUserData').getView();
        win.open();
    },
    logOut : function() {
        logoutFacebook();
        controlDB.deleteUser();
        var activity = Titanium.Android.currentActivity;
        activity.finish();
    },
    getSearchAnuncis : function() {

        Titanium.Geolocation.getCurrentPosition(function(e) {

            latitude = e.coords.latitude;
            longitude = e.coords.longitude;

            indexWindow.searching = true;

            var url = "http://" + indexWindow.ip + "/rest/service/userService/searchAnuncis?init=" + indexWindow.initSearch + "&distance=" + $.distance.value + "&lat=" + latitude + "&lon=" + longitude;
            var client = Ti.Network.createHTTPClient({
                // function called when the response data is available
                onload : function(e) {
                    Titanium.API.info(this.responseText);
                    var data = this.responseText;
                    var jdata = JSON.parse(data);
    
                    indexWindow.initSearch = indexWindow.initSearch + jdata.length;
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
         });
    },
    getMapView : function() {
        return Titanium.Map.createView({
            mapType : Titanium.Map.STANDARD_TYPE,
            animate : true,
            region : {
                latitude : 39.30109620906199,
                longitude : -76.60234451293945,
                latitudeDelta : 0.1,
                longitudeDelta : 0.1
            },
            regionFit : true,
            userLocation : true,
            visible : true,
        });
    },
    geolocationInit : function() {
        //Get the current position and set it to the mapview
        Titanium.Geolocation.getCurrentPosition(function(e) {

            var region = {
                latitude : e.coords.latitude,
                longitude : e.coords.longitude,
                animate : true,
                latitudeDelta : 0.001,
                longitudeDelta : 0.001
            };
            mapview.setLocation(region);

            var anotation = Titanium.Map.createAnnotation({
                latitude : e.coords.latitude,
                longitude : e.coords.longitude,
                title : 'Situacio de l\'anunci',
                subtitle : 'centre',
                pincolor : Titanium.Map.ANNOTATION_PURPLE,
                animate : true,
                myid : 1
            });
            var anotation2 = Titanium.Map.createAnnotation({
                latitude : e.coords.latitude,
                longitude : e.coords.longitude,
                title : 'you are here',
                subtitle : 'centre',
                pincolor : Titanium.Map.ANNOTATION_GREEN,
                animate : true,
                myid : 2
            });
            var anotations = Array();
            anotations.push(anotation);
            anotations.push(anotation2);
            mapview.addAnnotations(anotations);

            geo.setGeoPoint(e.coords.latitude, e.coords.longitude);
            mapview.addEventListener('regionChanged', function(e) {

                var newAnotation = Titanium.Map.createAnnotation({
                    latitude : e.latitude,
                    longitude : e.longitude,
                    title : 'you aqsqsqsqre here',
                    subtitle : 'centre',
                    pincolor : Titanium.Map.ANNOTATION_PURPLE,
                    animate : true,
                    myid : 1
                });
                mapview.removeAllAnnotations();

                mapview.addAnnotation(newAnotation);
                mapview.addAnnotation(anotation2);

                geo.setGeoPoint(e.latitude, e.longitude);

            });
        });
    },
    
    showhidemenu : function(e) {
       if (!menuOpen) {
       		$.content_anim.setVisible(false);
       		
            moveTo = "250dp";
            menuOpen = true;
            
        } else {
            moveTo = "0";
            menuOpen = false;
            
        }

        // have to set the current width of the "main" view before moving it so it doesn't get squeezed
        // try commenting out the following line and setting the "newLeft" to 200 instead of
        // 300 to see what I mean
        $.mainContainer.width = Ti.Platform.displayCaps.platformWidth;
        $.mainContainer.animate({
            left : moveTo,
            duration : 100
        });

    },
};
server.setParent(indexWindow);
//Params per la geolocalitzacio
Titanium.Geolocation.purpose = "Recieve ggggUser Location";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
// Set Distance filter. This dictates how often an event fires based on the distance the device moves. This value is in meters.
Titanium.Geolocation.Android.distanceFilter = 10;
//set the mapview with the current location
var mapview = indexWindow.getMapView();

Titanium.Geolocation.addEventListener('location', function() {

    indexWindow.geolocationInit();

});

//Inicialitzem el server i el controlador de la pantalla
indexWindow._init("www.alexmanydev.com/AppStore");
//Accions amb la base de dates
utilsDB._init($, mapview,indexWindow);



//Si l'usuari esta logat posem boton per penjar anuncis i treiem els de registre
utilsDB.configureIndex();


//Boto hidden que s'utilitza per refrescar el llistat d'anuncis
$.viewrefreshscrollview.hide();

//codi per el control de l'scroll quan arribem al final carrega més anuncis
//inidica si esta carrregant imatges
var loading = false;

var labelLoading = indexWindow.initLabelLoading();

var imgLoading = indexWindow.initImageLoading();

var rowLoading = Ti.UI.createTableViewRow({
    id : 'listRow',
    class : 'listRow',
    height : "107dp",
    selectionStyle : "NONE",
});

rowLoading.add(labelLoading);
rowLoading.add(imgLoading);

//carreguem anunicis a l'scroll view
indexWindow.getAnuncis();

var isAndroid = Ti.Platform.osname === 'android';
//Afegim listener a l'scroll per al final cargar mes anuncis



var menuOpen = false;


$.mainList.addEventListener('scroll', function(evt) {
    // If we're on android: our total number of rows is less than the first visible row plus the total number of visible
    // rows plus 3 buffer rows, we need to load more rows!
    // ---OR---
    // If we're on ios: how far we're scrolled down + the size of our visible area + 100 pixels of buffer space
    // is greater than the total height of our table, we need to load more rows!
    if ((isAndroid && (evt.totalItemCount < evt.firstVisibleItem + evt.visibleItemCount + 3) && !loading) || (!isAndroid && (evt.contentOffset.y + evt.size.height + 100 > evt.contentSize.height) && !loading)) {
        // tell our interval (above) to load more rows

        loading = true;

        $.mainList.appendRow(rowLoading);
        indexWindow.numAnuncis++;

        if (indexWindow.searching == true) {
            indexWindow.getSearchAnuncis();
        } else {
            indexWindow.getAnuncis();
        }
    }
});

var content_animOpen = false;
//ANIMACIÓ DEL SLIDER
function showhideslider(e){
	if (!content_animOpen) {
			$.content_anim.setVisible(true);
            moveTo = "90dp";
            content_animOpen = true;
        } else {
            moveTo = "0";
            content_animOpen = false;   
           
              
        }

        // have to set the current width of the "main" view before moving it so it doesn't get squeezed
        // try commenting out the following line and setting the "newLeft" to 200 instead of
        // 300 to see what I mean
        $.mainContainer.width = Ti.Platform.displayCaps.platformWidth;
        $.mainContainer.animate({
            top : moveTo,
            duration : 100
        });
}

//PUSH NOTIFICATIONS OBJECT
var gcm = require('com.alexmany.gcm');

