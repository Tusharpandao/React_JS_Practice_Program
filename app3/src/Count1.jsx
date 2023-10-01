
import React,{Component} from "react";

export default class Count1 extends Component{


    constructor(props){
        super(props)
        this.state={
            count:0,
        }


    }
    increment(){
        this.setState({
        count:this.state.count+1,
    },()=>{console.log(`callback count`, this.state.count);}
        )
        console.log(this.state.count);
    }

    render(){
        return(
           <div><h1>Count One Time : {this.state.count}</h1>
           <button onClick={()=>{this.increment()}}>update</button></div>


        );
    }
    
}