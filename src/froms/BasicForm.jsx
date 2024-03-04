import React, { useState } from 'react';

function BasicForm() {


  const [formData, setFormData] = useState({
    first_name: '',
    last_name:'',
    email: '',
    phone_number:'',
    age:0
  });



  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure event target

    setFormData({ ...formData, [name]: value });//copies the initial values or update the initial valuse
  };

  return (
    <form>
      <p>Basic Form</p>
      <p>{formData.fname}</p>
      <div>
        <input type='text' name='fname' value={formData.fname} onChange={handleChange} />
        <input type='email' name='email' value={formData.email} onChange={handleChange} />
      </div>
    </form>
  );
}

export default BasicForm;
