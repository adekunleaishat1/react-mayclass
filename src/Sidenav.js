import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
    const mystyle= {
        width:"200px",
        height:"800px",
        backgroundColor: "blue"
    } 
  return (
    <div>
        <div style={mystyle} >
             <Link className='text-light d-block p-4' to="/fetch/app" >Profile</Link>
             <Link  className='text-light d-block p-4' to="/fetch/home">Home</Link>
             <Link  className='text-light d-block p-4'>Setting</Link>
        </div>
    </div>
  )
}

export default Sidenav