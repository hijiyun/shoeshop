import React, { useState } from 'react'
import {Container, Row} from "react-bootstrap"
import Card from '../components/Card';
import data from "../data"

const MainPage = () => {
    let [shoes] = useState(data)

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