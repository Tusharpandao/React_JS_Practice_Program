
import React,{useState} from "react";

const UseArray=()=>{

    let  [items,setItems]=useState([])

    console.log(items);

    let addItems=()=>{

        setItems([...items,{id:items.length,
        value1:Math.floor(Math.random()*10)+1}])
    }
    return(
        <div>
            <button onClick={addItems} > ADD</button>
           <ul>
            {items.map(data=>(
                <li key={data.id}>{data.value1}</li>
            ))}
           </ul>
        </div>
    );
}
export default UseArray;