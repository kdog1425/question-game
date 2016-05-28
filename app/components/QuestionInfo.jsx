var React = require("react");
var actions = require("../actions/QuestionActions");
var scoreActions = require("../actions/ScoreActions");
var AddOutcome = require("./AddOutcome.jsx");
var OutcomeList = require("./OutcomeList.jsx");

module.exports = React.createClass({
    deleteQuestion: function(e){
        e.preventDefault();
        actions.deleteQuestion(this.props.info);
    },
    answerYes: function(){
        scoreActions.answerQuestion(this.props.info, 'YES');
    },
    answerNo: function(){
        scoreActions.answerQuestion(this.props.info, 'NO');
    },
    render:function(){ 
        var deleteLink;
        var answerBtns;
        var addOutcome;
        var outcomeList;

        if (this.props.isAdmin) {
            deleteLink = (<span className="pull-right text-uppercase delete-button" onClick={this.deleteQuestion}>&times;</span>);
            addOutcome = <AddOutcome question_id={this.props.info._id} />;
            outcomeList = <OutcomeList outcomes={this.props.info.outcomes} />;
        } else {
            answerBtns = (<span> 
                            <button type="button" className="pull-right btn btn-success" onClick={this.answerYes}>Yes</button>
                            <button type="button" className="pull-right btn btn-danger" onClick={this.answerNo}>No</button>
                          </span>);
        }
        return(
            <div className="panel panel-default question-info">
                <div className="panel-heading">
                    {this.props.info.question_text}
                    {deleteLink}
                    {addOutcome}
                    {outcomeList}
                    {answerBtns}
                </div>
            </div>
        )
    }
})