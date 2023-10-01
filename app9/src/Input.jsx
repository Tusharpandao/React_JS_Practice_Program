import React,{useState} from "react";

const UseObject=()=>{

    let [name,setname]=useState({firstName:"",lastName:"",date:""})
    return(
        <div>
            <input type="text" placeholder="Enter First Name" value={name.firstName} onChange={e=>setname({...name,firstName:e.target.value})}  />
            <input type="text" placeholder="Enter Last Name " value={name.lastName}  onChange={e=>setname({...name,lastName:e.target.value})}/>
            <input type="date"  value={name.date}  onChange={e=>setname({...name,date:e.target.value})} />

            <h1> This is Your First Name  {name.firstName}</h1>
            <h1>This is Your Last Name  {name.lastName}</h1>
            <h1> Date of Birth {name.date}</h1>
            <h1>{JSON.stringify(name)}</h1>
        </div>
    );
}
export default UseObject;