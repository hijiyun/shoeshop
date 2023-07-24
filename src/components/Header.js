import React from 'react'
import {Navbar, Container, Nav, Card} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import Cart from './CartPage'

const Header = () => {

  let navigate = useNavigate();

  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('./')}}>shoeshoe shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('./')}} >Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('./cart')}}>Cart</Nav.Link>
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