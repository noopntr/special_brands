import './footer.css';
import React from 'react';

import logo from '../../Assets/BrandLogo/BrandLogo.svg';


const upperFooter = () => {
  return (
    <div className='upperfooter-holder'>
      <div className="upperfooter-logo">
        <img src={logo} alt="" />
      </div>

      <div className="upperfooter-menu">
        <ul className="nav-links">
          <li>
            <a href="#navbar">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="/">Staff</a>
          </li>
          <li className="search-icon">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>

      
    </div>
  );
}


export default upperFooter;