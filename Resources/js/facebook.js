function logoutFacebook() {
    fb.logout();
}

var fb = require("facebook");

fb.appid = 0x50fc5b4dfccd9;

fb.permissions = [ "publish_stream", "email", "user_about_me", "user_likes", "offline_access", "read_stream" ];

fb.addEventListener("login", function(e) {
    if (e.success && fb.loggedIn) {
        params = {
            access_token: fb.accessToken
        };
        fb.authorize();
        fb.requestWithGraphPath("/me", params, "GET", function(e) {
            var result = JSON.parse(e.result);
            var longitude = "";
            var latitude = "";
            Titanium.Geolocation.getCurrentPosition(function(e) {
                latitude = e.coords.latitude;
                longitude = e.coords.longitude;
            });
            server.insertUser(result.username, "facebook", result.email, latitude, longitude);
            principal.setUser(result.username);
        });
    }
});

fb.addEventListener("logout", function() {
    controlDB.deleteUser();
    alert("Logged out");
});

var button = fb.createLoginButton({
    top: 150,
    style: fb.BUTTON_STYLE_WIDE
});