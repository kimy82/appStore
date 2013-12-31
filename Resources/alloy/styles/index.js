module.exports = [ {
    isApi: true,
    priority: 1000.0007,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000"
    }
}, {
    isApi: true,
    priority: 1000.0008,
    key: "Button",
    style: {
        title: "Foobar",
        top: 0,
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "container",
    style: {
        backgroundColor: "white"
    }
}, {
    isClass: true,
    priority: 10000.0009,
    key: "userLabel",
    style: {
        top: 5,
        right: 15,
        color: "blue"
    }
} ];