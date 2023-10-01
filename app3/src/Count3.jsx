

import React,{Component} from "react";

export default class Count3 extends Component{


    constructor(props){
        super(props)
        this.state={
            count:0,
        }


    }
    increment(){
      this.setState(preState=>({
        count:preState.count +1,
      } ))
      console.log(this.state.count);

     
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
       
        
    }
    render(){
        return(
           <div><h1>Count Five time in both console and page : {this.state.count}</h1>
           <button onClick={()=>{this.incrementFive()}}>update</button></div>


        );
    }
    
}