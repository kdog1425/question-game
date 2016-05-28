var dispatcher = require("../dispatcher");

module.exports = {
    answerQuestion:function(question, answer){
        dispatcher.dispatch({
           question:question,
           answer:answer,
           type:"score:answerQuestion" 
        });
    }
}
