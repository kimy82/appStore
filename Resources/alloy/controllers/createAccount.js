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
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "70",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.createAccount.add($.__views.password);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "140",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.createAccount.add($.__views.email);
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
    var createAccount = {
        insertUser: function() {
            server.insertUser($.userName.value, $.password.value);
            Ti.API.info("Button  aaaa" + button);
            principal.setUser($.userName.value);
            Ti.API.info("Button ");
            parent.viewbuttons.remove(button);
            $.createAccount.close();
        },
        close: function() {
            $.createAccount.close();
        }
    };
    $.createAccount.backgroundColor = "#CCCCCC";
    $.createAccount.open();
    $.mybut.setTitle("Save");
    __defers["$.__views.mybut!click!createAccount.insertUser"] && $.__views.mybut.addEventListener("click", createAccount.insertUser);
    __defers["$.__views.closeCreateAccount!click!createAccount.close"] && $.__views.closeCreateAccount.addEventListener("click", createAccount.close);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;