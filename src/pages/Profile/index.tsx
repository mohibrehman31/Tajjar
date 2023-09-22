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
import { getProfileData } from "src/services/getProfileData";
import { profile } from "./profile";
import Navigation from "src/components/Navigation";
import Sidebar from "src/components/Sidebar";
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
    <div className="profile">
      <Sidebar />
      <div className="main">
        <Navigation />
        <div className="heading-container">
          <span>{profile?.data?.attributes?.Heading}</span>
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

export default ProfilePage;
