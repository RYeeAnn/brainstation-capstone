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
            <Link to='./AboutPage'><li>About me</li></Link>
            <li>Contact me</li>
          </div>
        )}
      </div>
    </section>
  );
}

export default HeaderComponent;
