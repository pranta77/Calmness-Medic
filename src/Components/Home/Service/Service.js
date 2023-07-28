import React from "react";
import { Button } from "react-bootstrap";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ mainservice }) => {
  const { id, serviceName, serviceTitle, img, fee } = mainservice;

  return (
    <div className="service pb-3">
      <img src={img} alt="" />
      <h3 className="serName">{serviceName}</h3>
      <p className="px-5">{serviceTitle}</p>
      <h2>Fee:{fee}</h2>
      <Link to={`/buying/:${id}`}>
        <Button variant="secondary">Buy Now</Button>
      </Link>
    </div>
  );
};

export default Service;
