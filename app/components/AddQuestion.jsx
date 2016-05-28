var React = require("react");
var actions = require("../actions/QuestionActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          question_text:"",
          outcomes:[]
      }  
    },
    addQuestion:function(e){
        e.preventDefault();
        actions.addQuestion(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addQuestion}>
                <div className="form-group">
                    <label className="control-label" htmlFor="question_text">Question:</label>
                    <input type="text" className="form-control" id="question_text" name="question_text" value={this.state.question_text} onChange={this.handleInputChange} placeholder="Add a question.." />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Question</button>
                </div>
            </form>
        )
    }
})