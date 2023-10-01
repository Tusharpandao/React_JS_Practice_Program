const { useEffect } = require("react");

const UseEffectHook=()=>{
    useEffect(()=>{
        console.log("use EFFect hook");
    })
    console.log("hello outside hook");

    return(
        <div>
            <h1>Hello use Effect</h1>
        </div>
    );
}

export default UseEffectHook