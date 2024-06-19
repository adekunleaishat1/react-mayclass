import React,{useEffect, useState, useRef} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Onemusic = () => {
    const {id}= useParams()
    const [onedata, setonedata] = useState({})
    const [isplaying, setisplaying] = useState(false)
    const [currenttime, setcurrenttime] = useState(0)
    console.log(id);

    const audioref = useRef()
    console.log(audioref.current);

    useEffect(() => {
        axios.get(`https://robo-music-api.onrender.com/music/my-api/${id}`)
        .then((res)=>{
            console.log(res.data.data);
             setonedata(res.data.data[0])
             console.log(onedata);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])

    useEffect(() => {
        const music = audioref.current;
  
       const TimeUpdate = () =>{
        setcurrenttime(music.currentTime)
        console.log(currenttime);
       }
      music.addEventListener('timeupdate', TimeUpdate);
    
      return () => {
        
      }
    }, [])
    

    const playaudio = () =>{
        let music = audioref.current
        if (isplaying == false) {
            music.play()
          setisplaying(true)
        }else if(music.stop){
            setisplaying(false)   
        }else{
            music.pause()
            setisplaying(false)    
        }
    }
    


  return (
    <div>
        <div>
            <audio ref={audioref} src={onedata.songUrl}></audio>
            <img src={onedata.songImage} alt="" />
            <h1>{onedata.songTitle}</h1>
            <p>{onedata.artistName}</p>
            <button onClick={playaudio}>{isplaying? "pause" : "play"}</button>
        </div>
    </div>
  )
}

export default Onemusic