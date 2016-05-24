var React = require("react");
var ReactDOM = require("react-dom");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var Link = require("react-router").Link;
var Center = require("react-center");
var hashHistory = require("react-router").hashHistory;
var QuestionList = require("./components/QuestionList.jsx");
var questionStore = require("./stores/questionStore");
var _questions = [];
var _isAdmin = false;

var getQuestionsCallback = function(res){
    _questions = res.questions;
    _admin = res.isAdmin;
    render();
};
		
questionStore.onChange(getQuestionsCallback);

var Layout = React.createClass({
   render:function(){
       return (
       	<div id="layout"> 
       		<h1>I'm a Layout </h1>
       		<Link to="game"> Play | </Link> 
       		<Link to="admin"> Admin </Link> 
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
					<div style={{width: "350px"}}>
						<QuestionList questions={_questions} isAdmin={false} />
					</div>
				</Center>
				<Center>
					** outcome viusalization stub **
				</Center>
			</div>
		)
	}
});

var AdminQuestionListWrapper = React.createClass({
	render:function(){
		return (
			<div id="admin-panel">
				<QuestionList questions={_questions} isAdmin={true} />
			</div>
		)
	}
});

function render(){
	
    ReactDOM.render(
    	<Router history={hashHistory}>
    	  <Route path="/" component={Layout}>
    	  <Route path="game" component={QuestionListWrapper} />
    	  <Route path="admin" component={AdminQuestionListWrapper} />
    	  </Route>
    	</Router>, document.getElementById('container')
    );
}
