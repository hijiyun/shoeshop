import React, { useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import img from '../img/img2.webp'
import { useParams } from 'react-router-dom'

const DetailPage = (props) => {

    let {id} = useParams();
    let {i} = props.img[id]
    console.log(i)

    return (
    <div>
        <Container className='detail-container'>
            <Row>
                <Col className='img-detail'>
                    <img src={i} alt="detail img" />
                </Col>
                <Col className='buy-detail'>
                    <h4 style={{margin:'50px'}}>{props.shoes[id].title}</h4>
                    <p style={{margin:'50px'}}>{props.shoes[id].price}</p>
                    <Button variant="danger" className='btn-detail'>Buy</Button>{' '}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DetailPage