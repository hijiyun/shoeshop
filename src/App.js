import './App.css';
import { useState } from 'react';
import img1 from "./img/img1.webp"
import img2 from "./img/img2.webp"
import img3 from "./img/img3.webp"
import { Routes, Route, Link} from "react-router-dom"
import MainPage from './components/MainPage';
import Header from './components/Header';
import Detail from './components/DetailPage';
import Cart from './components/CartPage'
import Error from './components/Error'


function App() {

  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/detail' element={<Detail />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='*' element={<Error />} />
    </Routes>
    </div>
  );
}

export default App;
