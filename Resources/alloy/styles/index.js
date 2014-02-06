module.exports = [ {
    isClass: true,
    priority: 10000.0006,
    key: "container",
    style: {
        backgroundColor: "white",
        navBarHidden: true,
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ]
    }
}, {
    isClass: true,
    priority: 10000.0037,
    key: "text_menu",
    style: {
        color: "#444444",
        bottom: "5dp",
        font: {
            fontSize: "9dp",
            fontFamily: "Roboto-Light"
        }
    }
}, {
    isClass: true,
    priority: 10000.0038,
    key: "tbButton",
    style: {
        width: "20%"
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "menu",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#333333",
        left: 0
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "main",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#eaeaea",
        left: 0,
        layout: "vertical"
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "header",
    style: {
        backgroundImage: "/header.png",
        width: Ti.UI.FILL,
        height: "50dp",
        top: 0,
        right: 0,
        left: 0,
        layout: "horitzontal",
        zIndex: 11
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "logo",
    style: {
        image: "/logo.png",
        height: "25dp",
        left: "10dp"
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "int_header",
    style: {
        width: Ti.UI.FILL,
        height: "50dp"
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "categories",
    style: {
        color: "white",
        font: {
            fontSize: "15dp",
            fontFamily: "RobotoCondensed-Bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "mainList",
    style: {
        backgroundColor: "#eaeaea",
        separatorStyle: "NONE",
        height: Ti.UI.SIZE,
        top: 0,
        left: "10dp",
        right: "10dp",
        widht: Ti.UI.SIZE,
        separatorColor: "#FFFFFFF",
        showVerticalScrollIndicator: false,
        objName: "table",
        zIndex: 40
    }
}, {
    isId: true,
    priority: 100000.0014,
    key: "listRow",
    style: {
        height: "107dp",
        selectionStyle: "NONE",
        className: "row",
        showVerticalScrollIndicator: false,
        objName: "row"
    }
}, {
    isId: true,
    priority: 100000.0015,
    key: "rowContainer",
    style: {
        height: "97dp",
        width: Ti.UI.FILL,
        top: "10dp",
        layout: "horizontal"
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "listRow_one",
    style: {
        height: "57dp",
        selectionStyle: "NONE",
        className: "row",
        showVerticalScrollIndicator: false,
        objName: "row"
    }
}, {
    isId: true,
    priority: 100000.0017,
    key: "rowContainer_one",
    style: {
        height: "47dp",
        width: Ti.UI.FILL,
        top: "10dp",
        layout: "horizontal"
    }
}, {
    isId: true,
    priority: 100000.0018,
    key: "todos",
    style: {
        width: Ti.UI.FILL,
        left: 0,
        backgroundColor: "#ffffff",
        HighlightedColor: "#333333"
    }
}, {
    isId: true,
    priority: 100000.0019,
    key: "foto",
    style: {
        width: "97dp",
        left: "0dp"
    }
}, {
    isId: true,
    priority: 100000.002,
    key: "foto_one",
    style: {
        width: "97dp",
        left: "0dp",
        backgroundColor: "#d9d9d9"
    }
}, {
    isId: true,
    priority: 100000.0021,
    key: "sold",
    style: {
        top: "5dp",
        right: "5dp",
        height: Ti.UI.SIZE,
        image: "/sold.png",
        width: Ti.UI.SIZE,
        zIndex: 20
    }
}, {
    isId: true,
    priority: 100000.0022,
    key: "profilePic",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        image: "/1.jpg"
    }
}, {
    isId: true,
    priority: 100000.0023,
    key: "profilePic2",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        image: "/2.jpg"
    }
}, {
    isId: true,
    priority: 100000.0024,
    key: "profilePic3",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        image: "/3.jpg"
    }
}, {
    isId: true,
    priority: 100000.0025,
    key: "profilePic4",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        image: "/4.jpg"
    }
}, {
    isId: true,
    priority: 100000.0026,
    key: "totm",
    style: {
        width: Ti.UI.FILL,
        left: "97dp"
    }
}, {
    isId: true,
    priority: 100000.0027,
    key: "con",
    style: {
        left: 0,
        width: "99%"
    }
}, {
    isId: true,
    priority: 100000.0028,
    key: "container_textes",
    style: {
        left: 0,
        layout: "vertical",
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0029,
    key: "productName_one",
    style: {
        top: 5,
        left: 10,
        color: "#7f7f7f",
        font: {
            fontSize: "18dp",
            fontFamily: "RobotoCondensed-Bold"
        }
    }
}, {
    isId: true,
    priority: 100000.003,
    key: "description_one",
    style: {
        top: 33,
        left: 10,
        color: "#7f7f7f",
        font: {
            fontSize: "14dp",
            fontFamily: "Roboto-Light"
        }
    }
}, {
    isId: true,
    priority: 100000.0031,
    key: "productName",
    style: {
        top: 5,
        left: 10,
        color: "#444444",
        font: {
            fontSize: "16dp",
            fontFamily: "Roboto-Light"
        }
    }
}, {
    isId: true,
    priority: 100000.0032,
    key: "description",
    style: {
        top: 33,
        left: 10,
        color: "#7f7f7f",
        font: {
            fontSize: "14dp",
            fontFamily: "Roboto-Light"
        }
    }
}, {
    isId: true,
    priority: 100000.0033,
    key: "price",
    style: {
        bottom: 5,
        right: 10,
        color: "#007aff",
        font: {
            fontSize: "15dp",
            fontFamily: "RobotoCondensed-Bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0034,
    key: "situacion",
    style: {
        bottom: 5,
        left: 10,
        color: "#b4b4b5",
        font: {
            fontSize: "14dp",
            fontFamily: "Roboto-Light"
        }
    }
}, {
    isId: true,
    priority: 100000.0035,
    key: "news",
    style: {
        width: "1%",
        right: 0,
        backgroundColor: "#4cd964"
    }
}, {
    isId: true,
    priority: 100000.0036,
    key: "footer",
    style: {
        width: Ti.UI.FILL,
        height: "50dp",
        backgroundImage: "/back_footer.png",
        bottom: 0,
        layout: "horizontal"
    }
}, {
    isId: true,
    priority: 100000.0039,
    key: "icone",
    style: {
        bottom: "15dp",
        width: "30dp",
        image: "/menu.png"
    }
}, {
    isId: true,
    priority: 100000.004,
    key: "icone1",
    style: {
        bottom: "15dp",
        width: "30dp",
        image: "/user.png"
    }
}, {
    isId: true,
    priority: 100000.0041,
    key: "icone2",
    style: {
        bottom: "15dp",
        width: "30dp",
        image: "/chat.png"
    }
}, {
    isId: true,
    priority: 100000.0042,
    key: "icone3",
    style: {
        bottom: "15dp",
        width: "30dp",
        image: "/upload.png"
    }
}, {
    isId: true,
    priority: 100000.0043,
    key: "icone4",
    style: {
        bottom: "15dp",
        width: "30dp",
        image: "/cerca.png"
    }
}, {
    isId: true,
    priority: 100000.0044,
    key: "sep",
    style: {
        width: 1,
        image: "/sep.png",
        height: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0045,
    key: "productNamea",
    style: {
        top: 5,
        left: 10,
        color: "#333333",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "16dp",
            fontFamily: "RobotoCondensed-Bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0046,
    key: "descriptiona",
    style: {
        top: 5,
        left: 10,
        color: "#8e8e93",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "Roboto-Light"
        }
    }
}, {
    isId: true,
    priority: 100000.0047,
    key: "pricea",
    style: {
        bottom: 5,
        left: 10,
        color: "#007aff",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "15dp",
            fontFamily: "RobotoCondensed-Bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0048,
    key: "situaciona",
    style: {
        bottom: 5,
        left: 10,
        color: "#8e8e93",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "Roboto-Light"
        }
    }
}, {
    isId: true,
    priority: 100000.0049,
    key: "trure",
    style: {
        left: 0,
        color: "#8e8e93",
        font: {
            fontSize: "14dp",
            fontFamily: "Roboto-Light"
        }
    }
}, {
    isId: true,
    priority: 100000.005,
    key: "last",
    style: {
        height: "40dp",
        selectionStyle: "NONE",
        className: "listRow"
    }
}, {
    isId: true,
    priority: 100000.0051,
    key: "rowContainerTwo",
    style: {
        height: "40dp",
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        layout: "horizontal"
    }
}, {
    isId: true,
    priority: 100000.0052,
    key: "con_footer",
    style: {
        height: "40dp",
        width: Ti.UI.FILL,
        layout: "horizontal"
    }
}, {
    isId: true,
    priority: 100000.0053,
    key: "grayLine",
    style: {
        height: "1dp",
        width: Ti.UI.FILL,
        layout: "horizontal",
        backgroundColor: "#bcbcbc",
        top: "106dp"
    }
}, {
    isId: true,
    priority: 100000.0054,
    key: "listRowTwo",
    style: {
        height: "40dp",
        selectionStyle: "NONE",
        className: "listRow"
    }
} ];