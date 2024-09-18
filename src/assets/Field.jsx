import React, { useState } from 'react';

export default function Field() {
  const [name, setName] = useState("Guest");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
      />
      <p>Name: {name}</p>
    </div>
  );
}
