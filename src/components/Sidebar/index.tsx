import React, { useState } from "react";
import {
  apartment,
  connect,
  handshake,
  parnityLogo,
  sidebar,
  thinkbox,
  world,
} from "src/assets/Images";
import "./index.scss";
function Sidebar() {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden(!hidden);
    const data = document.querySelector(".sidebar-container");
    console.log(data);
  };
  return (
    <div className="main-sidebar-container">
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
          <div className="image-container" onClick={handleClick}>
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
      {!hidden ? <div className="hidden-container"></div> : null}
    </div>
  );
}

export default Sidebar;
