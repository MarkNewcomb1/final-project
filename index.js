;(function(){
	"use strict";
	
	var PORT = 3000;
	
	var fs = require('fs');
	
	var express = require('express');
	var bodyParser = require('body-parser');
	var cookieParser = require('cookie-parser');
	var expressSession = require('express-session');
	
	var config = require('./config.js');
	
	var app = express();
	
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(cookieParser());
	app.use(expressSession({
		secret: config.secret,
		resave: true,
    	saveUninitialized: true
	}));
	
	var messages = ["This is a message", "This is another message"];
	
	app.get("/", function(req, res) {
		if (!req.session.username) {
			res.redirect("/login");
			return;
		}
		
		res.sendFile(__dirname + "/public/index.html");
	});
	
	app.get("/messages", function(req, res){
		if (!req.session.username) {
			res.send("[]");
			return;
		}
		
		res.send(JSON.stringify(messages));
	});
	
	app.post("/messages", function(req, res){
		if (!req.session.username) {
			res.send("error");
			return;
		}
		
		if(!req.body.newMessage){
			res.send("error");
			return;
		}
		
		console.log(req.body.newMessage);
		
		messages.push(req.body.newMessage);
		res.send("success");
	});
	
	var Login = require("./login.js");
	app.get("/login", Login.getLogin);
	app.post("/login", Login.postLogin);
	
	app.use(express.static('public'));
	
	app.use(function(req, res, next) {
		res.status(404);
		res.send("File not found");
	});
	
	app.listen(PORT, function() {
		console.log("server started on port " + PORT);
	});
	
}());









