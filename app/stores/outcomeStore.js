var dispatcher = require("../dispatcher");
var outcomeService = require("../services/outcomeService");

function OutcomeStore() {
    var listeners = [];

    function onChange(listener) {
        getOutcomes(listener);
        listeners.push(listener);
    }
    
    function getOutcomes(cb){
        outcomeService.getOutcomes().then(function (res) {
            cb(res);
        });
    }

    function addOutcome(outcome) {
        outcomeService.addOutcome(outcome).then(function (res) {
            triggerListeners();
        });
    }

    function deleteOutcome(outcome) {
        outcomeService.deleteOutcome(outcome).then(function (res) {
            triggerListeners();
        });
    }

    function triggerListeners() {
        getOutcomes(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "outcome") {
            switch (split[1]) {
                case "addOutcome":
                    addOutcome(payload.outcome);
                    break;
                case "deleteOutcome":
                    deleteOutcome(payload.outcome);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = OutcomeStore();