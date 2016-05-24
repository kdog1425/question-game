var React = require("react");
var actions = require("../actions/QuestionActions");

module.exports = React.createClass({
    deleteQuestion: function(e){
        e.preventDefault();
        actions.deleteQuestion(this.props.info);
    },
    render:function(){
        var deleteLink;
        if (this.props.isAdmin) {
            deleteLink = (<span className="pull-right text-uppercase delete-button" onClick={this.deleteQuestion}>&times;</span>);
        }
        return(
            <div className="panel panel-default question-info">
                <div className="panel-heading">
                    {this.props.info.question_text}
                    {deleteLink}
                </div>
            </div>
        )
    }
})