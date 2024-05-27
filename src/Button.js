import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.click} className={props.butstyle} >{props.but}</button>
    </div>
  )
}

export default Button