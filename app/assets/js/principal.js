var principal = {
		win: null ,
		buttonRegistre: null,
		buttonFacebook: null,
		buttonLogout: null,
		_init: function(win,buttonRegistre,buttonFacebook,buttonLogout){
			this.win = win;
			this.buttonRegistre = buttonRegistre;
			this.buttonFacebook = buttonFacebook;
			this.buttonLogout = buttonLogout;
		},
		setUser: function(user){						
			principal.win.userLabel.setText(user);		
			principal.win.viewbuttons.remove(principal.buttonRegistre);
			principal.win.viewbuttons.remove(principal.buttonFacebook);	
			principal.win.viewbuttons.add(principal.buttonLogout);					
	},
		
};