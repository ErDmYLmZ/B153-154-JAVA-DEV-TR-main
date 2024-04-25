import React, { useEffect, useState } from 'react'

const FunctionComp = ({image}) => {
    const [message, setMessage] = useState("Hello world")


useEffect(() => {


 
}, [message,image])


  return (
    <div>
        <h2>{message} </h2>
        <h2></h2>
    </div>
  )
}

export default FunctionComp