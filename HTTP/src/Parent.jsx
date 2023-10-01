import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

export const Parent = () => {
  
    let [age, setAge]=useState(24)
    let [salary, setSalary]=useState(1000)

    let incrementAge=useCallback(()=>{
        return setAge(age+1)
    },[age]
    )
    let incrementSalary=useCallback(()=>{
        return setSalary(salary+500)
    },[salary])
  
  
  
    return (
    <div>
        <Title/>
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge} > incrementAge</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary} > incrementSalary</Button>


        
     </div>
  )
}
