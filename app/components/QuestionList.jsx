var React = require("react");
var QuestionInfo = require("./QuestionInfo.jsx")
var AddQuestion = require("./AddQuestion.jsx");

module.exports = React.createClass({
   render:function(){
       console.log('render question list');
       console.log(this.props);
       var addQuestion = "";

       if (this.props.isAdmin){
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