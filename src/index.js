import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'font-awesome/css/font-awesome.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Fetch from './Fetch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './Notfound';
import Navbar from './Navbar';
import Http from './Http';
import Onemusic from './Onemusic';
import Form from './Form';
import Login from './Login';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Count from './Count';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={Store}>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Notfound/>}/>
      <Route path='/' element={<Http/>}/>
      <Route path='/music/:id' element={<Onemusic/>}/>
      <Route path='/formik' element={<Form/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/count' element={<Count/>}/>
      
      <Route path='/fetch' element={<Fetch/>} >
       <Route path='/fetch/app' element={<App />}/>
       <Route path='/fetch/home' element={ <Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
