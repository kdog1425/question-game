var mongoose = require("mongoose");
var Outcome = require("../data/outcome");
var Question = require("../data/question");
var _ = require("underscore");

var outcomeRouter = require("express").Router();
outcomeRouter.route("/outcomes/:id?").get(getOutcomes).post(addOutcome).delete(deleteOutcome);

var response = {};
response.isAdmin = true;
            
function getOutcomes(req, res) {
    Question.find(function (err, question) {
        if (err){
            res.send(err);
        }
        else{
            console.log(question);
            response.outcomes = question.outcomes;
            res.json(response);
        }
    });
}

function addOutcome(req, res) {
    var outcome = new Outcome(_.extend({}, req.body));
    Question.findByIdAndUpdate(
        req.body.question_id,
        {$push: {outcomes: outcome}},
        {safe: true, upsert: true},
        function(err, model) {
            if (err){
                res.send(err);
            }
            else{
                response.outcomes = outcome;
                res.json(response);
            }
        }
    );
            
}

function deleteOutcome(req, res) {
    var id = req.params.id;
    Outcome.remove(
        req.body.question_id,
        function(err, outcome) {
            if (err){
                res.send(err);
            }
            else{
                response.outcomes = outcome;
                res.json(response);
            }
        }
    );
}

module.exports = outcomeRouter;