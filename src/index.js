import React from 'react';
import ReactDOM from 'react-dom';
import './style/stylesheet.css';
import Main from './photowall/main';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter> 
    <React.StrictMode>
    <Main/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
