import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Http = () => {
    const [data, setdata] =useState ([])
    const navigate = useNavigate()
    useEffect(() => {
     axios.get("https://robo-music-api.onrender.com/music/my-api")
     .then((res)=>{
        console.log(res.data);
        setdata(res.data)
     }).catch((err)=>{
        console.log(err);
     })
    
    }, [])
    const next= (el)=>{
      console.log(el.id);
      let id = el.id
      navigate(`/music/${id}`)
    }
    
  return (
   <>
     <div>
        <ul>
            {data.map((music,index)=>(
                <li onClick={()=>next(music)} key={index}>
                    <img src={music.songImage} alt="" />
                    <h1>{music.songTitle}</h1>
                    
                </li>
            ))}
        </ul>
    </div>
   </>
  )
}

export default Http