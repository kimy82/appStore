var db = Ti.Database.open("appstore");

var controlDB = {
    _init: function() {
        this._self = this;
    },
    populateDB: function() {
        db.execute("DROP TABLE IF EXISTS USER");
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
            Ti.API.info("Person ---> ROWID: ");
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
    _init: function(win) {
        console.log("OBJECT" + utilsDB);
        utilsDB.wind = win;
    },
    addAnunciButton: function() {
        var userInDB = _executionsDB.getUser();
        alert(userInDB.id);
        if ("" != userInDB.id) {
            var buttonFoto = Titanium.UI.createButton({
                title: "Foto",
                top: 10,
                left: 20,
                width: 100,
                height: 50
            });
            buttonFoto.addEventListener("click", function() {
                Titanium.API.info("You clicked the button");
                var win = Alloy.createController("addAnunci").getView();
                win.open();
            });
            utilsDB.wind.index.add(buttonFoto);
        }
    }
};

user._init();

controlDB._init();

controlDB.populateDB();