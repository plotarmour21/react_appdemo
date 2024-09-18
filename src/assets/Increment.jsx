import React, { useState } from "react";
import styles from "./Button.module.css";

export default function Increment() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(false);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function toggle() {
        setValue(prevValue => !prevValue);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={reset} className={styles.button}>Reset</button>
            <button onClick={increment} className={styles.button}>Increment</button>
            <button onClick={decrement} className={styles.button}>Decrement</button>
            <h1>{value ? "On" : "Off"}</h1>
            <button onClick={toggle} className={styles.button}>Toggle</button>
        </div>
    );
}
