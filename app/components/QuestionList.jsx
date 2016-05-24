var React = require("react");
var QuestionInfo = require("./QuestionInfo.jsx")
var AddQuestion = require("./AddQuestion.jsx");

module.exports = React.createClass({
   render:function(){
       console.log('render question list');
       var addQuestion = "";

       if (this.props.admin){
          addQuestion = <AddQuestion />;
       }
       return(
           <div className="row">
                <div className="col-md-6">
                    {addQuestion}
                </div>
                <div className="col-md-6">
                    {
                        this.props.questions.map(function(s,index){
                            return(
                                <QuestionInfo info={s} key={"question-"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});