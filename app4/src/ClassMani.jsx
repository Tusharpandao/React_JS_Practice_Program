import './Ext.css'
import './Ex.module.css';
import React from "react";


let Ext=(props)=>{
    const className=props.primary?"primary":"primary1";
    return(
        <>
        <h1 className={`${className} font`}>Multiple className for same elements</h1>
        <h2 className='backColor'>Lorem, ipsum dolor.</h2>
        </>
    );
}
export default Ext;