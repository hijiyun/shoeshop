import React, { useState } from 'react'
import {Container, Row} from "react-bootstrap"
import Card from '../components/Card';


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
      </div>
    </div>
  )
}

export default MainPage