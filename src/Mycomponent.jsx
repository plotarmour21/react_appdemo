import React, { useState } from 'react'

import styles from "./Button.module.css";

export default function Mycomponent() {
    let word="kaneki"
    const[name,setName]=useState("guest")
    function handleCLick(){
        setName("ken-kaneki")

    }
    function handleCLicks(){
        setName("asura")

    }
  return (
    <div className={styles.container} >
      <p>name: {name}</p>
      <button onClick={handleCLick} className={styles.button}>click to change name</button>
      <button onClick={handleCLicks}className={styles.button}>click to change name</button>
      
      
    </div>
  )
}
