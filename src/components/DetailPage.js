import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import img from '../img/img2.webp'
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
                    <img src={"https://raw.githubusercontent.com/hijiyun/shoeshop/main/src/img/img2.webp"} alt="detail img" />
                </Col>
                <Col className='buy-detail'>
                    <input onChange={(event)=>{setNum(event.target.value)}} />
                    <h4 style={{margin:'50px'}}>{props.shoes[id].title  }</h4>
                    <p style={{margin:'50px'}}>{props.shoes[id].price}</p>
                    <Button variant="danger" className='btn-detail' onClick={()=>{
                        dispatch(addItem({id:2, name:'BUFFALO CLD CORIN GRADIENT SNEAKER', count:4},))
                    }}>Buy</Button>{' '}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DetailPage