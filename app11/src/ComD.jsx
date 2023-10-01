import React,{useContext} from "react";
import { User } from "./ComA";

const ComD=()=>{
    let user=useContext(User)
    return(
        <div>
            {user}
        </div>
    );

}
export default ComD;