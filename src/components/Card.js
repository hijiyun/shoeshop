import React from 'react'
import {Col} from 'react-bootstrap'
import img1 from "../img/img1.webp"


const Card = (props) => {
  return (
    <div className='card'>
        <Col>
            <img src="https://shoemarketnyc.com/cdn/shop/files/2159800_P2_50cba7fa-2ed9-4b10-84f3-3f575cb806cd.jpg?v=1688772055&width=533" alt="#" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </Col>
    </div>
  )
}

export default Card