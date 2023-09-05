import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import SecondHeaderComponent from "../../components/SecondHeaderComponent/SecondHeaderComponent";
import "./WarningLightsPage.scss";
import absIcon from "../../assets/ABS-light.png";
import airbagIcon from "../../assets/airbag-indicator.png";
import batteryIcon from "../../assets/battery-alert.png";
import brakeIcon from "../../assets/brake-warning.png";
import checkEngineIcon from "../../assets/check-engine-light.png";
import engingTemperatureIcon from "../../assets/engine-temperature.png";
import foglampIcon from "../../assets/fog-lamp.png";
import laneDepartureIcon from "../../assets/lane-departure.png";
import lowFuelIcon from "../../assets/low-fuel.png";
import oilPressureIcon from "../../assets/oil-pressure-light.png";
import seatBeltIcon from "../../assets/seat-belt.png";
import securityIcon from "../../assets/security-indicator.png";
import shiftLockIcon from "../../assets/shift-lock.png";
import tirePressureIcon from "../../assets/tire-pressure-light.png";
import tractionControlIcon from "../../assets/traction-control.png";
import tractionControlMalfunctionIcon from "../../assets/traction-control-malfunction.png";
import transmissionTempIcon from "../../assets/transmission-temperature.png";
import washerFluidIcon from "../../assets/washer-fluid.png";
import close from "../../assets/close-sign.png";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

