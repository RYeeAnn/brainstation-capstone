import React, { useState } from 'react';
import SecondHeaderComponent from "../../components/SecondHeaderComponent/SecondHeaderComponent";
import "./WarningLightsPage.scss";
import absIcon from '../../assets/ABS-light.png';
import airbagIcon from '../../assets/airbag-indicator.png';
import batteryIcon from '../../assets/battery-alert.png';
import brakeIcon from '../../assets/brake-warning.png';
import checkEngingIcon from '../../assets/check-engine-light.png';
import engingTemperatureIcon from '../../assets/engine-temperature.png';
import foglampIcon from '../../assets/fog-lamp.png';
import laneDepartureIcon from '../../assets/lane-departure.png';
import lowFuelIcon from '../../assets/low-fuel.png';
import oilPressureIcon from '../../assets/oil-pressure-light.png';
import seatBeltIcon from '../../assets/seat-belt.png';
import securityIcon from '../../assets/security-indicator.png';
import shiftLockIcon from '../../assets/shift-lock.png';
import tirePressureIcon from '../../assets/tire-pressure-light.png';
import tractionControlIcon from '../../assets/traction-control.png';
import tractionControlMalfunctionIcon from '../../assets/traction-control-malfunction.png';
import transmissionTempIcon from '../../assets/transmission-temperature.png';
import washerFluidIcon from '../../assets/washer-fluid.png';


function WarningLightsPage() {
  const [selectedWarning, setSelectedWarning] = useState(null);

  const warningLightsData = [
    { id: 1, title: 'Oil Pressure', description: 'Oil pressure is low.', icon: oilPressureIcon },
    { id: 2, title: 'Check Engine Light', description: 'Use a DTC scanner.', icon: checkEngingIcon },
    { id: 3, title: 'ABS System', description: 'ABS system malfunction.', icon: absIcon },
    { id: 4, title: 'Airbag Indicator', description: 'Airbag system fault.', icon: airbagIcon },
    { id: 5, title: 'Battery Alert', description: 'Battery voltage is low.', icon: batteryIcon },
    { id: 6, title: 'Brake Alert', description: 'Brake system warning.', icon: brakeIcon },
    { id: 7, title: 'Engine Temperature', description: 'Engine temperature is high.', icon: engingTemperatureIcon },
    { id: 8, title: 'Fog Lamp Indicator', description: 'Fog lamps are on.', icon: foglampIcon },
    { id: 9, title: 'Lane Departure Warning', description: 'Vehicle is drifting from lane.', icon: laneDepartureIcon },
    { id: 10, title: 'Low Fuel', description: 'Fuel level is low.', icon: lowFuelIcon },
    { id: 11, title: 'Seat Belt Reminder', description: 'Seat belt not fastened.', icon: seatBeltIcon },
    { id: 12, title: 'Security Indicator', description: 'Security system active.', icon: securityIcon },
    { id: 13, title: 'Shift Lock Indicator', description: 'Shift lock engaged.', icon: shiftLockIcon },
    { id: 14, title: 'Tire Pressure', description: 'Tire pressure is low.', icon: tirePressureIcon },
    { id: 15, title: 'Traction Control', description: 'Traction control system active.', icon: tractionControlIcon },
    { id: 16, title: 'Traction Control Malfunction', description: 'Traction control system malfunction.', icon: tractionControlMalfunctionIcon },
    { id: 17, title: 'Transmission Temperature', description: 'Transmission temperature is high.', icon: transmissionTempIcon },
    { id: 18, title: 'Washer Fluid Low', description: 'Washer fluid level is low.', icon: washerFluidIcon }
    // Add more warning lights data
  ];
  

  const handleWarningClick = (warningId) => {
    setSelectedWarning(warningId);
  };

  const closeWarningModal = () => {
    setSelectedWarning(null);
  };

  return (
    <section className="warningLights">
      <div className="WarningLights__header">
        <SecondHeaderComponent />
      </div>
      <h1>Warning Lights</h1>
      <div className="warningLights__content">
          {warningLightsData.map(warning => (
            <div
              key={warning.id}
              className="warningLights__icon"
              onClick={() => handleWarningClick(warning.id)}
            >
              <img src={warning.icon} alt={warning.title} />
            </div>
          ))}
      </div>
      {selectedWarning !== null && (
        <div className="warningLights-modal">
          <div className="warningLights__modal--content">
            <h2>{warningLightsData[selectedWarning - 1].title}</h2>
            <p>{warningLightsData[selectedWarning - 1].description}</p>
            <button onClick={closeWarningModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default WarningLightsPage;
