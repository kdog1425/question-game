var React = require("react");
var ScoreInfo = require("./ScoreInfo.jsx")

module.exports = React.createClass({
  getInitialState: function(){
    return {
      scores: {}
    }
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      scores: nextProps
    });
  },
   render:function(){
       //console.log('score list:', this.props.scores);
       var divStyle = {width : "100%"};
       console.log(this.props.scores);
       var scores = this.props.scores;
       return(
           <div className="row">
                
                    {
                        Object.keys(this.props.scores).map(function (key){
                            return(
                              <div className="col-md-6" style={divStyle}>
                                <ScoreInfo text={key} score={scores[key]} />
                              </div>
                            )         
                        })
                    }
               
           </div>
       )
   } 
});