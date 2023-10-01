import React,{Component} from "react";

export default class StateDestuc extends Component{

    state={
        name:"jay",
        age:23

    }
    changeData(){
        this.setState({
            name:"Baburao",
            age:40,
            
        })
    }
    render(){
        const  {name,age}=this.state;
        return(
        <div>

            <h1>my name is {name} my age is {age}</h1>
            <button onClick={()=>{this.changeData()}}>ChangeData</button>
        </div>);
    }
}