
import React from "react";
import PropsDes from "./ObjectDistucture/PropsDis";
import PropsDes1 from "./ObjectDistucture/PropsDes2";
import StateDestuc from "./ObjectDistucture/StateDes";
import StateDestucation2 from "./ObjectDistucture/StateDes2";
const App=()=>{
    return(
        <>
        <PropsDes name="tushar" age={23} />
        <PropsDes1 obj={{name:"tushar", age:23, proff:"web developer"}}/>
        <StateDestuc />
        <StateDestucation2 roll={1234}/>
        </>
    );

}

export default App;
