import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Button, Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addItem } from '../store'
import { tab } from '@testing-library/user-event/dist/tab'

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
        <Nav.Link eventKey="link-1" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent tab={tab}/>
    </div>
  )
}

function TabContent({tab}){ //컴포넌트기 때문에 return 무조건 써야 함
    let [fade, setFade] = useState('')
    useEffect(()=>{ // setTimeout을 해준 이유가 업데이트 된 리액트에서는 state를 전부 모아서 한번에 처리할려고 하기 때문에 시간대를 두고 코드를 짜야 함 !
        setTimeout(()=>{setFade("end")}, 150)

        return ()=>{
            setFade('')
        }
    },[tab])
    // if(tab === 0){
    //     return <div>내용0</div>
    // }
    // if(tab === 1){
    //     return <div>내용1</div>
    // }
    // if(tab === 2){
    //     return <div>내용2</div>
    // }
    return (
        (<div className={`start ${fade}`}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>)
    )
}

export default DetailPage