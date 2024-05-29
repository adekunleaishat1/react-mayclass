import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    
    const gohome = () =>{
       navigate("/")
    }
  return (
    <div>
        <h1 className='text-danger fs-1 text-center'>Page Not Found</h1>
        <button onClick={gohome}>Go back home</button>
    </div>
  )
}

export default Notfound