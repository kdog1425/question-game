var React = require("react");
var actions = require("../actions/OutcomeActions");

module.exports = React.createClass({
    deleteOutcome: function(e){
        e.preventDefault();
    },
    render:function(){
      
        return(
            <div className="panel panel-default outcome-info">
                <div className="panel-heading panel-outcome">
                    {this.props.info.outcome_text}
                </div>
            </div>
        )
    }
})