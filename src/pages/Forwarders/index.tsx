import React, { useEffect, useState } from "react";
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
import { profile } from "../Profile/profile";
function Forwarders() {
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
  const [data, setData] = useState({});
  // const getProfileDataList = async () => {
  //   const response = await getProfileData();
  //   const resData = response?.data;
  //   return resData;
  // };
  useEffect(() => {
    // const { loading, data, error } = getProfileDataList();
    // console.log(data);
    setData(profile);
  }, []);

  return (
    <div className="Forwarders">
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
          <span>Find your next partner</span>
        </div>
        <div className="sub-heading-container">
          <span>
            Search for forwarders, open a quote Request or connect with people
            online
          </span>
        </div>
        <div className="searchbox-container">
          <div className="searchbox">
            <img src={search} alt="" />
            <Input
              size="large"
              placeholder="Search Forwarders by country, city or company name"
            />
          </div>
        </div>
        <div className="main-sub-container">
          <div className="heading">
            <span>Find your next partner</span>
          </div>
          <div className="sub-heading">
            <span>{profile?.data?.attributes?.SubHeading}</span>
          </div>
          <div className="info">
            <span>Latest agents interested in Brazil</span>
          </div>
          <div className="grid-container">
            <div className="grid-1">
              {profile?.data?.attributes?.ProfileAgents.map((key: any) => {
                return (
                  <div key={key.id} className="container">
                    <div className="inner-container">
                      <div className="image-container">
                        <img src={key?.name_icon} alt="" />
                      </div>
                      <div className="main-container">
                        <div className="name-container">
                          <span>{key?.Name}</span>
                        </div>
                        <div className="country-container">
                          <div className="image-container">
                            <img src={key?.country_icon} alt="" />
                          </div>
                          <span>{key?.Country}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="info">
            <span>Meet our most recent members</span>
          </div>
          <div className="grid-container">
            <div className="grid-1">
              {profile?.data?.attributes?.ProfileAgents.map((key: any) => {
                return (
                  <div key={key.id} className="container">
                    <div className="inner-container">
                      <div className="image-container">
                        <img src={key?.name_icon} alt="" />
                      </div>
                      <div className="main-container">
                        <div className="name-container">
                          <span>{key?.Name}</span>
                        </div>
                        <div className="country-container">
                          <div className="image-container">
                            <img src={key?.country_icon} alt="" />
                          </div>
                          <span>{key?.Country}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forwarders;
