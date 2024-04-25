import React from 'react'

const Stat = ({name,value}) => {
  return (
    <div>
        <h3>{value}</h3>
        <h5>{name}</h5>
    </div>
  )
}

export default Stat