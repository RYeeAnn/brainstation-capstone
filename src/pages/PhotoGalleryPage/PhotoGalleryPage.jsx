// PhotoGalleryPage.js
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import SecondHeaderComponent from "../../components/SecondHeaderComponent/SecondHeaderComponent";
import "./PhotoGalleryPage.scss";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import flathead from "../../assets/flathead.jpg";
import philips from "../../assets/philips.jpg";
import breakerBar from "../../assets/breaker-bar.jpg";
import torqueWrench from "../../assets/torque-wrench.jpg";
import pliers from "../../assets/pliers.jpg";
import wrench from "../../assets/wrench.jpg";
import combinationWrench from "../../assets/combination-wrench.jpg";
import toolWrench from "../../assets/tool-wrench.jpg";
import oilFilterWrench from "../../assets/oil-filter-wrench.jpg";
import tirePressureGauage from "../../assets/tire-pressure-gauge.jpg";



function PhotoGalleryPage() {
  const [zoomedPhoto, setZoomedPhoto] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const images = [
    { src: flathead, title: "Flathead Screwdriver" },
    { src: philips, title: "Philips(+) Screwdriver" },
    { src: breakerBar, title: "Breaker bar" },
    { src: torqueWrench, title: "Torque Wrench" },
    { src: pliers, title: "Pliers" },
    { src: combinationWrench, title: "Combination Wrench" },
    { src: toolWrench, title: "Ratchet" },
    { src: oilFilterWrench, title: "Oil Filter Wrench" },
    { src: tirePressureGauage, title: "Tire Pressure Gauge" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openZoom = (index) => {
    setZoomedPhoto(index);
  };

  const closeZoom = () => {
    setZoomedPhoto(null);
  };

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
    <section className={`photo-gallery ${darkMode ? "dark-mode" : ""}`}>
      <div className="photo-gallery__header">
        <SecondHeaderComponent />
      </div>
      <animated.svg
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
      <h1>Photo Gallery</h1>
      <div className="photo-gallery__content">
        <div className="photo-gallery__grid">
          {images.map((image, index) => (
            <div className="photo-gallery__item" key={index}>
              <div className="photo-gallery__item-title">{image.title}</div>
              <img className="photo-gallery__item-image"
                src={image.src}
                alt={`Photo ${index + 1}`}
                onClick={() => openZoom(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {zoomedPhoto !== null && (
        <div className="photo-gallery__zoom">
          <div className="photo-gallery__zoom-content">
            <img
              src={images[zoomedPhoto].src} // Use .src to access the image source
              alt={`Zoomed Photo ${zoomedPhoto + 1}`}
              onClick={closeZoom}
            />
          </div>
        </div>
      )}

      <FooterComponent />
    </section>
  );
}

export default PhotoGalleryPage;
