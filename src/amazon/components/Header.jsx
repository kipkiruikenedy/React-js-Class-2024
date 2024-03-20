// Home.js
import React, { useState } from 'react';
import "./Header.css"
import logo from "../../assets/images/log-trans.png"
import flag from "../../assets/images/us-glag.jpeg"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {

const users=0;
  return (
    <div className='headerbg flex py-4'>

    {/* Left section */}
    <div className=' w-1/6 flex justify-evenly '>
       {/* Logo */}
       <div className='h-8 w-8'>
        <img src={logo} />
       </div>
       {/* Location */}
       <div className='flex space-x-2'>
        <div className='text-white flex justify-center items-center'>
            <LocationOnIcon />
        </div>

        <div className='flex flex-col'>
            <span className='text-gray-200 text-sm'>Deliver to</span>
            <span  className='text-white'>Kenya</span>
        </div>
       </div>
        
        </div>




     {/* Middle section */}
     <div className='bg-white  flex flex-1 rounded-md'>

<div className=' bg-gray-100 w-[10%] text-gray-600 flex justify-center items-center rounded-l-md'>
    All
</div>
<div className=' bg-white flex-1 flex justify-start items-center'>
    <input placeholder='search amazon ' type='text' className=' flex justify-start items-start py-1 px-1 border-none' ></input>
</div>
<div className=' bg-yellow-300 w-[10%] flex justify-center items-center rounded-r-md'>
    <SearchIcon />
</div>
     </div>









     {/* Right section */}
     <div className='bg-trasparent w-2/6 flex justify-evenly text-white'>

        <div className='flex space-x-2 flex justify-center items-center'>
            <div className='h-8 w-8'>
                <img src={flag} alt='us glag' />
            </div>
            <span>EN</span>
        </div>



        <div className='flex flex-col'>
            <span className='text-sm'>Hello, Sign In</span>
            <span className='font-semibold'>Account & List</span>
        </div>
        
        <div className='flex flex-col'>
            <span className='text-sm'>Returns</span>
            <span className='font-semibold'>& Orders</span>
        </div>

        <div className='flex xpace-x-1'>
            <div>
                <ShoppingCartIcon className='text-lg'/>
            </div>
            <div>cart</div>
        </div>
     </div>


    </div>

  );
}

export default Header;
