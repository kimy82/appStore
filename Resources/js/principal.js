var principal = {
    win: null,
    buttonRegistre: null,
    buttonFacebook: null,
    _init: function(win, buttonRegistre, buttonFacebook) {
        this.win = win;
        this.buttonRegistre = buttonRegistre;
        this.buttonFacebook = buttonFacebook;
    },
    setUser: function(user) {
        principal.win.userLabel.setText(user);
        principal.win.index.remove(principal.buttonRegistre);
        principal.win.index.remove(principal.buttonFacebook);
    }
};