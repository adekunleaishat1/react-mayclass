import logo from './logo.svg';
import './App.css';
import mystyl from './Mystyle';
import frame from  './images/Frame 130.png'
import { BiBellPlus } from "react-icons/bi";

function App() {
   
  return (
    <div className="App">
       <h1 style={{backgroundColor:"black", color:"red"}}>Welcome</h1>
        <div style={mystyl}></div>
        <div style={mystyl.header}></div>
        <p className='p'>New react class</p>
        <img src={require("./images/Frame 130.png")} alt="" />
        <img src={frame} alt="" />
        <button className='btn btn-dark'>click</button>
        <i className='fa fa-user'></i>
        <i className='fa fa-home'></i>
        <BiBellPlus />
    </div>
  );
}

export default App;
