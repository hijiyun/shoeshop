import React, { useState } from 'react'
import {Container, Row} from "react-bootstrap"
import Card from '../components/Card';
import axios from 'axios';

const MainPage = (props) => {

  return (
    <div>
      <div className='main-bg'></div>
      <div className='all-card'>
        <Container>
          <Row>
            {
              props.shoes.map((a, i)=>{
                return(
                  <Card shoes={props.shoes[i]} i={i+1}/>
                )
              })
            }
          </Row>
        </Container>
        <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            let copy = [...props.shoes, ...result.data]
            props.setShoes(copy)
            console.log(props.shoes)
          })
          .catch(()=>{
            console.log("실패 ㅜㅜ")
          })
        }}>버튼</button>
      </div>
    </div>
  )
}

export default MainPage