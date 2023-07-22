import './App.css';
import {Navbar, Container,Nav,Row,Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <div className='card'>
        <Container>
          <Row>
            <Col>
              <img src="https://shoemarketnyc.com/cdn/shop/files/2159800_P2_50cba7fa-2ed9-4b10-84f3-3f575cb806cd.jpg?v=1688772055&width=533" alt="#" />
              <h4>BUFFALO ASPHA SANDALS IN LAVENDER</h4>
              <p>160,000</p>
            </Col>
            <Col>
              <img src="https://shoemarketnyc.com/cdn/shop/files/2159520_P1_2.jpg?v=1689183189&width=533" alt="#" />
              <h4>BUFFALO CLD CORIN GRADIENT SNEAKER</h4>
              <p>210,000</p>
            </Col>
            <Col>
              <img src="https://shoemarketnyc.com/cdn/shop/files/2159569_P2_4617d442-83db-41d3-bc50-9a434623cba5.jpg?v=1688771894&width=533" alt="#" />
              <h4>BUFFALO LONDON CLD SLIDES IN LAVENDER</h4>
              <p>61,000</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
