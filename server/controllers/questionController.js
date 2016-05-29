var mongoose = require("mongoose");
var Question = require("../data/question");
var _ = require("underscore");

var questionRouter = require("express").Router();
questionRouter.route("/questions/:id?").get(getQuestions).post(addQuestion).delete(deleteQuestion);

var response = {};
            
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

function addQuestion(req, res) {
    var question = new Question(_.extend({}, req.body));
    question.save(function (err) {
        if (err){
            res.send(err);
        }
        else{
            response.questions = question;
            res.json(response);
        }
    });
}

function deleteQuestion(req, res) {
    var id = req.params.id;
    Question.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = questionRouter;