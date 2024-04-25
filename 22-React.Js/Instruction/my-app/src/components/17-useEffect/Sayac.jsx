import React, { useEffect, useState } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'

const Sayac = () => {
  const [counter, setCounter] = useState(0)
  const [message, setmessage] = useState("hello")

  useEffect(()=>{

    window.document.title=`Buttona  ${counter} kez tiklandi`

  },[])

  
  return (
    <Container style={{margin:"5rem auto ",textAlign:"center"}}>
    <Alert style={{margin:"5rem auto ",textAlign:"center",width:"50rem",fontSize:"3rem"}} >
     {counter} kere tiklandi
    </Alert>

    <div className="d-flex justify-content-evenly mt-4 cursor-pointer">
      <Button
        variant="danger" onClick={()=>setCounter((prev)=>prev+1)} >
      Click Me
      </Button>
      
      <Button
        variant="success" onClick={()=>setmessage("Message gonder")} >
      Click Me
      </Button>
  
    </div>
  </Container>
  )
}

export default Sayac