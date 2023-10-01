import { useMemo, useState } from "react";


const UseMemo2=()=>{
    let[countOne,setCountOne]=useState(0)
    let [countTwo,setCountTwo]=useState(0)

    let  incrementCountOne=()=>{
        setCountOne(countOne+1)
    }
    let incrementCountTwo=()=>{

        setCountTwo(countTwo +1)
    }

    let even=useMemo(()=>{
        let i=0;
        while(i<10000)i++;

        return countOne%2===0
    },[countOne])



return(
    <div>
        <button onClick={incrementCountOne}> incrementCountOne{countOne}</button>
        <span>{even?"even":"odd"}</span> <br />
        <button onClick={incrementCountTwo}>incrementCountTwo {countTwo}</button>

    </div>
);

}
export default UseMemo2;