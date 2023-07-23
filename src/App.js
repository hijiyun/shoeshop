import './App.css';
import { useState } from 'react';
import img1 from "./img/img1.webp"
import img2 from "./img/img2.webp"
import img3 from "./img/img3.webp"
import { Routes, Route, Link} from "react-router-dom"
import MainPage from './components/MainPage';
import Header from './components/Header';




function App() {

  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/detail' element={<div>상세 페이지임</div>}/>
      <Route path='/cart' element={<div>장바구니 페이지임</div>}/>
    </Routes>
    </div>
  );
}

export default App;
