function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "changeUserData";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.changeUserData = Ti.UI.createWindow({
        id: "changeUserData"
    });
    $.__views.changeUserData && $.addTopLevelView($.__views.changeUserData);
    $.__views.userName = Ti.UI.createTextField({
        id: "userName",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.changeUserData.add($.__views.userName);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "70",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.changeUserData.add($.__views.password);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "140",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.changeUserData.add($.__views.email);
    $.__views.saveDataUser = Ti.UI.createButton({
        id: "saveDataUser"
    });
    $.__views.changeUserData.add($.__views.saveDataUser);
    try {
        $.__views.saveDataUser.addEventListener("click", changeUserData.saveDataUser);
    } catch (e) {
        __defers["$.__views.saveDataUser!click!changeUserData.saveDataUser"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var changeUserData = {
        saveDataUser: function() {},
        close: function() {
            $.changeUserData.close();
        }
    };
    $.changeUserData.backgroundColor = "#CCCCCC";
    $.changeUserData.open();
    __defers["$.__views.saveDataUser!click!changeUserData.saveDataUser"] && $.__views.saveDataUser.addEventListener("click", changeUserData.saveDataUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;