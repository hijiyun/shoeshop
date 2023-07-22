import './App.css';
import {Navbar, Container,Nav,Row,Col} from 'react-bootstrap'
import data from "./data"
import { useState } from 'react';
import Card from './components/Card';
import img1 from "./img/img1.webp"
import img2 from "./img/img2.webp"
import img3 from "./img/img3.webp"
import {Routes, Route, Link} from "react-router-dom"




function App() {
  
  let [shoes] = useState(data)
  let [img] = useState([img1,img2,img3])
  console.log(img[1])


  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">shoeshoe shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
      <Route path='/' element={  
      <>
      <div className='main-bg'></div>
      <div className='all-card'>
        <Container>
          <Row>
            {
              shoes.map((a, i)=>{
                return(
                  <Card shoes={shoes[i]} i={i+1}/>
                )
              })
            }
          </Row>
        </Container>
      </div>
      </>
      }/>
      <Route path='/detail' element={<div>상세 페이지임</div>}/>
      <Route path='/cart' element={<div>장바구니 페이지임</div>}/>
    </Routes>
    </div>
  );
}

export default App;
