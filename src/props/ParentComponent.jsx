// Home.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';


function ParentComponent() {
const title1="my title One";
const title2="my title Two";
const title3="my title three";

const shoes={
    title:"nike",
    price:500
}

const women_cloths={
    title:"dress",
    price:100
}


  return (
    <div className='pcontainer'>
    <ChildComponent title={shoes.title}  price={shoes.price}/>
    <ChildComponent title={shoes.title}  price={shoes.price}/>
    <ChildComponent title={women_cloths.title} price={women_cloths.price}/>
  
    </div>
  );
}

export default ParentComponent;
