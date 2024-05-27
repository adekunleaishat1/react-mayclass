import React, {useState} from 'react'

const Addtodo = ({addtod}) => {
   const [onetodo, setonetodo] = useState("")
//    console.log(onetodo);
  return (
    <div>
        <input onChange={(e)=>setonetodo(e.target.value)} className='form-control w-25' type="text" />
        <button onClick={()=>addtod(onetodo)}>Addtodo</button>
    </div>
  )
}

export default Addtodo