import React,{useState} from "react";
import './App.css'

const UseTable=()=>{

    let [name,setname]=useState({firstName:"",lastName:"",date:""})
    return(
        <div>
            <table>
                <tr>
                    <td> First Name : </td>
                    <td><input type="text" placeholder="Enter First Name" value={name.firstName} onChange={e=>setname({...name,firstName:e.target.value})}  /></td>
                </tr>
                <tr>
                    <td>Last Name : </td>
                    <td><input type="text" placeholder="Enter Last Name " value={name.lastName}  onChange={e=>setname({...name,lastName:e.target.value})}/></td>
                </tr>
                <tr>
                    <td>DOB : </td>
                    <td><input type="date"  value={name.date}  onChange={e=>setname({...name,date:e.target.value})} /></td>
                </tr>
            </table>
           
            

            <table id="output">
                <tr>
                    <th>First Name</th>
                    <th> Last Name</th>
                    <th> DOB</th>
                </tr>
                <tr>
                    <th>{name.firstName}</th>
                    <th>{name.lastName}</th>
                    <th>{name.date}</th>
                </tr>
            </table>
        </div>
    );
}
export default UseTable;