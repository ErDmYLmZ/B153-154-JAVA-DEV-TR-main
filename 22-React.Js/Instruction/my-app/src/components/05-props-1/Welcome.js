import React from 'react'

const Welcome = ({name,surName}) => {

//! 1- yol: props kullanmak

//! 2-yol: destructuring yapmak

//const {name,surName}=props

//! 3- direk ne gonderdiysek o sekilde { } icinde karsilariz

   


  return (
    <div>
        <p>Welcome to our company {name} {surName}   </p>

    </div>
  )
}

export default Welcome