import {  useRef } from "react";


const UserInput=()=>{

    let  inputRef=useRef(null)


    // useEffect(()=>{
    //     inputRef.current.value="hello"
    //     inputRef.current.focus();
    // },[])

    let handle=()=>{
        let inputvalue=inputRef.current.value;
           inputRef.current.value=alert(`hello good morning ${inputvalue}`)
             inputRef.current.focus();
         }


    return(
        <div>
            <form action="">
            <input type="text" ref={inputRef} > </input>
            <button onClick={handle}>submit</button>
            </form>

        </div>

    );
}
export default UserInput;