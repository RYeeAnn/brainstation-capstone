import React, { useState } from "react";
import "./HeaderComponent.scss";
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";
import menu from "../../assets/menu.png";
import home from "../../assets/home.svg";
import user from "../../assets/user.svg";
import at from "../../assets/@.svg";
import alertTriangle from "../../assets/alert-triangle.svg"
import tool from "../../assets/tool.svg";
import messageCircle from "../../assets/message-circle.svg"
import helpCircle from "../../assets/help-circle.svg"

function HeaderComponent() {
  class Example extends React.Component {
    showSettings(event) {
      event.preventDefault();
    }

    render() {
      return (
        <div id="outer-container">
            <Menu customBurgerIcon={ <img src={menu} /> } 
                  pageWrapId={ "page-wrap" } 
                  outerContainerId={ "outer-container" }>
            <main id="page-wrap">
              <div className="menu">
                <div className="menu__title">
                  Cruisin
                </div>
              <Link to="/" id="home" className="menu__item" href="/"><img src={home} alt="Home" />Home</Link>
              <Link to="/aboutpage" id="about" className="menu__item"><img src={user} alt="User"/>About</Link>
              <Link to="contactpage" id="contact" className="menu__item" href="/contact"><img src={at} alt="At" />Contact</Link>
              <Link to="warningLightsPage" className="menu__secondItem menu__secondItem1"><img src={alertTriangle} alt="Alert" />Warning Lights</Link>
              <Link to="troubleshootPage" className="menu__secondItem"><img src={tool} alt="Tool" />Troubleshoot</Link>
              <Link to="maintenancePage" className="menu__secondItem"><img src={messageCircle} alt="Message Circle" />Maintenance</Link>
              <Link to="FAQPage" className="menu__secondItem"><img src={helpCircle} alt="Help Circle" />FAQ</Link>
              </div>
            </main>
            </Menu>
        </div>
      );
    }
  }
  return <Example />
}

export default HeaderComponent;
