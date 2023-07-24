import React, { useState } from 'react'
import {Container, Row} from "react-bootstrap"
import Card from '../components/Card';
import img1 from "../img/img1.webp"
import img2 from "../img/img2.webp"
import img3 from "../img/img3.webp"
import {Link} from "react-router-dom"

const MainPage = (props) => {
    let [img] = useState([img1,img2,img3])

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