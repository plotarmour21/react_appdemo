import React, { useState } from 'react';


const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    option: '',       // for the dropdown
    selectedOption: '', // for the radio buttons
  });

  // Handle input change with onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange} // Using onChange here
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange} // Using onChange here
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange} // Using onChange here
        ></textarea>
      </div>

      {/* Dropdown (Select Box) */}
      <div>
        <label htmlFor="option">Select an option:</label>
        <select
          id="option"
          name="option"
          value={formData.option}
          onChange={handleChange}
        >
          <option value="">--Choose an option--</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>

      {/* Radio Buttons */}
      <div>
        <p>Select a radio option:</p>
        <label>
          <input
            type="radio"
            name="selectedOption"
            value="Radio Option 1"
            checked={formData.selectedOption === 'Radio Option 1'}
            onChange={handleChange}
          />
          Radio Option 1
        </label>
        <label>
          <input
            type="radio"
            name="selectedOption"
            value="Radio Option 2"
            checked={formData.selectedOption === 'Radio Option 2'}
            onChange={handleChange}
          />
          Radio Option 2
        </label>
        <label>
          <input
            type="radio"
            name="selectedOption"
            value="Radio Option 3"
            checked={formData.selectedOption === 'Radio Option 3'}
            onChange={handleChange}
          />
          Radio Option 3
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
