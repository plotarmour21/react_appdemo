import React, { useState } from 'react'

export default function Colorpicker() {
    const[color,setColor]=useState("#000000")
    function handleChane(e){
        setColor(e.target.value)
    }
  return (
    <>
  <div className='color-picker'style={{backgroundColor:color}} >
      <h1>color-Picker {color}</h1>
    
    </div>
    <label>Select color {color}  </label>
    <input type='color' value={color} onChange={handleChane}></input>
   
    </>
  
  )
}
