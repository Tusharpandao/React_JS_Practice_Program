import React,{Component} from "react";

export default class EventBind extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello",
      }
     
      // for console
      console.log("Hello");
    }
    chengeMessage(){
        this.setState({
            message:"GoodBYE"
        })
        // for console
        console.log("Good BYE");
    }

    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            {/* first way using fat arrow function */}
            <button onClick={()=>{this.chengeMessage()}}> Click Me</button> <br />
            {/* secound way using bind method */}
            <button  onClick={this.chengeMessage.bind(this)}>Change the Massage</button> <br />
            
            </>
        );
    }
}
