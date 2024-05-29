import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Img from './Img'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'

const Fetch = () => {
    const [data, setdata] = useState([])
    // fetch("https://robo-music-api.onrender.com/music/my-api")
    // .then(res=>res.json())
    // .then(res=> console.log(res))


    useEffect(() => {
        axios.get("https://robo-music-api.onrender.com/music/my-api")
        .then((res)=>{
            console.log(res.data);
            setdata(res.data)
        }).catch((err)=>{
            console.log(err);
        })
     
     }, [])
     
  
  return (
    <>
    <Navbar/>
    <div className='d-flex justify-content-between  w-100'>
    <Sidenav/>
    <div className='w-70'>
        <Outlet/>
    {/* <div className='d-flex justify-content-center flex-wrap align-items-center w-100'>
           {data.map((el , i)=>(
            <div className='w-25 shadow card px-2 py-3'>
                <Img sty="w-50 h-25" image={el.songImage} />
                <Img text={el.songTitle}/>
                <Img cont={el.artistName}/>
            </div>

           ))

           }
       </div> */}
    </div>
   
    </div>
   
       
    </>
  )
}

export default Fetch