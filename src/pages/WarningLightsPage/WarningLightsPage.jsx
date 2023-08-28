import React from 'react';
import SecondHeaderComponent from "../../components/SecondHeaderComponent/SecondHeaderComponent";
import "./WarningLightsPage.scss";
import oilChangeImage from '../../assets/garage.jpeg';
import tiresImage from '../../assets/maint.jpg';
import brakePadsImage from '../../assets/openhood.jpg';

function WarningLightsPage() {
  return (
    <section className="warningLights">
      <div className="WarningLights__header">
        <SecondHeaderComponent />
      </div>
      <div className="warningLights__content">
        <div className="warningLights__title">
          <h1>Warning Lights</h1>
        </div>
        <ul className="warningLights__information">
          <li>
            <img src={oilChangeImage} alt="Oil Change" />
            <p>Check Engine</p>
          </li>
          <li>
            <img src={tiresImage} alt="Tires" />
            <p>Brake Lights</p>
          </li>
          <li>
            <img src={brakePadsImage} alt="Brake Pads" />
            <p>Oil Pressure</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WarningLightsPage;
