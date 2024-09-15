function MyButton() {
  let count = 0;

  function handleClick(e) {

    e.target.textContent = "changed";
    e.target.disabled = true;

    

    

    console.log(e.target.textConent);
  }

  return <button onClick={(e) => handleClick(e)}>I'm a button</button>;
}

export default MyButton;
