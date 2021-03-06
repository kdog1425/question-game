var React = require("react");
var OutcomeInfo = require("./OutcomeInfo.jsx")

module.exports = React.createClass({
   render:function(){
       var divStyle = {width : "100%"};
       return(
           <div className="row">
                <div className="col-md-6" style={divStyle}>
                    {
                        this.props.outcomes.map(function(s, index){
                            return(
                                <OutcomeInfo info={s} key={"outcome-"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});