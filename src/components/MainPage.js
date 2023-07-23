import React, { useState } from 'react'
import {Container, Row} from "react-bootstrap"
import Card from '../components/Card';
import data from "../data"
import img1 from "../img/img1.webp"
import img2 from "../img/img2.webp"
import img3 from "../img/img3.webp"
import {Link} from "react-router-dom"

const MainPage = () => {
    let [shoes] = useState(data)
    let [img] = useState([img1,img2,img3])

  return (
    <div>
      <div className='main-bg'></div>
      <div className='all-card'>
        <Container>
          <Row>
            {
              shoes.map((a, i)=>{
                return(
                  <Card shoes={shoes[i]} i={i+1}/>
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