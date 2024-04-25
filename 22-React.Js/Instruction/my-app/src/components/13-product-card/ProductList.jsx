import React from 'react'
import products from "../../assets/data/products.json"
import {Col, Container, Row} from "react-bootstrap"
import Product from './Product'

const ProductList = () => {
  return (
    <Container   >
        <Row className='mt-5 g-5 justify-content-center align-items-center'>
            {
                products.map((product)=>(

                    <Col key={product.id} xs={12} md={6} sm={4} lg={4} xl={3} 
                    className='d-flex justify-content-center align-items-center' >
                        <Product {...product}  />
                    </Col>
                ))

            }

        </Row>

    </Container>
  )
}

export default ProductList