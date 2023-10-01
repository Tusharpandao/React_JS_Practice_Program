import './Head.css' 
import React from "react";

let Tablese =()=>{
    let employee=[{name:"tushar",id:1,proff:"dba"},{name:"ram",id:2,proff:"web dev"},{name:"shiv",id:3,proff:"admin"},
    {name:"digvijay",id:4,proff:"analyst"},{name:"anil",id:5,proff:"softwere Engg"}];
   
    let getDatas=employee.map((data)=><tr key={data.id}><td id='empid' >{data.id}</td><td>{data.name}</td> <td>{data.proff}</td></tr>)
    return(
        <>
        <table>
       <thead><tr> <th>Id</th><th>Name</th><th>Profession</th></tr></thead> 
        <tbody>{getDatas}</tbody>
        </table>
        </>
    );
    
}
export default Tablese;