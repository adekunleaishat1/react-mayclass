import React from 'react'

const Distodo = ({alltodo}) => {
  return (
    <div>
        {
            alltodo.map((el)=>(
                <>
                <h1>{el}</h1>
                </>
            ))
        }
    </div>
  )
}

export default Distodo