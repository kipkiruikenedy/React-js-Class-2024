// Home.js
import React, { useState } from 'react';
import "./style.css"
function ChildComponent(prop) {


  return (
    <div className='container'>
        <div className=''>
        <p>{prop.title}</p>
        <p>{prop.price}</p>
      
        </div>

 
    </div>
  );
}

export default ChildComponent;
