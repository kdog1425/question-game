var React = require("react");
var actions = require("../actions/QuestionActions");

module.exports = React.createClass({
    deleteQuestion: function(e){
        e.preventDefault();
        actions.deleteQuestion(this.props.info);
    },
    render:function(){
        console.log(this.props.info);
        return(
            <div className="panel panel-default question-info">
                <div className="panel-heading">
                    {this.props.info.question_text}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteQuestion}>&times;</span>
                </div>
            </div>
        )
    }
})