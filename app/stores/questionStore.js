var dispatcher = require("../dispatcher");
var questionService = require("../services/questionService");

function QuestionStore() {
    var listeners = [];

    function onChange(listener) {
        getQuestions(listener);
        listeners.push(listener);
    }
    
    function getQuestions(cb){
        questionService.getQuestions().then(function (res) {
            cb(res);
        });
    }

    function addQuestion(question) {
        questionService.addQuestion(question).then(function (res) {
            triggerListeners();
        });
    }

    function deleteQuestion(question) {
        questionService.deleteQuestion(question).then(function (res) {
            triggerListeners();
        });
    }

    function triggerListeners() {
        getQuestions(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "question") {
            switch (split[1]) {
                case "addQuestion":
                    addQuestion(payload.question);
                    break;
                case "deleteQuestion":
                    deleteQuestion(payload.question);
                    break;
            }
        } else if (split[0] === "score") {
            switch (split[1]) {
                case "answerQuestion":
                    triggerListeners();
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = QuestionStore();