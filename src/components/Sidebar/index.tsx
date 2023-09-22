import React from "react";
import {
  apartment,
  connect,
  handshake,
  parnityLogo,
  thinkbox,
  world,
} from "src/assets/Images";
import "./index.scss";
function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="parnity-container">
        <img src={parnityLogo} alt="" />
      </div>
      <div className="icons-container">
        <div className="image-container">
          <img src={world} alt="" />
        </div>
        <div className="image-container">
          <img src={apartment} alt="" />
        </div>
        <div className="image-container">
          <img src={handshake} alt="" />
        </div>
        <div className="image-container">
          <img src={thinkbox} alt="" />
        </div>
        <div className="image-container">
          <img src={connect} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
