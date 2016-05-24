var mongoose = require("mongoose");
var Question = require("../data/question");
var _ = require("underscore");

var adminRouter = require("express").Router();
adminRouter.route("/admin/questions/:id?").get(getQuestions).post(addQuestion).delete(deleteQuestion);


function getQuestions(req, res) {
    Question.find(function (err, questions) {
        if (err)
            res.send(err);
        else
            res.json(questions);
    });
}

function addQuestion(req, res) {
    var question = new Question(_.extend({}, req.body));
    question.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(question);
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

module.exports = adminRouter;