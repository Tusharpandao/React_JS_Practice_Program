import React,{Component} from "react";

export default class StateDestucation2 extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         
    
        name:"jay",
        age:23,
        rol:this.props.roll,

    
      }
    }
    changeData(){
        this.setState({
            name:"Baburao",
            age:40,
            rol : this.props.roll,
            
        })
    }
    render(){
        const  {name,age,rol}=this.state;
        return(
        <div>

            <h1>my name is {name} my age is {age}  my roll number {rol}</h1>
            <button onClick={()=>{this.changeData()}}>ChangeData</button>
        </div>);
    }
}