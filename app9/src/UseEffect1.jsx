import { useEffect, useState } from "react";


const UseEffect1=()=>{
    let [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`chat ${count}`
    })
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Count</button>

        </div>
    );
}
export default UseEffect1
