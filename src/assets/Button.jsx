import React, { useState } from "react";

import styles from "./Button.module.css";

export default function Button() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    // alert(count)
  }

  return (
    <button onClick={handleClick} className={styles.button}>
      Clicked {count}
    </button>
  );
}
