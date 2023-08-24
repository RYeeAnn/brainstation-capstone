import React from 'react';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./HomePage.scss";
import { Link } from 'react-router-dom';
import engine from '../../assets/engine.jpg';
import wipe from '../../assets/carmeet.jpg'
import speedometer from '../../assets/speedo.jpg';
import tools from '../../assets/tools.jpg';

function HomePage() {
  return (
    <>
      <section className="homePage">
        <HeaderComponent />
        <div className="homePage__hero"></div>
      </section>

      <section className="homePage__main">
        <div className="homePage__cards">
          <ul className="homePage__cards--container">
            <Link to='./MaintenancePage'>
              <li className="homePage__card">
                <img className="homePage__img" src={engine} alt="hood" />
                Maintenance
              </li>
            </Link>
            <Link to='./WarningLightsPage'>
              <li className="homePage__card">
                <img className="homePage__img" src={speedometer} alt="speedometer" />
                Warning Lights
              </li>
            </Link>
            <Link to='./CommonQuestionsPage'>
              <li className="homePage__card">
                <img className="homePage__img" src={wipe} alt="wipe" />
                Common Questions
              </li>
            </Link>
            <Link to='./TroubleshootPage'>
              <li className="homePage__card">
                <img className="homePage__img" src={tools} alt="tools" />
                Troubleshoot
              </li>
            </Link>
          </ul>
        </div>
      </section>

      <section>
        <FooterComponent />
      </section>
    </>
  );
}

export default HomePage;
