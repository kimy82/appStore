var principal = {
		win: null ,
		_init: function(win){
			this.win= win;
		},
		setUser: function(user){						
			principal.win.userLabel.setText(user);		
			principal.win.index.remove(principal.win.createAccount);				
	},
		
};