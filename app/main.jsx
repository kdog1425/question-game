var React = require("react");
var ReactDOM = require("react-dom");
var QuestionList = require("./components/QuestionList.jsx");
var questionStore = require("./stores/questionStore");
var _questions = [];
var _admin = true;

var getQuestionsCallback = function(questions, admin){
    _questions = questions;
    _admin = true;
    render();
};
		
questionStore.onChange(getQuestionsCallback);

function render(){
  	ReactDOM.render(
  	  <QuestionList questions={_questions} admin={_admin} />
  	  ,document.getElementById("container")
    )
}
