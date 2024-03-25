import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const TopNavBar = () => {
  return (
    <nav className="bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-8">
          <div className="flex">
            {/* Your logo or brand */}
            <div className="flex-shrink-0 flex items-center">
              <MenuIcon style={{ fontSize: 30, color: 'white' }} />
            </div>
            {/* Navigation Links */}
            <div className="hidden lg:ml-6 lg:flex flex justify-center items-center">
              <a href="#" className="text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-700">All</a>
              <a href="#" className="text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-700">Today's deal</a>
              <a href="#" className="text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-700">Customer service</a>
              <a href="#" className="text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-700">Registry</a>
              <a href="#" className="text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-700">Gift Cards</a>
              <a href="#" className="text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-700">Sell</a>
            </div>
          </div>
          {/* Responsive Navigation Menu */}
          <div className="-mr-2 flex items-center lg:hidden">
            <button type="button" className="text-white hover:text-gray-400 focus:outline-none focus:text-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
