//bootstrap the database

var db = Ti.Database.open('appstore');



var controlDB = {
	_init : function() {
		this._self = this;
	},
	populateDB : function() {
		db.execute('DROP TABLE IF EXISTS USER');
		db.execute('CREATE TABLE IF NOT EXISTS USER (id,name,password)');
	},
	saveUser : function(name, password) {
		user.name=name;
		user.password=password;
		_executionsDB.saveUser();
	},
	deleteUser : function() {
		
		_executionsDB.deleteUser();
	},
	errorCB : function(tx, err) {
		console.log("Error creating client table SQL: " + err);
	},
	successCB : function() {
		console.log("success: user table created!");
	},
};

var _executionsDB = {
	
	saveUser : function() {
		
		var query = 'INSERT INTO USER (id,name,password) VALUES (1,\'' + user.getName() + '\',\'' + user.getPassword() + '\')';
		alert("insert");
		db.execute(query);
	},
	deleteUser : function() {
		
		var query = 'DELETE FROM USER WHERE 1=1';
		alert("delete");
		db.execute(query);
	},
};

var user = {
	_init: function(){
		this.name="";
		this.password="";
	},
	getName: function() {
		return user.name;
	},
	getPassword: function() {
		return user.password;
	},
	name: "",
	password: "",
};

user._init();
controlDB._init();
controlDB.populateDB();
