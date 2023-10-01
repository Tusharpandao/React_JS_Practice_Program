import React, { useReducer } from 'react'

let initialState=0;
let reducer=( State,action)=>{

    switch (action) {
        case 'increment':=
            return State +1;            
        
        case 'decrement':
            return State -1
        
        case 'reset':
            return initialState 
    
        default:
            return State;
    }
}

const UseReducer = () => {
    let[count,dispatcher]=useReducer(reducer,initialState)

  return (
    <div>
        <h1> Count : {count}</h1>
        <button onClick={()=>{dispatcher('increment')}}> Increment</button>
        <button onClick={()=>{dispatcher('decrement')}}> Decrement</button>
        <button onClick={()=>{dispatcher('reset')}}>Rest</button>

    </div>
  )
}

export default UseReducer