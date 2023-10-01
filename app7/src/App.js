// import HoComp from "./HoComp";
// import RefParent from "./RefParent";
import React from "react";

// import { click } from "@testing-library/user-event/dist/click";
// import Counter from "./Task/Task2/Counter";
// import OnClick from "./Task/Task2/OnClick";
import ComA from "./PropsDrilling/ComA";

// import OnClick from "./Task/Task2/OnClick";
// import OnHover from "./Task/Task2/OnHover";



// import Main from "./Main";
// import Gest from "./Task/Gest";
// import User from "./Task/User";

// import LifeCycle from "./LifrCycle";



const App=()=>{
    return(

        <>
        
        
        {/* <RefParent/>
        <HoComp/> */}
        {/* <LifeCycle/> */}
        {/* <Main name={(isLoggedIn)=>isLoggedIn?<OnClick/>:<OnHover/>} /> */}

        {/* <Counter render={(Count,incrementCount)=>{ OnClick Count={Count}}} /> */}
        <ComA name="tushar"/>
        </>
    );
}

export default App;