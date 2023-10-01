import {  useRef } from "react";


const UseRef=()=>{

    let  inputRef=useRef(null)


    // useEffect(()=>{
    //     inputRef.current.value="hello"
    //     inputRef.current.focus();
    // },[])

    let handle=()=>{
           inputRef.current.value=alert("hello good morning")
             inputRef.current.focus();
         }


    return(
        <div>
            <input type="text" ref={inputRef}></input>
            <button onClick={handle}>submit</button>


        </div>

    );
}
export default UseRef;