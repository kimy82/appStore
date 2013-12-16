//code for log in facebook
var fb = require('facebook');
fb.appid = 1424716701093081;
fb.permissions = ['publish_stream','email', 'user_about_me','user_likes','offline_access','read_stream'];

fb.addEventListener('login', function(e) {
    if (e.success) {
        if (fb.loggedIn) {
        params = {
            access_token : fb.accessToken
        };
        fb.authorize(); 
        fb.requestWithGraphPath('/me', params, 'GET', function(e) {
            var result = JSON.parse(e.result);
           
           alert("Username is : " + result.email);
            
            //Guarda user al servidor
            server.insertUser(result.username,result.email);
            principal.setUser(result.username);                                    
 
        });
    }
    }
});
fb.addEventListener('logout', function(e) {
    //delete user from db
    controlDB.deleteUser();
    alert('Logged out');
});
    
// Add the button.  Note that it doesn't need a click event listener.
var button = fb.createLoginButton({
    top : 150,
    style : fb.BUTTON_STYLE_WIDE
});