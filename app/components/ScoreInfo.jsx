var React = require("react");
module.exports = React.createClass({
    render:function(){
    	var divStyle = {"background-color" : "pink"};
        return(
            <div style={divStyle} className="panel panel-default score-info">
                <div className="panel-heading panel-score">
                    {this.props.text} | {this.props.score}
                </div>
            </div>
        )
    }
});