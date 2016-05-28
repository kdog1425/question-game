var React = require("react");
var QuestionInfo = require("./QuestionInfo.jsx")
var AddQuestion = require("./AddQuestion.jsx");
var AddOutcome = require("./AddOutcome.jsx");
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

module.exports = React.createClass({
   render:function(){
       var addQuestion = "";
       var isAdmin = this.props.isAdmin;
       if (isAdmin){
          addQuestion = <AddQuestion />;
       }
       return(
           <Row className="show-grid">
                <div xs={6} md={4}>
                    {addQuestion}
                </div>
                
                    {
                        this.props.questions.map(function(s,index){
                            return(
                              <Col xs={6} md={4} >
                                <QuestionInfo isAdmin={isAdmin} info={s} key={"question-"+index} />
                                </Col>
                            )         
                        })
                    }
                
           </Row>
       )
   } 
});