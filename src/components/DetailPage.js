import React, { useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import img from '../img/img2.webp'
import shoesdata from '../data'

const DetailPage = () => {
    let [data] = useState(shoesdata)
    console.log(data[1].title)
  return (
    <div>
        <Container className='detail-container'>
            <Row>
                <Col className='img-detail'>
                    <img src={img} alt="detail img" />
                </Col>
                <Col className='buy-detail'>
                    <h4 style={{margin:'50px'}}>{data[1].title}</h4>
                    <p style={{margin:'50px'}}>{data[1].price}</p>
                    <Button variant="danger" className='btn-detail'>Buy</Button>{' '}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DetailPage