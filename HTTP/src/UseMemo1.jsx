import { useState } from "react";


const UseMemo1=()=>{
    let[countOne,setCountOne]=useState(0)
    let [countTwo,setCountTwo]=useState(0)

    let  incrementCountOne=()=>{
        setCountOne(countOne+1)
    }
    let incrementCountTwo=()=>{

        setCountTwo(countTwo +1)
    }

    let even=()=>{
        let i=0;
        while(i<10000)i++
        return i
    }

return(
    <div>
        <button onClick={incrementCountOne}> incrementCountOne{countOne}</button>
        <span>{even()}</span> <br />
        <button onClick={incrementCountTwo}>incrementCountTwo {countTwo}</button>

    </div>
);

}
export default UseMemo1;