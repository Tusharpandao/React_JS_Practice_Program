
import React,{useState} from "react";
import './App.css'

const Clock =()=>{

    let time=new Date().toLocaleTimeString();
    let [ctime,setTime]=useState(time);
    let updateTime=()=>{
        time=new Date().toLocaleTimeString();
        setTime(ctime)
    }

    setInterval(updateTime,1000)
    return(
        <div>

            {time}
        </div>
    );
}
export default Clock;