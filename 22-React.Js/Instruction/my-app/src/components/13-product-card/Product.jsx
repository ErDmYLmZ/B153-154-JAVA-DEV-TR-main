import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Product = (props) => {
    const {id,image,desc,price,title}=props

    const addToBasket=()=>{
        alert(`${title} added to basket`)
    }

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={require(`../../assets/img/${image}`)} />
    <Card.Body className='text-center '>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {desc}
      </Card.Text>
      <Card.Subtitle className='fs-3 mb-1'>${price}</Card.Subtitle>

      <Button variant="warning" onClick={addToBasket}>Add to Basket</Button>
    </Card.Body>
  </Card>
  )
}

export default Product