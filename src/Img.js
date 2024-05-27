import React from 'react'

const Img = ({image, text, cont, sty}) => {
    // console.log(props);
  return (
    <div>
        
        <img className={sty} src={image} alt="" />
        <h1>{text}</h1>
        <p>{cont}</p>
        
       
    </div>
  )
}

export default Img