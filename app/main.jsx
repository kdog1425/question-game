var React = require("react");
var ReactDOM = require("react-dom");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var Link = require("react-router").Link;
var Center = require("react-center");
var hashHistory = require("react-router").hashHistory;
var browserHistory = require("react-router").browserHistory;

// QUESTIONS
var QuestionList = require("./components/QuestionList.jsx");
var questionStore = require("./stores/questionStore");
var _questions = [];

var getQuestionsCallback = function(res){
    _questions = res.questions;
    render();
};    
questionStore.onChange(getQuestionsCallback); 

// OUTCOMES
var OutcomeList = require("./components/OutcomeList.jsx");
var outcomeStore = require("./stores/outcomeStore");
outcomeStore.onChange(getQuestionsCallback);

// SCORES
var ScoreList = require("./components/ScoreList.jsx");
var scoreStore = require("./stores/scoreStore");
var _scores = {};

var getScoresCallback = function(res){
    _scores = res;
};    
scoreStore.onChange(getScoresCallback);


var _isAdmin = false;

// VIEW
var Layout = React.createClass({
   render:function(){
       return (
       	<div id="layout"> 
       		<Link style={Object.assign(
            {},
            {'textDecoration': 'None'}, 
            {'fontSize' : '18px'}
          )}
            to="game"> Play |</Link> 
            <Link  style={Object.assign(
            {},
            {'textDecoration': 'None'}, 
            {'fontSize' : '18px'}
            )}
            to="admin"> Admin </Link> 
       		<div>
       			{this.props.children}
       		</div>
       	</div>
       );
   } 
});

var QuestionListWrapper = React.createClass({
  render:function(){
    return (
      <div id="game-panel">
        <Center>
          <div style={{width: "820px"}}>
            <QuestionList questions={_questions} isAdmin={false} />
          </div>
        </Center>
        <Center>
          <ScoreList scores={_scores} />
        </Center>
      </div>
    )
  }
});

var AdminQuestionListWrapper = React.createClass({
	render:function(){
		return (
			<div id="admin-panel">
        <Center>
          <div style={{width: "820px"}}>
                <QuestionList questions={_questions} isAdmin={true} />
          </div>
        </Center>
      </div>
		)
	}
});


function render(){
    ReactDOM.render(
    	<Router history={browserHistory}>
    	  <Route path="/" component={Layout}>
      	  <Route path="game" component={QuestionListWrapper} />
      	  <Route path="admin" component={AdminQuestionListWrapper} />
    	  </Route>
    	</Router>, document.getElementById('container')
    );
}
