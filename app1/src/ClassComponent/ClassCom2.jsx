import React,{Component} from "react";

export class FirstClass extends Component{
    render(){
        return <h1>hello this is class base universal FirstClass Component</h1>
    }

    
}
export class SecoundClass extends Component{
    render(){
        return <h1>hello this is class base universal SecoundClass Component</h1>
    }
}

export class ThardClass extends Component{
    render(){
        return <h1>hello this is class base universal ThardClass Component</h1>
    }
}
class FourthClass extends Component{
    render(){
        return(
        <>
         <h2>this is default class </h2>
         <h1>this is fac</h1>
        
        </>)
    }
}
export default FourthClass