import React from 'react'

const Jsx3ShortCircuit = () => {
    const user={
        name:'omnia',
        age:44,
        isStudent:true,
        

    }

    const{isStudent,name,age}=user
    


  return (
    <div>
        {
            isStudent && <h2>{name}</h2>
        }

        {
            age>=18 && <h2>Go to Bar</h2>
        }

        {
            age>=18 || <h2>Go to Home</h2>
        }





        
     </div>
  )
}

export default Jsx3ShortCircuit