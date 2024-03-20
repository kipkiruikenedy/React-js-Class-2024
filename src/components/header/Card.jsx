// Home.js
import React, { useState } from 'react';


function Card(props) {

  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center space-x-10'>
      
   <div className='h-15 w-15'>{props.text}</div>
   <div className='h-15 w-15'>
    <img className='h-10 w-10' src={props.image} alt="" />
   </div>
   
 
    </div>
  );
}

export default Card;
