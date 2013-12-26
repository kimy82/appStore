function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.userLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        top: "5",
        right: "15",
        id: "userLabel"
    });
    $.__views.index.add($.__views.userLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.include("/js/md5.js");
    Ti.include("/js/principal.js");
    Ti.include("/js/facebook.js");
    Ti.include("/js/server.js");
    server._init("192.168.1.74:8080");
    var json = [ {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    }, {
        image: "http://www.google.com/images/errors/robot.png",
        text: "ssssssssss"
    } ];
    var scroll = Ti.UI.createScrollView({
        contentHeight: Ti.UI.SIZE,
        contentWidth: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        touchEnabled: true,
        showHorizontalScrollIndicator: false,
        showVerticalScrollIndicator: true,
        width: Ti.UI.FILL
    });
    scroll.addEventListener("scroll", function(e) {
        var tolerance = 50;
        Ti.API.info("near bottom", view.getRect().height - e.y <= scroll.getRect().height + tolerance);
    });
    $.index.add(scroll);
    var view = Ti.UI.createView({
        bottom: 8,
        height: 1e3,
        layout: "horizontal",
        touchEnabled: true,
        left: 0,
        right: 8,
        top: 150,
        width: Ti.UI.FILL
    });
    scroll.add(view);
    var img, intImage = 0, intImages = json.length;
    for (intImage = 0; intImages > intImage; intImage += 1) {
        img = Ti.UI.createImageView({
            height: 96,
            image: json[intImage].image,
            left: 8,
            top: 8,
            width: 96
        });
        var label = Ti.UI.createLabel({
            text: json[intImage].text
        });
        view.add(label);
        view.add(img);
    }
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
    $.index.add(buttonRegistre);
    $.index.add(button);
    principal._init($, buttonRegistre, button);
    Ti.include("/js/dataBase.js");
    Ti.include("/js/network.js");
    utilsDB._init($);
    utilsDB.addAnunciButton();
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;