

import React,{Component} from "react";

export default class Count2 extends Component{


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
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
       
        
    }
    render(){
        return(
           <div><h1>Count Five time in console : {this.state.count}</h1>
           <button onClick={()=>{this.incrementFive()}}>update</button></div>


        );
    }
    
}