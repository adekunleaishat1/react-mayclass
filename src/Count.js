import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement } from './Redux/Counterslice'

const Count = () => {
   const {value} =  useSelector(state=> state.countslice)
   console.log(value);
   const dispatch = useDispatch()
  return (
    <div>
         <h1>{value}</h1>
         <button onClick={()=> dispatch(Increment())}>
            +
         </button>
         <button onClick={()=>dispatch(Decrement())}>-</button>
    </div>
  )
}

export default Count