import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Button, Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addItem } from '../store'

let Discount = styled.div`
    background-color: #ffff00b9;
`

const DetailPage = (props) => {
    let [discount, setDiscount] = useState(true)
    let [num, setNum] = useState('')
    let [tab, setTab] = useState(0)
    let dispatch = useDispatch();

    useEffect(()=>{
        let time = setTimeout( ()=>{  setDiscount(false)  }, 2000)
        return ()=>{
            clearTimeout(time)
        }
    }, [])
    useEffect(()=>{
        if(isNaN(num) == true){
            alert("숫자만 !")
        }
    },[num])

    let {id} = useParams();
    let findItem = props.shoes.filter((x)=> x.id == id);
    console.log("finditem",findItem[0].title)
    


    return (
    <div>
        <Container className='detail-container'>
            {
                alert == true ? 
                <Discount>2초 이내 구매시 할인</Discount>
                : null
            }
            <Row>
                <Col className='img-detail'>
                    <img src={props.img[id]} alt="detail img" />
                </Col>
                <Col className='buy-detail'>
                    <input onChange={(event)=>{setNum(event.target.value)}} />
                    <h4 style={{margin:'50px'}}>{findItem[0].title}</h4>
                    <p style={{margin:'50px'}}>{findItem[0].price}</p>
                    <Button variant="danger" className='btn-detail' onClick={()=>{
                        dispatch(addItem({id:2, name:'BUFFALO CLD CORIN GRADIENT SNEAKER', count:4},))
                    }}>Buy</Button>{' '}
                </Col>
            </Row>
        </Container>

        <Nav justify variant="tabs" defaultActiveKey="link-1">
      <Nav.Item>
        <Nav.Link eventKey="link-1">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
    {
        tab == 0 ? <div>내용0</div> : null
    }
    <div>내용0</div>
    <div>내용1</div>
    <div>내용2</div>
    </div>
  )
}

export default DetailPage