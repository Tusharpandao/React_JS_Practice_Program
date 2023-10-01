import { useEffect, useState } from "react";


const UseEffect2=()=>{
    let [count,setCount]=useState(0)
    let [name,setName]=useState({name1:"", email:""})
    useEffect(()=>{
        document.title=`chat ${count}`
        console.log("inside use Effect hook");
    },(count))
    console.log("Hello");
    return(
        <div>
            <input type="text" value={name.name1} onChange={e=>setName({name1:e.target.value})} />
            <input type="text" value={name.email}  onChange={e=>setName({email:e.target.value})}/>
            <button onClick={()=>{setCount(count+1)}}>Count</button>

        </div>
    );
}
export default UseEffect2
