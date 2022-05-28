import React, { useEffect, useState } from 'react'

const Timer = ({initialvalue,finalvalue}) => {

    // const [idvalue,setId] = useState(null)
    const [value,setValue] = useState(initialvalue);
    useEffect(()=>{
        let id = setInterval(()=>{
            if(value>=finalvalue){
                clearInterval(id);
                setValue(0)
            }
            else{
                setValue(value+1);
            }
        },1000)
        return()=>{
            clearInterval(id)
        }
    },[value])
  return (
    <div>
        <h1>Timer</h1>
        <h2>{value}</h2>
    </div>
  )
}

export default Timer