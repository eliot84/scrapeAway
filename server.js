//Server and routes 

var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

var router = express.Router();

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
	defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
	extended: false
}));


app.use(router);

var db = process.env.MONGODB_URI || "mongodb://127.0.0.1/mongoHeadlines";

mongoose.connect(db, function(error){
	if (error) {
		console.log(error);
	}else{
		console.log("mongoose connection is successful");
	}
});

app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});