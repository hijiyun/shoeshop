import './App.css';
import { useState } from 'react';
import img1 from "./img/img1.webp"
import img2 from "./img/img2.webp"
import img3 from "./img/img3.webp"
import {Routes, Route, Link} from "react-router-dom"
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';




function App() {
  
  let [img] = useState([img1,img2,img3])
  console.log(img[1])


  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/detail' element={<div>상세 페이지임</div>}/>
      <Route path='/cart' element={<div>장바구니 페이지임</div>}/>
    </Routes>
    </div>
  );
}

export default App;
