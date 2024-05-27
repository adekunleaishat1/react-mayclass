import logo from './logo.svg';
import './App.css';
import mystyl from './Mystyle';
import frame from  './images/Frame 130.png'
import { BiBellPlus } from "react-icons/bi";
import Img from './Img';
import Button from './Button';
import Addtodo from './Addtodo';

import { useState } from 'react';
import Distodo from './Distodo';
function App() {
  const [alltodo, setalltodo] = useState([])
  const login = () =>{
    alert("Working")
  }
  const signup = () =>{
    alert("signup successful")
  }
  const addtodo = (el) =>{
    console.log(el);
    setalltodo([...alltodo, el])
    console.log(alltodo);


  }
   
  return (
    <div className="App">
       <h1 style={{backgroundColor:"black", color:"red"}}>Welcome</h1>
        <div style={mystyl}></div>
        <div style={mystyl.header}></div>
        <p className='p'>New react class</p>
        {/* <img src={require("./images/Frame 130.png")} alt="" />
        <img src={frame} alt="" /> */}
        {/* <button className='btn btn-dark'>click</button>
        <i className='fa fa-user'></i>
        <i className='fa fa-home'></i>
        <BiBellPlus />
        <Img image={require("./images/Frame 130.png")}/>
        <div className='w-25 card shadow px-2 py-2 rounded-pill'>
        <Img sty="w-100 h-25" image= {require("./images/Rectangle 76.png")}/>
        <Img text="Sportify"/>
        <Img cont="Playing"/>
        </div> */}
       
     <Button click={login} butstyle="log" but="Login"/>
     <Button click={signup} butstyle="btn btn-success" but="Signup"/>
       <Addtodo addtod={addtodo}/>
       <Distodo alltodo={alltodo}/>
    </div>
  );
}

export default App;
