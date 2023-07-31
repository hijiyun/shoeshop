import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, countAge } from '../store/userSlice';
import { addCount } from '../store';

const CartPage = () => {

  let state = useSelector((state)=>{return state}) // 중괄호, return 생략 가능 ! (지금은 생략 안 한 거임)
  let dispatch = useDispatch();

  return (
    <div>
      {state.user.name} {state.user.age}의 장바구니 !
      <button onClick={()=>{
        dispatch(countAge(1))
      }}>버튼 </button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>변경하기</th>
          <th>상품명</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((a, i)=> // 왜 {}랑 return이 없나? 왜냐면 그 둘은 같이 생략이 가능함
            <tr key={i}> 
              <td>{i+1}</td>
              <td>
                <button onClick={()=>{
                  dispatch(addCount(state.cart[i].id))
                }}>
                  +</button>
              </td>
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