import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const CartPage = () => {

  let state = useSelector((state)=>{return state}) // 중괄호, return 생략 가능 ! (지금은 생략 안 한 거임)
  console.log(state.cart)

  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>회원 성명</th>
          <th>상품명</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((a, i)=>
            <tr key={i}>
              <td>{i+1}</td>
              <td>내가 누구겡</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
          </tr>
          )
        }
      </tbody>
    </Table>
  </div>
  )
}

export default CartPage