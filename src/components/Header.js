import React from 'react'
import {Navbar, Container, Nav, Card} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import Cart from './CartPage'
import axios from 'axios'
import { useQuery } from 'react-query'

const Header = () => {

  let navigate = useNavigate();

  // [ axios썻을 때 ]
  // axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
  //   console.log(a.data.name)
  // })

  // [ react-query 썻을 때 ]
  let result = useQuery('작명', ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((a)=> a.data)
  })

  
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('./')}}>shoeshoe shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('./')}} >Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('./cart')}}>Cart</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            {result.isLoading ? '로딩중' : '반가워요  '+result.data.name}
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