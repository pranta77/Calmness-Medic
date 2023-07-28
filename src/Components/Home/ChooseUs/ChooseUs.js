import React from "react";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="choose-container">
      <div className="choose-img">
        <img src="https://i.ibb.co/wzF8jVf/chooseUs.webp" alt="" />
      </div>
      <div>
        <h2 className="choose-text ps-0 pt-5">Why Choose us?</h2>
        <div className="choose-us">
          <div className="choose-single">
            <img src="https://i.ibb.co/0BrCfkh/PROGRESSION.webp" alt="" />
            <h3 className="choose-text">PROGRESSION</h3>
          </div>
          <div className="choose-single">
            <img src="https://i.ibb.co/nbx6py5/Patient-safety.webp" alt="" />
            <h3 className="choose-text">SAFETY</h3>
          </div>
          <div className="choose-single">
            <img src="https://i.ibb.co/wyBXR7h/nutration-1.jpg" alt="" />
            <h3 className="choose-text">NUTRITION</h3>
          </div>
          <div className="choose-single">
            <img src="https://i.ibb.co/nsFpdHx/management.jpg" alt="" />
            <h3 className="choose-text">MANAGEMENT</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
