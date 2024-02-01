import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner-1.webp";
import banner2 from "../../../images/banner/banner-2.webp";
import banner3 from "../../../images/banner/banner-3.webp";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img width={"100%"} height={"80%"} src={banner1} alt="" />

          <Carousel.Caption>
            <h3>First Emergency Medical</h3>
            <p className="text-warning">
              An illness, injury, symptom or condition so serious that a
              reasonable person would seek care right away to avoid severe harm.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"80%"} src={banner2} alt="" />
          <Carousel.Caption>
            <h3>Second Medical Report</h3>
            <p className="text-warning">
              Medical tests can help detect a condition, determine a diagnosis,
              plan treatment, check to see if treatment is working, or monitor
              the condition over time. A doctor may order these tests as part of
              a routine checkup, to check for certain diseases and disorders, or
              to monitor your health..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"80%"} src={banner3} alt="" />
          <Carousel.Caption>
            <h3>Third Most Seats</h3>
            <p className="text-warning">
              Facilities and services. Dhaka Medical College has a 2600-bed
              teaching hospital as Dhaka Medical College Hospital (DMCH) within
              the same compound. It is a tertiary referral hospital. It has a
              300-bed facility dedicated for burn & plastic surgery..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
