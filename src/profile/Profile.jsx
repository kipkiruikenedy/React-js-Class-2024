// Home.js
import React, { useState } from 'react';
import "./style.css"
function ChildComponent(prop) {


  return (
    <div className='container'>
        <div className=''>
        <p>{prop.first_name}</p>
        <p>{prop.email}</p>
      
        </div>

 
    </div>
  );
}

export default ChildComponent;
