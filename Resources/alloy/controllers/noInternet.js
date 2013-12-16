function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "noInternet";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.noInternet = Ti.UI.createWindow({
        id: "noInternet"
    });
    $.__views.noInternet && $.addTopLevelView($.__views.noInternet);
    $.__views.noNetwork = Ti.UI.createLabel({
        text: "ERROR NO HI HA NET",
        id: "noNetwork"
    });
    $.__views.noInternet.add($.__views.noNetwork);
    $.__views.retry = Ti.UI.createButton({
        id: "retry",
        top: "150",
        width: Ti.UI.SIZE
    });
    $.__views.noInternet.add($.__views.retry);
    try {
        $.__views.retry.addEventListener("click", noIternet.retry);
    } catch (e) {
        __defers["$.__views.retry!click!noIternet.retry"] = true;
    }
    $.__views.pb = Ti.UI.createProgressBar({
        id: "pb",
        top: "10",
        width: "250",
        height: "auto",
        min: "0",
        max: "10",
        value: "0",
        color: "#fff",
        message: "Loading ..."
    });
    $.__views.noInternet.add($.__views.pb);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.noInternet.open();
    $.retry.setTitle("Reintentar");
    var pb = $.pb;
    var noIternet = {
        retry: function() {
            pb.show();
            pb.animate({
                width: 90,
                duration: 3e3
            });
            if (isNetwork()) {
                var win = Alloy.createController("index").getView();
                setTimeout(function() {
                    win.open();
                }, 2e3);
            } else setTimeout(function() {
                $.noInternet.remove(pb);
                pb = Titanium.UI.createProgressBar({
                    id: "pb",
                    top: 10,
                    width: 250,
                    height: "auto",
                    min: 0,
                    max: 10,
                    value: 0,
                    color: "#fff",
                    message: "Loading ...",
                    font: {
                        fontSize: 14,
                        fontWeight: "bold"
                    }
                });
                $.noInternet.add(pb);
            }, 2e3);
        }
    };
    __defers["$.__views.retry!click!noIternet.retry"] && $.__views.retry.addEventListener("click", noIternet.retry);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;