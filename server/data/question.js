var mongoose = require("mongoose");
var questionSchema = mongoose.Schema({
    question_text: String,
    outcomes: []
});

module.exports = mongoose.model("question", questionSchema);