import React from "react";
let Fun=()=>{
    let employee=[{name:"tushar",id:1,proff:"DBA"},{name:"shiv",id:3,proff:"admin"},{name:"digvijay",id:4,proff:"analyst"},{name:"anil",id:5,proff:"softwere Engg"}];
    let getData=employee.map(data=><h1 key={data.id}>My name is {data.name}</h1>)
    return(
        <>
        {getData}
        
        
        </>
    );

}
export default Fun;
