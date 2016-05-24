var React = require("react");
var QuestionInfo = require("./QuestionInfo.jsx")
var AddQuestion = require("./AddQuestion.jsx");

module.exports = React.createClass({
   render:function(){
       var addQuestion = "";
       var divStyle = {width : "100%"};
       var isAdmin = this.props.isAdmin;
       if (isAdmin){
          addQuestion = <AddQuestion />;
       }
       return(
           <div className="row">
                <div className="col-md-6">
                    {addQuestion}
                </div>
                <div className="col-md-6" style={divStyle}>
                    {
                        this.props.questions.map(function(s,index){
                            return(
                                <QuestionInfo isAdmin={isAdmin} info={s} key={"question-"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});