import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const CartPage = () => {

  let stock = useSelector((state)=>{return state.stock}) // 중괄호 return 생략 가능 !
  console.log(stock)

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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  </div>
  )
}

export default CartPage