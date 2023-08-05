import React, { useState } from 'react'
import {Container, Row, Col} from "react-bootstrap"
import Card from '../components/Card';
import axios from 'axios';

const MainPage = (props) => {

  let [click, setClick] = useState(0);
  let [loading, setLoading] = useState(true);
  let handleClick = () => {
    setClick(click += 1);
    setLoading(true);
    console.log("loading???",loading)


    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((result)=>{
      let copy = [...props.shoes, ...result.data]
      console.log(copy)
      props.setShoes(copy)
      setLoading(false)
    })
    .catch(()=>{
      console.log("실패 ㅜㅜ")
      setLoading(false)
    })
  }

  return (
    <div>
      <div className='main-bg'></div>
      <div className='all-card'>
        <Container>
          <Row>
            {
              props.shoes.map((a, i)=>{
                return(
                  <Col sm={4}>
                    <Card img={props.img} shoes={props.shoes[i]} i={i+1}/>
                  </Col>
                )
              })
            }
          </Row>
          {
            click < 1 ? <button onClick={()=>{ handleClick() }}>버튼</button> : null
          }
          {
            loading ? <div>loading ...</div> : null
          }
        </Container>
      </div>
    </div>
  )
}

export default MainPage