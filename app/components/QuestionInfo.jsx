var React = require("react");
var actions = require("../actions/QuestionActions");

module.exports = React.createClass({
    deleteQuestion: function(e){
        e.preventDefault();
        actions.deleteQuestion(this.props.info);
    },
    render:function(){
        var deleteLink;
        var answerBtns;
        if (this.props.isAdmin) {
            deleteLink = (<span className="pull-right text-uppercase delete-button" onClick={this.deleteQuestion}>&times;</span>);
        } else {
            answerBtns = (<span> 
                            <button type="button" className="pull-right btn btn-success">Yes</button>
                            <button type="button" className="pull-right btn btn-danger">No</button>
                          </span>);
        }
        return(
            <div className="panel panel-default question-info">
                <div className="panel-heading">
                    {this.props.info.question_text}
                    {deleteLink}
                    {answerBtns}
                </div>
            </div>
        )
    }
})