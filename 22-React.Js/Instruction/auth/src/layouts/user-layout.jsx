import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const UserLayout = () => {
  return (
    <>
        <Header/>
        <Container style={{marginTop: "20px"}}>
            <Outlet/>
        </Container>
        
    </>
  )
}

export default UserLayout