import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ChooseUs from "../ChooseUs/ChooseUs";
import Doctor from "../Doctor/Doctor";

const AllHome = () => {
  return (
    <div id="home">
      <Banner />
      <ChooseUs />
      <Services />
      <Doctor />
    </div>
  );
};

export default AllHome;
