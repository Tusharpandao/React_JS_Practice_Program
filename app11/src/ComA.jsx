import React from "react";
import ComB from "./ComB";


export let User=React.createContext()

const ComA=()=>{
    return(
        <div>
            <User.Provider value={"tushar"}>
            <ComB/>
            </User.Provider>

        </div>
    );

}
export default ComA;