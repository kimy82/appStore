var db = Ti.Database.open("appstore");

var controlDB = {
    _init: function() {
        this._self = this;
    },
    populateDB: function() {
        db.execute("CREATE TABLE IF NOT EXISTS USER (id,name,password)");
    },
    saveUser: function(id, name, password) {
        user.name = name;
        user.password = password;
        user.id = id;
        _executionsDB.saveUser();
    },
    deleteUser: function() {
        _executionsDB.deleteUser();
    },
    errorCB: function(tx, err) {
        console.log("Error creating client table SQL: " + err);
    },
    successCB: function() {
        console.log("success: user table created!");
    }
};

var _executionsDB = {
    saveUser: function() {
        var query = "INSERT INTO USER (id,name,password) VALUES ('" + user.getId() + "','" + user.getName() + "','" + user.getPassword() + "')";
        db.execute(query);
    },
    deleteUser: function() {
        var query = "DELETE FROM USER WHERE 1=1";
        db.execute(query);
    },
    getUser: function() {
        var query = "SELECT * FROM USER WHERE 1=1";
        var rows = db.execute(query);
        user._init();
        while (rows.isValidRow()) {
            user.name = rows.fieldByName("name");
            user.password = rows.fieldByName("password");
            user.id = rows.fieldByName("id");
            rows.next();
        }
        rows.close();
        return user;
    }
};

var user = {
    _init: function() {
        this.name = "";
        this.password = "";
    },
    getName: function() {
        return user.name;
    },
    getPassword: function() {
        return user.password;
    },
    getId: function() {
        return user.id;
    },
    name: "",
    password: "",
    id: ""
};

var utilsDB = {};

utilsDB = {
    _init: function(win, map) {
        console.log("OBJECT" + utilsDB);
        utilsDB.wind = win;
        utilsDB.map = map;
    },
    addAnunciButton: function() {
        var userInDB = _executionsDB.getUser();
        if ("" != userInDB.id) {
            var buttonFoto = Titanium.UI.createButton({
                title: "Foto",
                top: 10,
                left: 20,
                width: 100,
                height: 50
            });
            buttonFoto.addEventListener("click", function() {
                var win = Alloy.createController("addAnunci", {
                    parent: utilsDB.wind,
                    map: utilsDB.map
                }).getView();
                win.open();
            });
            utilsDB.wind.viewbuttons.add(buttonFoto);
            principal.setUser(userInDB.name);
        }
    }
};

var geo = {
    latitude: "",
    longitude: "",
    setGeoPoint: function(lat, lon) {
        geo.latitude = lat;
        geo.longitude = lon;
    }
};

user._init();

controlDB._init();

controlDB.populateDB();