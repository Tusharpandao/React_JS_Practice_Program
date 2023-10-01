
import React from "react"
import Users from "./User";
import Guest from "./Guest";


const Main=()=>{
    let user={
        name:"tushar",
        age:21,
        id:1
    }
     let guest={
        name:"rushikesh",
        age :25,
        id:2
    }
    let login=true;
    if (login) {
        return(
            <div>
                <Users user={user}/>
                
            </div>
        );
    }
    else{
        return(
            <div><Guest guest={guest}/></div>
        );
    }
}

export default Main;
