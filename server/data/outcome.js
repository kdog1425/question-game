var mongoose = require("mongoose");
var questionSchema = mongoose.Schema({
    outcome_text: String,
    yes_value: String,
    no_value: String
});

module.exports = mongoose.model("outcome", questionSchema);