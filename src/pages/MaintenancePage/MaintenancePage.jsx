import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Header from "../../components/Header/Header";
import useWindowWidth from "../../Hooks/useWindowWidth";
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
import alternator from "../../assets/alternator.png";
import airCon from "../../assets/air-con.png"
import FooterComponent from "../../components/FooterComponent/FooterComponent";

function MaintenancePage() {
  const [selectedMaintenance, setSelectedMaintenance] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const windowWidth = useWindowWidth();

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
            <li>You should change your oil every <b>7,000km</b> - <b>10,000km</b> or every <b>6 months</b>.</li>
            <li>Select the appropriate type and viscosity of motor oil based on your vehicle's specifications and the climate in your region.</li>
            <li><b>0w-20, 5w-20, 5w-30</b> are the most common oil viscosities from thinnest to thickest.</li>
            <li>Do not procrastinate on changing your engine oil! The longer you wait, the more you will harm your engine :(</li>
          </ul>
        </div>
      ),
      icon: engineOil,
    },

    {
      id: 2,
      title: "Transmission",
      description: "Maintaining your transmission is crucial for smooth and reliable shifting.",
      detailedDescription: (
        <div>
          <ul>
            <li>You should change your transmission oil every <b>50,000km or every 2 years</b></li>
            <li>Replace the transmission fluid and filter as recommended by the manufacturer.</li>
          <li>Inspect for transmission fluid leaks and repair as needed.</li>
          </ul>
        </div>
      ),
      icon: gearShift
    },

    {
      id: 3,
      title: "Tires",
      description: "Maintaining your vehicle's tires is essential for safety and performance. Here are some DIY tire maintenance tips:",
      detailedDescription: (
        <div>
          <ul>
            <li>Depending on driving conditions, You should rotate your tires roughly every <b>8,000km - 15,000km</b>.</li>
            <li>Check your tire pressures every now and then. generally on average vehicles roughly have <b>30-36PSI</b></li>
            <li>Note : Spare tires typically have <b>60PSI</b></li>
            <li>There is a sticker/placard that shows your specific vehicle's recommended tire pressure, typically located on the driver's side door jam</li>
            <li>If your steering wheel is shaking especially at high speeds like the highway, you most likely need a wheel balance.</li>
          </ul>
        </div>
      ),
      icon: wheels
    },

    {
      id: 4,
      title: "Tire Pressure",
      description: "Proper tire pressure is crucial for safety, fuel efficiency, and tire longevity.",
      detailedDescription: (
        <div>
          <ul>
            <li>Regularly check and maintain the correct tire pressure as indicated in your vehicle's owner's manual or on the driver's side door jam sticker.</li>
            <li>You should never need to pay to have air added into your tires</li>
            <li>Every gas station typically should have a station where you can pump air into your tires.</li>
          </ul>
        </div>
      ),
      icon: tirePressure
    },

    {
      id: 5,
      title: "Engine Air Filter",
      description: "Regularly replacing the Engine Air Filter is essential for a healthy engine. It will ensure optimal engine performance and fuel efficiency",
      detailedDescription: (
        <div>
          <ul>
            <li>You should change your engine air filter every <b>12,000km - 15,000km</b></li>
            <li> If you drive in dusty/dirty conditions, you may be required to change your filter more often.</li>
            <li>The engine air filter is usually located in a rectangular or cylindrical air filter box under the hood of your car.</li>
            <li>In most vehicles, it's easily accessible by unclipping or unscrewing the air filter box cover.</li>
          </ul>
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
          <ul>
            <li>You should change your cabin air filter every <b>25,000km - 50,000km</b></li>
            <li>The cabin air filter is usually located behind the glove department or under the dashboard on the passenger side of the vehicle.</li>
            <li>Note : Nissans usually have their cabin air filters under the dashboard on the passenger's side and sometimes under the driver's side</li>
            <li>Some vehicles may have the cabin air filter in the engine bay, near the windshield wipers. Usually this goes for European vehicles.</li>
            <li>Access to the cabin air filter may require removing the glove compartment or a cover panel.</li>
          </ul>
          <p>Please note that the exact location can vary depending on the make and model of your vehicle. Refer to your vehicle's owner's manual for specific instructions on accessing and replacing these filters.</p>
        </div>
      ),
      icon: cabinFilter
    },

    {
      id: 7,
      title: "Battery",
      description: "Regularly inspecting your car's battery can help prevent unexpected breakdowns and ensure reliable starting power.",
      detailedDescription: (
        <div>
          <ul>
            <li>You should replace your car battery every <b>4 - 5 years</b>.</li>
            <li>Inspect the battery terminals for corrosion and clean them if necessary.</li>
            <li>An indication of corrosion is if you see blue powder around the terminals. Pour boiling hot water on the terminals to clean.</li>
            <li>Check the battery's fluid level (for non-maintenance-free batteries) and top it off with distilled water if needed.</li>
            <li>Consider having the battery tested to ensure it's holding a charge effectively.</li>
          </ul>
        </div>
      ),
      icon: battery
    },

    {
      id: 8,
      title: "Alternator",
      description: "The alternator is responsible for charging you're battery while the vehicle is running.",
      detailedDescription: (
        <div>
          <ul>
          <li>Test your alternator if you experience dimming headlights or a dead battery.</li>
          <li>Check the alternator belt for wear and proper tension.</li>
          <li>If the alternator is failing, it should be replaced to avoid electrical issues.</li>
          </ul>
        </div>
      ),
      icon: alternator
    },

    {
      id: 9,
      title: "Check Engine Light",
      description: "The check engine light, also known as the malfunction indicator light (MIL), indicates that the vehicle's onboard computer has detected a problem with the engine, emissions, or other related systems. It's recommended to use a diagnostic trouble code (DTC) scanner to retrieve the specific error code.",
      detailedDescription: (
        <div>
          <ul>
            <li>If you do not have a DTC scanner, you can usually go by an auto shop or dealership to get it scanned for free</li>
            <li>Scanning DTC lights should always be free of charge so if they try to make you pay, deny it and find another auto shop or dealership to go to!</li>
          </ul>
        </div>
      ),
      icon: diagnosticTool,
    },

    {
      id: 10,
      title: "Lights",
      description: "Properly functioning lights are essential for your safety and the safety of others on the road.",
      detailedDescription: (
        <div>
          <ul>
            <li>Regularly check all exterior and interior lights, including headlights, taillights, turn signals, brake lights, and interior bulbs.</li>
            <li>Replace any burned-out bulbs promptly to ensure visibility and safety.</li>
          </ul>
        </div>
      ),
      icon: headlight
    },

    {
      id: 11,
      title: "Serpentine Belt",
      description: "The serpentine belt powers many of your engine's components. It provides power to many vital components in your car like the alternator, power steering pump, air conditioning and sometimes the water pump",
      detailedDescription: (
        <div>
          <ul>
            <li>Inspect the serpentine belt for signs of wear, such as cracks, fraying, or glazing.</li>
            <li>Replace the serpentine belt as recommended by the manufacturer or if you notice any damage.</li>
          </ul>
        </div>
      ),
      icon: belt
    },

    {
      id: 12,
      title: "Brake Pads",
      description: "Regularly inspecting your brakes and addressing issues promptly helps maintain safe braking performance.",
      detailedDescription:(
        <div>
          <ul>
            <li>Periodically check brake pad thickness. If they are worn down to around <b>1/8 inch</b> or less, or if you hear squeaky noises every time you apply the brakes, it's time to replace them.</li>
            <li>If you're driving and you feel vibration whenever you brake, you most likely have a warped disc rotor and need that machined or replaced</li>
            <li>Consider having a professional perform a brake fluid flush every <b>2 years</b> or as recommended in your vehicle's manual for optimal brake performance.</li>
          </ul>
        </div>
      ),
      icon: brakes
    },

    {
      id: 13,
      title: "Windshield Wipers",
      description: "Well-maintained windshield wipers are essential for visibility during rainy or snowy conditions.",
      detailedDescription: (
        <div>
          <ul>
            <li>Inspect windshield wiper blades for signs of wear or damage, such as streaking or skipping.</li>
            <li>Replace windshield wiper blades as needed for clear visibility during rainy or snowy conditions.</li>
          </ul>
        </div>
      ),
      icon: wiper
    },

    {
      id: 14,
      title: "Spark Plugs",
      description: "Spark plugs play a critical role in your engine's performance and fuel efficiency.",
      detailedDescription: (
        <div>
          <ul>
            <li>You should change your spark plugs roughly every 150,000km - 160,000km</li>
            <li>Check and replace spark plugs according to your vehicle's recommended maintenance schedule.</li>
            <li>Worn or fouled spark plugs can lead to poor engine performance and reduced fuel efficiency.</li>
          </ul>
        </div>
      ),
      icon: sparkPlug
    },

    {
      id: 15,
      title: "Coolant",
      description: "Proper engine coolant levels are essential for maintaining your engine's temperature and preventing overheating.",
      detailedDescription: (
        <div>
          <ul>
            <li>IMPORTANT: Do not open the metal coolant cap that says Warning or Danger sticker when its hot. Let your vehicle cool down first!</li>
            <li>Regularly check the coolant level in the overflow tank (clear white tank) when the engine is cool.</li>
            <li>Top off the coolant with a 50/50 mix of coolant and water if it's low.</li>
            <li>DO NOT add just water</li>
            <li>Inspect hoses and connections for coolant leaks and repair as needed.</li>
          </ul>
        </div>
      ),
      icon: coolant
    },

    {
      id: 16,
      title: "Air Conditioner",
      description: "Maintaining your vehicle's air conditioner ensures a comfortable driving experience.",
      detailedDescription: (
        <div>
          <ul>
          <li>If your A/C is not cooling effectively, you most likely need to have it recharged by a professional mechanic.</li>
          <li>Inspect the A/C compressor and belts for wear and tear.</li>
          </ul>
        </div>
      ),
      icon: airCon
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
      {windowWidth <= 768 ? (
          <HeaderComponent />
        ) : (
          <Header />
        )}
      </div>
      <animated.svg className="darkmode"
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
            <div className="icon-maintenanceContainer">
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
