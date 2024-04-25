import React from 'react'
import {Button, ButtonGroup, } from "react-bootstrap"

const Events = () => {

    const sayHello1 = () => { 
        alert("Merhaba")
     }

     const sayHello2 = (name) => { 
        alert(`Merhaba ${name}`)
     }



     const topla = (a,b) => {
        alert(`${a+b}`)
        return a+b;
     }

/*      console.log(topla(2,7)) */


  return (
    <div>

<ButtonGroup aria-label="Basic example" className='m-5' >

   
      <Button variant="danger" className='m-5' onClick={sayHello1} >Merhaba-1</Button>
   
      <Button variant="warning" className='m-5' onClick={()=>topla(2,7)} >Merhaba-2</Button>
    </ButtonGroup>




    </div>
  )
}

export default Events