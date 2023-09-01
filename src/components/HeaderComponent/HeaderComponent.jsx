import React, { useState } from 'react';
import './HeaderComponent.scss';
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.png'

function HeaderComponent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="header"> 
      <div className="header-dropdown">
        <img src={menu} alt='Menu' className="dropdown-button" onClick={handleDropdownToggle}>
        </img>
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
