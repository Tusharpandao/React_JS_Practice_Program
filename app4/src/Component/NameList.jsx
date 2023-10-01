
import './Head.css'
import React from "react";


let NameList=()=>{
 let empName=["tuhsar","anil","baburao","shankarpalya","tushar"];
 let getName=empName.map((data,index)=><h1 key={index}> {data}</h1>)


    return(
        <div>

        {getName}
        </div>
    );
}
export default NameList;