var args = arguments[0] || {};
var parent = args.parent;

var createAccount = {
	insertUser : function() {		
		server.insertUser( $.userName.value, $.password.value);
		principal.setUser($.userName.value);
		parent.viewbuttons.remove(button);		
		$.createAccount.close();
	},
	close : function(){
		$.createAccount.close();
	}
	
};

$.createAccount.backgroundColor="#CCCCCC";


$.createAccount.open();
$.mybut.setTitle('Save');

