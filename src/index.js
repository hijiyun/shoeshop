import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "",
    // 3초 뒤에 finish가 반환된다.
    loader: async () => {
      return new Promise((res) => {
        setTimeout(() => {
          return res("finish!");
        }, 3000);
      });
    },
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter router={router} fallbackElement={<div>Loading...</div>}>
      <App />
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
