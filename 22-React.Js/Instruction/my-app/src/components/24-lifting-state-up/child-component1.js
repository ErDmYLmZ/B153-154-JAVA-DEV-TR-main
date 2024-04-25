import React from 'react'

const ChildComponent1 = ({handleCounter}) => {
  return (
    <div>
        <h3>Child 1</h3>
        <button onClick={()=> handleCounter()}>Up</button>

    </div>
  )
}

export default ChildComponent1