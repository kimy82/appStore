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
        color: "#000",
        id: "userLabel"
    });
    $.__views.index.add($.__views.userLabel);
    $.__views.createAccount = Ti.UI.createButton({
        title: "Foobar",
        top: "0",
        width: Ti.UI.SIZE,
        id: "createAccount"
    });
    $.__views.index.add($.__views.createAccount);
    try {
        $.__views.createAccount.addEventListener("click", indexWindow.openCreateAccount);
    } catch (e) {
        __defers["$.__views.createAccount!click!indexWindow.openCreateAccount"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.include("/js/md5.js");
    Ti.include("/js/principal.js");
    principal._init($);
    Ti.include("/js/facebook.js");
    Ti.include("/js/server.js");
    $.index.add(button);
    Ti.include("/js/dataBase.js");
    $.createAccount.setTitle("Registra't");
    Ti.include("/js/network.js");
    if (isNetwork()) $.index.open(); else {
        var win = Alloy.createController("noInternet").getView();
        win.open();
    }
    var indexWindow = {
        openCreateAccount: function() {
            var win = Alloy.createController("createAccount", {
                parent: $
            }).getView();
            win.open();
        }
    };
    __defers["$.__views.createAccount!click!indexWindow.openCreateAccount"] && $.__views.createAccount.addEventListener("click", indexWindow.openCreateAccount);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;