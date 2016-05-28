var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "/questions/outcomes";

module.exports = {
    addOutcome: function (outcome) {
        addOutcomeUrl = resourceUrl.split('outcomes')[0] + outcome.question_id + '/outcomes';
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: addOutcomeUrl,
                data: JSON.stringify(outcome),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    getOutcomes: function (questionId) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    deleteOutcome: function (outcome, questionId) {
        deleteOutcomeUrl = resourceUrl.split('outcomes')[0] + outcome.question_id + '/outcomes';
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: deleteOutcomeUrl + "/" + outcome._id,
                method: "DELETE",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
}