import React from "react";
import { Container, Interactions, Time } from "../../assets/Images";
import "./Main.scss";
export const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="content-container">
          <div className="image-container">
            <img src={Interactions} />
          </div>
          <div className="front-container">
            <div className="heading">
              Seamless Logistics Solutions,
              <br /> Unmatched Worldwide
            </div>
            <div className="subheading">
              <div className="heading1">
                <img src={Time} className="subtext-image" />
                <div className="text">
                  Efficiency and Reliability: Ensuring Smooth Deliveries for
                  <br /> Every Shipment
                </div>
              </div>
              <div className="heading2">
                <img src={Container} className="subtext-image" />
                <div className="text">
                  Tailored Logistics Services: Unlocking Your Success through
                  <br /> Customized Solutions
                </div>
              </div>
            </div>
            <div className="footer-button-container">Know More</div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="heading">About Tajjar</div>
        <span>
          Established in 1966, Tajjar-ul-Bahr (Private) Limited is a leading
          logistics and freight forwarding company in Pakistan. With a
          headquarters in Karachi and branch offices in five major cities across
          the country, we boast a strong global network to provide comprehensive
          logistics services and cutting-edge solutions tailored to our
          customers' needs. At Tajjar-ul-Bahr, operational excellence is our
          foundation, as we continuously monitor performance and service
          delivery through well-documented standard operating procedures (SOPs).
          Our commitment to quality is reflected in our ISO 9001:2015
          certification and various esteemed national and international
          accreditations. Our dedicated and experienced teams are trained to
          deliver tailor-made logistics solutions, going above and beyond to
          exceed expectations. With in-depth product knowledge and extensive
          market experience, we strive to provide cost-effective freight
          solutions while maintaining the highest standards of service and
          quality.
        </span>
      </div>
    </>
  );
};
