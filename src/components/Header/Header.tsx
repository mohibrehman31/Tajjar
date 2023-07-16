import React from "react";
import "./Header.scss";
import { Logo } from "src/assets/Images";
import { RightArrow } from "../../assets/Icons";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="inner-container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="sections">
          <div className="section1">Home</div>
          <div className="section2">About Us</div>
          <div className="section3">Ship Management</div>
          <div className="section4">Ship Agency</div>
        </div>
        <div className="portal-container">
          Portal
          <img src={RightArrow} style={{ marginLeft: 10 }} />
        </div>
      </div>
    </div>
  );
};
