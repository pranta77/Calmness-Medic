import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Buying = () => {
  const { serviceId } = useParams();
  const [buy, setBuy] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setBuy(data));
  }, []);

  console.log(buy);
  const findBuying = buy.find((buying) => buying?.id === serviceId);
  return (
    <div>
      <h1>this is buying section {serviceId}</h1>
      <div className="buying-section">
        <img src={findBuying?.img} alt="" />
        <h4>{findBuying?.serviceName} </h4>
        <h3>Fee: ${findBuying?.fee} </h3>
        <p>{findBuying?.serviceTitle} </p>
      </div>
    </div>
  );
};

export default Buying;
