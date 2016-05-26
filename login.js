function logInUser(username, password) {
	return username == "mark" && password == "password";
}

module.exports = {
	getLogin: function(req, res){
		res.sendFile(__dirname + '/public/login.html');
	},
	
	postLogin: function(req, res){
		if(req.body.username && req.body.password){
			if (logInUser(req.body.username, req.body.password)){
				req.session.username = req.body.username;
				res.redirect("/");
				return;
			}
		}
		res.redirect("/login");
	}
	
};