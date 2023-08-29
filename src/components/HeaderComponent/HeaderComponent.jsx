import React, { useState } from 'react';
import './HeaderComponent.scss';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="header"> 
      <div className="header-dropdown">
        <button className="dropdown-button" onClick={handleDropdownToggle}>
          Menu
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link to='./AboutPage'><li>About Us</li></Link>
            <li>Contact Us</li>
          </div>
        )}
      </div>
      <div className="header-title">
        <h1 className='header-title__item'>Cruisin</h1>
      </div>
    </section>
  );
}

export default HeaderComponent;
