import React from "react";

const Fun2=()=>{
    function ClickHandler() {
     console.log("This is Event Function ");
        
    }
    return(
        <div>
            <button onClick={ClickHandler}> Click Me</button>
        </div>
    );
}
export default Fun2;