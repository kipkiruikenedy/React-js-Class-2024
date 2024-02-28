import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div><h1>Logo</h1></div>
      <nav>
        <ul className='menu'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
