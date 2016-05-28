var React = require("react");
var actions = require("../actions/OutcomeActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          outcome_text:"",
          yes_value:"",
          no_value:"",
          question_id:this.props.question_id
      }  
    },
    addOutcome:function(e){
        e.preventDefault();
        actions.addOutcome(this.state);
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
            <form className="form" onSubmit={this.addOutcome}>
                <div className="form-group">
                    <label className="control-label" htmlFor="outcome_text">Outcome:</label>
                    <input type="text" className="form-control" id="outcome_text" name="outcome_text" value={this.state.outcome_text} onChange={this.handleInputChange} placeholder="Add a outcome.." />                    
                    <input type="text" className="form-control" id="yes_value" name="yes_value" value={this.state.yes_value} onChange={this.handleInputChange} placeholder="yes_value" />                    
                    <input type="text" className="form-control" id="no_value" name="no_value" value={this.state.no_value} onChange={this.handleInputChange} placeholder="no_value" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Outcome</button>
                </div>
            </form>
        )
    }
})