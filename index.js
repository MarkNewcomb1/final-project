;
(function () {
    "use strict";
    var PORT = 3000;
    var fs = require('fs');
    var express = require('express');
    var bodyParser = require('body-parser');
    var cookieParser = require('cookie-parser');
    var expressSession = require('express-session');
    var config = require('./config.js');
    var Discogs = require('disconnect').Client;
    var app = express();
    var albumIds = [];
    var APIKey = require('./secret.js').APIKey;
    var dis = new Discogs('MarksVinylCollection/1.0', {
        userToken: APIKey
    });
//    var mongoose = require("mongoose");
//    mongoose.connect("mongodb://localhost");
//    var Schema = mongoose.Schema;
//    var userSchema = new Schema({
//        _id: Number,
//        username: String,
//        password: String,
//        vinylCollection: [{
//            discogsId: Number,
//            notes: String
//        }],
//        date: {
//            type: Date,
//            default: Date.now
//        }
//    });
//    var User = mongoose.model('User', userSchema);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(expressSession({
        secret: config.secret,
        resave: true,
        saveUninitialized: true
    }));
    app.get("/", function (req, res) {
//        forced login
        if (!req.session.username) {
        res.redirect("/login");
        return;
        }
        res.sendFile(__dirname + "/public/index.html");
    });


    app.post("/collection", function (req, res) {
        console.log(req.body.album);
        if(albumIds.indexOf(req.body.album) == -1){
            albumIds.push(req.body.album);
            res.send('ok');
        } else {
            var index = albumIds.indexOf(req.body.album);
            albumIds.splice(index, 1);
            res.send('ok');
        }
    });

    app.get("/collection", function (req, res) {
        var albumsArr = [];
        if (albumIds.length == 0){
            res.send("[]");
        }
        for (var i = 0; i < albumIds.length; i++) {
            console.log(albumIds[i]);
            dis.database().getRelease(albumIds[i], function (err, data) {
                albumsArr.push(data);
                if (albumsArr.length == albumIds.length){
                    res.send(JSON.stringify(albumsArr));
                }
            });
        }
    });
    app.post("/messages", function (req, res) {
        if (!req.session.username) {
            res.send("error");
            return;
        }
        if (!req.body.newMessage) {
            res.send("error");
            return;
        }
        console.log(req.body.newMessage);
        // messages.push(req.body.newMessage);
        var message = new Message({
            text: req.body.newMessage,
            username: req.session.username
        });
        message.save(function (err) {
                if (err) {
                    res.send("error");
                    return;
                }
                res.send("success");
            })
            // res.send("success");
    });
    var Login = require("./login.js");
    app.get("/login", Login.getLogin);
    app.post("/login", Login.postLogin);
    app.get('/search/artist/:artist', function (req, res) {
        dis.database().search(req.params.artist, {
            type: "release"
        }, function (err, data) {
            res.send(data);
        });
    });
    app.use(express.static('public'));
    app.use(function (req, res, next) {
        res.status(404);
        res.send("File not found");
    });
    app.listen(PORT, function () {
        console.log("server started on port " + PORT);
    });
}());