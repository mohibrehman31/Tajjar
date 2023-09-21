import React, { useState } from "react";
import "./index.scss";
import {
  apartment,
  connect,
  handshake,
  parnityLogo,
  thinkbox,
  world,
  search,
} from "src/assets/Images";
import { Input } from "antd";

function ProfilePage() {
  const initialState = {
    exploreFocused: false,
    businessFocused: false,
    forwardFocused: false,
    eventFocused: false,
    contentFocused: false,
    perkFocused: false,
  };
  const [focusedState, setFocusedState] = useState(initialState);
  const handleItemClick = (key: any) => {
    setFocusedState({
      ...initialState,
      [key]: true,
    });
  };
  return (
    <div className="profile">
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
      <div className="main">
        <div className="navigation-container">
          <div className="navigation">
            <div
              className={`nav-item ${
                focusedState.exploreFocused ? "focused" : ""
              }`}
              onClick={() => handleItemClick("exploreFocused")}
            >
              <span>Explore</span>
            </div>
            <div
              className={`nav-item ${
                focusedState.businessFocused ? "focused" : ""
              }`}
              onClick={() => handleItemClick("businessFocused")}
            >
              <span>Forwarders</span>
            </div>
            <div
              className={`nav-item ${
                focusedState.forwardFocused ? "focused" : ""
              }`}
              onClick={() => handleItemClick("forwardFocused")}
            >
              <span>Businesses</span>
            </div>
            <div
              className={`nav-item ${
                focusedState.eventFocused ? "focused" : ""
              }`}
              onClick={() => handleItemClick("eventFocused")}
            >
              <span>Events</span>
            </div>
            <div
              className={`nav-item ${
                focusedState.contentFocused ? "focused" : ""
              }`}
              onClick={() => handleItemClick("contentFocused")}
            >
              <span>Content</span>
            </div>
            <div
              className={`nav-item ${
                focusedState.perkFocused ? "focused" : ""
              }`}
              onClick={() => handleItemClick("perkFocused")}
            >
              <span>Perks</span>
            </div>
          </div>
        </div>
        <div className="heading-container">
          <span>Welcome to Parnity Community</span>
        </div>
        <div className="sub-heading-container">
          <span>
            Connect with other Forwarders, Exchange business and be updated in
            the logistics industry
          </span>
        </div>
        <div className="searchbox-container">
          <div className="searchbox">
            <img src={search} alt="" />
            <Input
              size="large"
              placeholder="Search by country, city or company name"
            />
          </div>
        </div>
        <div className="main-sub-container">
          <div className="heading">
            <span>Find your next partner</span>
          </div>
          <div className="sub-heading">
            <span>
              Search for forwarders or connect with people online to develop new
              partnerships
            </span>
          </div>
          <div className="info">
            <span>Latest agents interested in Brazil</span>
          </div>
          <div className="grid-container">
            <div className="grid-1">
              <div className="container">
                <div className="inner-container">
                  <div className="image-container"></div>
                  <div className="main-container"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <span>Latest agents interested in Brazil</span>
          </div>
          <div className="grid-container">
            <div className="grid-1">
              <div className="container"></div>
              <div className="container"></div>
              <div className="container"></div>
              <div className="container"></div>
              <div className="container"></div>
              <div className="container"></div>
              <div className="container"></div>
              <div className="container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
