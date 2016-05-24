var mongoose = require("mongoose");
var Question = require("../data/question");
var _ = require("underscore");

var router = require("express").Router();
router.route("/questions/:id?").get(getQuestions);

function getQuestions(req, res) {
    Question.find(function (err, questions) {
        if (err)
            res.send(err);
        else
            res.json(questions);
    });
}

module.exports = router;