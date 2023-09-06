import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import SecondHeaderComponent from "../../components/SecondHeaderComponent/SecondHeaderComponent";
import "./MaintenancePage.scss";
import engineOil from "../../assets/engine-oil.png"
import diagnosticTool from "../../assets/diagnostic-tool.png"
import wheels from "../../assets/wheel.png";
import brakes from "../../assets/brake-disc.png";
import airFilter from "../../assets/air-filter.png"
import cabinFilter from "../../assets/cabin-filter.png"
import close from "../../assets/close.png";
import battery from "../../assets/battery.png";
import coolant from "../../assets/coolant.png";
import gearShift from "../../assets/gearshift.png";
import headlight from "../../assets/headlight.png";
import belt from "../../assets/belt.png";
import tirePressure from "../../assets/tire-pressure.png";
import wiper from "../../assets/wiper.png";
import sparkPlug from "../../assets/spark-plug.png";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

function MaintenancePage() {
  const [selectedMaintenance, setSelectedMaintenance] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const maintenanceData = [
    {
      id: 1,
      title: "Oil Change",
      description: "Regular oil changes are essential for maintaining your vehicle's engine health and prolonging its lifespan.",
      detailedDescription: (
        <div>
          <ul>
            <li>Typically, you should change your oil every 7,000 to 10,000 kilometers or every 6 months.</li>
            <li>Select the appropriate type and viscosity of motor oil based on your vehicle's specifications and the climate in your region.</li>
            <li>0w-20, 5w-20, 5w-30 are the most common oil viscosities from thinnest to thickest.</li>
          </ul>
        </div>
      ),
      icon: engineOil,
    },

    {
      id: 2,
      title: "Check Engine Light",
      description: "The check engine light, also known as the malfunction indicator light (MIL), indicates that the vehicle's onboard computer has detected a problem with the engine, emissions, or other related systems. It's recommended to use a diagnostic trouble code (DTC) scanner to retrieve the specific error code.",
      detailedDescription: (
        <div>
          <ol>
            <li>If you do not have a DTC scanner, you can usually go by an auto shop or dealership to get it scanned for free</li>
            <li>Scanning DTC lights should always be free of charge so if they try to make you pay, deny it and find another auto shop or dealership to go to!</li>
          </ol>
        </div>
      ),
      icon: diagnosticTool,
    },

    {
      id: 3,
      title: "Tires",
      description: "Maintaining your vehicle's tires is essential for safety and performance. Here are some DIY tire maintenance tips:",
      detailedDescription: (
        <div>
          <ol>
            <li>Depending on driving conditions, You should rotate your tires roughly every 8,000 to 15,000km.</li>
            <li>If your steering wheel is shaking especially at high speeds like the highway, you most likely need a wheel balance.</li>
            <li>Check your tire pressures every now and then. generally on average vehicles roughly have 32-36psi</li>
            <li>There is a sticker/placard that shows your specific vehicle's recommended tire pressure, typically located on the driver's side door jam</li>
          </ol>
        </div>
      ),
      icon: wheels
    },

    {
      id: 4,
      title: "Brake Pads",
      description: "Regularly inspecting your brakes and addressing issues promptly helps maintain safe braking performance.",
      detailedDescription:(
        <div>
          <ol>
            <li>Periodically check brake pad thickness. If they are worn down to around 1/8 inch or less, it's time to replace them.</li>
            <li>If you're driving and you feel vibration whenever you brake, you most likely have a warped disc rotor and need that machined or replaced</li>
            <li>Consider having a professional perform a brake fluid flush every 2 years or as recommended in your vehicle's manual for optimal brake performance.</li>
          </ol>
        </div>
      ),
      icon: brakes
    },

    {
      id: 5,
      title: "Engine Air Filter",
      description: "Regularly replacing the Engine Air Filter is essential for a healthy engine.",
      detailedDescription: (
        <div>
          <ol>
            <li>Check and replace the engine air filter according to your vehicle's recommended maintenance schedule. A clean air filter ensures optimal engine performance and fuel efficiency.</li>
            <li>The engine air filter is usually located in a rectangular or cylindrical air filter box under the hood of your car.</li>
            <li>In most vehicles, it's easily accessible by unclipping or unscrewing the air filter box cover.</li>
          </ol>
        </div>
      ),
      icon: airFilter
    },

    {
      id: 6,
      title: "Cabin Air Filter",
      description: "Regularly replacing the Cabin Air Filter is essential for a healthy and comfortable cabin environment.",
      detailedDescription: (
        <div>
          <ol>
            <li>The cabin air filter is usually located behind the glove department or under the dashboard on the passenger side of the vehicle.</li>
            <li>Note : Nissans usually have their cabin air filters under the dashboard on the passenger's side and sometimes under the driver's side</li>
            <li>Some vehicles may have the cabin air filter in the engine bay, near the windshield wipers.</li>
            <li>Access to the cabin air filter may require removing the glove compartment or a cover panel.</li>
          </ol>
          <p>Please note that the exact location can vary depending on the make and model of your vehicle. Refer to your vehicle's owner's manual for specific instructions on accessing and replacing these filters.</p>
        </div>
      ),
      icon: cabinFilter
    },    {
      id: 7,
      title: "Battery",
      description: "",
      detailedDescription: (
        <div>
          <ol>
            <li></li>
          </ol>
        </div>
      ),
      icon: battery
    },
    {
      id: 8,
      title: "Coolant",
      description: "",
      detailedDescription: (
        <div>
          <ol>
            <li></li>
          </ol>
        </div>
      ),
      icon: coolant
    },
    {
      id: 9,
      title: "Transmission",
      description: "",
      detailedDescription: (
        <div>
          <ol>
            <li></li>
          </ol>
        </div>
      ),
      icon: gearShift
    },
    {
      id: 10,
      title: "Lights",
      description: "",
      detailedDescription: (
        <div>
          <ol>
            <li></li>
          </ol>
        </div>
      ),
      icon: headlight
    },
    {
      id: 11,
      title: "Serpentine Belt",
      description: "",
      detailedDescription: (
        <div>
          <ol>
            <li></li>
          </ol>
        </div>
      ),
      icon: belt
    },
    {
      id: 12,
      title: "Tire Pressure",
      description: "",
      detailedDescription: (
        <div>
          <ol>
            <li></li>
          </ol>
        </div>
      ),
      icon: tirePressure
    },
    {
      id: 13,
      title: "Windshield Wipers",
      description: "",
      detailedDescription: (
        <div>
          <ol>
            <li></li>
          </ol>
        </div>
      ),
      icon: wiper
    },
    {
      id: 14,
      title: "Spark Plugs",
      description: "",
      detailedDescription: (
        <div>
          <ol>
            <li></li>
          </ol>
        </div>
      ),
      icon: sparkPlug
    },

  ];

  const handleMaintenanceClick = (maintenanceId) => {
    setSelectedMaintenance(maintenanceId);
  };

  const closeMaintenanceModal = () => {
    setSelectedMaintenance(null);
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
    <section className={`maintenance ${darkMode ? "dark-mode" : ""}`}>
      <div className="maintenance__header">
        <SecondHeaderComponent headerClass="blue-header"/>
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
      <h1 className="maintenance__title">Maintenance</h1>
      <p className="maintenance__description">Essential maintenance tips to help you understand when and how to keep your vehicle in optimal condition and ensure its longevity!</p>
      <div className="maintenance__content">
        {maintenanceData.map((maintenance) => (
          <div
            key={maintenance.id}
            className="maintenance__icon"
            onClick={() => handleMaintenanceClick(maintenance.id)}
          >
            <div className="maintenance__icon-title">{maintenance.title}</div>
            <img src={maintenance.icon} alt={maintenance.title} />
          </div>
        ))}
      </div>
      <div className="maintenance__dark-mode-toggle"></div>
      {selectedMaintenance !== null && (
        <div className="maintenance-modal">
          <div className="maintenance__modal--content">
            <div className="modal-header">
              <h2 className="modal-title">
                {maintenanceData[selectedMaintenance - 1].title}
              </h2>
            </div>
            <div className="modal-body">
            <div className="icon-container">
                <img
                  src={maintenanceData[selectedMaintenance - 1].icon}
                  alt={maintenanceData[selectedMaintenance - 1].title}
                />
              </div>
              <div className="description-container">
                <p className="modal-description">
                  {maintenanceData[selectedMaintenance - 1].description}
                </p>
                <p className="modal-detailedDescription">
                  {maintenanceData[selectedMaintenance - 1].detailedDescription}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <img src={close} alt="Close" className="close-button" onClick={closeMaintenanceModal}></img>
            </div>
          </div>
        </div>
      )}
      <FooterComponent />
    </section>
  );
}

export default MaintenancePage;
