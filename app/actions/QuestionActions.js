var dispatcher = require("../dispatcher");

module.exports = {
    addQuestion:function(question){
        dispatcher.dispatch({
           question:question,
           type:"question:addQuestion" 
        });
    },
    deleteQuestion:function(question){
        dispatcher.dispatch({
           question:question,
           type:"question:deleteQuestion" 
        });
    },
    answerQuestion:function(question, answer){
        dispatcher.dispatch({
           question:question,
           answer:answer,
           type:"question:answerQuestion" 
        });
    }
}
