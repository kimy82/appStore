function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "createAccount";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.createAccount = Ti.UI.createWindow({
        id: "createAccount"
    });
    $.__views.createAccount && $.addTopLevelView($.__views.createAccount);
    $.__views.userName = Ti.UI.createTextField({
        id: "userName",
        hintText: "username",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.createAccount.add($.__views.userName);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        hintText: "password",
        passwordMask: "true",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "70",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.createAccount.add($.__views.password);
    $.__views.repeatpassword = Ti.UI.createTextField({
        id: "repeatpassword",
        hintText: "repeeix password",
        passwordMask: "true",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "130",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.createAccount.add($.__views.repeatpassword);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        hintText: "email",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "190",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.createAccount.add($.__views.email);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        top: "230",
        text: "Mou el mapa fins a cercar el teu punt",
        id: "__alloyId1"
    });
    $.__views.createAccount.add($.__views.__alloyId1);
    $.__views.mapView = Ti.UI.createView({
        height: "700",
        layout: "horizontal",
        top: "300",
        id: "mapView"
    });
    $.__views.createAccount.add($.__views.mapView);
    $.__views.mybut = Ti.UI.createButton({
        id: "mybut",
        top: "150",
        width: Ti.UI.SIZE
    });
    $.__views.createAccount.add($.__views.mybut);
    try {
        $.__views.mybut.addEventListener("click", createAccount.insertUser);
    } catch (e) {
        __defers["$.__views.mybut!click!createAccount.insertUser"] = true;
    }
    $.__views.closeCreateAccount = Ti.UI.createButton({
        id: "closeCreateAccount",
        top: "10",
        title: "X",
        width: Ti.UI.SIZE
    });
    $.__views.createAccount.add($.__views.closeCreateAccount);
    try {
        $.__views.closeCreateAccount.addEventListener("click", createAccount.close);
    } catch (e) {
        __defers["$.__views.closeCreateAccount!click!createAccount.close"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var parent = args.parent;
    var map = args.map;
    var createAccount = {
        validateEmail: function(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
        insertUser: function() {
            if (createAccount.validateEmail($.email.value)) if ($.repeatpassword.value == $.password.value) {
                server.insertUser($.userName.value, $.password.value, $.email.value, geo.latitude, geo.longitude);
                principal.setUser($.userName.value);
                parent.viewbuttons.remove(button);
                $.createAccount.close();
            } else createAccount.showMessage("Els passwords no són iguals", "KO", "password"); else createAccount.showMessage("L' email no és correcte", "KO", "email");
        },
        showMessage: function(message, ok, title) {
            Ti.UI.createAlertDialog({
                message: message,
                ok: ok,
                title: title
            }).show();
        },
        close: function() {
            $.createAccount.close();
        }
    };
    $.mapView.add(map);
    $.createAccount.backgroundColor = "#CCCCCC";
    $.createAccount.open();
    $.mybut.setTitle("Save");
    __defers["$.__views.mybut!click!createAccount.insertUser"] && $.__views.mybut.addEventListener("click", createAccount.insertUser);
    __defers["$.__views.closeCreateAccount!click!createAccount.close"] && $.__views.closeCreateAccount.addEventListener("click", createAccount.close);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;