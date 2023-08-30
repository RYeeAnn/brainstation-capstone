import React from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import repair from "../../assets/repair.jpg";
import gtr from "../../assets/purplegtr.jpg";
import speedometer from "../../assets/speedo.jpg";
import tools from "../../assets/tools.jpg";

function HomePage() {
  return (
    <>
      <section className="homePage">
        <HeaderComponent />
        <div className="homePage__hero">
          <div className="homePage__heroText">
            Ever faced a frustrating issue and wondered how to fix it? Welcome
            to Cruisin, where we have answers to your questions and solutions
            to your problems.
          </div>
          <div className="homePage__heroSubtext">Start Exploring</div>
        </div>
      </section>

      <section className="homePage__main">
        <div className="homePage__card">
          <div className="homePage__imgContainer">
            <Link to='/warningLightsPage'><img src={speedometer} alt="Speedometer" className="homePage__img" /></Link>
          </div>
          <div className="homePage__cardText">
            <h3>Warning Lights</h3>
            <p>Discover the meaning behind various warning lights on your dashboard.</p>
          </div>
        </div>
        <div className="homePage__card">
          <div className="homePage__imgContainer">
            <Link to='/troubleshootPage'><img src={tools} alt="Tools" className="homePage__img" /></Link>
          </div>
          <div className="homePage__cardText">
            <h3>Troubleshoot</h3>
            <p>Explore troubleshooting guides for common car problems.</p>
          </div>
        </div>
        <div className="homePage__card">
          <div className="homePage__imgContainer">
            <Link to='/maintenancePage'><img src={repair} alt="Engine" className="homePage__img" /></Link>
          </div>
          <div className="homePage__cardText">
            <h3>Maintenance</h3>
            <p>Learn about essential car maintenance to keep your vehicle running smoothly.</p>
          </div>
        </div>
        <div className="homePage__card">
          <div className="homePage__imgContainer">
            <Link to='/FAQPage'><img src={gtr} alt="Wipe" className="homePage__img" /></Link>
          </div>
          <div className="homePage__cardText">
            <h3>FAQ</h3>
            <p>Find answers to frequently asked questions about car-related topics.</p>
          </div>
        </div>
      </section>

      <section className="footer">
        <FooterComponent />
      </section>
    </>
  );
}

export default HomePage;
