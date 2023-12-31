import './App.css';
import { useState } from 'react';
import img1 from "./img/img1.webp"
import img2 from "./img/img2.webp"
import img3 from "./img/img3.webp"
import { Routes, Route, Link, json} from "react-router-dom"
import MainPage from './components/MainPage';
import Header from './components/Header';
import Detail from './components/DetailPage';
import Cart from './components/CartPage'
import Event from './components/Event';
import data from "./data"



function App() {
  // let obj = {name: 'jiyun'}
  // localStorage.setItem('data', JSON.stringify(obj)) // 왼쪽이 작명, 오른쪽이 넣고 싶은 데이터
  // let data = localStorage.getItem('data')
  // let out = JSON.parse(data)
  // console.log(out)


  let [shoes, setShoes] = useState(data)
  let [img] = useState([img1,img2,img3])

  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<MainPage shoes={shoes} setShoes={setShoes}/>} />
      <Route path='/detail/:id' element={<Detail shoes={shoes} img={img}/>}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/event' element={<Event />}>
        <Route path='one' element={ <p>첫 주문시 야배추즙 서비스</p>}/>
        <Route path='two' element={ <p>생일 기념 쿠폰받기</p>}/>
      </Route>

    </Routes>
    </div>
  );
}

export default App;
