import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="main-container ">
      <h3 className="text-danger">Our Service</h3>
      <h1 className="mt-3 mb-5  text-light">Care Your Health</h1>
      <div className="services-container">
        {services.map((allservice) => (
          <Service key={allservice.id} mainservice={allservice}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