function WarningLightsPage() {
  const [selectedWarning, setSelectedWarning] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const warningLightsData = [
    {
      id: 1,
      title: "Oil Pressure",
      description: "Oil pressure is low.",
      detailedDescription:
        "This warning light indicates that the engine's oil pressure is below the recommended level. Low oil pressure can lead to poor lubrication and potential engine damage. It's important to stop the vehicle immediately and check the oil level. If the oil level is sufficient and the light persists, consult a mechanic.",
      icon: oilPressureIcon,
    },
    {
      id: 2,
      title: "Check Engine Light",
      description: "Use a DTC scanner.",
      detailedDescription:
        "The check engine light, also known as the malfunction indicator light (MIL), indicates that the vehicle's onboard computer has detected a problem with the engine, emissions, or other related systems. It's recommended to use a diagnostic trouble code (DTC) scanner to retrieve the specific error code. Check the vehicle's manual or consult a mechanic for further guidance.",
      icon: checkEngineIcon,
    },
    {
      id: 3,
      title: "ABS System",
      description: "ABS system malfunction.",
      detailedDescription:
        "The ABS warning light indicates a malfunction in the vehicle's anti-lock braking system (ABS). When this light is on, the ABS system may not function properly, and regular braking should still be effective. However, it's advised to have the system inspected and repaired by a qualified mechanic as soon as possible to ensure optimal braking performance.",
      icon: absIcon,
    },
    {
      id: 4,
      title: "Airbag Indicator",
      description: "Airbag system fault.",
      detailedDescription:
        "The airbag indicator light suggests that there might be a problem with the vehicle's airbag system. This is a crucial safety feature, and any issues with the airbag system should be addressed immediately. A faulty airbag system may not deploy in the event of an accident, increasing the risk of injury. Have the system checked by a professional technician.",
      icon: airbagIcon,
    },
    {
      id: 5,
      title: "Battery Alert",
      description: "Battery voltage is low.",
      detailedDescription:
        "The battery alert light indicates that the vehicle's battery voltage is low. This could be due to a failing battery, a malfunctioning charging system, or other electrical issues. It's important to address this issue promptly, as a low battery can lead to a no-start condition. Have the battery and charging system inspected by a mechanic.",
      icon: batteryIcon,
    },
    {
      id: 6,
      title: "Brake Alert",
      description: "Brake system warning.",
      detailedDescription:
        "The brake alert light indicates a problem with the vehicle's braking system. This could be due to low brake fluid, worn brake pads, or other issues. It's crucial to address brake system problems immediately, as compromised braking can lead to unsafe driving conditions. Have the brake system inspected and repaired by a professional.",
      icon: brakeIcon,
    },
    {
      id: 7,
      title: "Engine Temperature",
      description: "Engine temperature is high.",
      detailedDescription:
        "The engine temperature warning light signals that the engine's coolant temperature is higher than normal. High engine temperature can lead to overheating and potential engine damage. Safely pull over and allow the engine to cool down. Check the coolant level, radiator, and cooling system for issues. Avoid driving with an overheated engine.",
      icon: engingTemperatureIcon,
    },
    {
      id: 8,
      title: "Fog Lamp Indicator",
      description: "Fog lamps are on.",
      detailedDescription:
        "The fog lamp indicator light indicates that the vehicle's fog lamps are turned on. Fog lamps are used to improve visibility in foggy conditions. Make sure to turn off the fog lamps when driving in clear weather, as they can be blinding to other drivers and reduce your own visibility.",
      icon: foglampIcon,
    },
    {
      id: 9,
      title: "Lane Departure Warning",
      description: "Vehicle is drifting from lane.",
      detailedDescription:
        "The lane departure warning light alerts the driver when the vehicle is unintentionally drifting out of the lane. This system uses sensors to monitor lane markings. If the vehicle starts to cross a lane without using the turn signal, the light will activate. This feature helps prevent accidents due to unintended lane changes.",
      icon: laneDepartureIcon,
    },
    {
      id: 10,
      title: "Low Fuel",
      description: "Fuel level is low.",
      detailedDescription:
        "The low fuel warning light indicates that the vehicle's fuel level is low. It's important to refuel soon to avoid running out of fuel. Running the vehicle on a low fuel level can potentially damage the fuel system and lead to a breakdown. Find a gas station and refuel as soon as possible.",
      icon: lowFuelIcon,
    },
    {
      id: 11,
      title: "Seat Belt Reminder",
      description: "Seat belt not fastened.",
      detailedDescription:
        "The seat belt reminder light indicates that one or more occupants in the vehicle haven't fastened their seat belts. Seat belts are critical for passenger safety in the event of a collision. All occupants should fasten their seat belts before the vehicle is in motion. The light will turn off when seat belts are buckled.",
      icon: seatBeltIcon,
    },
    {
      id: 12,
      title: "Security Indicator",
      description: "Security system active.",
      detailedDescription:
        "The security indicator light indicates that the vehicle's security system is active. This system helps prevent unauthorized entry and theft. The light will blink when the vehicle is locked and the security system is armed. If the light stays on while driving, there may be an issue with the security system that requires attention.",
      icon: securityIcon,
    },
    {
      id: 13,
      title: "Shift Lock Indicator",
      description: "Shift lock engaged.",
      detailedDescription:
        "The shift lock indicator light indicates that the vehicle's shift lock mechanism is engaged. This prevents the vehicle from being shifted out of the park position unless the brake pedal is pressed. If the light is on and the brake pedal is pressed, but the shifter still won't move, there may be an issue with the shift lock system.",
      icon: shiftLockIcon,
    },
    {
      id: 14,
      title: "Tire Pressure",
      description: "Tire pressure is low.",
      detailedDescription:
        "The tire pressure warning light indicates that the pressure in one or more tires is below the recommended level. Low tire pressure can affect vehicle handling, fuel efficiency, and tire lifespan. Check the tire pressures and inflate them to the proper levels. If the light persists, there may be a puncture or leak that requires repair.",
      icon: tirePressureIcon,
    },
    {
      id: 15,
      title: "Traction Control",
      description: "Traction control system active.",
      detailedDescription:
        "The traction control warning light indicates that the traction control system is actively working to prevent wheel spin or skidding. This system helps improve traction and stability on slippery or uneven road surfaces. The light may flash when the system is active. If the light stays on continuously, there may be an issue with the system.",
      icon: tractionControlIcon,
    },
    {
      id: 16,
      title: "Traction Control Malfunction",
      description: "Traction control system malfunction.",
      detailedDescription:
        "The traction control malfunction light indicates that there's a problem with the vehicle's traction control system. This could be due to a sensor issue, a faulty component, or other factors. When this light is on, the traction control system may be disabled, which could affect the vehicle's stability in certain driving conditions. Have the system inspected and repaired.",
      icon: tractionControlMalfunctionIcon,
    },
    {
      id: 17,
      title: "Transmission Temperature",
      description: "Transmission temperature is high.",
      detailedDescription:
        "The transmission temperature warning light signals that the transmission fluid temperature is higher than normal. Overheating transmission fluid can lead to transmission damage and poor shifting performance. Safely pull over and allow the transmission to cool down. Check the transmission fluid level and ensure proper cooling system function.",
      icon: transmissionTempIcon,
    },
    {
      id: 18,
      title: "Washer Fluid Low",
      description: "Washer fluid level is low.",
      detailedDescription:
        "The washer fluid low warning light indicates that the vehicle's windshield washer fluid level is low. It's important to maintain an adequate washer fluid level to ensure clear visibility, especially in dirty or rainy conditions. Refill the washer fluid reservoir with an appropriate windshield washer fluid as needed.",
      icon: washerFluidIcon,
    },
  ];

  const handleWarningClick = (warningId) => {
    setSelectedWarning(warningId);
  };

  const closeWarningModal = () => {
    setSelectedWarning(null);
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
    <section className={`warningLights ${darkMode ? "dark-mode" : ""}`}>
      <div className="WarningLights__header">
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
      <h1>Warning Lights</h1>
      <div className="warningLights__content">
        {warningLightsData.map((warning) => (
          <div
            key={warning.id}
            className="warningLights__icon"
            onClick={() => handleWarningClick(warning.id)}
          >
            <img src={warning.icon} alt={warning.title} />
          </div>
        ))}
      </div>
      <div className="warningLights__dark-mode-toggle"></div>
      {selectedWarning !== null && (
        <div className="warningLights-modal">
          <div className="warningLights__modal--content">
            <div className="modal-header">
              <h2 className="modal-title">
                {warningLightsData[selectedWarning - 1].title}
              </h2>
            </div>
            <div className="modal-body">
              <div className="icon-container">
                <img
                  src={warningLightsData[selectedWarning - 1].icon}
                  alt={warningLightsData[selectedWarning - 1].title}
                />
              </div>
              <div className="description-container">
                <p className="modal-description">
                  {warningLightsData[selectedWarning - 1].description}
                </p>
                <p className="modal-detailedDescription">
                  {warningLightsData[selectedWarning - 1].detailedDescription}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <img src={close} alt="Close" className="close-button" onClick={closeWarningModal}></img>
            </div>
          </div>
        </div>
      )}
      <FooterComponent />
    </section>
  );
}

export default WarningLightsPage;
