import React from 'react'

const Title = ({text,classes}) => {
    
  return (
    <h1 className={!classes ? "title text-center": classes}>

        {!text ? "title": text}

    </h1>
  )
}

export default Title