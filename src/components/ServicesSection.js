import React from "react";
// Import icons:
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
// Import images:
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Hi, I'm Card 1.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Hi, I'm Card 2.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>TeamWork</h3>
            </div>
            <p>Hi, I'm Card 3.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Cheap</h3>
            </div>
            <p>Hi, I'm Card 4.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="Heavy Camera" />
      </div>
    </div>
  );
};

export default ServicesSection;
