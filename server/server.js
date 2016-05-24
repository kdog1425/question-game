var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var morgan = require('morgan');

//controllers
var adminQuestionController = require("./controllers/adminQuestionController");
var questionController = require("./controllers/questionController");


//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json());
app.use("/", adminQuestionController);
app.use("/", questionController);

DEBUG = false;

// log to console
app.use(morgan('dev'));

// Connect to mongodb database
var mongodb_uri = DEBUG ? "mongodb://localhost/question-game" : process.env.MONGODB_URI;
mongoose.connect(mongodb_uri);

// set the right port
var port = process.env.PORT || 12810;
if (DEBUG){
	port = 7777;
}
app.listen(port, function () {
    console.log("Started listening on port", port);
});