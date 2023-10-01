import React,{Component} from "react";

class ClassCom extends Component{
    Clickhand(){
        console.log("this is class Componet method");
    }
    render(){
        return(
            <div>
                <br/>
                <button onClick={this.Clickhand}> Class method without () </button>
                <br/><br/>
                <button onClick={this.Clickhand()}>call method  with () </button>
            </div>
        );
    }

    
}

export default ClassCom;