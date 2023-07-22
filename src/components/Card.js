import React from 'react'
import {Col} from 'react-bootstrap'


const Card = (props) => {
  return (
    <div className='card'>
        <Col>
            <img src={"https://raw.githubusercontent.com/hijiyun/shoeshop/main/src/img/img"+ props.i +".webp"} alt="#" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </Col>
    </div>
  )
}

export default Card