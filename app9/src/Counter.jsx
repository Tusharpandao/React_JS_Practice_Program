import React,{useState} from "react";
const Counter=()=>{

    let initialCount=0;
    let [count,setCount]=useState(initialCount);

    return(

        <div>
            <h1>count : {count}</h1> <br />
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count +5)}> Increment</button>
            <button onClick={()=>setCount(count -1)}>Dicrement</button>
        </div>
    );
}d
export default Counter;