import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Logan",
    lastName: "Miller",
    admin: true,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if(event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName"
        value={formData.firstName} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        name="lastName"
        value={formData.lastName}
        onChange={handleChange} 
        />
      <input
        type='checkbox'
        name='admin'
        onChange={handleChange}
        checked={formData.admin}
      />
        <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
