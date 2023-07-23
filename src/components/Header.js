import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">shoeshoe shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
          <div className='page-change'>
            <Link className='home' to="/">Home</Link>
            <Link className='detail' to="/detail">Detail</Link>
          </div>
        </Container>
      </Navbar>
  )
}

export default Header