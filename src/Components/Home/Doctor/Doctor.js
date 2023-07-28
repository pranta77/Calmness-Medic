import React from "react";
import "./Doctors.css";

const Doctor = () => {
  return (
    <div className="doctor-container">
      <h4 className="text-danger home-text">MEET OUR TEAM</h4>
      <h2 className="home-text">EXPERT DOCTORS</h2>
      <div className="doctors">
        <div>
          <img src="https://i.ibb.co/cgzYr0P/doctor-1.webp" alt="" />
          <div className="doctors-details">
            <h4>RICHARD STEELE</h4>
            <p>Senior Doctor</p>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/WxTZrNf/doctor-2.webp" alt="" />
          <div className="doctors-details">
            <h4>JANEE LOFFER</h4>
            <p>Senior Doctor</p>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/L8YZV1V/doctor-3.webp" alt="" />
          <div className="doctors-details">
            <h4>MICHAEL JAMES</h4>
            <p>Senior Doctor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
