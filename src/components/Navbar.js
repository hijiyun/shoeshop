import React from 'react'
import {Container, Nav} from "react-bootstrap"

const Navbar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">shoeshoe shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navbar