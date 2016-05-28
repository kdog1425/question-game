var dispatcher = require("../dispatcher");
var _scores = {};


function ScoreStore() {
    var listeners = [];

    function onChange(listener) {
        getScores(listener);
        listeners.push(listener);
    }
    
    function getScores(cb){
        console.log('score store:', _scores);
        cb(_scores);
    }

    function answerQuestion(question, answer){
        console.log('store - answerQuestion: ', question, answer);
        var outcomes = question.outcomes;
        for (o in outcomes){
            var text = outcomes[o].outcome_text;
            if (!(text in _scores)){
                switch(answer){
                    case 'YES':
                        _scores[text] = parseInt(outcomes[o].yes_value);
                        break;
                    case 'NO':
                        _scores[text] = parseInt(outcomes[o].no_value);        
                        break;
                }
            } else {
                switch(answer){
                    case 'YES':
                        _scores[text] += parseInt(outcomes[o].yes_value);
                        break;
                    case 'NO':
                        _scores[text] += parseInt(outcomes[o].no_value);        
                        break;
                }
            }
        }
        //triggerListeners();
    }

    function triggerListeners() {
        getScores(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    
    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "score") {
            switch (split[1]) {
                case "answerQuestion":
                    answerQuestion(payload.question, payload.answer);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = ScoreStore();