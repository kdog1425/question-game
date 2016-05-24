var mongoose = require("mongoose");
var Question = require("../data/question");
var _ = require("underscore");

var router = require("express").Router();
router.route("/questions/:id?").get(getQuestions);

var response = {};
response.isAdmin = false;
            
function getQuestions(req, res) {
    Question.find(function (err, questions) {
        if (err){
            res.send(err);
        }
        else{
        	response.questions = questions;
            res.json(response);
        }
    });
}

module.exports = router;