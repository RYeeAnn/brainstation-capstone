// AboutPage.jsx
import React from "react";
import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./AboutPage.scss";
import profileImage from "../../assets/ryan.png";
import me from "../../assets/me.png";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import Header from "../../components/Header/Header";
import useWindowWidth from "../../Hooks/useWindowWidth";
import ryan from '../../assets/ryan.jpg';
import ryanSubie from '../../assets/ryansubie.png';

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const windowWidth = useWindowWidth();

  const properties = {
    dark: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    light: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  const { r, transform, cx, cy, opacity } =
    properties[darkMode ? "dark" : "light"];

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });
  const centerCircleProps = useSpring({
    r,
    config: properties.springConfig,
  });
  const maskedCircleProps = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  });
  const linesProps = useSpring({
    opacity,
    config: properties.springConfig,
  });

  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <section className={`about ${darkMode ? "dark-mode" : ""}`}>
      <div className="about__header">
        {windowWidth <= 768 ? <HeaderComponent /> : <Header />}
      </div>
      <div className={`about__content ${darkMode ? "dark-mode" : ""}`}>
        <animated.svg
          className="darkmode"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          onClick={toggleDarkMode}
          style={{
            cursor: "pointer",
            ...svgContainerProps,
          }}
        >
          <mask id="myMask2">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {/* <animated.circle style={maskedCircleProps} r="9" fill="black" /> */}
          </mask>
          <animated.circle
            cx="12"
            cy="12"
            style={centerCircleProps}
            fill="black"
            mask="url(#myMask2)"
          />
          <animated.g stroke="currentColor" style={linesProps}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle fill="black" cx="12" cy="12" r="5" />
              <g stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          </animated.g>
        </animated.svg>
        {/* <div className="about__image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className={`about__text ${darkMode ? "dark-mode" : ""}`}>
          <h2>About Me</h2>
          <p>
            Hello! I'm Ryan, a passionate car enthusiast and love to DIY my own
            vehicle. I have a deep love for cars and a strong desire to help
            people understand the ins and outs of vehicle maintenance.
          </p>
          <p>
            My mission is to provide clear and practical information to empower
            car owners to take control of their vehicle's upkeep. Whether it's
            troubleshooting common issues or learning the basics of maintenance,
            I'm here to guide you every step of the way.
          </p>
        </div> */}

<div class="about__section-story">
    <div class="section-content">
      <img src={profileImage} alt="" />
        <div class="text-content">
        <h2>About Me</h2>
          <p>
            Hello! I'm Ryan, a passionate car enthusiast and love to DIY my own
            vehicle. I have a deep love for cars and a strong desire to help
            people understand the ins and outs of vehicle maintenance.
          </p>
        </div>
    </div>
</div>

<div class="about__section-mission">
    <div class="section-content">
      <img src={ryanSubie} alt="" />
        <div class="text-content">
            <h2>My Mission</h2>
            <p>At Cruisin, My mission is to simplify the complexities of vehicle maintenance. While traditional vehicle handbooks can be overwhelming, and online sources often intricate, I aim to provide drivers with straightforward answers to their concerns. With Cruisin, finding solutions to your vehicle-related queries is as easy as a snap of your fingers.</p>
        </div>
    </div>
</div>

<div class="about-section team">
    <div class="team-members">
        <div class="team-member">
          <img src={ryan} alt="" />
            <h3>Ryan Yee</h3>
            <p>Developer</p>
        </div>
    </div>
</div>
        
      </div>
      <FooterComponent />
    </section>
  );
}

export default AboutPage;
