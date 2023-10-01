import React from "react";
const Fun1=()=>{
    return(
        // without using jsx
        React.createElement("div",null,"Hi ",React.createElement("h1",{id:"head"},"Good morning !!!!"),React.createElement("h2",{id:"head2"}))
    
        
    );
}
export default Fun1;