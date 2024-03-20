import { useState } from "react";


function BasicForm() {


  const [formData, setFormData] = useState({
    first_name: 'kenedy',
    email: '',
    age:0, 
    phone_number: '',
    password:'',
  });



  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure event target

    setFormData({ ...formData, [name]: value });//copies the initial values or update the initial valuse
  };

  return (
    <form>
      <p>Basic Form</p>
      <p>{formData.first_name}</p>
      <p>{formData.email}</p>
      <p>{formData.phone_number}</p>
      <p>{formData.password}</p>
      <div>
        <input type='text' name='first_name' value={formData.first_name} onChange={handleChange} />
        <input type='email' name='email' value={formData.email} onChange={handleChange} />
      </div>
      <input type='text' name="phone_number" value ={formData.phone_number} onChange={handleChange} placeholder="Enter phone number"/>
      <input type='password' name="password" value={formData.password} onChange={handleChange} placeholder="Enter password"/>

    </form>
  );
}

export default BasicForm;
