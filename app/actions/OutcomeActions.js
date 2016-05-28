var dispatcher = require("../dispatcher");

module.exports = {
    addOutcome:function(outcome){
        dispatcher.dispatch({
           outcome:outcome,
           type:"outcome:addOutcome" 
        });
    },
    deleteOutcome:function(outcome){
        dispatcher.dispatch({
           outcome:outcome,
           type:"outcome:deleteOutcome" 
        });
    }
}
