import React from 'react';
import SecondHeaderComponent from "../../components/SecondHeaderComponent/SecondHeaderComponent";
import "./MaintenancePage.scss";
import oilChangeImage from '../../assets/garage.jpeg';
import tiresImage from '../../assets/maint.jpg';
import brakePadsImage from '../../assets/openhood.jpg';

function MaintenancePage() {
  return (
    <section className="maintenance">
      <div className="maintenance__header">
        <SecondHeaderComponent />
      </div>
      <div className="maintenance__content">
        <div className="maintenance__title">
          <h1>Maintenance</h1>
        </div>
        <ul className="maintenance__information">
          <li>
            <img src={oilChangeImage} alt="Oil Change" />
            <p>Oil Changes</p>
          </li>
          <li>
            <img src={tiresImage} alt="Tires" />
            <p>Tires</p>
          </li>
          <li>
            <img src={brakePadsImage} alt="Brake Pads" />
            <p>Brake Pads</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MaintenancePage;
